import { fileToBase64 } from './helpers';

export interface GenerationRequest {
  prompt: string;
  images?: File[];
}

export interface GenerationResponse {
  variations: string[];
}

export const generateThumbnails = async (request: GenerationRequest): Promise<GenerationResponse> => {
  try {
    const imagesBase64 = request.images && request.images.length > 0
      ? await Promise.all(request.images.map(fileToBase64))
      : [];

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: request.prompt,
        images: imagesBase64,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      let message = text || 'Failed to generate thumbnails';

      try {
        const parsed = JSON.parse(text);
        const details = parsed?.error ?? parsed?.message ?? parsed?.details;
        if (details) {
          message = typeof details === 'string' ? details : JSON.stringify(details);
        }
        if (parsed?.requestId) {
          message = `${message} (requestId: ${parsed.requestId})`;
        }
      } catch {
        // Keep the plain text fallback when JSON parsing fails.
      }

      throw new Error(message);
    }

    const data = await response.json();
    const variations: string[] | undefined = data?.variations;

    if (!variations || !Array.isArray(variations) || variations.length === 0) {
      throw new Error('No images returned from generation.');
    }

    return { variations };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Failed to generate thumbnails';
    throw new Error(msg);
  }
};

export const enhancePrompt = async (prompt: string, hasImage: boolean): Promise<string> => {
  const response = await fetch('/api/enhance', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, hasImage }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || 'Failed to enhance prompt');
  }

  const data = await response.json();
  const content: string | undefined = data?.content || data?.prompt;

  if (!content || typeof content !== 'string') {
    throw new Error(data?.error || 'Enhance service returned an empty response.');
  }

  return content.trim();
};
