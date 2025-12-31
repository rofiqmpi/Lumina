
import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import ReadingProgress from './ReadingProgress';
import AIInsight from './AIInsight';

interface ArticleProps {
  post: BlogPost;
  onBack: () => void;
}

const Article: React.FC<ArticleProps> = ({ post, onBack }) => {
  const formatContent = (content: string) => {
    return content
      .replace(/## (.*)/g, '<h2 class="text-4xl font-serif font-bold mt-16 mb-8 text-neutral-900 dark:text-neutral-100">$1</h2>')
      .replace(/> (.*)/g, '<div class="relative my-12 py-4 pl-10"><div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-rose-500 rounded-full"></div><blockquote class="italic text-2xl font-serif text-neutral-600 dark:text-neutral-400">$1</blockquote></div>')
      .replace(/1\. (.*)/g, '<li class="ml-6 mb-4 list-decimal marker:text-indigo-500 marker:font-bold">$1</li>')
      .replace(/2\. (.*)/g, '<li class="ml-6 mb-4 list-decimal marker:text-indigo-500 marker:font-bold">$1</li>')
      .replace(/3\. (.*)/g, '<li class="ml-6 mb-4 list-decimal marker:text-indigo-500 marker:font-bold">$1</li>')
      .replace(/```typescript([\s\S]*?)```/g, '<div class="relative group my-12"><div class="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-rose-500/20 blur opacity-0 group-hover:opacity-100 transition duration-500"></div><pre class="relative bg-neutral-100 dark:bg-neutral-900/80 p-8 rounded-2xl overflow-x-auto text-sm font-mono border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm"><code>$1</code></pre></div>')
      .split('\n\n').map(p => p.trim().startsWith('<') ? p : `<p class="mb-8 leading-[1.8] text-xl text-neutral-700 dark:text-neutral-300">${p}</p>`).join('');
  };

  return (
    <article className="pb-40">
      <ReadingProgress />
      
      <div className="max-w-4xl mx-auto px-4">
        <div className="pt-10 mb-20">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-xs font-bold tracking-[0.3em] uppercase opacity-40 hover:opacity-100 transition-all"
          >
            <span className="w-8 h-[1px] bg-current transition-all group-hover:w-12"></span>
            Return to Collective
          </button>
        </div>

        <header className="mb-20">
          <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-neutral-400 uppercase tracking-[0.2em] mb-10">
            <span className="px-4 py-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
              {post.date}
            </div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700"></span>
              {post.readingTime}
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.05] mb-12 tracking-tight">
            {post.title}
          </h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-indigo-500 to-rose-500 rounded-full mb-12"></div>
          <p className="text-2xl italic text-neutral-500 dark:text-neutral-400 leading-relaxed font-serif max-w-2xl">
            {post.excerpt}
          </p>
        </header>

        <div className="relative mb-24 rounded-3xl overflow-hidden shadow-2xl group">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full aspect-[21/10] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div 
            className="article-body selection:bg-indigo-500 selection:text-white"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
          
          <AIInsight post={post} />

          <div className="mt-40 flex flex-col items-center text-center">
             <div className="grid grid-cols-3 gap-2 mb-10 opacity-30">
                {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-current"></div>)}
             </div>
            <p className="font-serif italic text-3xl mb-12 text-neutral-400">Curiosity never ends.</p>
            <button 
              onClick={onBack}
              className="px-12 py-5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold uppercase tracking-[0.3em] text-xs rounded-full hover:scale-105 transition-transform shadow-xl shadow-indigo-500/10"
            >
              Continue the Journey
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Article;
