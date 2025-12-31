
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogCard from './components/BlogCard';
import Article from './components/Article';
import { BLOG_POSTS } from './constants';
import { BlogPost, Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [darkMode, setDarkMode] = useState(() => {
    // Initial check from localStorage
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formFeedback, setFormFeedback] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  // Sync theme class with darkMode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Reveal on scroll observer
  useEffect(() => {
    const setupObserver = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => observer.observe(el));
      return observer;
    };

    const observer = setupObserver();
    return () => observer.disconnect();
  }, [currentPage, activeCategory]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setSelectedPost(null);
    setActiveCategory('All');
    setFormFeedback(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openArticle = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentPage('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("ধন্যবাদ! আপনি সফলভাবে সাবস্ক্রাইব করেছেন।");
    }, 1000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormFeedback({ message: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমি শীঘ্রই যোগাযোগ করব।", type: 'success' });
    }, 1500);
  };

  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="space-y-24 md:space-y-40 pb-20 page-transition">
            <section className="relative min-h-[70vh] md:min-h-[90vh] flex flex-col justify-center max-w-6xl mx-auto overflow-visible px-6">
              {/* Background Calming Orbs & Particles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl opacity-20 dark:opacity-30 blur-[80px] md:blur-[120px] pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-0 w-64 h-64 md:w-96 md:h-96 bg-indigo-500 rounded-full animate-float"></div>
                <div className="absolute bottom-1/4 right-0 w-80 h-80 md:w-[500px] md:h-[500px] bg-rose-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                
                {/* Subtle Floating Particles */}
                <div className="absolute top-20 right-1/4 w-4 h-4 bg-purple-400 rounded-full animate-float opacity-50"></div>
                <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-indigo-300 rounded-full animate-float-slow opacity-40"></div>
                <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-rose-400 rounded-full animate-float opacity-30"></div>
              </div>
              
              <div className="relative z-10 text-center md:text-left">
                <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                   <div className="h-px w-6 md:w-8 bg-indigo-500"></div>
                   <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] uppercase text-indigo-500">Digital Explorer</span>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-serif font-bold tracking-tighter mb-8 md:mb-10 leading-[1.1] md:leading-[0.9] text-neutral-900 dark:text-white">
                  Curating <br />
                  <span className="text-gradient-vibrant">Digital Stillness.</span>
                </h1>
                <div className="max-w-2xl mx-auto md:mx-0">
                  <p className="text-lg md:text-2xl lg:text-3xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-10 md:mb-12">
                    A sanctuary for those who seek depth in an age of distraction. Minimalist aesthetics meeting maximalist thoughts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-8 items-center md:items-start justify-center md:justify-start">
                    <button 
                      onClick={() => handleNavigate('blog')}
                      className="w-full sm:w-auto group relative px-8 md:px-10 py-4 md:py-5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold uppercase tracking-widest text-[10px] md:text-xs rounded-full overflow-hidden shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                      <span className="relative z-10">Enter Archive</span>
                      <div className="absolute inset-0 bg-indigo-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
                    </button>
                    <button 
                      onClick={() => handleNavigate('about')}
                      className="group flex items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] hover:text-indigo-500 transition-colors"
                    >
                      About Lumina
                      <span className="w-6 md:w-10 h-[1px] bg-neutral-300 dark:bg-neutral-800 group-hover:w-12 md:group-hover:w-16 group-hover:bg-indigo-500 transition-all"></span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative px-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6 reveal-on-scroll">
                <div className="space-y-4">
                  <span className="text-indigo-500 text-[10px] md:text-xs font-bold uppercase tracking-widest">Recent Musings</span>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold">New Perspectives.</h2>
                </div>
                <button 
                    onClick={() => handleNavigate('blog')}
                    className="text-[10px] md:text-xs font-bold uppercase tracking-widest border-b border-neutral-300 dark:border-neutral-700 hover:border-indigo-500 pb-1 transition-all"
                >View All Archives</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16">
                {BLOG_POSTS.slice(0, 3).map((post, idx) => (
                  <div key={post.id} className="reveal-on-scroll" style={{ transitionDelay: `${idx * 150}ms` }}>
                    <BlogCard post={post} onClick={() => openArticle(post)} />
                  </div>
                ))}
              </div>
            </section>

            <section className="reveal-on-scroll py-10 px-6">
              <div className="bg-white dark:bg-neutral-900 p-8 md:p-24 rounded-[2rem] md:rounded-[3rem] overflow-hidden relative border border-neutral-100 dark:border-neutral-800 shadow-2xl">
                 <div className="absolute top-0 right-0 w-[60%] h-[150%] bg-gradient-to-bl from-indigo-500/10 via-rose-500/5 to-transparent blur-3xl rounded-full"></div>
                 <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div>
                      <h2 className="text-3xl md:text-6xl font-serif font-bold mb-6">Quietly delivered.</h2>
                      <p className="text-base md:text-xl text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-md">No daily spam. Just one thoughtful letter every month, containing only what truly matters.</p>
                    </div>
                    <form className="relative flex flex-col gap-4" onSubmit={handleNewsletterSubmit}>
                       <input 
                        required
                        type="email" 
                        placeholder="Your email address" 
                        className="w-full bg-neutral-50 dark:bg-neutral-950 border-2 border-transparent focus:border-indigo-500 px-6 py-4 md:py-6 rounded-xl md:rounded-2xl focus:outline-none transition-all text-base md:text-lg shadow-inner"
                       />
                       <button 
                        disabled={isSubmitting}
                        className="w-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 py-4 md:py-6 rounded-xl md:rounded-2xl font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg disabled:opacity-50"
                       >
                         {isSubmitting ? 'Subscribing...' : 'Join the inner circle'}
                       </button>
                    </form>
                 </div>
              </div>
            </section>
          </div>
        );

      case 'blog':
        return (
          <div className="py-10 md:py-20 max-w-6xl mx-auto page-transition px-6">
            <header className="mb-16 md:mb-32 text-center reveal-on-scroll">
              <span className="text-indigo-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Writing Archive</span>
              <h1 className="text-5xl md:text-9xl font-serif font-bold mb-8 tracking-tighter">The Library.</h1>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {['All', 'Philosophy', 'Design', 'Code', 'Life'].map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 md:px-6 py-2 rounded-full border transition-all text-[10px] md:text-xs font-bold uppercase tracking-widest ${
                      activeCategory === cat 
                      ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-neutral-900 dark:border-white' 
                      : 'border-neutral-200 dark:border-neutral-800 hover:border-indigo-500'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-20 md:gap-y-32">
              {filteredPosts.map((post, idx) => (
                <div key={post.id} className="reveal-on-scroll" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <BlogCard post={post} onClick={() => openArticle(post)} />
                </div>
              ))}
            </div>
          </div>
        );

      case 'article':
        return selectedPost ? <Article post={selectedPost} onBack={() => handleNavigate('blog')} /> : null;

      case 'about':
        return (
          <div className="py-10 md:py-20 max-w-5xl mx-auto page-transition px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
              <div className="reveal-on-scroll">
                 <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 md:mb-12 leading-[1.1]">I build <span className="text-gradient-vibrant italic">bridges</span> between thoughts.</h1>
                 <div className="prose dark:prose-invert prose-base md:prose-lg text-neutral-600 dark:text-neutral-400 space-y-6 md:space-y-10 leading-relaxed">
                  <p className="text-lg md:text-2xl font-serif italic text-neutral-400">"Modern living is a noisy affair. Lumina is a whisper."</p>
                  <p>
                    My background spans across generative art, full-stack engineering, and digital anthropology. I don't just build websites; I curate digital environments that respect the user's focus.
                  </p>
                  <p>
                    Lumina is my personal manifesto—a repository of experiments, failures, and minor breakthroughs. 
                  </p>
                 </div>
              </div>
              <div className="relative aspect-square group reveal-on-scroll">
                 <div className="absolute -inset-6 md:-inset-10 bg-gradient-to-br from-indigo-500/20 to-rose-500/20 blur-[60px] md:blur-[120px] transition-all duration-1000"></div>
                 <div className="relative z-10 w-full h-full overflow-hidden rounded-[2rem] border border-neutral-200 dark:border-neutral-800 shadow-2xl">
                    <img src="https://picsum.photos/seed/creator-premium/1000/1000" alt="Creator" className="w-full h-full object-cover grayscale brightness-110 contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                 </div>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="py-10 md:py-20 max-w-6xl mx-auto page-transition px-6">
            <div className="text-center mb-16 md:mb-32 reveal-on-scroll">
              <h1 className="text-6xl md:text-[10rem] font-serif font-bold mb-6 md:mb-10 tracking-tighter">Connect.</h1>
              <p className="text-lg md:text-2xl text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">Let's craft something meaningful together.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 md:gap-24">
              <div className="space-y-10 md:space-y-16 reveal-on-scroll">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500 mb-4">Reach out</h4>
                  <a href="mailto:hello@lumina.com" className="text-2xl md:text-3xl font-serif font-bold hover:text-indigo-500 transition-all">hello@lumina.com</a>
                </div>
                <div className="flex gap-6">
                    <a href="#" className="p-3 bg-neutral-100 dark:bg-neutral-900 rounded-full hover:bg-indigo-500 hover:text-white transition-all">TW</a>
                    <a href="#" className="p-3 bg-neutral-100 dark:bg-neutral-900 rounded-full hover:bg-indigo-500 hover:text-white transition-all">GH</a>
                </div>
              </div>
              <div className="lg:col-span-2 reveal-on-scroll">
                <form className="space-y-8 md:space-y-12 bg-white dark:bg-neutral-900 p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-neutral-100 dark:border-neutral-800" onSubmit={handleContactSubmit}>
                  {formFeedback && (
                    <div className={`p-6 rounded-2xl ${formFeedback.type === 'success' ? 'bg-green-50 text-green-800 border border-green-100' : 'bg-red-50 text-red-800 border border-red-100'}`}>
                      {formFeedback.message}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    <input required type="text" className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-lg" placeholder="Name" />
                    <input required type="email" className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-4 focus:outline-none focus:border-indigo-500 transition-colors text-lg" placeholder="Email" />
                  </div>
                  <textarea required rows={3} className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 py-4 focus:outline-none focus:border-indigo-500 transition-colors resize-none text-lg" placeholder="Your Message"></textarea>
                  <button 
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-12 py-5 bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-bold uppercase tracking-widest text-[10px] rounded-2xl hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-all shadow-xl disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-500 selection:text-white transition-colors duration-500">
      <Header 
        onNavigate={handleNavigate} 
        currentPage={currentPage} 
        darkMode={darkMode} 
        onToggleTheme={toggleDarkMode} 
      />
      <main className="flex-grow pt-20 md:pt-32">
        {renderContent()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
