export type Project = {
  slug: string;
  name: string;
  image: string;
  technologies: string[];
  description: string;
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  improvements: string[];
};

export const projects: Project[] = [
  {
    slug: 'bazar-dor',
    name: 'বাজার দর (BazarDor)',
    image: '/projects/bazar-dor.png',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'daisyUI',
      'Better Auth',
      'Lucide React',
    ],
    description:
      'BazarDor is a Bengali-focused market price tracking web application that helps users explore daily prices of essential products, track price changes, browse categories, and make informed shopping decisions. It features responsive layouts, authentication, and user profile management.',
    liveUrl: 'https://a7-bazar-dor-self.vercel.app/',
    githubUrl: 'https://github.com/tarekcodes62/A7-Bazar-Dor',
    challenges: [
      'Handling product data fetching and loading states.',
      'Building responsive interfaces for mobile, tablet, and desktop.',
      'Implementing category-based navigation and price sorting.',
      'Managing authentication, protected routes, and user profiles.',
      'Providing friendly not-found pages and error handling.',
    ],
    improvements: [
      'Add historical price charts to visualize market trends.',
      'Expand product categories and market price information.',
      'Improve product search and filtering.',
      'Add price alerts and personalized shopping insights.',
    ],
  },
  {
    slug: 'fit-log',
    name: 'FitLog - Workout Library',
    image: '/projects/fit-log.png',
    technologies: [
      'Next.js',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Lucide React',
      'LocalStorage',
      'Vercel',
    ],
    description:
      'FitLog is a responsive workout library that helps users explore exercises, view detailed workout instructions, create a daily workout plan, save favorite workouts, and track completed exercises. It includes search, sorting, persistent saved data, and a clean dark-themed interface.',
    liveUrl: 'https://workouts-fit-log.vercel.app/',
    githubUrl: 'https://github.com/tarekcodes62/A6-Fit-Log',
    challenges: [
      'Fetching workout data while handling API failures with a fallback dataset.',
      'Managing daily workout plans with a five-exercise limit.',
      'Persisting saved workouts and plan data using LocalStorage.',
      'Tracking exercise completion and calculating total duration and calories.',
      'Building responsive workout cards and dynamic exercise detail pages.',
    ],
    improvements: [
      'Add user accounts and cloud-based workout synchronization.',
      'Introduce workout history and progress analytics.',
      'Add personalized workout recommendations.',
      'Improve filtering by muscle group and equipment.',
    ],
  },

  {
    slug: 'wanderlust',
    name: 'Wanderlust - Travel & Destination Explorer',
    image: '/projects/wanderlust.png',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn Ui',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      'Vercel',
    ],
    description:
      'Wanderlust is a responsive travel and destination management web application that helps users explore travel destinations and discover useful information for planning their trips. It features destination listings, detailed destination information, and a form for adding new destinations. The application integrates a Next.js frontend with an Express.js backend API and MongoDB for data management, providing a clean user interface, reusable components, and a seamless experience across desktop, tablet, and mobile devices.',
    liveUrl: 'https://wanderlust-fontend-two.vercel.app/',
    githubUrl: 'https://github.com/tarekcodes62/wanderlust-fontend',
    challenges: [
      'Integrating the Next.js frontend with the deployed Express.js backend API.',
      'Configuring CORS to allow secure communication between separate Vercel deployments.',
      'Handling destination form submissions and server-side API errors.',
      'Managing environment variables and production deployment configurations.',
      'Building a responsive and user-friendly interface for destination exploration.',
    ],
    improvements: [
      'Implement user authentication and authorization.',
      'Add destination search, sorting, and advanced filtering.',
      'Introduce a travel booking system with booking management.',
      'Add user reviews, ratings, and destination favorites.',
      'Improve form validation and provide more informative error messages.',
    ],
  },
];
