
import { BlogPost } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Intentional Living',
    excerpt: 'In a world that demands more, choosing less is a revolutionary act. Exploring the intersection of minimalism and mental clarity.',
    content: `
      ## The Noise of Excess
      Modern life is an endless stream of notifications, demands, and material accumulation. We've been taught that more is better—more followers, more possessions, more responsibilities. But at what cost?

      ## Finding the Essence
      Minimalism isn't just about owning fewer things. It's about clearing the space—both physical and mental—to allow what truly matters to flourish. It's the intentional promotion of the things we most value and the removal of everything that distracts us from them.

      > "Simplicity is the ultimate sophistication." — Leonardo da Vinci

      ## Practical Steps
      1. **Audit your attention:** Where does your time go?
      2. **Curate your surroundings:** Does this object serve a purpose or bring joy?
      3. **Saying 'No':** The most powerful tool for focus.

      When we live intentionally, we stop reacting to the world and start shaping our experience of it.
    `,
    date: 'Oct 24, 2023',
    category: 'Philosophy',
    readingTime: '5 min read',
    image: 'https://picsum.photos/seed/minimal/1200/800'
  },
  {
    id: '2',
    title: 'Building for Resilience',
    excerpt: 'Software development is more than writing code; it is about creating systems that can withstand change and uncertainty.',
    content: `
      ## The Myth of Perfection
      We often strive for the perfect architecture, the cleanest code, the most optimized algorithm. But software exists in a world of shifting requirements and evolving technologies.

      ## Patterns of Longevity
      Resilient code is code that is easy to change. This means:
      - High cohesion and low coupling.
      - Clear abstractions that don't leak.
      - Comprehensive testing that acts as a safety net.

      \`\`\`typescript
      // Example of a resilient pattern
      interface ResilienceConfig {
        retries: number;
        backoff: number;
      }

      async function fetchWithRetry(url: string, config: ResilienceConfig) {
        // Logic for robust fetching...
      }
      \`\`\`

      ## The Human Factor
      Never forget that code is read by humans more often than it is executed by machines. Readability is a form of resilience.
    `,
    date: 'Nov 12, 2023',
    category: 'Development',
    readingTime: '8 min read',
    image: 'https://picsum.photos/seed/code/1200/800'
  },
  {
    id: '3',
    title: 'A Morning in Kyoto',
    excerpt: 'Capturing the stillness of the Silver Pavilion at dawn. A reflection on travel, presence, and transient beauty.',
    content: `
      ## The Silver Pavilion
      Walking through the Ginkaku-ji gardens before the crowds arrive is a transformative experience. The meticulous sand gardens, the moss-covered slopes, and the dark wood of the pavilion speak to a deep appreciation for the ephemeral.

      ## Presence over Documentation
      In the age of Instagram, we often view beauty through a lens. I challenged myself to leave the camera in the bag and simply *be*. The memory of the scent of damp earth and the sound of distant temple bells is more vivid than any photo could capture.

      ## Wabi-Sabi
      Japanese aesthetics teaches us the beauty of imperfection. The weathered stone, the slightly asymmetrical path—these elements invite us to find peace in things as they are, not as we wish them to be.
    `,
    date: 'Dec 05, 2023',
    category: 'Travel',
    readingTime: '4 min read',
    image: 'https://picsum.photos/seed/kyoto/1200/800'
  }
];
