
import React, { useState, useEffect } from 'react';

const CricketLive: React.FC = () => {
  const [scores, setScores] = useState([
    { match: 'OTC EAGLES vs. TITANS', score: '184/4', overs: '18.2', status: 'CHALLENGERS REQUIRE 12 FROM 10' },
    { match: 'KNIGHTS vs. SPARTANS', score: '142/10', overs: '20.0', status: 'INNINGS COMPLETED' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setScores(prev => prev.map((s, i) => {
        if (i === 0 && s.score.startsWith('18')) {
          const runs = parseInt(s.score.split('/')[0]) + Math.floor(Math.random() * 2);
          return { ...s, score: `${runs}/4`, overs: '18.4' };
        }
        return s;
      }));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-12">
      <div className="flex items-center justify-between mb-8 border-b-2 border-[#064e3b] pb-2">
        <h2 className="text-xl font-black italic uppercase tracking-tighter">Match Center</h2>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#991b1b] rounded-full animate-pulse"></div>
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Live Transmission</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {scores.map((s, idx) => (
          <div key={idx} className="legacy-card p-8 border-accent">
            <div className="flex flex-col gap-1 mb-6">
              <span className="text-[10px] font-black text-[#064e3b] uppercase tracking-[0.2em]">{s.match}</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl font-black text-[#111827] italic">{s.score}</span>
              <span className="text-lg text-gray-400 font-bold serif italic">({s.overs})</span>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-xs font-bold text-[#064e3b] uppercase tracking-wider italic">{s.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CricketLive;
