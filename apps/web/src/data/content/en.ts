import type { LocalizedStrings } from '@/libs/types/content.types'

export const en: LocalizedStrings = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    work: 'Work',
    journey: 'Journey',
    assistant: 'Ask AI',
    contact: 'Contact',
  },
  hero: {
    availability: 'Open to work · D-10 visa',
    tagline:
      'I build AI products end to end — from the LLM pipeline to the backend API to the pixel that ships.',
    viewWork: 'View my work',
    askAI: 'Ask my AI',
  },
  profile: {
    role: 'AI Engineer & Fullstack Developer',
    location: 'South Korea',
  },
  stats: ['Years building', 'Lines shipped solo', 'Products delivered', 'Languages spoken'],
  about: {
    eyebrow: '01 · About',
    title: 'Engineer first, generalist by habit',
    subtitle: 'I like owning a feature end to end — from the database schema to the pixel that ships.',
    bio: [
      "AI engineer and fullstack developer with 4+ years taking production apps from design through deployment and operations — usually solo. My day-to-day is LLM integration (Claude, OpenAI, Gemini), RAG, and agentic AI pipelines, mostly in Python, TypeScript, NestJS, FastAPI and Next.js.",
      'I like owning an AI product from prompt engineering and multi-stage LLM pipelines down to the backend, the frontend and the server it runs on. Recently I shipped a live AI ad-creative SaaS (60k+ lines of TypeScript) on my own, and built a multi-tenant agentic RAG chatbot with Python/FastAPI.',
    ],
  },
  skills: {
    eyebrow: '02 · Skills',
    title: 'A stack that ships',
    subtitle: 'Four overlapping toolkits I reach for depending on where the problem lives.',
    groups: {
      ai: 'AI / LLM Engineering',
      backend: 'Backend Systems',
      frontend: 'Product Frontend',
      devops: 'Infra & DevOps',
    },
  },
  work: {
    eyebrow: '03 · Work',
    title: 'Selected projects',
    subtitle: "A slice of what I've shipped — commerce, real estate, finance and a bit of computer vision.",
    projects: {
      nimora: {
        tagline: 'Multi-vendor B2B jewelry marketplace',
        description:
          'A scalable multi-vendor commerce platform connecting admins, sellers and buyers. Role-based auth, advanced product search and filtering, Socket.IO real-time chat and notifications, and an admin content dashboard — deployed solo on a Linux VPS with Docker, NGINX and PM2.',
      },
      nestar: {
        tagline: 'Real-estate transaction platform',
        description:
          'A property marketplace for agents and developers: dynamic search and filtering over large datasets, real-time messaging, RBAC, and a monorepo backend that splits the GraphQL API, background jobs and shared libraries with optimised MongoDB queries.',
      },
      finexa: {
        tagline: 'Personal finance dashboard · fullstack',
        description:
          'A finance dashboard that pulls balance, income/expense history, budgets and spending reports into one view. Recharts visualises monthly flow and category patterns; the NestJS API auto-classifies transactions and flags budget overruns.',
      },
      bloom: {
        tagline: 'Multi-language beauty e-commerce',
        description:
          'The storefront for an Uzbek beauty & cosmetics shop: responsive catalog with price/discount sorting and category-brand filters, promo-banner slider, wishlist and cart — localised across Korean, Russian and English.',
      },
      'face-detection': {
        tagline: 'Computer vision, live webcam',
        description:
          'A Python + OpenCV app that detects and tracks faces from a live stream in real time, reaching 98.63% confidence with a Haar Cascade classifier and frame-level optimisation.',
      },
    },
  },
  journey: {
    eyebrow: '04 · Journey',
    title: "Where I've been",
    subtitle: 'Roles and study, most recent first.',
    items: {
      arowwai: {
        role: 'Fullstack Developer & AI Engineer',
        location: 'Netherlands · Remote',
        bullets: [
          'Built a scalable NestJS monorepo backend with a maintainable GraphQL / REST data layer.',
          'Developed responsive Next.js + Tailwind apps, optimising state with React Query and Apollo Client.',
          'Implemented real-time bidirectional communication with Socket.IO.',
          'Owned Linux deployment and operations with Docker, NGINX and PM2 for high availability.',
          'Integrated LLM and AI APIs to ship intelligent automation features.',
        ],
      },
      technest: {
        role: 'Frontend Developer',
        location: 'Tallinn, Estonia',
        bullets: [
          'Designed and built responsive web UI with React, TypeScript and SCSS.',
          'Optimised data flow via REST integration and state management (Redux, Context API).',
          'Handled cross-browser optimisation and a reusable component architecture.',
          'Worked in a Git-based team workflow with active code review.',
        ],
      },
      pixelcraft: {
        role: 'Frontend Developer',
        location: 'Tashkent, Uzbekistan',
        bullets: [
          'Built and maintained the company website with HTML, CSS, JavaScript and React.',
          'Implemented responsive layouts optimised across devices and screen sizes.',
          'Collaborated with the design team on custom graphics, animations and transitions.',
          'Helped manage an efficient deployment process and reviewed project quality.',
        ],
      },
      daegu: {
        role: 'Daegu Haany University',
        location: 'Daegu, South Korea',
        bullets: [
          'Studied in Korea while self-training as a software engineer in parallel.',
          'Fluent in Korean, English and Russian; native Uzbek speaker.',
        ],
      },
    },
  },
  assistant: {
    eyebrow: '05 · Ask AI',
    title: 'Talk to my portfolio',
    subtitle: 'Not a generic bot — it retrieves answers from my actual CV and projects.',
    points: [
      'Answers grounded in my real experience',
      'Retrieval-augmented, powered by Gemini',
      'Ask in English, Korean, Russian or Uzbek',
    ],
    hintPrefix: 'Try:',
  },
  contact: {
    eyebrow: '05 · Contact',
    title: "Let's build something",
    lead: 'Got a role, a project or just a question? The fastest way to reach me is email — I usually reply within a day.',
    footerBuilt: 'Built with Next.js · RAG · a lot of coffee',
    socials: {
      email: 'Email',
      github: 'GitHub',
      telegram: 'Telegram',
      kakao: 'KakaoTalk',
      phone: 'Phone',
    },
  },
}
