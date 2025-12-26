import { fal } from '@fal-ai/client';
import { put } from '@vercel/blob';

const uploadBase64ToVercelBlob = async (dataUrl) => {
  const [meta, base64] = dataUrl.split(',');
  const mimeMatch = meta.match(/data:(.*);base64/);
  const mime = mimeMatch ? mimeMatch[1] : 'image/png';
  const ext = mime.split('/')[1] || 'png';

  const buffer = Buffer.from(base64, 'base64');

  const filename = `upload-${Date.now()}.${ext}`;
  const blob = await put(filename, buffer, {
    access: 'public',
    contentType: mime,
  });

  return blob.url;
};

const cropImage = async (imageUrl, x, y, width, height) => {
  const result = await fal.subscribe('fal-ai/workflow-utilities/crop-image', {
    input: {
      image_url: imageUrl,
      x_percent: x,
      y_percent: y,
      width_percent: width,
      height_percent: height,
    },
  });
  return result.data.image.url;
};

const getErrorPayload = (error) => {
  if (!error || typeof error !== 'object') {
    return { status: 500, details: 'Unknown error.' };
  }

  const status = typeof error.status === 'number' ? error.status : 500;
  const details = error.body ?? error.message ?? 'Unknown error.';
  const requestId = typeof error.requestId === 'string' ? error.requestId : undefined;

  return { status, details, requestId };
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { prompt, images } = req.body || {};

  if (!prompt || typeof prompt !== 'string' || prompt.trim().length < 10) {
    res.status(400).json({ error: 'Prompt must be at least 10 characters.' });
    return;
  }

  const falKey = process.env.FAL_KEY;
  if (!falKey) {
    console.error('Missing FAL_KEY environment variable');
    res.status(500).json({ error: 'Missing FAL_KEY on the server.' });
    return;
  }

  fal.config({ credentials: falKey });

  try {
    // Step 1: Upload image if provided
    let uploadedImageUrl;
    if (Array.isArray(images) && images.length > 0 && typeof images[0] === 'string') {
      if (!process.env.BLOB_READ_WRITE_TOKEN) {
        console.warn('Missing BLOB_READ_WRITE_TOKEN - skipping image upload');
      } else {
        try {
          uploadedImageUrl = await uploadBase64ToVercelBlob(images[0]);
        } catch (uploadError) {
          console.error('Image upload failed:', uploadError);
        }
      }
    }

    // Step 2: Enhance prompt with instructions
    const enhancedPrompt = prompt + '\n\nGenerate ONE single cinematic 16:9 image suitable for video thumbnails.\nCompose the image so that:\n- Left side supports a strong close-up crop\n- Right side supports a wider cinematic crop\n- Center area is clean and high-contrast\n- Bottom area contains negative space for text\nDo NOT create grids, borders, or split panels.\nMaintain a single cohesive scene and consistent subject identity.';

    // Step 3: Generate the main image using nano-banana-pro
    let mainImageUrl;
    if (uploadedImageUrl) {
      // Use nano-banana-pro/edit for image-to-image
      console.log('Using nano-banana-pro/edit for image-to-image generation');
      const generateResult = await fal.subscribe('fal-ai/nano-banana-pro/edit', {
        input: {
          prompt: enhancedPrompt,
          image_urls: [uploadedImageUrl],
          aspect_ratio: '16:9',
          resolution: '2K',
          num_images: 1,
        },
        logs: true,
        onQueueUpdate: (update) => {
          console.log('Generate queue update:', update.status);
        },
      });
      mainImageUrl = generateResult.data.images[0].url;
    } else {
      // Use nano-banana-pro for text-to-image
      console.log('Using nano-banana-pro for text-to-image generation');
      const generateResult = await fal.subscribe('fal-ai/nano-banana-pro', {
        input: {
          prompt: enhancedPrompt,
          aspect_ratio: '16:9',
          resolution: '2K',
          num_images: 1,
        },
        logs: true,
        onQueueUpdate: (update) => {
          console.log('Generate queue update:', update.status);
        },
      });
      mainImageUrl = generateResult.data.images[0].url;
    }

    console.log('Main image generated:', mainImageUrl);

    // Step 4: Create 4 crops from the main image
    const cropPromises = [
      cropImage(mainImageUrl, 0, 0, 50, 100),     // Left half
      cropImage(mainImageUrl, 50, 0, 50, 100),    // Right half
      cropImage(mainImageUrl, 25, 0, 50, 60),     // Center top
      cropImage(mainImageUrl, 25, 40, 50, 60),    // Center bottom
    ];

    const variations = await Promise.all(cropPromises);

    if (!variations || variations.length === 0) {
      console.error('Failed to create variations');
      res.status(500).json({ error: 'Failed to create thumbnail variations.' });
      return;
    }

    console.log('Variations created successfully:', variations.length);
    res.status(200).json({ variations });
  } catch (error) {
    const payload = getErrorPayload(error);
    console.error('Generation error:', error);
    res.status(payload.status).json({
      error: 'Failed to generate thumbnails.',
      details: payload.details,
      requestId: payload.requestId,
    });
  }
}
