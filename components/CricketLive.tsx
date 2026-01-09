
import React, { useState, useEffect } from 'react';

const CricketLive: React.FC = () => {
  const [scores, setScores] = useState([
    { match: 'OTC BULLS vs. TITANS', score: '214/2', overs: '19.1', status: 'Bulls require 6 from 5' },
    { match: 'KNIGHTS vs. SPARTANS', score: '150/10', overs: '20.0', status: 'Final' },
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border-2 border-black">
      {scores.map((s, idx) => (
        <div key={idx} className="bg-white p-8 group">
          <div className="flex justify-between items-center mb-6">
            <span className="text-[10px] font-black uppercase tracking-tighter">{s.match}</span>
            <div className="w-2 h-2 bg-[#e11d48]"></div>
          </div>
          <div className="flex items-baseline gap-4 mb-2">
            <span className="text-6xl font-black italic tracking-tighter">{s.score}</span>
            <span className="text-sm font-bold text-gray-400 uppercase">({s.overs})</span>
          </div>
          <p className="text-[10px] font-black uppercase text-[#e11d48] tracking-widest">{s.status}</p>
        </div>
      ))}
    </div>
  );
};

export default CricketLive;
