
import React, { useState } from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`${email} সাবস্ক্রাইব হয়েছে। ধন্যবাদ!`);
      setEmail('');
    }
  };

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-950 pt-20 pb-12 transition-colors border-t border-neutral-200 dark:border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-6">Lumina</h3>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-xs leading-relaxed">
              Sharing thoughts on design, technology, and the pursuit of a meaningful digital life.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="hover:text-indigo-500 transition-colors text-sm">Home</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-indigo-500 transition-colors text-sm">Archive</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-indigo-500 transition-colors text-sm">About</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-indigo-500 transition-colors text-sm">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">Stay Connected</h4>
            <p className="text-sm text-neutral-500 mb-4">Join my monthly newsletter for curated insights.</p>
            <form className="flex" onSubmit={handleSubmit}>
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com" 
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm flex-grow focus:outline-none focus:border-indigo-500"
              />
              <button type="submit" className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 text-xs font-bold uppercase tracking-wider hover:opacity-80">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-neutral-400 tracking-widest uppercase">
            &copy; {new Date().getFullYear()} Lumina. All rights reserved.
          </p>
          
          {/* Social Icons Section */}
          <div className="flex gap-6 items-center">
            <a href="#" className="text-neutral-400 hover:text-indigo-500 transition-all transform hover:scale-110" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a href="#" className="text-neutral-400 hover:text-indigo-500 transition-all transform hover:scale-110" aria-label="Github">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.696 1.027 1.59 1.027 2.683 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a href="#" className="text-neutral-400 hover:text-indigo-500 transition-all transform hover:scale-110" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
