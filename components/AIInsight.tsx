
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { BlogPost } from '../types';

interface AIInsightProps {
  post: BlogPost;
}

const AIInsight: React.FC<AIInsightProps> = ({ post }) => {
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateInsight = async () => {
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `Analyze this blog post and provide a deep dive. 
      Provide:
      1. A "Core Thesis" (1 powerful sentence).
      2. A "Narrative Map" (3 bullet points summarising the flow).
      3. "Reflective Prompts" (3 deep questions for the reader).
      
      Title: ${post.title}
      Content: ${post.content}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { temperature: 0.9 }
      });

      if (response.text) {
        setInsight(response.text);
      } else {
        throw new Error("No data received");
      }
    } catch (err) {
      setError("The digital intelligence is momentarily unreachable.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative group mt-32 border-beam rounded-[3rem]">
      {/* High-end decorative background */}
      <div className="absolute inset-0 bg-neutral-900/5 dark:bg-neutral-100/5 blur-xl -z-10 group-hover:bg-indigo-500/10 transition-colors duration-700"></div>
      
      <div className="relative bg-white/80 dark:bg-neutral-950/80 backdrop-blur-3xl p-12 md:p-20 rounded-[3rem] overflow-hidden border border-neutral-100 dark:border-neutral-900 shadow-2xl">
        
        {/* Animated Orbs in BG */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-16 relative z-10">
          <div className="flex items-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 animate-pulse"></div>
              <div className="relative w-20 h-20 flex items-center justify-center bg-neutral-900 dark:bg-white rounded-3xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <svg className="w-10 h-10 text-white dark:text-neutral-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-indigo-500 mb-2 block">Powered by Gemini 3</span>
              <h3 className="text-4xl md:text-5xl font-serif font-bold">Deep Intelligence.</h3>
            </div>
          </div>
          
          {!insight && !loading && (
            <button 
              onClick={generateInsight}
              className="px-12 py-6 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-all shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95"
            >
              Unveil the Deep Dive
            </button>
          )}
        </div>

        {loading && (
          <div className="py-20 flex flex-col items-center gap-10">
             <div className="relative w-24 h-24">
               <div className="absolute inset-0 border-2 border-neutral-100 dark:border-neutral-800 rounded-full"></div>
               <div className="absolute inset-0 border-2 border-t-indigo-500 rounded-full animate-spin"></div>
               <div className="absolute inset-4 border border-rose-500/30 rounded-full animate-ping"></div>
             </div>
             <p className="text-2xl italic font-serif text-neutral-400 animate-pulse">Deciphering the layers of narrative...</p>
          </div>
        )}

        {error && (
          <div className="p-8 bg-rose-50/50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/20 rounded-3xl text-rose-500 text-center font-medium">
            {error}
          </div>
        )}

        {insight && !loading && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 relative z-10">
            <div className="article-body prose-lg dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300 whitespace-pre-line leading-relaxed text-xl font-light">
              {insight}
            </div>
            <div className="mt-16 flex justify-between items-center pt-10 border-t border-neutral-100 dark:border-neutral-900">
               <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">Contextual Synthesis complete</span>
              <button 
                onClick={() => setInsight(null)}
                className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 hover:text-rose-500 transition-colors"
              >
                Clear Deep Dive
              </button>
            </div>
          </div>
        )}

        {!insight && !loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
             <div className="p-10 rounded-[2rem] border border-neutral-100 dark:border-neutral-800 bg-neutral-50/30 dark:bg-white/5 group-hover:translate-y-[-5px] transition-transform duration-500">
                <div className="text-4xl mb-6">🔮</div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Synthesized Logic</h4>
                <p className="text-neutral-500 leading-relaxed">Extracting the geometric patterns of the written word into structured wisdom.</p>
             </div>
             <div className="p-10 rounded-[2rem] border border-neutral-100 dark:border-neutral-800 bg-neutral-50/30 dark:bg-white/5 group-hover:translate-y-[-5px] transition-transform duration-500" style={{ transitionDelay: '100ms' }}>
                <div className="text-4xl mb-6">🌪️</div>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Metacognitive Loop</h4>
                <p className="text-neutral-500 leading-relaxed">Closing the gap between consumption and comprehension via generative questioning.</p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIInsight;
