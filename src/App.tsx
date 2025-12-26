import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import ThumbnailGallery from './components/ThumbnailGallery';
import { useGeneration } from './hooks/useGeneration';

function App() {
  const { status, variations, generate, progress } = useGeneration();

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar />
      
      <main className="flex-1 ml-16 relative">
        <TopBar 
          onGenerate={generate}
          status={status}
          progress={progress}
        />

        <div className="p-6 md:p-8 max-w-[1920px] mx-auto">
          {variations.length > 0 ? (
            <ThumbnailGallery variations={variations} />
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-zinc-300 select-none">
              <p className="text-xl font-medium">Your creations will appear here</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
