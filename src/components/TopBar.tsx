import React from 'react';
import GenerationBar from './GenerationBar';

interface TopBarProps {
  onGenerate: (prompt: string, images: File[]) => void;
  status: 'idle' | 'loading' | 'success' | 'error';
  progress: number;
}

const TopBar = ({ onGenerate, status, progress }: TopBarProps) => {
  return (
    <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-zinc-100 py-4 px-6">
      <GenerationBar 
        onGenerate={onGenerate}
        status={status}
        progress={progress}
      />
    </div>
  );
};

export default TopBar;
