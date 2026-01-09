
import React, { useState, useRef, useEffect } from 'react';
import { generateSportsAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIChatProps {
  mini?: boolean;
}

const AIChat: React.FC<AIChatProps> = ({ mini }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to the Strategic Consultation. I am OTCBot, crafted by Rohit. How shall we optimize your gameplay today?", timestamp: new Date() }
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
    <div className={`legacy-card overflow-hidden flex flex-col ${mini ? 'h-[450px]' : 'h-[600px]'}`}>
      <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-[#064e3b] uppercase tracking-[0.2em]">Strategy Terminal</span>
          <span className="text-xs font-bold text-gray-400 italic">OTCBot v2.4 (Encrypted)</span>
        </div>
      </div>

      <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto space-y-6 scrollbar-hide">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">
              {msg.role === 'user' ? 'Member Request' : 'Consultant Dispatch'}
            </span>
            <div className={`max-w-[90%] p-4 text-sm leading-relaxed ${
              msg.role === 'user' 
              ? 'bg-[#111827] text-white italic border-r-4 border-[#064e3b]' 
              : 'bg-gray-50 text-[#111827] border-l-4 border-[#064e3b]'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex flex-col items-start">
            <span className="text-[9px] font-black uppercase tracking-widest text-[#064e3b] mb-1 animate-pulse">Analyzing Field Data...</span>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-gray-100">
        <div className="flex gap-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Input strategic inquiry..."
            className="flex-grow border-b-2 border-gray-200 py-2 text-sm focus:outline-none focus:border-[#064e3b] transition-colors bg-transparent italic"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="text-[11px] font-black text-[#064e3b] uppercase tracking-widest hover:underline disabled:opacity-30"
          >
            Dispatch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
