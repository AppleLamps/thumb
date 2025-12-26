import React from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploaderProps {
  images: File[];
  onImagesChange: (images: File[]) => void;
  disabled: boolean;
}

const ImageUploader = ({ images, onImagesChange, disabled }: ImageUploaderProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      if (images.length + newFiles.length > 5) {
        alert('Maximum 5 images allowed.');
        return;
      }
      onImagesChange([...images, ...newFiles]);
    }
  };

  const removeImage = (index: number) => {
    onImagesChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-zinc-700">
        Reference photos (optional, max 5)
      </label>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {images.map((file, index) => (
          <div key={`${file.name}-${file.size}-${index}`} className="relative aspect-square rounded-lg overflow-hidden group shadow-sm">
            <img
              src={URL.createObjectURL(file)}
              alt={`Upload ${index}`}
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-1 right-1 p-1 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
        
        {images.length < 5 && (
          <label className={`
            aspect-square rounded-xl border-2 border-dashed border-zinc-200
            flex flex-col items-center justify-center cursor-pointer
            hover:border-primary/50 hover:bg-primary/5 transition-all
            ${disabled ? 'opacity-50 pointer-events-none' : ''}
          `}>
            <Upload className="w-6 h-6 text-zinc-400 mb-2" />
            <span className="text-xs text-zinc-500 font-medium text-center px-2">
              Add Photo
            </span>
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              disabled={disabled}
            />
          </label>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
