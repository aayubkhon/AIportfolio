import type { KnowledgeChunk } from '@/libs/types/rag.types'

export const knowledgeChunks: KnowledgeChunk[] = [
  {
    id: 'personal-info',
    category: 'personal',
    content: `Leo's personal information:
Full name: Ayubkhon Akramov (known as Leo or 레오)
Role: Fullstack & AI Engineer
Location: South Korea
Phone: +821083054111
Email: akramov.ayubkhan@gmail.com
GitHub: github.com/aayubkhon
KakaoTalk: ayub701
Visa: D-10 (job-seeking visa in South Korea)
Languages: Korean and English`,
  },
  {
    id: 'summary',
    category: 'personal',
    content: `Professional summary:
Leo is a Fullstack & AI Engineer with over 4 years of experience building scalable, production-level applications and real-time systems. He specializes in Node.js, React, TypeScript, and NestJS for backend architecture, API design, and modern frontend development. He focuses on clean, maintainable code and builds stable, scalable systems using cloud and container technologies. He actively participates in AI-based projects creating user experiences applicable to real services.
He has experience designing RAG (Retrieval Augmented Generation) systems and intelligent agents capable of reasoning, planning, and interacting with external tools. He is proficient in OpenCV-based computer vision for real-time image and video processing. He has solid understanding of NLP and transformer-based models for conversational AI and semantic understanding.`,
  },
  {
    id: 'experience-arowwai',
    category: 'experience',
    content: `Work Experience at Arowwai Industries (2023–2025):
Position: Fullstack Developer / AI Engineer
Company: Arowwai Industries — Solutions Netherlands
Responsibilities:
- Built scalable NestJS-based backend in monorepo with GraphQL and REST API
- Developed responsive web apps using Next.js, Material UI, Tailwind CSS; optimized state management with React Query and Apollo Client
- Implemented bidirectional real-time communication using WebSockets and Socket.IO
- Managed full container-based deployment on Linux using Docker, NGINX, PM2 ensuring high availability
- Integrated LLM and AI APIs for intelligent automation and enhanced user interaction
- Designed AI backend services with prompt engineering and API orchestration to improve response accuracy and minimize latency`,
  },
  {
    id: 'experience-technest',
    category: 'experience',
    content: `Work Experience at TechNest Digital (2022–2023):
Position: Frontend Developer
Company: TechNest Digital — Tallinn, Estonia
Responsibilities:
- Built scalable NestJS backend architecture in monorepo with GraphQL and REST API
- Developed production-level responsive UI with Next.js, Material UI, Tailwind CSS
- Optimized data flow and state management with React Query and Apollo Client
- Implemented real-time bidirectional communication with WebSockets and Socket.IO
- Managed containerized deployments on Linux server with Docker, NGINX, PM2
- Integrated LLM and AI APIs for intelligent automation and personalized user experience
- Designed AI backend pipeline with prompt engineering and API orchestration`,
  },
  {
    id: 'skills-frontend',
    category: 'skills',
    content: `Frontend development skills:
HTML5, CSS3, JavaScript (ES6+), TypeScript, ReactJS (with Hooks), Redux, Context API, React Native (mobile), SASS/SCSS, Axios, React Query (data fetching and caching), Apollo Client (GraphQL client), React Router DOM, Material UI (MUI), Tailwind CSS, Ant Design, Framer Motion (animations), Socket.IO-Client (real-time), Swiper, SweetAlert2, React-Image-Magnify`,
  },
  {
    id: 'skills-backend',
    category: 'skills',
    content: `Backend development skills:
Node.js, TypeScript, Python, Express.js (REST API), NestJS (scalable Node.js framework), Next.js (fullstack), PHP, MongoDB with Mongoose, MySQL, GraphQL, JWT authentication, Bcryptjs (password hashing), Multer (file upload), Socket.IO (real-time), Express Session, Cookie-Parser, EJS, ShellJS, Dotenv, Pipe, DTO`,
  },
  {
    id: 'skills-devops',
    category: 'skills',
    content: `DevOps and infrastructure skills:
Linux Ubuntu server administration, NGINX (web server and reverse proxy), DNS configuration, Firewall security rules, Docker and Docker Compose (containerization), PM2 Plus (process management and real-time log monitoring), Docker volumes for persistent storage, VPS/VPC engineering, automated restart and high-availability architecture configuration`,
  },
  {
    id: 'skills-ai',
    category: 'skills',
    content: `AI and Machine Learning skills:
Machine Learning, Deep Learning, Computer Vision (CV) with OpenCV, Natural Language Processing (NLP), PyTorch (neural network framework), NumPy, Pandas (data processing), Matplotlib (visualization), LLaMA (large language model), Model Training and Fine-tuning, Data Preprocessing and Augmentation, Feature Engineering, Neural Networks (CNNs for image tasks, RNNs), Image Processing, Model Evaluation and Optimization, RAG (Retrieval Augmented Generation) system design, Intelligent agent design, Prompt Engineering, LLM API integration`,
  },
  {
    id: 'project-nimora',
    category: 'project',
    content: `Project: Nimora — Jewelry E-commerce Platform
Live URL: www.nimora.cloud
Description: A highly scalable multi-vendor B2B jewelry e-commerce platform supporting efficient interactions between administrators, sellers, and customers. Built from scratch with MVC architecture.
Key Features: Role-based user authentication (Admin/Seller/Customer), My Page profile management, jewelry product registration with dynamic filtering system, real-time chat via Socket.IO, real-time notification system, follow/comment/like features, shopping cart and order payment, dynamic management of notices FAQ and terms of service, responsive layout for mobile and desktop.
Tech Stack — Frontend: HTML5, TypeScript, ReactJS, Redux, Context API, SCSS, MUI, Ant Design, Axios, Socket.IO-Client, React-Router-Dom, Framer Motion. Backend: Node.js, NestJS, TypeScript, MongoDB, Mongoose, Socket.IO, JWT, Bcrypt, Multer. DevOps: Linux Ubuntu, Docker, Docker Compose, NGINX, PM2 Plus, VPS engineering.`,
  },
  {
    id: 'project-nestar',
    category: 'project',
    content: `Project: Nestar — Real Estate Platform
Live URL: www.nestar.uz
Description: A scalable B2C real estate transaction platform for property agents and developers offering real-time listings, smart search, and modern buying experience. Full-stack AI project.
Key Features: Role-based authentication (Admin/Agent/User), property listing and status management, advanced filtering by category and attributes, low-latency search on large datasets, real-time chat and notifications via Socket.IO, follow/comment/like, seller storefront and dashboard, responsive layout, RBAC with SELLERGUARD middleware.
Tech Stack — Frontend: TypeScript, ReactJS, NextJS, Redux, SCSS, MUI, Ant Design, Axios, Socket.IO-Client. Backend: Node.js, NestJS, TypeScript, GraphQL, MongoDB, Mongoose, Socket.IO, JWT. DevOps: Linux Ubuntu, Docker, NGINX, PM2. Architecture: Monorepo with Main API (GraphQL + WebSocket), Batch Processing, Shared Libraries.`,
  },
  {
    id: 'project-autodecar',
    category: 'project',
    content: `Project: AutoDecar — Car Management System
Description: A comprehensive web platform for automobile dealership vehicle listing management and customer service operations. Includes a responsive customer-facing website and a powerful admin dashboard.
Contributions: Customer website and admin dashboard UI design and implementation, vehicle search and filtering and detail page development, responsive layout for mobile and desktop and cross-browser, performance optimization, stable and intuitive user experience.`,
  },
  {
    id: 'project-finexa',
    category: 'project',
    content: `Project: Finexa — Financial Operations Dashboard
Description: A financial operations dashboard platform designed to simplify payment processing, revenue tracking, and budget analysis. Provides real-time financial data visualization and admin performance monitoring.
Contributions: Financial dashboard UI design and implementation, revenue/expense/budget data visualization components, responsive layout (mobile/desktop/cross-browser), performance optimization, stable and intuitive user experience.`,
  },
  {
    id: 'project-kafe',
    category: 'project',
    content: `Project: Kafe — Small E-commerce Platform
Description: A full-stack e-commerce platform built for small businesses and local coffee shops to manage online sales.
Key Features: Store owner signup and product registration management, order processing and status tracking system, user role and platform management via admin panel.
Tech Stack: Frontend — React (TypeScript). Backend — Express.js (REST API). Database — MongoDB, Mongoose.`,
  },
  {
    id: 'project-fitclub',
    category: 'project',
    content: `Project: The Fit Club — Fitness Web Platform
Description: A fitness and gym web platform developed with React, implementing fully responsive UI for both desktop and mobile.
Key Features: Exercise program and fitness content exploration, dynamic routing and reusable component structure, responsive layout with Tailwind CSS, email inquiry functionality.
Tech Stack: React.js, JavaScript, React Hooks, React Router DOM v6, Tailwind CSS, REST API.`,
  },
  {
    id: 'project-face-detection',
    category: 'project',
    content: `Project: Real-time Face Detection System
Description: A real-time AI-based face detection application developed with Python and OpenCV. Detects and tracks faces with high accuracy from live webcam streams.
Key Features: Real-time frame processing and face detection, bounding box visualization and confidence score calculation (98.63% confidence achieved), Haar Cascade Classifier-based detection model, performance optimization for smooth real-time detection.
Tech Stack: Python, OpenCV, Haar Cascade Classifier, Computer Vision, Real-Time Image Processing.`,
  },
  {
    id: 'education',
    category: 'education',
    content: `Education:
University: Daegu Hanny University (대구한의대 대학교)
Department: School of Global Tourism, Aviation Service Major (글로벌관광학부 항공서비스학전공과)
Period: 2021–2025
Currently based in South Korea with D-10 job-seeking visa.`,
  },
  {
    id: 'soft-skills',
    category: 'personal',
    content: `Soft skills and personal traits:
Strong communication and teamwork skills — able to effectively contribute in cross-functional collaborative environments. Able to convey complex technical concepts in clear and actionable forms. Problem-solving mindset even under pressure. High attention to detail. Strong commitment to continuous growth and learning. Consistent performance track record.`,
  },
]
