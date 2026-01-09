
import React from 'react';

interface NavbarProps {
  activeTab: 'home' | 'tournaments' | 'stats' | 'chat';
  setActiveTab: (tab: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Overview' },
    { id: 'tournaments', label: 'Tours' },
    { id: 'stats', label: 'Analytics' },
    { id: 'chat', label: 'Consult' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 px-8 py-3 flex items-center justify-between">
      <div 
        className="flex items-center gap-3 cursor-pointer" 
        onClick={() => setActiveTab('home')}
      >
        <div className="flex flex-col">
          <h1 className="text-xl font-black italic tracking-tighter leading-none text-[#064e3b]">OTC</h1>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Sports Club</span>
        </div>
      </div>

      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-1 py-2 text-[11px] font-bold uppercase tracking-widest transition-all relative ${
              activeTab === tab.id 
              ? 'text-[#064e3b]' 
              : 'text-gray-400 hover:text-[#064e3b]'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#064e3b]"></div>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
