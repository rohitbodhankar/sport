
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 border-t-8 border-black bg-white py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="space-y-6">
          <h1 className="text-4xl font-black italic uppercase italic leading-none">OTC<span className="text-[#e11d48]">.</span></h1>
          <p className="text-sm font-bold uppercase tracking-widest text-gray-400 max-w-xs">
            The Elite Standard for Sports Management and Competition.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase text-black tracking-widest">Connect</h3>
            <ul className="text-[12px] font-bold text-gray-500 space-y-2 uppercase">
              <li>HQ: Sports Ave</li>
              <li>Tel: 9082058396</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-[10px] font-black uppercase text-black tracking-widest">Architect</h3>
            <p className="text-2xl font-black italic uppercase text-black">Rohit</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-black/10 flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-gray-400">
        <span>© 2024 OTC Sports Club</span>
        <span className="text-black">Honored by Rohit</span>
      </div>
    </footer>
  );
};

export default Footer;
