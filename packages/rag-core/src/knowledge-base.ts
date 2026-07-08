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
Phone: +821083054111
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
Leo (Ayubkhon Akramov) is an AI Engineer & Fullstack Developer with 4+ years of hands-on experience taking production-level applications from design through deployment and operations — often on his own.
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
    id: 'experience-arowwai',
    category: 'experience',
    content: `Work experience — Arowwai Industries (2023–2025):
Position: Fullstack Developer & AI Engineer
Company: Arowwai Industries — Solutions Netherlands (Remote)
Responsibilities:
- Built a scalable NestJS monorepo backend with a maintainable GraphQL / REST data layer.
- Developed responsive web apps with Next.js and Tailwind CSS; optimised state management with React Query and Apollo Client.
- Implemented real-time bidirectional communication using Socket.IO.
- Managed Linux server deployment and operations with Docker, NGINX and PM2, ensuring high availability.
- Integrated LLM and AI APIs for intelligent automation features.`,
  },
  {
    id: 'experience-technest',
    category: 'experience',
    content: `Work experience — TechNest Digital (2022–2023):
Position: Frontend Developer
Company: TechNest Digital — Tallinn, Estonia
Responsibilities:
- Designed and implemented responsive web application UI with React, TypeScript and SCSS.
- Optimised data flow and user experience via REST API integration and state management (Redux, Context API).
- Performed cross-browser compatibility optimisation and designed a reusable component structure.
- Actively participated in Git-based version control and code review in a team environment.`,
  },
  {
    id: 'experience-pixelcraft',
    category: 'experience',
    content: `Work experience — PixelCraft Studios (2021–2022):
Position: Frontend Developer
Company: PixelCraft Studios — Tashkent, Uzbekistan
Responsibilities:
- Built and maintained the company website using HTML, CSS, JavaScript and React.
- Implemented responsive designs optimised across a range of devices and screen sizes.
- Collaborated with the design team to implement custom graphics, animations and transitions.
- Helped manage an efficient deployment process and actively reviewed project quality.`,
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
University: Daegu Haany University (대구한의대 대학교)
Department: School of Global Tourism, Aviation Service Major
Period: 2021–2025
Based in South Korea on a D-10 job-seeking visa. Self-trained as a software engineer in parallel with his studies.`,
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
Phone: +821083054111
GitHub: https://github.com/aayubkhon
KakaoTalk: ayub701
Telegram: @aayub701
Location: South Korea. Currently open to work (D-10 visa). Email is the fastest way to reach him.`,
  },
]
