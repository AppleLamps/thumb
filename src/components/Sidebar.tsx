import { Home, Image as ImageIcon, Settings, Compass, User } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-16 bg-zinc-50 border-r border-zinc-200 flex flex-col items-center py-6 z-50">
      <div className="mb-8">
        <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
           <span className="text-white font-bold text-xs">AI</span>
        </div>
      </div>
      
      <nav className="flex-1 flex flex-col gap-6 w-full items-center">
        <SidebarItem icon={<Home size={22} />} active />
        <SidebarItem icon={<Compass size={22} />} />
        <SidebarItem icon={<ImageIcon size={22} />} />
        <SidebarItem icon={<User size={22} />} />
      </nav>

      <div className="mt-auto">
        <SidebarItem icon={<Settings size={22} />} />
      </div>
    </aside>
  );
};

const SidebarItem = ({ icon, active = false }: { icon: React.ReactNode, active?: boolean }) => {
  return (
    <button 
      className={`
        w-10 h-10 rounded-xl flex items-center justify-center transition-all
        ${active 
          ? 'bg-zinc-900 text-white shadow-md' 
          : 'text-zinc-500 hover:bg-zinc-200 hover:text-zinc-900'}
      `}
    >
      {icon}
    </button>
  );
};

export default Sidebar;
