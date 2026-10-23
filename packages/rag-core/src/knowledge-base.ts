import type { KnowledgeChunk } from '@repo/types'

// Retrieval corpus for the assistant. Each chunk is embedded once and matched
// against the visitor's question — keep them self-contained and factual.
export const knowledgeChunks: KnowledgeChunk[] = [
  {
    id: 'personal-info',
    category: 'personal',
    content: `Leo's personal information:
Full name: Ayubkhon Akramov (known as Leo or 레오, "아유브 LEO")
Role: AI Engineer & Fullstack Developer
Location: South Korea
Phone (South Korea): +821083054111
Phone (Uzbekistan): +998 77 014 56 14
Email: akramov.ayubkhan@gmail.com
GitHub: github.com/aayubkhon
KakaoTalk: ayub701
Telegram: @aayub701
Visa: D-10 (job-seeking visa in South Korea)
Spoken languages: Korean, English, Russian (native Uzbek speaker)`,
  },
  {
    id: 'summary',
    category: 'personal',
    content: `Professional summary:
Leo (Ayubkhon Akramov) is a Full-Stack, DevOps & AI Engineer with 5+ years of hands-on experience building scalable web applications and backend systems across South Korean tech startups and international teams.
Proficient in TypeScript, Node.js, NestJS, Next.js, Python and PHP, with a strong focus on clean architecture, type safety and maintainable codebases. Experienced in deploying high-availability production environments with Docker, NGINX and Linux. Specialised in AI-native features: Claude/OpenAI integration, multi-agent workflows, RAG pipelines and OpenCV-based automation. Uses AI coding workflows (Claude Code, Cursor) to own end-to-end features and ship production-grade code on deadline.
His main focus is applied AI: LLM integration (Claude, OpenAI, Gemini), Retrieval-Augmented Generation (RAG), and agentic AI pipelines. His primary stack is Python, TypeScript, NestJS, FastAPI and Next.js.
He works across the whole product: prompt engineering and multi-stage LLM pipelines, backend APIs, frontend integration and deployment. He values clean architecture and maintainable code, and has a strong DevOps background (Docker, NGINX, Linux VPS). He adapts quickly to existing codebases and contributes fast in a team.`,
  },
  {
    id: 'ai-focus',
    category: 'skills',
    content: `AI engineering focus and recent work:
- Builds AI products end to end, solo: from prompt engineering and multi-stage LLM pipeline design through backend API, frontend integration and deployment.
- Recently developed a live, in-production AI ad-creative SaaS on his own — 60,000+ lines of TypeScript.
- Built a multi-tenant agentic RAG chatbot with Python / FastAPI.
- Day-to-day tools: Claude, OpenAI and Google Gemini APIs, RAG, prompt engineering, agentic pipelines.
- Also experienced with OpenCV-based computer vision and NLP for automation solutions.`,
  },
  {
    id: 'experience-finsight',
    category: 'experience',
    content: `Work experience — FinSight (2026):
Position: Full Stack Developer & AI Engineer
Project: FinSight — Deterministic AI Agent for Financial Risk Analysis
Responsibilities:
- Architected a finance-grade AI agent system for payment risk analysis using a strictly deterministic approach where LLMs never perform arithmetic calculations.
- Built automated Python validation workflows that calculate settlement metrics and audit LLM-generated numerical tags [CLAIM: function_name] for absolute accuracy.
- Detected a $305 duplicate-settlement anomaly across 1,468 batches and flagged LLM discrepancy edge cases to human-in-the-loop review queues.
- Designed the core boundaries between deterministic code execution and LLM-driven risk summary generation, using Claude Code for rapid implementation.`,
  },
  {
    id: 'experience-smartfactory',
    category: 'experience',
    content: `Work experience — Smart Factory Ops (2025–2026):
Position: Full Stack Developer & AI Engineer
Project: Smart Factory Ops — Real-Time Due-Date Risk & Full Traceability System
Responsibilities:
- Transformed static UI mockups into a fully functional real-time smart factory monitoring system.
- Engineered due-date reverse calculation logic that aggregates process cycle times to compute delivery risk levels in real time.
- Built full-lifecycle traceability across materials, inspection and testing by linking unit IDs within material lot tables to a single order timeline.
- Resolved complex frontend dropdown state-handling bugs to ensure stable client-server data flow and reliability.
- Used Claude Code to accelerate prototyping and deliver precise, production-ready business logic.`,
  },
  {
    id: 'experience-nomad',
    category: 'experience',
    content: `Work experience — Nomad Industries (2023–2024):
Position: Full Stack Developer
Company: Nomad Industries — South Korea (Freelance)
Responsibilities:
- Built responsive, scalable web applications with Next.js, React, Tailwind CSS and MUI.
- Streamlined client/server state management and API consumption using React Query, Apollo Client, GraphQL and REST APIs.
- Developed low-latency, real-time UI components using WebSockets and Socket.IO.
- Integrated LLM APIs and AI-driven interactive interfaces to deliver intelligent automated features.`,
  },
  {
    id: 'experience-abh',
    category: 'experience',
    content: `Work experience — ABH Digital (2020–2022):
Position: Front-end Developer
Company: ABH Digital — South Korea (Remote)
Responsibilities:
- Built responsive, high-performance web applications using Next.js, React, Tailwind CSS and MUI for South Korean digital products.
- Optimised state management and data fetching with React Query and Apollo Client for REST/GraphQL API integration.
- Implemented real-time, event-driven UI features using WebSockets and Socket.IO.
- Integrated AI-powered interfaces and prompt workflows into the frontend.`,
  },
  {
    id: 'skills-ai',
    category: 'skills',
    content: `AI and Machine Learning skills:
LLM integration (Claude, OpenAI, Google Gemini), RAG (Retrieval-Augmented Generation) system design, agentic AI pipelines, prompt engineering, multi-stage LLM pipeline design, FastAPI for AI backends.
Machine Learning, Deep Learning, Computer Vision (OpenCV), Natural Language Processing (NLP), PyTorch, NumPy, Pandas, Matplotlib, LLaMA, model training and fine-tuning, data preprocessing and augmentation, feature engineering, neural networks (CNNs, RNNs), image processing, model evaluation and optimisation.`,
  },
  {
    id: 'skills-backend',
    category: 'skills',
    content: `Backend development skills:
Node.js, TypeScript, Python, NestJS, Express.js, FastAPI, Next.js (fullstack), PHP.
Databases: MongoDB with Mongoose, MySQL. APIs: GraphQL, REST. Real-time: Socket.IO.
Auth & tooling: JWT, Bcrypt, Multer, Cookie-Parser, Dotenv, DTO/Pipe, RBAC.`,
  },
  {
    id: 'skills-frontend',
    category: 'skills',
    content: `Frontend development skills:
TypeScript, ReactJS (Hooks), Next.js, Redux, Context API, React Native (mobile), SASS/SCSS, Tailwind CSS, Shadcn/UI, Axios, React Query (data fetching/caching), Apollo Client (GraphQL), React-Router-Dom, Framer Motion, Swiper, SweetAlert2.`,
  },
  {
    id: 'skills-devops',
    category: 'skills',
    content: `DevOps and infrastructure skills:
Linux Ubuntu server administration, NGINX (web server and reverse proxy), DNS configuration, firewall security rules, Docker and Docker Compose, PM2 (process management and real-time log monitoring), SSL and domain setup, VPS/VPC engineering, automated restart and high-availability architecture. He has personally designed and operated production infrastructure end to end.`,
  },
  {
    id: 'project-nimora',
    category: 'project',
    content: `Project: Nimora — B2B Jewelry Marketplace
Live URL: www.nimora.cloud
Description: A scalable multi-vendor B2B jewelry e-commerce platform for admins, sellers and customers, built on real-time communication and a scalable commerce architecture.
Key features: role-based authentication and authorisation, Socket.IO real-time chat, real-time notification system, admin dashboard and content management, advanced product search and filtering.
Backend architecture: modular NestJS structure, GraphQL API, JWT auth with RBAC, Socket.IO real-time.
Deployment: designed and operated the whole infrastructure on a Linux Ubuntu VPS; PM2 process management with auto-restart and a real-time log dashboard; NGINX reverse proxy with the nimora.cloud domain and SSL.
Tech stack: Next.js, NestJS, GraphQL, MongoDB, Docker. Infra: Docker, Linux VPS, NGINX, PM2.`,
  },
  {
    id: 'project-nestar',
    category: 'project',
    content: `Project: Nestar — Real Estate Platform
Live URL: www.nestar.uz
Description: A real-estate transaction platform for property agents and developers offering real-time listings, smart search and a modern buying experience.
Key features: seller registration and store management, dynamic property search and filtering, real-time messaging and notifications, role-based access control (RBAC).
Backend and performance: GraphQL-based API architecture, monorepo backend structure (main GraphQL API service, shared reusable libraries, background job processing, real-time WebSocket support), optimised search performance and large-dataset handling with optimised MongoDB queries.
Tech stack: Next.js, NestJS, GraphQL, MongoDB, Docker. Infra: Docker, Linux VPS, NGINX, PM2.`,
  },
  {
    id: 'project-finexa',
    category: 'project',
    content: `Project: Finexa — Personal Finance Dashboard
Live URL: finexa.dev
Description: A personal finance management dashboard showing balance status, income/expense history, budget settings and spending-analysis reports in one screen, with monthly spend flow and per-category patterns visualised as graphs. It auto-classifies spending data and warns of budget overruns so users can grasp their finances at a glance.
Leo's contribution: fullstack, from frontend to backend. Built the balance summary, income/expense, budget management and spending-report screens in Next.js and TypeScript, with Recharts graphs for monthly flow and category patterns. Built the NestJS API server handling transaction processing, budget-overflow detection and automatic spending-category classification.
Tech stack: Next.js, NestJS, TypeScript, Recharts.`,
  },
  {
    id: 'project-bloom',
    category: 'project',
    content: `Project: Bloom Beauty — Beauty & Cosmetics E-commerce
Live URL: bloombeauty.uz
Description: An Uzbekistan-based online beauty/cosmetics shop offering a catalog, brand filtering, promotion banners, product detail pages, wishlist and cart across categories such as nail, facial care and hair care, with discounts. Multi-language: Korean, Russian and English.
Leo's contribution (frontend): responsive product catalog and filtering UI (sort by price / discount, category and brand filters), promo-banner slider, wishlist and shopping-cart interfaces.
Tech stack: React, JavaScript, EJS, HTML, CSS, Axios, Bootstrap, SweetAlert2, Swiper, PixelJS.`,
  },
  {
    id: 'project-face-detection',
    category: 'project',
    content: `Project: Real-time Face Detection System
Description: A real-time AI-based face detection application developed with Python and OpenCV. Detects and tracks faces with high accuracy from live webcam streams.
Key features: real-time frame processing and face detection, bounding-box visualisation and confidence-score calculation (98.63% confidence achieved), Haar Cascade Classifier-based detection model, performance optimisation for smooth real-time detection.
Tech stack: Python, OpenCV, Haar Cascade Classifier, Computer Vision, real-time image processing.`,
  },
  {
    id: 'education',
    category: 'education',
    content: `Education:
University: Haany University, South Korea.
Based in South Korea.`,
  },
  {
    id: 'languages',
    category: 'personal',
    content: `Language ability:
Korean — professional working proficiency.
English — professional working proficiency.
Russian — proficient.
Uzbek — native.
Leo can work and communicate technically across Korean, English and Russian.`,
  },
  {
    id: 'contact',
    category: 'personal',
    content: `How to contact Leo (Ayubkhon Akramov):
Email: akramov.ayubkhan@gmail.com
Phone (South Korea): +821083054111
Phone (Uzbekistan): +998 77 014 56 14
GitHub: https://github.com/aayubkhon
KakaoTalk: ayub701
Telegram: @aayub701
Location: South Korea. Currently open to work (D-10 visa). Email is the fastest way to reach him.`,
  },
]
