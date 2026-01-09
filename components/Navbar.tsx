
import React from 'react';

interface NavbarProps {
  activeTab: 'home' | 'tournaments' | 'stats' | 'chat' | 'news';
  setActiveTab: (tab: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Index' },
    { id: 'tournaments', label: 'Tournaments' },
    { id: 'stats', label: 'Data' },
    { id: 'news', label: 'Pulse' },
    { id: 'chat', label: 'Consult' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-black px-6 md:px-12 py-5 flex items-center justify-between">
      <div 
        className="flex items-center gap-4 cursor-pointer" 
        onClick={() => setActiveTab('home')}
      >
        <span className="text-2xl font-black tracking-tighter uppercase italic leading-none">
          OTC<span className="text-[#e11d48]">.</span>
        </span>
        <div className="h-6 w-px bg-black hidden md:block"></div>
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black hidden md:block">Elite Sports Club</span>
      </div>

      <div className="flex gap-6 md:gap-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-[11px] font-black uppercase tracking-widest transition-all ${
              activeTab === tab.id 
              ? 'text-[#e11d48]' 
              : 'text-gray-400 hover:text-black'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
