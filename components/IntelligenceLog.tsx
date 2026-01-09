
import React from 'react';
import { Insight } from '../types';

const IntelligenceLog: React.FC = () => {
  const featuredInsight: Insight = {
    id: 'intel-001',
    title: "Budget 2026: The Agrarian Shift",
    tag: "ECONOMY x SPORTS",
    summary: "India's farms are becoming central to the national budget. For OTC Sports Club, this means a shift in community focus and potential rural talent scouting opportunities as agrarian wealth stabilizes.",
    link: "https://economictimes.indiatimes.com/news/economy/agriculture/budget-2026-why-do-indias-farms-suddenly-matter/articleshow/126411854.cms"
  };

  return (
    <div className="border-4 border-black p-8 bg-white hover:bg-gray-50 transition-colors group cursor-pointer">
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-[#e11d48] text-white text-[9px] font-black px-2 py-0.5 uppercase tracking-widest">Priority Intelligence</span>
        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{featuredInsight.tag}</span>
      </div>
      <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-4 leading-none group-hover:text-[#e11d48] transition-colors">
        {featuredInsight.title}
      </h3>
      <p className="text-sm font-medium text-gray-700 leading-snug mb-6 border-l-2 border-black pl-4 italic">
        {featuredInsight.summary}
      </p>
      <a 
        href={featuredInsight.link} 
        target="_blank" 
        rel="noreferrer"
        className="text-[10px] font-black uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-[#e11d48] hover:border-[#e11d48]"
      >
        Read Full Source →
      </a>
    </div>
  );
};

export default IntelligenceLog;
