import React, { useState } from 'react';
import { MOCK_CONVERSATIONS, CURRENT_USER } from '../constants';
import { generateSpeech } from '../services/gemini';

export const Messages: React.FC = () => {
  const [activeConvId, setActiveConvId] = useState(MOCK_CONVERSATIONS[0].id);
  const activeConv = MOCK_CONVERSATIONS.find(c => c.id === activeConvId) || MOCK_CONVERSATIONS[0];
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [audioSource, setAudioSource] = useState<AudioBufferSourceNode | null>(null);

  const handlePlayTTS = async (text: string, msgId: string) => {
    if (isPlaying === msgId) {
        if (audioSource) {
            audioSource.stop();
            setAudioSource(null);
        }
        setIsPlaying(null);
        return;
    }

    setIsPlaying(msgId);
    const audioBuffer = await generateSpeech(text);
    
    if (audioBuffer) {
        const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const buffer = await ctx.decodeAudioData(audioBuffer);
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.onended = () => setIsPlaying(null);
        source.start();
        setAudioSource(source);
    } else {
        setIsPlaying(null);
    }
  };

  return (
    <div className="flex h-[calc(100vh-160px)] border border-border-light dark:border-border-dark rounded-3xl bg-surface-light dark:bg-surface-dark shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Sidebar */}
        <div className="w-full md:w-80 lg:w-96 border-r border-border-light dark:border-border-dark bg-white dark:bg-card-dark flex flex-col">
            <div className="p-6 border-b border-border-light dark:border-border-dark">
                <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-4">Messages</h2>
                <div className="relative">
                    <input 
                        className="w-full bg-gray-50 dark:bg-background-dark border-none rounded-2xl py-3 pl-11 pr-4 text-sm focus:ring-2 focus:ring-[#43A095]/50 placeholder:text-gray-400 text-text-light dark:text-text-dark transition-all" 
                        placeholder="Search conversations..." 
                    />
                    <span className="material-symbols-outlined absolute left-4 top-3 text-gray-400 !text-xl">search</span>
                </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {MOCK_CONVERSATIONS.map(conv => (
                    <div 
                        key={conv.id}
                        onClick={() => setActiveConvId(conv.id)}
                        className={`flex gap-4 p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border-l-4 ${activeConvId === conv.id ? 'bg-[#43A095]/5 border-[#43A095]' : 'border-transparent'}`}
                    >
                        <div className="relative">
                            <div className="size-12 rounded-full bg-cover bg-center shrink-0 border border-gray-100 dark:border-gray-700 shadow-sm" style={{backgroundImage: `url('${conv.user.avatar}')`}}></div>
                            {/* Online indicator example */}
                            <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-card-dark rounded-full"></div>
                        </div>
                        <div className="flex-1 min-w-0 py-0.5">
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className={`text-sm font-bold truncate ${activeConvId === conv.id ? 'text-text-light dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>{conv.user.name}</h4>
                                <span className="text-xs text-gray-400 font-medium">{conv.lastMessage.timestamp}</span>
                            </div>
                            <p className="text-xs text-[#43A095] font-bold truncate mb-1 uppercase tracking-wide">{conv.subject.split(':')[0]}</p>
                            <p className={`text-sm truncate ${!conv.lastMessage.isRead ? 'font-bold text-text-light dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>{conv.lastMessage.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Chat Area */}
        <div className="hidden md:flex flex-1 flex-col bg-[#F0F4F8] dark:bg-[#0f1112] relative">
            {/* Chat Header */}
            <header className="flex shrink-0 items-center justify-between border-b border-border-light dark:border-border-dark bg-white/80 dark:bg-card-dark/80 backdrop-blur-md px-8 py-4 z-10">
                <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-cover bg-center shadow-sm ring-2 ring-gray-100 dark:ring-gray-700" style={{backgroundImage: `url('${activeConv.user.avatar}')`}}></div>
                    <div>
                        <h3 className="text-base font-bold text-text-light dark:text-text-dark">{activeConv.user.name}</h3>
                        <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
                             <span className="size-1.5 rounded-full bg-green-500 inline-block"></span>
                             Active now
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                     <div className="px-3 py-1 rounded-full bg-[#43A095]/10 text-[#43A095] text-xs font-bold border border-[#43A095]/20">
                        {activeConv.subject}
                     </div>
                    <button className="p-2 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <span className="material-symbols-outlined">more_vert</span>
                    </button>
                </div>
            </header>
            
            {/* Message List */}
            <div className="flex-1 p-8 overflow-y-auto flex flex-col gap-6 custom-scrollbar">
                {/* System Message */}
                <div className="flex justify-center my-4">
                   <span className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm border border-white dark:border-gray-700">
                        {activeConv.user.name} proposed a swap • Sept 12
                   </span>
                </div>

                {/* Incoming Message */}
                <div className="flex items-end gap-3 group">
                    <div className="size-8 rounded-full bg-cover bg-center shadow-sm mb-1" style={{backgroundImage: `url('${activeConv.user.avatar}')`}}></div>
                    <div className="flex flex-col gap-1 max-w-[70%]">
                        <div className="bg-white dark:bg-card-dark p-4 rounded-2xl rounded-bl-none shadow-sm text-text-light dark:text-text-dark relative border border-border-light dark:border-border-dark">
                            <p className="leading-relaxed text-sm">Hi Alex! I saw your post about learning to bake sourdough bread. I'd love to learn! I've been playing guitar for over 10 years and would be happy to teach you.</p>
                            <button 
                                onClick={() => handlePlayTTS("Hi Alex! I saw your post about learning to bake sourdough bread. I'd love to learn! I've been playing guitar for over 10 years and would be happy to teach you.", 'msg1')}
                                className="absolute -right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#43A095] opacity-0 group-hover:opacity-100 transition-all p-2 rounded-full hover:bg-white dark:hover:bg-gray-800 shadow-sm"
                                title="Read Aloud"
                            >
                                <span className="material-symbols-outlined !text-xl">{isPlaying === 'msg1' ? 'stop_circle' : 'volume_up'}</span>
                            </button>
                        </div>
                        <span className="text-[10px] text-gray-400 ml-1 font-bold">3:40 PM</span>
                    </div>
                </div>

                {/* Outgoing Message */}
                <div className="flex items-end gap-3 justify-end group">
                    <div className="flex flex-col items-end gap-1 max-w-[70%]">
                        <div className="bg-[#43A095] p-4 rounded-2xl rounded-br-none shadow-md text-white relative">
                            <p className="leading-relaxed text-sm">Hey Jane! That's awesome. I've been wanting to learn guitar forever. Your profile looks great. When are you usually free?</p>
                        </div>
                        <span className="text-[10px] text-gray-400 mr-1 font-bold">3:42 PM</span>
                    </div>
                </div>

                {/* Incoming Message */}
                <div className="flex items-end gap-3 group">
                    <div className="size-8 rounded-full bg-cover bg-center shadow-sm mb-1" style={{backgroundImage: `url('${activeConv.user.avatar}')`}}></div>
                     <div className="flex flex-col gap-1 max-w-[70%]">
                        <div className="bg-white dark:bg-card-dark p-4 rounded-2xl rounded-bl-none shadow-sm text-text-light dark:text-text-dark relative border border-border-light dark:border-border-dark">
                            <p className="leading-relaxed text-sm">{activeConv.lastMessage.content}</p>
                             <button 
                                onClick={() => handlePlayTTS(activeConv.lastMessage.content, activeConv.lastMessage.id)}
                                className="absolute -right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#43A095] opacity-0 group-hover:opacity-100 transition-all p-2 rounded-full hover:bg-white dark:hover:bg-gray-800 shadow-sm"
                                title="Read Aloud"
                            >
                                <span className="material-symbols-outlined !text-xl">{isPlaying === activeConv.lastMessage.id ? 'stop_circle' : 'volume_up'}</span>
                            </button>
                        </div>
                        <span className="text-[10px] text-gray-400 ml-1 font-bold">{activeConv.lastMessage.timestamp}</span>
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <footer className="p-6 bg-white dark:bg-card-dark border-t border-border-light dark:border-border-dark">
                <div className="flex items-center gap-4">
                     <button className="p-2 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                        <span className="material-symbols-outlined">add_circle</span>
                     </button>
                    <div className="relative flex-1">
                        <input 
                            className="w-full bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-gray-700 rounded-2xl py-3.5 pl-5 pr-12 text-sm focus:ring-2 focus:ring-[#43A095]/50 focus:border-[#43A095] placeholder:text-gray-400 text-text-light dark:text-text-dark transition-all" 
                            placeholder="Type a message..." 
                        />
                        <button className="absolute right-2 top-2 bottom-2 bg-[#43A095] text-white rounded-xl px-3 hover:opacity-90 transition-opacity shadow-sm flex items-center justify-center">
                            <span className="material-symbols-outlined !text-lg">send</span>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    </div>
  );
};