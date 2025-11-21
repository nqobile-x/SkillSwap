import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CURRENT_USER } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Theme determination based on route for accent colors
  let themeColor = 'text-primary'; // Default Blue
  let buttonColor = 'bg-primary';
  let hoverBg = 'hover:bg-primary/10';

  if (isLanding) {
    themeColor = 'text-primary-teal';
    buttonColor = 'bg-primary-teal';
    hoverBg = 'hover:bg-teal-50 dark:hover:bg-teal-900/20';
  } else if (location.pathname.includes('browse')) {
    themeColor = 'text-primary-green';
    buttonColor = 'bg-primary-green';
    hoverBg = 'hover:bg-emerald-50 dark:hover:bg-emerald-900/20';
  } else if (location.pathname.includes('messages')) {
    themeColor = 'text-[#43A095]';
    buttonColor = 'bg-[#43A095]';
    hoverBg = 'hover:bg-[#43A095]/10';
  } else if (location.pathname.includes('post')) {
    themeColor = 'text-[#48a299]';
    buttonColor = 'bg-[#48a299]';
    hoverBg = 'hover:bg-[#48a299]/10';
  }

  // Common Header Elements
  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
      title={theme === 'light' ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <span className="material-symbols-outlined fill-current">
        {theme === 'light' ? 'dark_mode' : 'light_mode'}
      </span>
    </button>
  );

  // Landing Page Layout
  if (isLanding) {
    return (
      <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display bg-background-light dark:bg-background-dark transition-colors duration-300">
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center gap-3 text-text-light dark:text-text-dark">
                <div className={`${themeColor}`}>
                  <span className="material-symbols-outlined !text-4xl">swap_horiz</span>
                </div>
                <h2 className="text-xl font-bold tracking-tight">SkillSwap</h2>
              </div>
              
              <div className="hidden md:flex flex-1 justify-center gap-8">
                <div className="flex items-center gap-8">
                  <Link to="/" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary-teal transition-colors">How it Works</Link>
                  <Link to="/" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary-teal transition-colors">About</Link>
                  <Link to="/dashboard" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary-teal transition-colors">Dashboard</Link>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-3">
                <ThemeToggle />
                <Link to="/post" className={`flex items-center justify-center rounded-full h-10 px-6 ${buttonColor} text-white text-sm font-bold shadow-md hover:shadow-lg hover:opacity-90 transition-all`}>
                  Offer a Skill
                </Link>
                <button className="flex items-center justify-center rounded-full h-10 px-6 bg-white dark:bg-card-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  Log In
                </button>
              </div>

              <div className="md:hidden flex items-center gap-2">
                <ThemeToggle />
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <span className="material-symbols-outlined">menu</span>
                </button>
              </div>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-card-dark border-b border-border-light dark:border-border-dark px-4 py-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
              <Link to="/dashboard" className="text-sm font-medium p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">Dashboard</Link>
              <Link to="/browse" className="text-sm font-medium p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">Browse Skills</Link>
              <Link to="/post" className="text-sm font-medium p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">Post Skill</Link>
            </div>
          )}
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="bg-white dark:bg-card-dark border-t border-border-light dark:border-border-dark transition-colors duration-300">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3 text-text-light dark:text-text-dark">
                <div className={`${themeColor}`}>
                  <span className="material-symbols-outlined !text-3xl">swap_horiz</span>
                </div>
                <h2 className="text-lg font-bold tracking-tight">SkillSwap</h2>
              </div>
              <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                <a className="text-sm text-gray-500 hover:text-primary-teal transition-colors" href="#">About</a>
                <a className="text-sm text-gray-500 hover:text-primary-teal transition-colors" href="#">Contact</a>
                <a className="text-sm text-gray-500 hover:text-primary-teal transition-colors" href="#">Terms</a>
                <a className="text-sm text-gray-500 hover:text-primary-teal transition-colors" href="#">Privacy</a>
              </nav>
            </div>
            <div className="mt-8 border-t border-gray-100 dark:border-gray-800 pt-8 text-center">
              <p className="text-sm text-gray-400">© 2024 SkillSwap. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // Dashboard / App Layout
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark transition-colors duration-300">
      <header className="sticky top-0 z-50 bg-card-light/80 dark:bg-card-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark transition-colors duration-300">
        <div className="flex items-center justify-between px-6 lg:px-8 py-3 max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 text-text-light dark:text-text-dark group">
              <span className={`material-symbols-outlined text-3xl transition-colors duration-300 ${themeColor}`}>swap_horiz</span>
              <h2 className="text-xl font-bold tracking-tight">SkillSwap</h2>
            </Link>
            
            <div className="hidden md:flex">
              <div className="relative group min-w-[280px]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border-none rounded-full bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark placeholder-gray-400 focus:ring-2 focus:ring-primary/50 transition-all duration-200 sm:text-sm"
                  placeholder="Search skills, people..."
                />
              </div>
            </div>
          </div>

          <div className="flex flex-1 justify-end items-center gap-4">
            <div className="hidden lg:flex items-center gap-2">
              <Link to="/dashboard" className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${location.pathname === '/dashboard' ? `${themeColor} bg-gray-100 dark:bg-gray-800` : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>Dashboard</Link>
              <Link to="/browse" className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${location.pathname === '/browse' ? `${themeColor} bg-gray-100 dark:bg-gray-800` : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>Browse</Link>
              <Link to="/messages" className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${location.pathname === '/messages' ? `${themeColor} bg-gray-100 dark:bg-gray-800` : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>Messages</Link>
            </div>

            <div className="h-6 w-px bg-border-light dark:bg-border-dark hidden lg:block mx-2"></div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-card-dark"></span>
              </button>
              
              <Link to="/profile" className="ml-2 relative group">
                <div className="size-10 rounded-full p-0.5 bg-gradient-to-tr from-blue-500 to-purple-500 group-hover:scale-105 transition-transform">
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-full w-full border-2 border-white dark:border-card-dark"
                        style={{ backgroundImage: `url("${CURRENT_USER.avatar}")` }}
                    ></div>
                </div>
              </Link>
            </div>

            <div className="lg:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card-light dark:bg-card-dark border-t border-border-light dark:border-border-dark px-6 py-4 flex flex-col gap-3 animate-in slide-in-from-top-2">
            <Link to="/dashboard" className="text-sm font-medium p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">Dashboard</Link>
            <Link to="/browse" className="text-sm font-medium p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">Browse Skills</Link>
            <Link to="/messages" className="text-sm font-medium p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">Messages</Link>
            <Link to="/profile" className="text-sm font-medium p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">My Profile</Link>
            <Link to="/post" className={`text-sm font-bold p-2 rounded-lg ${themeColor} bg-gray-50 dark:bg-gray-900`}>Post a Skill</Link>
          </div>
        )}
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 animate-in fade-in duration-500">
        {children}
      </main>
    </div>
  );
};