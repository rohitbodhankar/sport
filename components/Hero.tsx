
import React from 'react';

const Hero: React.FC<{ onExplore: () => void }> = ({ onExplore }) => {
  return (
    <div className="py-12 md:py-20 border-b border-gray-200 mb-12 flex flex-col items-center text-center">
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#064e3b] mb-4">
        EST. 2024 • THE LEGACY CONTINUES • BUILT BY ROHIT
      </span>
      <h1 className="text-6xl md:text-8xl font-black italic leading-[0.85] text-[#111827] mb-8 max-w-4xl tracking-tighter">
        A TRADITION OF <br/>
        <span className="text-[#064e3b]">EXCELLENCE.</span>
      </h1>
      <p className="text-gray-500 font-medium max-w-xl text-lg mb-10 leading-relaxed">
        The OTC Sports Club isn't just a place to play. It's where champions are forged through data, discipline, and digital strategy.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <button onClick={onExplore} className="btn-legacy">
          Explore Tournaments
        </button>
        <button className="px-8 py-3 border-2 border-[#064e3b] text-[#064e3b] font-bold uppercase tracking-widest text-sm hover:bg-[#064e3b] hover:text-white transition-all">
          Contact Us
        </button>
      </div>
      
      <div className="mt-16 w-full max-w-5xl">
        <img 
          src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1200" 
          alt="Sports Stadium" 
          className="w-full h-[400px] object-cover grayscale-[0.3] rounded-sm shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
