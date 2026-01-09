
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t-2 border-[#111827] py-16 bg-white px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="max-w-sm space-y-8">
          <div>
            <h1 className="text-4xl font-black italic tracking-tighter text-[#064e3b] leading-none mb-2">OTC</h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">Sports Legacy Club</p>
          </div>
          <p className="text-sm font-medium text-gray-500 leading-relaxed italic">
            "Champions are not made in the gym. Champions are made from something they have deep inside them—a desire, a dream, a vision."
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-[11px] font-black uppercase tracking-widest">
          <div className="space-y-4">
            <h3 className="text-[#111827]">Directory</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-[#064e3b] cursor-pointer">Member Portal</li>
              <li className="hover:text-[#064e3b] cursor-pointer">Match History</li>
              <li className="hover:text-[#064e3b] cursor-pointer">Club Charter</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-[#111827]">Communications</h3>
            <ul className="space-y-3 text-gray-400">
              <li>TEL: 9082058396</li>
              <li>LOC: OTC ESTATE</li>
            </ul>
          </div>
          <div className="space-y-4 col-span-2 md:col-span-1">
            <h3 className="text-[#111827]">Architect</h3>
            <p className="text-[#064e3b] italic text-lg leading-tight">ROHIT</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-100 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
        <span>© 2024 OTC SPORTS </span>
        <span className="text-[#064e3b]">HONORED BY ROHIT</span>
      </div>
    </footer>
  );
};

export default Footer;
