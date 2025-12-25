import HeroSection from './components/HeroSection';
import GenerateForm from './components/GenerateForm';
import ThumbnailGallery from './components/ThumbnailGallery';
import { useGeneration } from './hooks/useGeneration';

function App() {
  const { status, variations, generate, progress, error } = useGeneration();

  return (
    <div className="min-h-screen bg-background text-zinc-900 selection:bg-primary/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
        <div className="absolute top-[30%] left-[60%] w-[30%] h-[30%] bg-secondary/10 blur-[100px] rounded-full" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <HeroSection />
        
        <div className="mt-16 max-w-3xl mx-auto">
          <GenerateForm 
            onGenerate={generate} 
            status={status} 
            progress={progress} 
            error={error}
          />
        </div>

        {variations.length > 0 && (
          <div className="mt-24">
            <ThumbnailGallery variations={variations} />
          </div>
        )}

        <footer className="mt-24 pb-12 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} AI Thumbnail Generator. Powered by FAL.ai workflows.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
