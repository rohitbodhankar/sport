
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';

interface StatsChartsProps {
  expanded?: boolean;
}

const data = [
  { name: 'ROHIT', runs: 450 },
  { name: 'SAMEER', runs: 320 },
  { name: 'ARYAN', runs: 280 },
  { name: 'RAHUL', runs: 150 },
  { name: 'SAGAR', runs: 210 },
];

const StatsCharts: React.FC<StatsChartsProps> = ({ expanded }) => {
  return (
    <div className={`legacy-card p-10 flex flex-col ${expanded ? 'h-[600px]' : 'h-full'}`}>
      <div className="mb-10 text-center">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-2">Performance Audit</h3>
        <p className="text-3xl font-black italic text-[#111827] uppercase">Top Scorer Log</p>
      </div>

      <div className="flex-grow min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#064e3b', fontSize: 10, fontWeight: 800, letterSpacing: '0.1em' }}
            />
            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 10 }} />
            <Tooltip 
              cursor={{ fill: '#fdfbf7' }}
              contentStyle={{ background: '#fff', border: '1px solid #e5e7eb', borderRadius: '0', boxShadow: '5px 5px 0px rgba(0,0,0,0.05)' }}
            />
            <Bar dataKey="runs" barSize={40}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#064e3b' : '#374151'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">Data Validated 2024</span>
        <button className="text-[10px] font-black text-[#064e3b] uppercase border border-[#064e3b] px-3 py-1">Full Report</button>
      </div>
    </div>
  );
};

export default StatsCharts;
