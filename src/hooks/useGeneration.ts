import { useState, useCallback, useRef, useEffect } from 'react';
import { generateThumbnails } from '../utils/api';

export const useGeneration = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [variations, setVariations] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const generate = useCallback(async (prompt: string, images: File[]) => {
    setStatus('loading');
    setVariations([]);
    setProgress(0);
    setError(null);

    // Simulate progress
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + 2;
      });
    }, 200);

    try {
      setProgress(15);

      const response = await generateThumbnails({
        prompt,
        images,
      });

      setVariations(response.variations);
      setStatus('success');
      setProgress(100);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setStatus('error');
    } finally {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    }
  }, []);

  return {
    status,
    variations,
    progress,
    error,
    generate,
  };
};
