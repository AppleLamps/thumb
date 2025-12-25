import { fal } from '@fal-ai/client';

const buildThumbnailWorkflow = (imageUrl) => {
  const baseNodes = {
    input: {
      id: 'input',
      type: 'input',
      depends: [],
      input: {
        text1: '',
        image_url_field: imageUrl ?? '',
        upscale_factor: 2,
      },
    },
    'node-NHTTTG2mGY': {
      id: 'node-NHTTTG2mGY',
      type: 'run',
      depends: ['input'],
      app: 'fal-ai/text-concat',
      input: {
        text1: '$input.text1',
        text2:
          '\n\nGenerate ONE single cinematic 16:9 image suitable for video thumbnails.\nCompose the image so that:\n- Left side supports a strong close-up crop\n- Right side supports a wider cinematic crop\n- Center area is clean and high-contrast\n- Bottom area contains negative space for text\nDo NOT create grids, borders, or split panels.\nMaintain a single cohesive scene and consistent subject identity.',
      },
    },
  };

  const generateNode = imageUrl
    ? {
        'node-generate': {
          id: 'node-generate',
          type: 'run',
          depends: ['input', 'node-NHTTTG2mGY'],
          app: 'fal-ai/nano-banana-pro/edit',
          input: {
            aspect_ratio: '16:9',
            resolution: '2K',
            image_urls: ['$input.image_url_field'],
            prompt: '$node-NHTTTG2mGY.results',
          },
        },
      }
    : {
        'node-generate': {
          id: 'node-generate',
          type: 'run',
          depends: ['input', 'node-NHTTTG2mGY'],
          app: 'fal-ai/flux/dev',
          input: {
            prompt: '$node-NHTTTG2mGY.results',
            aspect_ratio: '16:9',
            num_images: 1,
          },
        },
      };

  const crops = {
    'node-crop-1': {
      id: 'node-crop-1',
      type: 'run',
      depends: ['node-generate'],
      app: 'fal-ai/workflow-utilities/crop-image',
      input: {
        x_percent: 0,
        y_percent: 0,
        width_percent: 50,
        height_percent: 100,
        image_url: '$node-generate.images.0.url',
      },
    },
    'node-crop-2': {
      id: 'node-crop-2',
      type: 'run',
      depends: ['node-generate'],
      app: 'fal-ai/workflow-utilities/crop-image',
      input: {
        x_percent: 50,
        y_percent: 0,
        width_percent: 50,
        height_percent: 100,
        image_url: '$node-generate.images.0.url',
      },
    },
    'node-crop-3': {
      id: 'node-crop-3',
      type: 'run',
      depends: ['node-generate'],
      app: 'fal-ai/workflow-utilities/crop-image',
      input: {
        x_percent: 25,
        y_percent: 0,
        width_percent: 50,
        height_percent: 60,
        image_url: '$node-generate.images.0.url',
      },
    },
    'node-crop-4': {
      id: 'node-crop-4',
      type: 'run',
      depends: ['node-generate'],
      app: 'fal-ai/workflow-utilities/crop-image',
      input: {
        x_percent: 25,
        y_percent: 40,
        width_percent: 50,
        height_percent: 60,
        image_url: '$node-generate.images.0.url',
      },
    },
  };

  const output = {
    output: {
      id: 'output',
      type: 'display',
      depends: ['node-crop-1', 'node-crop-2', 'node-crop-3', 'node-crop-4'],
      fields: {
        image_1: '$node-crop-1.image',
        image_2: '$node-crop-2.image',
        image_3: '$node-crop-3.image',
        image_4: '$node-crop-4.image',
      },
    },
  };

  return {
    ...baseNodes,
    ...generateNode,
    ...crops,
    ...output,
  };
};

const extractImageUrl = (value) => {
  if (!value) return null;
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && 'url' in value) {
    const maybeUrl = value.url;
    return typeof maybeUrl === 'string' ? maybeUrl : null;
  }
  return null;
};

const dataUrlToBlob = (dataUrl) => {
  const [meta, base64] = dataUrl.split(',');
  const mimeMatch = meta.match(/data:(.*);base64/);
  const mime = mimeMatch ? mimeMatch[1] : 'application/octet-stream';
  const buffer = Buffer.from(base64, 'base64');
  return new Blob([buffer], { type: mime });
};

export default async function handler(req, res) {
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
    res.status(500).json({ error: 'Missing FAL_KEY on the server.' });
    return;
  }

  fal.config({ credentials: falKey });

  try {
    let uploadedImageUrl;
    if (Array.isArray(images) && images.length > 0 && typeof images[0] === 'string') {
      const blob = dataUrlToBlob(images[0]);
      uploadedImageUrl = await fal.storage.upload(blob);
    }

    const workflow = buildThumbnailWorkflow(uploadedImageUrl);

    const stream = await fal.stream('workflows/execute', {
      input: {
        input: {
          text1: prompt,
          image_url_field: uploadedImageUrl ?? '',
          upscale_factor: 2,
        },
        workflow,
      },
    });

    const result = await stream.done();
    const output = (result?.data)?.output ?? result?.data;

    const variations = ['image_1', 'image_2', 'image_3', 'image_4']
      .map((key) => extractImageUrl(output?.[key]))
      .filter((url) => Boolean(url));

    if (!variations || variations.length === 0) {
      res.status(500).json({ error: 'FAL workflow returned no images.' });
      return;
    }

    res.status(200).json({ variations });
  } catch (error) {
    console.error('FAL generate error:', error);
    res.status(500).json({ error: 'Failed to generate thumbnails.' });
  }
}
