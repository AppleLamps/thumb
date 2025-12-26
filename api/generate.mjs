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

const SYSTEM_PROMPT = `You will receive a text prompt from the user describing the desired thumbnail image subject.

STRICT REQUIREMENT: Generate one single final image that is a 2x2 grid of 4 equal-sized 16:9 thumbnail variations. The grid must have exactly 2 columns and 2 rows.

CRITICAL LAYOUT RULES:
- NO outer border or margin around the grid - thumbnails must extend to the very edge of the image
- NO gaps or visible lines between thumbnails - each thumbnail must be directly adjacent to its neighbors with zero spacing
- Each thumbnail is exactly 50% of the total image width and 50% of the total image height
- The first thumbnail starts at pixel 0,0 (top-left corner)
- Thumbnails are perfectly aligned in a mathematical grid with no visual separators
- Each thumbnail must be 16:9 aspect ratio

Grid layout: Read left-to-right, top-to-bottom:
- Position 1 (TOP-LEFT): 0-50% width, 0-50% height
- Position 2 (TOP-RIGHT): 50-100% width, 0-50% height  
- Position 3 (BOTTOM-LEFT): 0-50% width, 50-100% height
- Position 4 (BOTTOM-RIGHT): 50-100% width, 50-100% height

Content rules for each thumbnail:
- All 4 thumbnails must share the same subject/theme from the user's prompt
- Each thumbnail must be a DISTINCT variation with different composition, angle, or style
- Position 1 (TOP-LEFT): Close-up or portrait-oriented composition for emotional impact
- Position 2 (TOP-RIGHT): Wider cinematic view with more environment/context
- Position 3 (BOTTOM-LEFT): Dramatic angle or alternative perspective
- Position 4 (BOTTOM-RIGHT): Clean composition with negative space at bottom for text overlay
- The subject must remain recognizable across all 4 thumbnails despite compositional changes
- Each thumbnail should be visually distinct through framing, angle, or style - NOT through borders

Quality requirements:
- Keep the subject clearly recognizable in every thumbnail
- Each thumbnail must work as a standalone video thumbnail
- Use cinematic lighting and professional color grading consistently
- Avoid unwanted artifacts, distortions, or blending between thumbnails
- Maintain consistent subject identity and color palette across all 4 variations
- Each thumbnail should be compelling and click-worthy on its own

FORBIDDEN ELEMENTS:
- NO visible grid lines, borders, or dividing lines between thumbnails
- NO text, labels, or numbers in the image
- NO outer margins or padding around the grid
- DO NOT create one unified scene - create 4 SEPARATE thumbnail compositions

Final output: One single image containing a seamless 2x2 grid of 4 equal 16:9 thumbnails with NO borders, NO gaps, NO margins - just 4 distinct thumbnail variations perfectly tiled edge-to-edge.`;

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

    // Step 3: Generate the 2x2 grid image using nano-banana-pro
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

    console.log('2x2 grid image generated:', mainImageUrl);

    // Step 4: Crop the 4 thumbnails from the 2x2 grid
    const cropPromises = [
      cropImage(mainImageUrl, 0, 0, 50, 50),      // Top-left
      cropImage(mainImageUrl, 50, 0, 50, 50),     // Top-right
      cropImage(mainImageUrl, 0, 50, 50, 50),     // Bottom-left
      cropImage(mainImageUrl, 50, 50, 50, 50),    // Bottom-right
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
