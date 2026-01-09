
import React from 'react';
import { Tournament } from '../types';

const Tournaments: React.FC = () => {
  const tournaments: Tournament[] = [
    { id: '1', name: 'Elite Premier Championship', date: 'Oct 10 - Oct 25', prize: '₹40,000', status: 'Upcoming', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=600' },
    { id: '2', name: 'Legacy Cup Series', date: 'Aug 12 - Aug 15', prize: '₹20,000', status: 'Live', image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&q=80&w=600' },
    { id: '3', name: 'OTC Masters Trophy', date: 'Dec 15 - Dec 20', prize: '₹75,000', status: 'Upcoming', image: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&q=80&w=600' },
    { id: '4', name: 'Junior League Finals', date: 'July 1 - July 5', prize: '₹10,000', status: 'Completed', image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <div className="py-12">
      <div className="mb-12 border-l-8 border-[#064e3b] pl-6">
        <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-2">Tournament Registry</h2>
        <p className="text-sm text-gray-500 font-medium">Competition schedule and official prize pools.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {tournaments.map((t) => (
          <div key={t.id} className="flex flex-col md:flex-row gap-6 legacy-card p-4 items-center">
            <div className="w-full md:w-1/3 h-40 overflow-hidden">
              <img src={t.image} alt={t.name} className="w-full h-full object-cover grayscale-[0.2]" />
            </div>
            <div className="flex-grow py-2">
              <div className="flex justify-between items-start mb-2">
                <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase ${t.status === 'Live' ? 'bg-[#991b1b] text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {t.status}
                </span>
                <span className="text-[10px] font-bold text-gray-400">{t.date}</span>
              </div>
              <h3 className="text-xl font-black italic text-[#111827] mb-4 uppercase">{t.name}</h3>
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                <span className="text-sm font-bold text-[#064e3b]">PRIZE: {t.prize}</span>
                <button className="text-[10px] font-black text-[#064e3b] uppercase tracking-widest hover:underline">
                  Official Entry
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tournaments;
