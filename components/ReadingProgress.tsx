
import React, { useState, useEffect } from 'react';

const ReadingProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-[100] bg-neutral-100/10">
      <div 
        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 transition-all duration-150 ease-out shadow-[0_0_15px_rgba(99,102,241,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ReadingProgress;
