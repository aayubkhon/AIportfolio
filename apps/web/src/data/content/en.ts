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
      "AI engineer and fullstack developer with 5+ years taking production apps from design through deployment and operations — usually solo. My day-to-day is LLM integration (Claude, OpenAI, Gemini), RAG, and agentic AI pipelines, mostly in Python, TypeScript, NestJS, FastAPI and Next.js.",
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
      'smart-ops': {
        tagline: 'Smart-factory operations system',
        description:
          'A production-management system behind a factory control-room UI: every KPI, line status and chart is aggregated live from PostgreSQL. Due-date backward calculation flags at-risk orders, a 2-week material demand forecast checks stock, and one order number opens the full unit history from material lots to inspection and test results.',
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
      finsight: {
        role: "Full Stack Developer & AI Engineer",
        location: "FinSight · Deterministic AI Agent",
        bullets: [
          "Architected a finance-grade AI agent for payment risk analysis where LLMs never perform arithmetic.",
          "Built Python validation workflows that compute settlement metrics and audit LLM-generated [CLAIM: function_name] tags.",
          "Detected a $305 duplicate-settlement anomaly across 1,468 batches and routed LLM discrepancies to human-in-the-loop review.",
          "Designed the boundary between deterministic code and LLM-written risk summaries, using Claude Code for fast implementation.",
        ],
      },
      smartfactory: {
        role: "Full Stack Developer & AI Engineer",
        location: "Smart Factory Ops · Due-Date Risk & Traceability",
        bullets: [
          "Turned static UI mockups into a fully functional real-time smart-factory monitoring system.",
          "Engineered due-date reverse calculation that aggregates process cycle times into real-time delivery risk levels.",
          "Built full-lifecycle traceability across materials, inspection and testing by linking unit IDs to a single order timeline.",
          "Fixed complex dropdown state bugs for a stable client-server data flow; prototyped fast with Claude Code.",
        ],
      },
      nomad: {
        role: "Full Stack Developer",
        location: "Nomad Industries · South Korea (Freelance)",
        bullets: [
          "Built responsive, scalable web apps with Next.js, React, Tailwind CSS and MUI.",
          "Streamlined state management and API consumption with React Query, Apollo Client, GraphQL and REST.",
          "Developed low-latency real-time UI components with WebSockets and Socket.IO.",
          "Integrated LLM APIs and AI-driven interfaces to ship intelligent automated features.",
        ],
      },
      abh: {
        role: "Front-end Developer",
        location: "ABH Digital · South Korea (Remote)",
        bullets: [
          "Built responsive, high-performance web apps with Next.js, React, Tailwind CSS and MUI.",
          "Optimised data fetching with React Query and Apollo Client for REST/GraphQL APIs.",
          "Implemented real-time, event-driven UI features with WebSockets and Socket.IO.",
          "Integrated AI-powered interfaces and prompt workflows into the frontend.",
        ],
      },
      haany: {
        role: "Haany University",
        location: "South Korea",
        bullets: [
          "Fluent in Korean, English and Russian; native Uzbek speaker.",
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
