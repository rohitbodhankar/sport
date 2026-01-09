
import React, { useState, useEffect } from 'react';
import { fetchLatestGlobalPulse } from '../services/geminiService';

interface NewsSectionProps {
  limited?: boolean;
}

const NewsSection: React.FC<NewsSectionProps> = ({ limited }) => {
  const [news, setNews] = useState<string>('');
  const [sources, setSources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchLatestGlobalPulse();
      if (data) {
        setNews(data.text);
        setSources(data.sources);
      }
      setLoading(false);
    };
    getNews();
  }, []);

  if (loading) return (
    <div className="p-8 border-4 border-black border-dashed animate-pulse text-center">
      <span className="text-[10px] font-black uppercase tracking-[0.3em]">Synching Global Data...</span>
    </div>
  );

  return (
    <div className={`p-8 border-4 border-black ${limited ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="flex justify-between items-center mb-6">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e11d48]">Strategic Pulse v1.0</span>
      </div>
      <div className="prose prose-sm text-[13px] font-medium leading-relaxed whitespace-pre-wrap mb-8 text-gray-800">
        {news}
      </div>
      {sources.length > 0 && (
        <div className="border-t-2 border-black pt-6">
          <p className="text-[10px] font-black uppercase mb-3 tracking-widest">Validated Sources:</p>
          <div className="flex flex-wrap gap-3">
            {sources.map((src, i) => (
              <a 
                key={i} 
                href={src.web?.uri || src.maps?.uri} 
                target="_blank" 
                rel="noreferrer"
                className="text-[9px] font-bold bg-black text-white px-3 py-1.5 uppercase hover:bg-[#e11d48] transition-colors tracking-tighter"
              >
                Log {i + 1}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsSection;
