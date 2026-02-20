import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2, Sparkles } from 'lucide-react';
import { askCareerAssistant } from '../services/geminiService';
import { Message } from '../types';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Welcome to Webnixra Collective. I am the Studio Concierge. How can I help you understand our capabilities or team today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await askCareerAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-[400px] glass rounded-[2rem] overflow-hidden shadow-2xl border-white/10 flex flex-col h-[550px] animate-in slide-in-from-bottom-4 duration-500">
          <div className="p-6 bg-gradient-to-r from-blue-700 to-blue-600 flex items-center justify-between text-white">
            <div className="flex items-center space-x-3">
              <div className="p-1.5 bg-white/20 rounded-lg">
                <img src="logo.png" alt="Logo" className="w-5 h-5 object-contain" />
              </div>
              <div>
                <span className="font-bold text-sm block">Webnixra Concierge</span>
                <span className="text-[10px] opacity-70 uppercase tracking-widest font-bold">Studio AI</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white/5 border border-white/10 text-gray-200 rounded-bl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 text-gray-200 px-4 py-3 rounded-2xl rounded-bl-none text-sm flex items-center space-x-3">
                  <Loader2 size={16} className="animate-spin text-blue-500" />
                  <span className="opacity-70">Synthesizing...</span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-6 border-t border-white/5">
            <div className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask us anything..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 hover:text-white transition-colors p-2 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20">
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-3xl bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 group relative"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full animate-ping opacity-75"></div>
          <MessageSquare size={28} className="group-hover:rotate-12 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default GeminiAssistant;
