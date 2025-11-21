import React, { useState } from 'react';
import { MOCK_SKILLS } from '../constants';
import { searchSkillTrends } from '../services/gemini';

export const BrowseSkills: React.FC = () => {
  const [showTrendSearch, setShowTrendSearch] = useState(false);
  const [trendQuery, setTrendQuery] = useState('');
  const [trendResult, setTrendResult] = useState<{ text: string, chunks: any[] } | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleTrendSearch = async () => {
    if (!trendQuery.trim()) return;
    setIsSearching(true);
    const result = await searchSkillTrends(`What are the popular or trending skills related to: ${trendQuery} in 2024?`);
    setTrendResult(result);
    setIsSearching(false);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Filters Sidebar */}
      <aside className="w-full lg:w-1/4 xl:w-1/5">
        <div className="sticky top-28 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <label className="flex flex-col min-w-40 h-12 w-full group">
              <div className="flex w-full flex-1 items-stretch rounded-2xl h-full shadow-sm transition-all focus-within:ring-2 focus-within:ring-primary-green/50 ring-offset-2 dark:ring-offset-background-dark">
                <div className="text-gray-400 flex bg-white dark:bg-card-dark items-center justify-center pl-4 rounded-l-2xl border border-r-0 border-gray-200 dark:border-gray-700 group-focus-within:border-primary-green group-focus-within:text-primary-green transition-colors">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-2xl text-text-light dark:text-text-dark focus:outline-none border-gray-200 dark:border-gray-700 bg-white dark:bg-card-dark h-full placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-base group-focus-within:border-primary-green transition-colors" placeholder="Search skills..." />
              </div>
            </label>
          </div>
          
          {/* Trend Search Toggle */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-5 rounded-2xl border border-emerald-100 dark:border-emerald-800 shadow-sm">
             <div className="flex items-center gap-2 mb-2 text-primary-green">
                <span className="material-symbols-outlined fill-current">shutter_speed</span>
                <h3 className="font-bold text-sm uppercase tracking-wider">Trend Scout (AI)</h3>
             </div>
             <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 leading-relaxed font-medium">Unsure what to learn? Discover trending skills.</p>
             <button 
                onClick={() => setShowTrendSearch(!showTrendSearch)}
                className="w-full bg-white dark:bg-emerald-900/50 text-primary-green text-sm font-bold py-2.5 rounded-xl hover:bg-primary-green hover:text-white transition-all shadow-sm border border-primary-green/20"
             >
                {showTrendSearch ? 'Close Scout' : 'Open Trend Scout'}
             </button>
          </div>

          {/* Static Filters */}
          <div className="bg-white dark:bg-card-dark p-6 rounded-3xl border border-border-light dark:border-border-dark shadow-sm">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Filters</h3>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Reset</span>
             </div>
             
             <div className="mb-6">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Category</h4>
                <div className="space-y-2">
                    {['Creative', 'Technical', 'Home & Garden', 'Wellness', 'Languages'].map(cat => (
                        <label key={cat} className="flex gap-x-3 py-1 items-center cursor-pointer group">
                            <div className="relative flex items-center">
                                <input type="checkbox" className="peer h-5 w-5 rounded-md border-2 border-gray-300 dark:border-gray-600 text-primary-green focus:ring-primary-green/50 transition-all checked:border-primary-green" />
                            </div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-primary-green transition-colors">{cat}</p>
                        </label>
                    ))}
                </div>
             </div>
             
             <hr className="my-6 border-gray-100 dark:border-gray-800"/>
             
             <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Availability</h4>
                <div className="space-y-2">
                    {['Weekdays', 'Weekends', 'Evenings'].map(av => (
                        <label key={av} className="flex gap-x-3 py-1 items-center cursor-pointer group">
                            <div className="relative flex items-center">
                                <input type="checkbox" className="peer h-5 w-5 rounded-md border-2 border-gray-300 dark:border-gray-600 text-primary-green focus:ring-primary-green/50 transition-all checked:border-primary-green" />
                            </div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-primary-green transition-colors">{av}</p>
                        </label>
                    ))}
                </div>
             </div>

             <div className="mt-8 flex flex-col gap-3">
                <button className="w-full bg-primary-green text-white h-12 rounded-xl font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">Apply Filters</button>
             </div>
          </div>
        </div>
      </aside>

      {/* Main Grid */}
      <div className="w-full lg:w-3/4 xl:w-4/5">
        
        {/* Trend Search Result Area */}
        {showTrendSearch && (
            <div className="mb-8 bg-white dark:bg-card-dark p-6 rounded-3xl border border-green-200 dark:border-green-800 shadow-xl animate-in fade-in slide-in-from-top-5 ring-4 ring-green-50 dark:ring-green-900/20">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-text-light dark:text-text-dark">
                    <span className="material-symbols-outlined text-primary-green">search_check</span>
                    Ask about popular skills
                </h3>
                <div className="flex gap-2 mb-4">
                    <input 
                        value={trendQuery}
                        onChange={(e) => setTrendQuery(e.target.value)}
                        placeholder="e.g. remote work, pottery, coding 2024"
                        className="flex-1 rounded-xl border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-primary-green focus:border-primary-green text-text-light dark:text-text-dark"
                    />
                    <button 
                        onClick={handleTrendSearch}
                        disabled={isSearching}
                        className="bg-primary-green text-white px-6 rounded-xl font-bold disabled:opacity-50 hover:bg-emerald-600 transition-colors shadow-md"
                    >
                        {isSearching ? 'Searching...' : 'Search'}
                    </button>
                </div>
                
                {trendResult && (
                    <div className="prose dark:prose-invert max-w-none text-sm bg-gray-50 dark:bg-gray-900/50 p-5 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <p className="whitespace-pre-wrap leading-relaxed text-gray-700 dark:text-gray-300">{trendResult.text}</p>
                        {trendResult.chunks.length > 0 && (
                            <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1">Sources:</span>
                                {trendResult.chunks.map((chunk, idx) => (
                                    <a 
                                        key={idx}
                                        href={chunk.web?.uri || '#'} 
                                        target="_blank" 
                                        rel="noreferrer"
                                        className="flex items-center gap-1 text-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 transition-colors"
                                    >
                                        <span className="material-symbols-outlined !text-xs">link</span>
                                        <span className="truncate max-w-[150px]">{chunk.web?.title || 'Source'}</span>
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        )}

        {/* Skills Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">Showing {MOCK_SKILLS.length} results</p>
          <div className="relative">
            <select className="appearance-none bg-white dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl py-2.5 pl-4 pr-10 text-sm font-medium focus:ring-2 focus:ring-primary-green/50 cursor-pointer text-text-light dark:text-text-dark shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <option>Sort by: Newest</option>
                <option>Sort by: Most Popular</option>
                <option>Sort by: Closest to me</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
                <span className="material-symbols-outlined !text-xl">expand_more</span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {MOCK_SKILLS.map(skill => (
            <div key={skill.id} className="group flex flex-col bg-white dark:bg-card-dark rounded-3xl border border-border-light dark:border-border-dark overflow-hidden hover:shadow-xl hover:border-primary-green/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url('${skill.image}')` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md text-primary-green shadow-sm">{skill.category}</span>
                  </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark group-hover:text-primary-green transition-colors line-clamp-1">{skill.title}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-grow line-clamp-2 leading-relaxed">{skill.description}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800 mt-auto">
                    <div className="size-9 rounded-full bg-cover bg-center ring-2 ring-gray-100 dark:ring-gray-700" style={{backgroundImage: `url('${skill.user?.avatar}')`}}></div>
                    <div className="flex flex-col">
                        <span className="text-sm font-bold text-text-light dark:text-text-dark">{skill.user?.name}</span>
                        <span className="text-xs text-gray-400">5.0 ★ (12)</span>
                    </div>
                    <button className="ml-auto text-gray-400 hover:text-primary-green transition-colors">
                        <span className="material-symbols-outlined">favorite</span>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center items-center mt-12">
            <nav className="flex items-center gap-2 bg-white dark:bg-card-dark p-2 rounded-2xl shadow-sm border border-border-light dark:border-border-dark">
                <button className="flex items-center justify-center size-10 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="flex items-center justify-center size-10 rounded-xl text-sm font-bold bg-primary-green text-white shadow-md">1</button>
                <button className="flex items-center justify-center size-10 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">2</button>
                <button className="flex items-center justify-center size-10 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">3</button>
                <span className="text-gray-400 px-2">...</span>
                <button className="flex items-center justify-center size-10 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">8</button>
                <button className="flex items-center justify-center size-10 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </nav>
        </div>
      </div>
    </div>
  );
};