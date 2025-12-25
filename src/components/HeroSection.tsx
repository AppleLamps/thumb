import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-zinc-200 shadow-sm text-sm font-semibold text-zinc-700 mb-4">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        Text-only or text + photo — both supported
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-zinc-900">
          Create <span className="gradient-text">Viral</span> Thumbnails
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Generate 4 professional YouTube thumbnail variations in seconds using AI. 
          Zero design skills required.
        </p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
