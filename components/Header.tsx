
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
  darkMode: boolean;
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: Page }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Collective', page: 'blog' },
    { label: 'Philosophy', page: 'about' },
    { label: 'Connect', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled 
          ? 'py-3 translate-y-0 px-4' 
          : 'py-6 px-6'
        }`}
      >
        <div 
          className={`container mx-auto max-w-6xl flex justify-between items-center transition-all duration-500 ${
            isScrolled 
            ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl rounded-full shadow-2xl border border-white/20 dark:border-neutral-800/20 px-6 py-3' 
            : ''
          }`}
        >
          <button 
            onClick={() => handleNavClick('home')}
            className="text-lg md:text-2xl font-serif font-bold tracking-tighter hover:scale-105 transition-transform flex items-center gap-2"
          >
            <span className="w-6 h-6 md:w-8 md:h-8 bg-neutral-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-neutral-900 text-xs italic">L</span>
            Lumina
          </button>
          
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 relative group ${
                  currentPage === item.page ? 'text-indigo-600 dark:text-indigo-400' : 'opacity-40 hover:opacity-100'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 w-full h-[1px] bg-indigo-500 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${currentPage === item.page ? 'scale-x-100' : ''}`}></span>
              </button>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 bg-neutral-100 dark:bg-neutral-900 rounded-full transition-colors active:bg-indigo-100"
              aria-label="Menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-[110] md:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-md" onClick={() => setIsMenuOpen(false)}></div>
        <div 
          className={`absolute right-0 top-0 bottom-0 w-[80%] bg-white dark:bg-neutral-950 p-10 flex flex-col gap-8 shadow-2xl transform transition-transform duration-500 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center mb-10">
            <span className="text-xl font-serif font-bold">Lumina</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-neutral-400 text-sm">✕ Close</button>
          </div>
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`text-3xl font-serif font-bold text-left py-2 transition-colors ${
                currentPage === item.page ? 'text-indigo-500' : 'text-neutral-800 dark:text-neutral-200'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="mt-auto pt-10 border-t border-neutral-100 dark:border-neutral-900">
             <p className="text-[10px] uppercase tracking-widest text-neutral-400 mb-6">Stay Connected</p>
             <div className="flex gap-6 items-center">
                <a href="#" className="text-neutral-400 hover:text-indigo-500 transition-all transform hover:scale-110" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a href="#" className="text-neutral-400 hover:text-indigo-500 transition-all transform hover:scale-110" aria-label="Github">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.696 1.027 1.59 1.027 2.683 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-indigo-500 transition-all transform hover:scale-110" aria-label="LinkedIn">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                    </svg>
                  </a>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
