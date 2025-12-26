export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { prompt, hasImage } = req.body || {};

  if (!prompt || typeof prompt !== 'string' || prompt.trim().length < 5) {
    res.status(400).json({ error: 'Prompt must be at least 5 characters.' });
    return;
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Missing OPENROUTER_API_KEY on the server.' });
    return;
  }

  const payload = {
    model: 'gpt-5.2',
    messages: [
      {
        role: 'system',
        content:
          'You are an expert YouTube thumbnail prompt writer. Improve the user prompt with concise, concrete visual direction: subject, setting, mood, lighting, color, composition, camera angle, and style. Keep it under 120 words, avoid extra quotes or lists, and return only the enhanced prompt text.',
      },
      {
        role: 'user',
        content: `User prompt: ${prompt}\nReference image provided: ${hasImage ? 'yes' : 'no'}\nReturn: a single improved prompt ready for image generation.`,
      },
    ],
    max_tokens: 300,
    temperature: 0.4,
    top_p: 0.9,
  };

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      res.status(response.status).send(text || 'OpenRouter request failed');
      return;
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;

    if (!content || typeof content !== 'string') {
      res.status(500).json({ error: 'OpenRouter returned an empty response.' });
      return;
    }

    res.status(200).json({ content: content.trim() });
  } catch (error) {
    console.error('Enhance error:', error);
    res.status(500).json({ error: 'Failed to enhance prompt.' });
  }
}
