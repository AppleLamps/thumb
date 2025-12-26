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

const SYSTEM_PROMPT = `You will receive a text prompt from the user describing the desired thumbnail image.

STRICT REQUIREMENT: Generate ONE single 16:9 cinematic image optimized for video thumbnail cropping. The image must support multiple crop variations while maintaining visual coherence.

CRITICAL COMPOSITION RULES:
- Create a SINGLE unified scene - NO grids, NO borders, NO split panels, NO divisions
- The image must be 16:9 aspect ratio (e.g., 1920x1080, 2560x1440, or 3840x2160)
- Compose the scene to support four distinct crop regions that each work as standalone thumbnails
- All crop regions must share the same subject/scene but offer different framing perspectives

CROP REGION PLANNING:
The final image will be cropped into 4 variations:
1. LEFT HALF (0-50% width): Should contain a strong close-up or portrait-oriented composition
2. RIGHT HALF (50-100% width): Should contain a wider, more cinematic or landscape-oriented view
3. CENTER-TOP (25-75% width, 0-60% height): Should have the main subject/focal point with clean composition
4. CENTER-BOTTOM (25-75% width, 40-100% height): Should contain negative space suitable for text overlay

COMPOSITION GUIDELINES:
- Position the main subject strategically so it appears compelling in ALL four crop regions
- LEFT side: Place subject closer to camera or use tighter framing for emotional impact
- RIGHT side: Show more environment/context or use dramatic angles
- CENTER area: Ensure high contrast and clear focal point
- BOTTOM 40%: Keep relatively clean with less visual clutter for text readability
- Maintain consistent lighting, color palette, and subject identity across the entire image
- Use depth, perspective, and composition to create natural variation between crop regions

QUALITY REQUIREMENTS:
- Subject must be clearly recognizable and visually appealing in each potential crop
- Avoid placing critical elements exactly at crop boundaries (25%, 50%, 75% width marks)
- Use cinematic lighting and professional color grading
- Ensure the image works both as a complete 16:9 composition AND as four separate crops
- Maintain visual coherence - it should look like ONE scene, not four separate images stitched together

FORBIDDEN ELEMENTS:
- NO visible grid lines, borders, or dividing lines
- NO text, labels, or numbers in the image
- NO obvious repetition or mirroring of elements
- NO artificial segmentation or panel layouts

Final output: One single seamless 16:9 cinematic image that functions as a unified composition while supporting four distinct thumbnail crop variations.`;

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

    // Step 2: Enhance prompt with system instructions
    const enhancedPrompt = `${SYSTEM_PROMPT}\n\nUSER PROMPT: ${prompt}`;

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
