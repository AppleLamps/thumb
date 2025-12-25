import React from 'react';
import { Download } from 'lucide-react';
import { downloadImage } from '../utils/helpers';

interface ThumbnailCardProps {
  url: string;
  index: number;
}

const ThumbnailCard = ({ url, index }: ThumbnailCardProps) => {
  const [isDownloading, setIsDownloading] = React.useState(false);
  const [downloadError, setDownloadError] = React.useState<string | null>(null);

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDownloading(true);
    setDownloadError(null);
    const filename = `thumbnail-variation-${index + 1}-${Date.now()}.jpg`;

    try {
      await downloadImage(url, filename);
    } catch (error) {
      setDownloadError(error instanceof Error ? error.message : 'Download failed');
      // Error will auto-clear after 3 seconds
      setTimeout(() => setDownloadError(null), 3000);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="group relative glass rounded-2xl overflow-hidden cursor-pointer aspect-video border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-300">
      <img
        src={url}
        alt={`Thumbnail Variation ${index + 1}`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="bg-white text-zinc-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label={`Download Variation ${index + 1}`}
        >
          {isDownloading ? (
            <div className="w-5 h-5 border-2 border-black/20 border-t-black animate-spin rounded-full" />
          ) : (
            <Download className="w-5 h-5" />
          )}
          {isDownloading ? 'Saving...' : 'Download HD'}
        </button>
      </div>

      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/10 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        Variation {index + 1}
      </div>

      {downloadError && (
        <div className="absolute bottom-4 left-4 right-4 bg-red-500 text-white px-3 py-2 rounded-lg text-xs font-medium">
          {downloadError}
        </div>
      )}
    </div>
  );
};

export default ThumbnailCard;
