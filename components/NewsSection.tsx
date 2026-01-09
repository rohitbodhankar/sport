
import React, { useState, useEffect } from 'react';
import { fetchLatestCricketNews } from '../services/geminiService';

interface NewsSectionProps {
  limited?: boolean;
}

const NewsSection: React.FC<NewsSectionProps> = ({ limited }) => {
  const [news, setNews] = useState<string>('');
  const [sources, setSources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchLatestCricketNews();
      if (data) {
        setNews(data.text);
        setSources(data.sources);
      }
      setLoading(false);
    };
    getNews();
  }, []);

  if (loading) return <div className="p-4 border-2 border-black animate-pulse text-[10px] font-black uppercase">Syncing Pulse...</div>;

  return (
    <div className={`p-6 border-2 border-black ${limited ? 'bg-white' : 'bg-gray-50'}`}>
      <div className="flex justify-between items-center mb-6">
        <span className="text-[10px] font-black uppercase tracking-widest text-[#e11d48]">Live Feed</span>
      </div>
      <div className="prose prose-sm text-sm font-medium leading-relaxed whitespace-pre-wrap mb-6">
        {news}
      </div>
      {sources.length > 0 && (
        <div className="border-t border-black/10 pt-4">
          <p className="text-[10px] font-black uppercase mb-2">Sources:</p>
          <div className="flex flex-wrap gap-2">
            {sources.map((src, i) => (
              <a 
                key={i} 
                href={src.web?.uri || src.maps?.uri} 
                target="_blank" 
                rel="noreferrer"
                className="text-[9px] font-bold bg-black text-white px-2 py-1 uppercase hover:bg-[#e11d48] transition-colors"
              >
                Ref {i + 1}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsSection;
