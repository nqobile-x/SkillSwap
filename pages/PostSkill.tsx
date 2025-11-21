import React, { useState } from 'react';
import { generateSkillDescription } from '../services/gemini';

export const PostSkill: React.FC = () => {
  const [postType, setPostType] = useState('Offering');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateDescription = async () => {
    if (!title.trim()) return;
    setIsGenerating(true);
    const generated = await generateSkillDescription(title);
    setDescription(generated);
    setIsGenerating(false);
  };

  return (
    <div className="flex flex-1 justify-center py-10 px-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col w-full max-w-2xl bg-white dark:bg-card-dark rounded-3xl shadow-xl border border-border-light dark:border-border-dark overflow-hidden">
        
        <div className="p-8 md:p-10 border-b border-border-light dark:border-border-dark bg-gradient-to-r from-teal-50/50 to-transparent dark:from-teal-900/10">
           <h1 className="text-3xl font-black text-text-light dark:text-text-dark tracking-tight mb-2">Post a New Exchange</h1>
           <p className="text-gray-500 dark:text-gray-400">Share your expertise or find the help you need within our community.</p>
        </div>

        <div className="p-8 md:p-10 flex flex-col gap-8">
            {/* Toggle */}
            <div className="flex justify-center">
                <div className="flex p-1.5 bg-gray-100 dark:bg-background-dark rounded-full border border-gray-200 dark:border-gray-700 shadow-inner">
                    {['Offering', 'Seeking'].map(type => (
                        <button
                            key={type}
                            onClick={() => setPostType(type)}
                            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${postType === type ? 'bg-white dark:bg-card-dark text-teal-600 shadow-md transform scale-105' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
                        >
                            I'm {type}
                        </button>
                    ))}
                </div>
            </div>

           <div className="space-y-6">
               <div className="space-y-2">
                  <label className="text-sm font-bold text-text-light dark:text-text-dark uppercase tracking-wide">Skill Title</label>
                  <input 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark h-14 px-4 focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-text-light dark:text-text-dark placeholder:text-gray-400 text-lg font-medium"
                    placeholder="e.g., Learn Guitar Basics"
                  />
               </div>

               <div className="space-y-2">
                  <div className="flex justify-between items-center">
                      <label className="text-sm font-bold text-text-light dark:text-text-dark uppercase tracking-wide">Description</label>
                      <button 
                        type="button"
                        onClick={handleGenerateDescription}
                        disabled={isGenerating || !title}
                        className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs font-bold hover:bg-teal-100 dark:hover:bg-teal-900/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className={`material-symbols-outlined !text-sm ${isGenerating ? 'animate-spin' : ''}`}>auto_awesome</span>
                        {isGenerating ? 'Magic in progress...' : 'Generate with AI'}
                      </button>
                  </div>
                  <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark min-h-40 p-4 focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-text-light dark:text-text-dark placeholder:text-gray-400 resize-y"
                    placeholder="Describe what you can teach in detail..."
                  />
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-bold text-text-light dark:text-text-dark uppercase tracking-wide">Category</label>
                  <div className="relative">
                      <select className="w-full appearance-none rounded-xl border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark h-14 px-4 focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all text-text-light dark:text-text-dark cursor-pointer">
                         <option>Select a category...</option>
                         <option>Creative</option>
                         <option>Technical</option>
                         <option>Wellness</option>
                         <option>Home & Garden</option>
                         <option>Languages</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                        <span className="material-symbols-outlined">expand_more</span>
                      </div>
                  </div>
               </div>
           </div>

           <div className="flex flex-col-reverse sm:flex-row justify-end gap-4 pt-8 border-t border-border-light dark:border-border-dark mt-4">
              <button className="px-8 h-12 rounded-xl font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Cancel</button>
              <button className="px-8 h-12 rounded-xl font-bold bg-teal-600 text-white hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-500/30 transition-all transform hover:-translate-y-0.5">Post My Offer</button>
           </div>
        </div>
      </div>
    </div>
  );
};