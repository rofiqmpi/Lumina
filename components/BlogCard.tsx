
import React from 'react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick }) => {
  return (
    <article 
      onClick={onClick}
      className="group cursor-pointer flex flex-col h-full relative p-4"
    >
      {/* Dynamic Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-rose-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/5 group-hover:to-rose-500/10 rounded-[2.5rem] transition-all duration-700 blur-2xl -z-10 opacity-0 group-hover:opacity-100"></div>
      
      {/* Image Container with Perspective */}
      <div className="relative aspect-[16/11] overflow-hidden mb-10 bg-neutral-100 dark:bg-neutral-900 rounded-[2rem] shadow-sm transition-all duration-700 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] group-hover:-translate-y-3 group-hover:rotate-1">
        <img 
          src={post.image} 
          alt={post.title} 
          className="object-cover w-full h-full transition-all duration-1000 ease-out group-hover:scale-110 grayscale group-hover:grayscale-0 contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="absolute top-6 left-6">
          <span className="glass-card px-5 py-2 text-[9px] font-bold uppercase tracking-[0.2em] rounded-full text-white backdrop-blur-md shadow-xl border border-white/20">
            {post.category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-grow px-4">
        <div className="flex items-center gap-5 text-[10px] font-bold text-neutral-400 uppercase tracking-[0.3em] mb-6">
          <span>{post.date}</span>
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"></div>
          <span>{post.readingTime}</span>
        </div>
        
        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 group-hover:text-gradient-vibrant transition-all leading-[1.2]">
          {post.title}
        </h3>
        
        <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed mb-10 line-clamp-2 text-lg font-light">
          {post.excerpt}
        </p>
        
        <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-800 flex justify-between items-center group-hover:border-indigo-500/30 transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400 group-hover:text-indigo-500 transition-colors">
            Deep Dive
          </span>
          <div className="w-10 h-10 rounded-full border border-neutral-100 dark:border-neutral-800 flex items-center justify-center group-hover:bg-indigo-500 group-hover:border-indigo-500 group-hover:text-white transition-all transform group-hover:rotate-45">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
