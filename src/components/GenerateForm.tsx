import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2, AlertCircle, Image as ImageIcon } from 'lucide-react';
import PromptInput from './PromptInput';
import ImageUploader from './ImageUploader';
import { enhancePrompt } from '../utils/api';

interface GenerateFormProps {
  onGenerate: (prompt: string, images: File[]) => void;
  status: 'idle' | 'loading' | 'success' | 'error';
  progress: number;
  error?: string | null;
}

const GenerateForm = ({ onGenerate, status, progress, error }: GenerateFormProps) => {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [enhancing, setEnhancing] = useState(false);
  const [enhanceError, setEnhanceError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnhanceError(null);
    if (prompt.trim().length >= 10) {
      onGenerate(prompt.trim(), images);
    }
  };

  const handlePromptChange = (next: string) => {
    setEnhanceError(null);
    setPrompt(next);
  };

  const handleEnhance = async () => {
    if (enhancing || prompt.trim().length < 10) return;
    setEnhanceError(null);
    setEnhancing(true);
    try {
      const improved = await enhancePrompt(prompt.trim(), images.length > 0);
      setPrompt(improved.trim());
    } catch (err) {
      setEnhanceError(err instanceof Error ? err.message : 'Could not enhance prompt');
    } finally {
      setEnhancing(false);
    }
  };

  const isLoading = status === 'loading';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass p-6 md:p-8 rounded-3xl"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <PromptInput 
          value={prompt} 
          onChange={handlePromptChange} 
          disabled={isLoading}
          onEnhance={handleEnhance}
          enhanceLoading={enhancing}
        />
        
        <ImageUploader 
          images={images} 
          onImagesChange={setImages} 
          disabled={isLoading}
        />

        <div className="grid gap-3 md:grid-cols-2">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/15">
            <Sparkles className="w-5 h-5 text-primary mt-0.5" />
            <div className="text-sm text-zinc-700">
              <p className="font-semibold text-zinc-900">Text-only</p>
              <p>Describe the scene and style; we’ll create thumbnails from scratch.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl bg-accent/5 border border-accent/15">
            <ImageIcon className="w-5 h-5 text-accent mt-0.5" />
            <div className="text-sm text-zinc-700">
              <p className="font-semibold text-zinc-900">Text + photo</p>
              <p>Add a reference to lock in subject identity and composition.</p>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {(error || enhanceError) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-red-50 border border-red-200 p-4 rounded-xl flex items-center gap-3 text-red-600 text-sm"
            >
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p>{error || enhanceError}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={prompt.trim().length < 10 || isLoading}
          className={`
            w-full py-4 rounded-xl font-bold text-lg transition-all duration-300
            flex items-center justify-center gap-2
            ${prompt.trim().length >= 10 && !isLoading
              ? 'bg-gradient-button text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:scale-[1.02] active:scale-[0.98]'
              : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'}
          `}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating ({progress}%)
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generate Thumbnails
            </>
          )}
        </button>

        {isLoading && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-500 font-medium">
              <span>Working on your shots…</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 rounded-full bg-zinc-100 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-[width] duration-200"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>
        )}
      </form>
    </motion.div>
  );
};

export default GenerateForm;
