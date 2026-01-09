
import React, { useState, useRef, useEffect } from 'react';
import { generateSportsAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIChatProps {
  mini?: boolean;
}

const AIChat: React.FC<AIChatProps> = ({ mini }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Strategic uplink established. I am OTCBot. Share a query or a news URL for impact analysis.", timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    const response = await generateSportsAdvice(input);
    setMessages(prev => [...prev, { role: 'model', text: response, timestamp: new Date() }]);
    setIsTyping(false);
  };

  return (
    <div className={`border-4 border-black overflow-hidden flex flex-col bg-white ${mini ? 'h-[480px]' : 'h-[650px]'}`}>
      <div className="p-5 border-b-2 border-black flex items-center justify-between bg-black text-white">
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">Lead Strategist</span>
          <span className="text-[9px] font-bold text-gray-400 italic">OTCBot Intelligence Unit</span>
        </div>
        <div className="w-3 h-3 bg-[#e11d48] animate-pulse"></div>
      </div>

      <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-6 scrollbar-hide bg-gray-50/30">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            <span className="text-[8px] font-black uppercase tracking-widest text-gray-400 mb-1">
              {msg.role === 'user' ? 'Member Data' : 'Executive Output'}
            </span>
            <div className={`max-w-[95%] p-4 text-[13px] leading-relaxed border-2 border-black ${
              msg.role === 'user' 
              ? 'bg-white text-black italic' 
              : 'bg-black text-white'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex flex-col items-start">
             <div className="w-full h-1 bg-gray-200 relative overflow-hidden mb-2">
                <div className="absolute top-0 h-full bg-[#e11d48] w-1/3 animate-[slide_1.5s_infinite_linear]"></div>
             </div>
            <span className="text-[8px] font-black uppercase tracking-widest text-[#e11d48] animate-pulse">Parsing Intelligence...</span>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t-4 border-black">
        <div className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Paste URL or strategy query..."
            className="flex-grow border-b-2 border-gray-200 py-2 text-[13px] font-medium focus:outline-none focus:border-black transition-colors bg-transparent italic"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="text-[10px] font-black text-black uppercase tracking-[0.2em] hover:text-[#e11d48] disabled:opacity-30"
          >
            Deploy
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );
};

export default AIChat;
