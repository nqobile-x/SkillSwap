import React from 'react';
import { MOCK_USERS } from '../constants';

export const Profile: React.FC = () => {
  const user = MOCK_USERS[1]; // Eleanor for demo

  return (
    <div className="grid grid-cols-12 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Left Column: Profile Card */}
        <aside className="col-span-12 lg:col-span-4 flex flex-col gap-8">
            {/* Main Profile Card */}
            <div className="bg-white dark:bg-card-dark rounded-3xl p-8 flex flex-col items-center text-center shadow-xl border border-border-light dark:border-border-dark relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-900/20 dark:to-purple-900/20"></div>
                <div className="size-36 rounded-full p-1 bg-white dark:bg-card-dark shadow-xl relative z-10 mb-4 ring-1 ring-gray-100 dark:ring-gray-800">
                    <div className="w-full h-full rounded-full bg-cover bg-center" style={{backgroundImage: `url('${user.avatar}')`}}></div>
                </div>
                <div className="relative z-10">
                    <h1 className="text-3xl font-black text-text-light dark:text-text-dark tracking-tight mb-1">{user.name}</h1>
                    <p className="text-primary font-bold text-sm mb-1">{user.handle}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center justify-center gap-1">
                        <span className="material-symbols-outlined !text-base">location_on</span>
                        {user.location}
                    </p>
                </div>
                <button className="mt-8 w-full bg-primary text-white h-12 rounded-xl font-bold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-0.5 z-10">
                    Request a Swap
                </button>
            </div>

            {/* About Me */}
            <div className="bg-white dark:bg-card-dark rounded-3xl p-8 shadow-sm border border-border-light dark:border-border-dark">
                <h2 className="text-lg font-bold mb-4 text-text-light dark:text-text-dark flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">person</span>
                    About Me
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{user.bio} I'm excited to share my skills in UI/UX design and hopefully pick up some new hobbies like pottery or conversational Italian. Let's connect and swap skills!</p>
            </div>

            {/* Reputation */}
            <div className="bg-white dark:bg-card-dark rounded-3xl p-8 shadow-sm border border-border-light dark:border-border-dark">
                <h2 className="text-lg font-bold mb-6 text-text-light dark:text-text-dark flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary">star</span>
                    Reputation
                </h2>
                <div className="flex flex-col gap-2 items-center p-6 bg-gray-50 dark:bg-background-dark rounded-2xl mb-6">
                    <p className="text-6xl font-black text-text-light dark:text-text-dark tracking-tight">{user.rating}</p>
                    <div className="flex text-secondary mb-1 gap-1">
                        {[1,2,3,4].map(i => <span key={i} className="material-symbols-outlined !text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>star</span>)}
                         <span className="material-symbols-outlined !text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>star_half</span>
                    </div>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wide">Based on {user.reviewCount} reviews</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                    {['Punctual', 'Great Teacher', 'Friendly'].map(tag => (
                        <span key={tag} className="bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 text-xs font-bold px-4 py-2 rounded-full shadow-sm">{tag}</span>
                    ))}
                </div>
            </div>
        </aside>

        {/* Right Column: Content */}
        <div className="col-span-12 lg:col-span-8">
            <div className="bg-white dark:bg-card-dark rounded-3xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden min-h-[600px]">
                <nav className="flex border-b border-border-light dark:border-border-dark px-6 bg-gray-50/50 dark:bg-background-dark/30">
                    <button className="px-6 py-5 text-sm font-bold border-b-2 border-primary text-primary">Skills I Offer</button>
                    <button className="px-6 py-5 text-sm font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700">Skills I Need</button>
                    <button className="px-6 py-5 text-sm font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700">History & Reviews</button>
                </nav>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Skill Card 1 */}
                    <div className="group flex flex-col gap-4 rounded-2xl border border-border-light dark:border-border-dark p-6 bg-background-light dark:bg-background-dark hover:bg-white dark:hover:bg-card-dark hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-bold text-text-light dark:text-text-dark group-hover:text-primary transition-colors">UI/UX Design Mentorship</h3>
                                <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full mt-2">Design</span>
                            </div>
                            <button className="size-12 rounded-full bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 text-gray-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shadow-sm">
                                <span className="material-symbols-outlined">swap_horiz</span>
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Guidance on portfolio reviews, career advice, and live feedback sessions for aspiring designers.</p>
                    </div>
                    
                    {/* Skill Card 2 */}
                    <div className="group flex flex-col gap-4 rounded-2xl border border-border-light dark:border-border-dark p-6 bg-background-light dark:bg-background-dark hover:bg-white dark:hover:bg-card-dark hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-bold text-text-light dark:text-text-dark group-hover:text-primary transition-colors">Figma Prototyping</h3>
                                <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full mt-2">Design</span>
                            </div>
                             <button className="size-12 rounded-full bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 text-gray-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shadow-sm">
                                <span className="material-symbols-outlined">swap_horiz</span>
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Learn to create interactive and high-fidelity prototypes for web and mobile applications.</p>
                    </div>

                    {/* Skill Card 3 */}
                    <div className="group flex flex-col gap-4 rounded-2xl border border-border-light dark:border-border-dark p-6 bg-background-light dark:bg-background-dark hover:bg-white dark:hover:bg-card-dark hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-bold text-text-light dark:text-text-dark group-hover:text-primary transition-colors">Sourdough Bread Baking</h3>
                                <span className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 text-xs font-bold px-3 py-1 rounded-full mt-2">Cooking</span>
                            </div>
                             <button className="size-12 rounded-full bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 text-gray-400 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all shadow-sm">
                                <span className="material-symbols-outlined">swap_horiz</span>
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">I can teach you the basics of maintaining a starter and baking your first delicious loaf.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};