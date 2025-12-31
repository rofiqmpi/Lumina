
import React from 'react';

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, onToggle }) => {
  return (
    <button
      onClick={() => onToggle()}
      className="relative w-12 h-6 md:w-14 md:h-7 rounded-full bg-neutral-200 dark:bg-neutral-800 transition-all duration-500 p-1 flex items-center hover:scale-105 shadow-inner cursor-pointer z-[120]"
      aria-label="Toggle theme"
    >
      <div 
        className={`w-4 h-4 md:w-5 md:h-5 rounded-full shadow-lg transition-transform duration-500 flex items-center justify-center ${
          darkMode 
          ? 'translate-x-6 md:translate-x-7 bg-neutral-900 text-yellow-400' 
          : 'translate-x-0 bg-white text-neutral-400'
        }`}
      >
        {darkMode ? (
           <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
             <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
           </svg>
        ) : (
           <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
             <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
           </svg>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
