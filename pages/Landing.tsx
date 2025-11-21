import React from 'react';
import { Link } from 'react-router-dom';

export const Landing: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-background-light dark:bg-background-dark">
         {/* Background Decoration */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-teal-500/20 blur-[120px] rounded-full pointer-events-none opacity-50 dark:opacity-20"></div>
         
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className="relative flex min-h-[560px] flex-col gap-8 rounded-3xl bg-cover bg-center bg-no-repeat items-center justify-center p-8 text-center shadow-2xl overflow-hidden group"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoe-Zx3-TSwajxYTJWhGRHanVhr1eGFZACuUkAUHNxTWCK5xhbKI1iFnRpq86geaWY1SiRpUQtfI5etnYF91g3mqLwiLRllj1me54MAW3X1UGeTFxd3YOTdj-TEanDN_B9QCfr9q4n1_nV54KHLi9BrDeKG9Yh65M9cqzJ0el1l3nCphIjdnnciDjHdEz2n04wRiO446CrSmkLZJWr7FOu0jXDlVkKNgv_QgFaKMke_OFYt4SSVgyUTaXGHNRDpyUsyiTG6h8O-aQ")',
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 group-hover:scale-105 transition-transform duration-1000"></div>

            <div className="relative z-10 flex flex-col gap-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-bold uppercase tracking-wider self-center">
                Community Driven Learning
              </span>
              <h1 className="text-white text-5xl font-black leading-tight tracking-tighter md:text-7xl drop-shadow-sm">
                Unlock Your Potential.<br />
                <span className="text-teal-300">Share Your Skills.</span>
              </h1>
              <h2 className="text-slate-100 text-lg font-medium leading-relaxed md:text-2xl max-w-2xl mx-auto drop-shadow-md">
                Join a community where talents are the currency. Learn new skills and help others grow—all without spending a dime.
              </h2>
            </div>

            <div className="relative z-10 flex flex-wrap gap-4 justify-center mt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <Link to="/post" className="flex items-center justify-center rounded-full h-14 px-8 bg-primary-teal text-white text-lg font-bold tracking-wide hover:bg-teal-400 hover:scale-105 transition-all shadow-lg shadow-teal-500/30">
                Offer a Skill
              </Link>
              <Link to="/browse" className="flex items-center justify-center rounded-full h-14 px-8 bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg font-bold tracking-wide hover:bg-white/20 hover:scale-105 transition-all shadow-lg">
                Find a Skill
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 bg-white dark:bg-card-dark border-y border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-text-light dark:text-text-dark">
                How It Works
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl">
                Getting started is simple. Follow these steps to join our vibrant community.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'add_circle', title: 'Offer Your Skill', desc: "Create a profile and list the skills you're willing to share." },
                { icon: 'search', title: 'Find a Skill You Need', desc: 'Browse our diverse catalog of skills offered by talented members.' },
                { icon: 'connect_without_contact', title: 'Connect & Swap', desc: 'Message members, arrange a time, and start swapping.' },
              ].map((item, i) => (
                <div key={i} className="group relative flex flex-col gap-6 p-8 rounded-3xl bg-background-light dark:bg-background-dark border border-transparent hover:border-teal-100 dark:hover:border-teal-900/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-bl-[100px] rounded-tr-3xl transition-all group-hover:bg-teal-500/10"></div>
                  <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-white dark:bg-card-dark shadow-md text-primary-teal group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined !text-3xl">{item.icon}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-text-light dark:text-text-dark">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-28 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-4 text-center items-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-light dark:text-text-dark">Why You'll Love Swapping Skills</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl">Discover a new way to learn, grow, and connect with people who share your passions.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Learn for Free', desc: 'Access a world of knowledge and skills without any cost. Your talent is your currency.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEh-XAJOV-aYbYDmOZU7rduoko4lM55WycqOY2ehVOUvhyU41Gxl9klvvBpoh8HDRcNrG081Vvbk25-K2rEfFfgSj5FOahOpQZjEE0TAgY-vEE6nRFmxqD7h4JowEX3hWaSrSXYXqcCD_pr9IWDtHb4BW3QvHfJeJS60XmjlejoS1KCbfyfIK2CjsAaR_LDWZfoXQXvY_Xyl5u2pb57SYD6qc-jYgFzlHGbc_9Wlwv8_j-ss0ED0yVUUUsw20T-aFqSVs65FNIn0w' },
                        { title: 'Build Community', desc: 'Connect with local experts and enthusiasts, building meaningful relationships.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEoEqm5C7Fj5RHyW7l8jmcp9gmG0je4kBGoBa9eCbqSZ8YXr1gury0z_iHRq76w8DPn6B4m3siPQRSm9bnq9gxXDgx_kufx6q67FjTqT6K03r3TKEjK20M84cnCVpu_0gS9ifUy7KcHyWDfZX7ThCv6aCaYGyohV7u5q_dZhJ6TuwaMbuCcHkXDLIDcWzHPAKodi8pOr7U5as_4FEV45jJHwZ5cZ5YHbmVMvTqcO6F3GBYGN7QuDFPZ9WRG9HnyNJ2M23zCMzXDqY' },
                        { title: 'Share Your Passion', desc: 'Teach what you love and empower others with your unique abilities and expertise.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1_fDkxXutToG2q1RWN1Szoi5BbIf53t-jcQKsW1l-ePvlsBReJbuXM73ybmuG9mL8lJaUoiLiKk559kI7NT3emWK_qn10qXaMEQn2r-Zb15xqDE_fDQCM7utUmYyO4JYjFI-L_kObiiaBTzyhNEvhj6NIxtxQYS-4XahOK-DU8Shq12loJ0xuSo9FRv2l95fdY5YuoTYqOSw1vLQNgXtYmf7hyZCp0IW5Mmma28aSPDOuISH0EgxAPCUBC53dlkrmCSSsbCgSuw8' }
                    ].map((item, i) => (
                        <div key={i} className="group flex flex-col gap-4 cursor-default">
                             <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{backgroundImage: `url("${item.img}")`}}></div>
                            </div>
                            <div className="p-2">
                                <h3 className="text-xl font-bold mb-2 text-text-light dark:text-text-dark">{item.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-white dark:bg-card-dark border-y border-border-light dark:border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-4 text-center items-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-text-light dark:text-text-dark">Hear From Our Members</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl">See how swapping skills has enriched the lives of people in our community.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { 
                            text: '"I learned how to bake sourdough bread from a retired baker in my neighborhood! It was a wonderful experience."', 
                            name: 'Sarah L.', 
                            role: 'Sourdough Enthusiast', 
                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_xEZvIg0-eEpfAeVPcT6Q27izNx1jPnE3iZ4Bx67rujKOYRkLR_nEZ4i4RbrbdywPfbI8rqqCGOyPhNYbJ9M35slb67WKuk2XZR7t7k5jcBahaNLRxzaatd0MNPpX1GRkKogeVEEZQYPsiYWOu7e444b9DY6zT8wairlwpRswiu9CRQjDN0ahxQczB8BJILe_IiTaQIaHikfaXOiRgrw7rOoN_6XtRoj89EyaJ8jpIP3ahrr_NrMkIFTYYs3Gp0pmN-fre0y9oTc' 
                        },
                        { 
                            text: '"As a graphic designer, I offered logo design services and got my motorcycle tuned up. SkillSwap saved me money."', 
                            name: 'Mike R.', 
                            role: 'Freelance Designer', 
                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAMAe3TkIESvoa7YY4dSyzFNEZ3ti3ZWjugmcbbyQWgKVSsi8mb_fXt0Se2fZbTT4EiBDSFks0mGtn6t1b8tV69Ddwhl1rX6AOuFQPCLdNNSrVtbrcCWEAb8i4woR9MiGBAgr9n384uhMJ2s-g7esq-QlOxGLJdliMTqxqU_6WzeG7yW9OzAJsXz3KJwx1Ubty9eoDXEbtHstBxQM0KdOHE91c59miiO_OKyaDrj7OvT2gNDTb9MHOobDRfYYXY9SV9KWy1Mz8nww' 
                        },
                        { 
                            text: '"Teaching yoga in the park in exchange for weekly Spanish lessons has been incredible. This is community."', 
                            name: 'Chloe T.', 
                            role: 'Yoga Instructor', 
                            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCno0a_c2oElevM7Ka4RxygGSVhBdk3RgKwcOGr2YlIA3HvxbXAa_-ctwA0qs2FaRyXpz2RaUqs_8WccHuWubUHPLphuAP7y77yUQKR-WaYxML_LzFuYfJXP16iSDGJHYyN4bUrrAK1cDM_jZbfmo5jazuJ-ion-Noxm0J0ndOJ1rOyNpLKlgKTJmWvSVy25CTMb6EwOm2ThfCbyj7Y5SaE9wb83TJnDNlOwM-PWxX22ATas9Mhd46w81zAXIMqTSAJhpKvJNAef9U' 
                        }
                    ].map((t, i) => (
                        <div key={i} className="flex flex-col gap-6 p-8 rounded-3xl bg-background-light dark:bg-background-dark border border-transparent hover:border-border-light dark:hover:border-border-dark hover:shadow-xl transition-all duration-300">
                            <div className="text-teal-500 dark:text-teal-400">
                                <span className="material-symbols-outlined !text-4xl">format_quote</span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-lg italic leading-relaxed flex-grow">{t.text}</p>
                            <div className="flex items-center gap-4 mt-4">
                                <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-teal-500/20" />
                                <div>
                                    <p className="font-bold text-text-light dark:text-text-dark">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

       {/* Final CTA */}
       <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="relative flex flex-col items-center gap-8 p-16 rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-600 dark:from-teal-900 dark:to-emerald-900"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                
                <h2 className="relative z-10 text-4xl font-bold tracking-tight sm:text-5xl text-white">Ready to Share and Learn?</h2>
                <p className="relative z-10 text-xl text-teal-50 dark:text-teal-200 max-w-2xl leading-relaxed">Join our growing community today and discover a new way to connect. Your next skill is just a swap away.</p>
                <Link to="/dashboard" className="relative z-10 flex w-fit cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-white text-teal-600 text-lg font-bold tracking-wide hover:bg-gray-50 hover:scale-105 transition-all shadow-xl">
                    Join the Community
                </Link>
            </div>
        </div>
       </section>
    </div>
  );
};