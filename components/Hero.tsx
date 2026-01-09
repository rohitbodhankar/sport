
import React from 'react';

const Hero: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  return (
    <div className="relative group">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 order-2 md:order-1">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-black text-white text-[10px] font-black px-2 py-1 uppercase">Volume 24.0</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">By Rohit</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black italic uppercase tracking-tighter leading-[0.8] mb-8">
            Victory <br/> <span className="text-[#e11d48]">Defined.</span>
          </h1>
          <p className="text-lg font-medium text-gray-700 max-w-md leading-tight mb-8">
            OTC Sports Club represents the pinnacle of athletic discipline. We don't just participate; we dominate through elite data and grit.
          </p>
          <button onClick={onExplore} className="bg-black text-white px-10 py-4 font-black uppercase text-xs tracking-widest hover:bg-[#e11d48] transition-colors">
            Official Schedule
          </button>
        </div>
        <div className="w-full md:w-1/3 order-1 md:order-2 border-4 border-black p-2">
           <img 
            src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600" 
            alt="Hero Sports" 
            className="w-full grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
