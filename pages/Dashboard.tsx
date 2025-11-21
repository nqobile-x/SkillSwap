import React from 'react';
import { Link } from 'react-router-dom';
import { CURRENT_USER } from '../constants';

export const Dashboard: React.FC = () => {
  return (
    <div className="layout-content-container flex flex-col flex-1 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-wrap justify-between gap-4 p-4 items-center">
        <h1 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-black leading-tight tracking-tight min-w-72">
          Welcome back, {CURRENT_USER.name.split(' ')[0]}!
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        {/* Main Content (Skills) */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Skills Offered */}
            <div className="bg-white dark:bg-card-dark rounded-3xl p-6 shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Skills You Offer</h2>
                <Link to="/post" className="flex items-center gap-2 cursor-pointer justify-center rounded-full h-9 bg-primary text-white text-xs font-bold px-4 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all">
                  <span className="material-symbols-outlined !text-lg">add</span>
                  <span>Add Skill</span>
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                 {[
                    { icon: 'design_services', name: 'Graphic Design', status: 'Active', color: 'green' },
                    { icon: 'translate', name: 'Spanish Tutoring', status: 'Active', color: 'green' },
                    { icon: 'potted_plant', name: 'Gardening Basics', status: 'Pending Swap', color: 'yellow' }
                 ].map((skill, i) => (
                    <div key={i} className={`flex items-center gap-4 px-3 py-4 justify-between rounded-xl hover:bg-background-light dark:hover:bg-background-dark transition-colors cursor-default ${i !== 2 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
                        <div className="flex items-center gap-4 overflow-hidden">
                            <div className="text-primary dark:text-primary-light flex items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 shrink-0 size-12">
                                <span className="material-symbols-outlined">{skill.icon}</span>
                            </div>
                            <p className="text-text-light dark:text-text-dark text-base font-semibold truncate">{skill.name}</p>
                        </div>
                        <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${skill.color === 'green' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400' : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'}`}>
                            <div className={`size-2 rounded-full ${skill.color === 'green' ? 'bg-emerald-500' : 'bg-amber-500'}`}></div>
                            <span className="text-xs font-bold whitespace-nowrap">{skill.status}</span>
                        </div>
                    </div>
                 ))}
              </div>
            </div>

            {/* Skills Needed */}
            <div className="bg-white dark:bg-card-dark rounded-3xl p-6 shadow-sm border border-border-light dark:border-border-dark hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Skills You're Looking For</h2>
                <Link to="/post" className="flex items-center gap-2 cursor-pointer justify-center rounded-full h-9 bg-primary/10 text-primary text-xs font-bold px-4 hover:bg-primary/20 transition-all">
                  <span className="material-symbols-outlined !text-lg">add</span>
                  <span>Request</span>
                </Link>
              </div>
               <div className="flex flex-col gap-1">
                 {[
                    { icon: 'music_note', name: 'Learn to Play Guitar', matches: 5 },
                    { icon: 'photo_camera', name: 'Photography Basics', matches: 12 }
                 ].map((skill, i) => (
                    <div key={i} className={`flex items-center gap-4 px-3 py-4 justify-between rounded-xl hover:bg-background-light dark:hover:bg-background-dark transition-colors cursor-default ${i !== 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
                        <div className="flex items-center gap-4 overflow-hidden">
                            <div className="text-purple-600 dark:text-purple-400 flex items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-900/20 shrink-0 size-12">
                                <span className="material-symbols-outlined">{skill.icon}</span>
                            </div>
                            <p className="text-text-light dark:text-text-dark text-base font-semibold truncate">{skill.name}</p>
                        </div>
                        <span className="text-xs font-bold text-primary bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full whitespace-nowrap">{skill.matches} Matches</span>
                    </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Potential Swaps */}
          <div className="bg-white dark:bg-card-dark rounded-3xl p-6 shadow-sm border border-border-light dark:border-border-dark">
            <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight mb-6">Potential Swaps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { name: 'Jane D.', skill: 'Teaches Guitar', need: 'Web Design', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz79mmT19OC_lg8UpQxFep__lO2XKz2eQ66EywNPd-Z7umkiQkezaNKwzplGJQvClt7cJkGYH8q3_Ps8So9j0klNfK45Z4sBOLswKaCnu1wp_kO6pGTpxFZn3wYHtxq9x55UJPlKydu89bNcATJG2VBzFllF8P1Xcl463hyBnSVkT2vGlOyDEeEtunA_ZNOC25n6t3vOB2bAgHMWGyp18NPeANGlaNhsnJ_cesMGiRrfYYN5E1F1SwpxAAT4zEicjh9JQHdyeYEMI' },
                    { name: 'Mike T.', skill: 'Teaches Photography', need: 'Gardening Basics', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkOjM1dpJwzuIX3szvRgKsmV65AyfuNGNoyUMkEH0yQUL5D2uoQYp-M6pjCS7wRKv5v-ZbXhlXnmrJcM-buk3dO_tifqze8ctCtlsIzTdUUsq8_wy9lXwoHf5JymP70NuCFDJeYKEYn0ha7G--IIw_bRUSEjaMNgv0wD_pD-DUl_Qk2xXnKHwjbz-fLVm5NOPjvJIcjJTr44WmoDFFsdo9GoXeHdmvUiVYPjOJKtFE8QUnWnBj0Q03bcCuehl56WBn6P3-2lO8uws' }
                ].map((card, i) => (
                    <div key={i} className="relative group rounded-2xl border border-border-light dark:border-border-dark p-6 flex flex-col gap-6 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 bg-white dark:bg-card-dark overflow-hidden">
                         {/* Gradient decoration */}
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        
                        <div className="flex items-center gap-4">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-14 ring-2 ring-white dark:ring-card-dark shadow-md" style={{backgroundImage: `url('${card.img}')`}}></div>
                            <div>
                                <p className="font-bold text-text-light dark:text-text-dark text-lg">{card.name}</p>
                                <p className="text-sm text-gray-500 font-medium">{card.skill}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-background-light dark:bg-background-dark p-4 rounded-xl">
                            <span className="text-sm text-gray-500">Needs help with</span>
                            <span className="font-bold text-primary text-base">{card.need}</span>
                        </div>
                        <button className="w-full flex items-center gap-2 cursor-pointer justify-center rounded-xl h-12 bg-primary text-white text-sm font-bold px-4 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all">
                            {i === 0 ? 'Propose Swap' : 'View Profile'}
                        </button>
                    </div>
                ))}
            </div>
          </div>
        </div>

        {/* Sidebar: Active Swaps */}
        <div className="lg:col-span-1">
            <div className="bg-white dark:bg-card-dark rounded-3xl p-6 shadow-sm sticky top-24 border border-border-light dark:border-border-dark">
                <div className="flex items-center gap-2 mb-6">
                    <span className="material-symbols-outlined text-primary">pending_actions</span>
                    <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight">Your Active Swaps</h2>
                </div>
                <div className="flex flex-col gap-4">
                     <div className="flex items-start gap-4 p-4 rounded-2xl bg-background-light dark:bg-background-dark hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all cursor-pointer group">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 mt-1 ring-2 ring-white dark:ring-card-dark" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEJu_o2lMxL-zIgtrUONuFyGMRObCNSzEW2unn8seB779luuVR3JkFlKuqO5YvaytOvqoJ3nHTMychRy4LlJz2ofpYiVr0UYD8ZDvMcaZQYUMxjwQJyFWe-7_clUATtWEPZ5qIwbG_pGlm_Hl3gq84ELCVDSOgYQ093vTfmUyxn1K_6GXtxsE8q7pvSsJoFb0OwkEiql82-7nembeneTQBmoAN2vVDhZbxU2SU3EpvRjPpo12NYvSIq1pnUb8e2UM_GASahPkt3Oc")'}}></div>
                        <div>
                            <p className="text-base font-bold leading-tight text-text-light dark:text-text-dark group-hover:text-primary transition-colors">Teaching Spanish to John S.</p>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="material-symbols-outlined !text-lg text-secondary">hourglass_top</span>
                                <p className="text-xs text-secondary font-bold uppercase tracking-wider">In Progress</p>
                            </div>
                        </div>
                    </div>
                     <div className="flex items-start gap-4 p-4 rounded-2xl bg-background-light dark:bg-background-dark hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all cursor-pointer group">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 mt-1 ring-2 ring-white dark:ring-card-dark" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC70mlvk0-21AsoiyPC_zVArz5_UbsNVLPamVlZxZwh5Aw33PcO7bsF6D4V48yUEMe4cXlZgTCu8UlH6EH_vBJ1PV9IMdzt8UymtgWqNj_qCDi-hE7jbuAXxnp3kWOnLifixiRqRMZZ3h2juoi_BmTRC7-8pjsXFZC_2260u-Vu_vWeVnicqXQXhMDrUBpsFImmkdAUijXkFXjiW9q-KVWUZ1ItT9vJ7DNMIblLiqeGlgr5OkFzUc047hhkVFkX35m9puhW4_3YZNI")'}}></div>
                        <div>
                            <p className="text-base font-bold leading-tight text-text-light dark:text-text-dark group-hover:text-primary transition-colors">Learning UX Design from Emily R.</p>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="material-symbols-outlined !text-lg text-gray-400">rate_review</span>
                                <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">Awaiting Review</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center py-10 px-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl mt-4 flex flex-col items-center justify-center gap-2 text-gray-400 dark:text-gray-500">
                        <span className="material-symbols-outlined text-4xl">sentiment_satisfied</span>
                        <p className="font-medium">No more active swaps!</p>
                        <button className="text-sm text-primary font-bold hover:underline">Find a new match</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};