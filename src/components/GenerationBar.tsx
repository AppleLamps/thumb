import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Loader2, Image as ImageIcon, X, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { enhancePrompt } from '../utils/api';

interface GenerationBarProps {
  onGenerate: (prompt: string, images: File[]) => void;
  status: 'idle' | 'loading' | 'success' | 'error';
  progress: number;
}

const GenerationBar = ({ onGenerate, status, progress }: GenerationBarProps) => {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [enhancing, setEnhancing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (prompt.trim().length >= 3) {
      onGenerate(prompt.trim(), images);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      if (images.length + newFiles.length > 5) {
        alert('Maximum 5 images allowed.');
        return;
      }
      setImages([...images, ...newFiles]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleEnhance = async () => {
    if (enhancing || prompt.trim().length < 5) return;
    setEnhancing(true);
    try {
      const improved = await enhancePrompt(prompt.trim(), images.length > 0);
      setPrompt(improved.trim());
    } catch (err) {
      console.error('Enhance failed', err);
    } finally {
      setEnhancing(false);
    }
  };

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [prompt]);

  const isLoading = status === 'loading';

  return (
    <div className="w-full max-w-4xl mx-auto z-40 relative">
      <motion.div 
        className={`
          bg-white shadow-lg border border-zinc-200 rounded-2xl p-2
          flex flex-col gap-2 transition-all duration-300
          ${isLoading ? 'opacity-80 pointer-events-none' : ''}
        `}
      >
        {/* Images Preview Area */}
        <AnimatePresence>
          {images.length > 0 && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="flex gap-2 px-2 pt-2 overflow-x-auto"
            >
              {images.map((file, index) => (
                <div key={index} className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden group">
                  <img src={URL.createObjectURL(file)} className="w-full h-full object-cover" />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-0.5 right-0.5 bg-black/50 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-end gap-2 pl-2">
          {/* Add Image Button */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="p-2.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-xl transition-colors mb-1"
            title="Upload Reference Image"
          >
            <ImageIcon size={20} />
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              multiple
              accept="image/*"
              onChange={handleFileChange}
            />
          </button>

          {/* Prompt Input */}
          <div className="flex-1 py-2">
            <textarea
              ref={textareaRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What will you imagine?"
              rows={1}
              className="w-full bg-transparent border-none focus:ring-0 p-0 text-zinc-800 placeholder:text-zinc-400 resize-none text-base leading-relaxed"
            />
          </div>

          {/* Enhance Button */}
           <button 
             onClick={handleEnhance}
             disabled={enhancing || prompt.length < 5}
             className={`
               p-2.5 rounded-xl transition-colors mb-1
               ${enhancing ? 'text-purple-500 animate-pulse' : 'text-zinc-400 hover:text-purple-600 hover:bg-purple-50'}
             `}
             title="Enhance Prompt"
           >
            <Sparkles size={20} />
          </button>

          {/* Settings / Parameters (Visual only for now) */}
          <button className="p-2.5 text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 rounded-xl transition-colors mb-1">
            <SlidersHorizontal size={20} />
          </button>
        </div>
      </motion.div>

      {/* Loading Progress Bar - Attached to bottom of input */}
      {isLoading && (
        <div className="absolute -bottom-1 left-4 right-4 h-1 bg-zinc-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
      )}
    </div>
  );
};

export default GenerationBar;
