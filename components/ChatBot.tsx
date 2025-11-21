import React, { useState, useRef, useEffect } from 'react';
import { chatWithAI } from '../services/gemini';

export const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Hi! I am your SkillSwap AI Assistant. Ask me anything about learning new skills or finding a swap partner.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [useThinking, setUseThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Format history for context
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    
    const response = await chatWithAI(userMsg, history, useThinking);
    
    setMessages(prev => [...prev, { role: 'model', text: response || "Sorry, I couldn't think of a response." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-display">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 text-white shadow-2xl hover:scale-110 hover:shadow-blue-500/50 transition-all duration-300 group"
        >
          <span className="material-symbols-outlined !text-3xl group-hover:animate-pulse">smart_toy</span>
        </button>
      )}

      {isOpen && (
        <div className="flex flex-col w-[90vw] sm:w-96 h-[600px] max-h-[80vh] bg-white dark:bg-card-dark rounded-3xl shadow-2xl border border-border-light dark:border-border-dark overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 ring-1 ring-black/5 dark:ring-white/10">
          {/* Header */}
          <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 p-5 text-white shadow-md z-10">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                    <span className="material-symbols-outlined">smart_toy</span>
                </div>
                <div>
                    <h3 className="font-bold text-base leading-tight">SkillSwap AI</h3>
                    <p className="text-xs text-blue-100">Powered by Gemini</p>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-2 transition-colors">
              <span className="material-symbols-outlined !text-xl">close</span>
            </button>
          </div>

          {/* Settings / Toggles */}
          <div className="px-5 py-3 bg-gray-50 dark:bg-background-dark border-b border-gray-200 dark:border-gray-800 flex items-center justify-between text-xs">
            <span className="text-gray-500 dark:text-gray-400 font-medium">Model: Gemini 3 Pro</span>
            <label className="flex items-center cursor-pointer gap-2 group">
              <span className={`font-bold transition-colors ${useThinking ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200'}`}>Deep Thinking</span>
              <div className="relative inline-block w-9 h-5 rounded-full cursor-pointer">
                <input 
                  type="checkbox" 
                  className="peer sr-only"
                  checked={useThinking}
                  onChange={(e) => setUseThinking(e.target.checked)}
                />
                <div className="w-full h-full bg-gray-300 dark:bg-gray-600 rounded-full peer-checked:bg-purple-600 transition-colors"></div>
                <div className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4 shadow-sm"></div>
              </div>
            </label>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-6 bg-gray-50/50 dark:bg-[#151718]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-5 py-3 text-sm shadow-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-tr-sm'
                      : 'bg-white dark:bg-card-dark text-gray-800 dark:text-gray-200 rounded-tl-sm border border-gray-100 dark:border-gray-700'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                  <div className="bg-white dark:bg-card-dark rounded-2xl rounded-tl-sm px-5 py-4 border border-gray-100 dark:border-gray-700 shadow-sm">
                     <div className="flex gap-1.5">
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
                        <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                     </div>
                  </div>
               </div>
            )}
          </div>

          {/* Input */}
          <div className="p-5 bg-white dark:bg-card-dark border-t border-border-light dark:border-border-dark">
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-background-dark rounded-2xl px-4 py-2 border border-transparent focus-within:border-blue-500/50 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
              <input
                className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-text-light dark:text-text-dark placeholder:text-gray-400 h-10"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 p-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <span className="material-symbols-outlined !text-xl">send</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};