import { motion } from 'framer-motion';
import ThumbnailCard from './ThumbnailCard';

interface ThumbnailGalleryProps {
  variations: string[];
}

const ThumbnailGallery = ({ variations }: ThumbnailGalleryProps) => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <h2 className="text-2xl font-bold text-zinc-900">Your Variations</h2>
        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600">
          <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200">Cinematic 16:9</span>
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">Auto-cropped set</span>
          <span className="px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200">Tap to download</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {variations.map((url, index) => (
          <motion.div
            key={url}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ThumbnailCard url={url} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailGallery;
