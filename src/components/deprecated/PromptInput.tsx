import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
  onEnhance?: () => void;
  enhanceLoading?: boolean;
}

const PromptInput = ({ value, onChange, disabled, onEnhance, enhanceLoading }: PromptInputProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end gap-4 flex-wrap">
        <label 
          htmlFor="thumbnail-prompt"
          className="block text-sm font-medium text-zinc-700"
        >
          Describe your thumbnail
        </label>
        <div className="flex items-center gap-2">
          {onEnhance && (
            <button
              type="button"
              onClick={onEnhance}
              disabled={disabled || enhanceLoading || value.trim().length < 10}
              className="text-xs font-semibold px-3 py-2 rounded-lg border border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {enhanceLoading ? 'Enhancing…' : 'Enhance prompt'}
            </button>
          )}
          <span className={`text-[10px] font-mono uppercase tracking-wider ${value.length >= 1000 ? 'text-red-500' : 'text-zinc-500'}`}>
            {value.length} / 1000
          </span>
        </div>
      </div>
      <div className="relative group">
        <textarea
          id="thumbnail-prompt"
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder="e.g., A tech review video about the new iPhone, dark background with product in center, bold text, neon accents..."
          rows={3}
          maxLength={1000}
          aria-describedby="prompt-hint"
          className="
            w-full bg-white border border-zinc-200 rounded-xl p-4
            text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 
            focus:ring-primary/50 focus:border-primary/50 transition-all
            resize-none overflow-hidden group-hover:border-zinc-300
            shadow-sm
          "
        />
      </div>
      <AnimatePresence>
        {value.length > 0 && value.length < 10 && (
          <motion.p 
            id="prompt-hint"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="text-xs text-red-400 flex items-center gap-1"
          >
            Please enter at least 10 characters to help the AI understand.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PromptInput;
