import { motion } from 'framer-motion';
import ThumbnailCard from './ThumbnailCard';

interface ThumbnailGalleryProps {
  variations: string[];
}

const ThumbnailGallery = ({ variations }: ThumbnailGalleryProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {variations.map((url, index) => (
          <motion.div
            key={url}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="aspect-video"
          >
            <ThumbnailCard url={url} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailGallery;
