
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readingTime: string;
  image: string;
}

export type Page = 'home' | 'blog' | 'about' | 'contact' | 'article';

export interface AppState {
  currentPage: Page;
  selectedPost: BlogPost | null;
  darkMode: boolean;
}
