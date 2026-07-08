// Language-invariant data: names, tech stacks, URLs, images, ids. The
// translatable strings live in ./content/<lang>.ts and are merged with this in
// getLocalizedPortfolio(). Editing a project's stack or link? Do it here once.

export interface BaseProfile {
  name: string;
  alias: string;
  email: string;
  photo: string;
}

export interface BaseSkillGroup {
  id: string;
  glyph: string;
  skills: string[];
}

export interface BaseProject {
  id: string;
  name: string;
  stack: string[];
  image: string;
  year: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface BaseExperience {
  id: string;
  company: string;
  period: string;
}

export interface BaseSocial {
  id: "email" | "github" | "telegram" | "kakao" | "phone";
  handle: string;
  href: string;
}

export const baseProfile: BaseProfile = {
  name: "Ayubkhon Akramov",
  alias: "Leo · 레오",
  email: "akramov.ayubkhan@gmail.com",
  photo: "/images/portrait.jpg",
};

export const statValues = ["4+", "60K+", "15+", "3"] as const;

// Section order for the nav + scroll spy; labels come from the localized strings.
export const navOrder = [
  "home",
  "about",
  "skills",
  "work",
  "journey",
  "assistant",
  "contact",
] as const;

export const skillGroupsBase: BaseSkillGroup[] = [
  {
    id: "ai",
    glyph: "◈",
    skills: [
      "LLM integration — Claude · OpenAI · Gemini",
      "RAG pipeline design",
      "Agentic AI pipelines",
      "Prompt engineering",
      "FastAPI (AI backends)",
      "Computer Vision (OpenCV)",
      "NLP & transformers",
      "PyTorch · fine-tuning",
    ],
  },
  {
    id: "backend",
    glyph: "⬡",
    skills: [
      "NestJS",
      "Node.js",
      "Python",
      "GraphQL",
      "REST APIs",
      "MongoDB · Mongoose",
      "MySQL",
      "Socket.IO",
      "JWT · RBAC",
    ],
  },
  {
    id: "frontend",
    glyph: "◐",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "React Query",
      "Apollo Client",
      "React Native",
      "Shadcn/UI",
    ],
  },
  {
    id: "devops",
    glyph: "⬢",
    skills: [
      "Docker",
      "NGINX (reverse proxy)",
      "PM2",
      "Linux VPS / Ubuntu",
      "DNS · Firewall",
      "SSL · domains",
      "High-availability setup",
    ],
  },
];

export const projectsBase: BaseProject[] = [
  {
    id: "nimora",
    name: "Nimora",
    stack: ["Next.js", "NestJS", "GraphQL", "MongoDB", "Docker"],
    image: "/images/projects/nimora.jpg",
    year: "2025",
    // site serves over HTTP (no SSL yet) — https just times out
    liveUrl: "http://nimora.cloud",
  },
  {
    id: "nestar",
    name: "Nestar",
    stack: ["Next.js", "NestJS", "GraphQL", "MongoDB", "Socket.IO"],
    image: "/images/projects/nestar.jpg",
    year: "2026",
    // apex over HTTP works; www returns 502 and https has no cert
    liveUrl: "http://nestar.uz",
  },
  {
    id: "finexa",
    name: "Finexa",
    stack: ["Next.js", "NestJS", "TypeScript", "Recharts"],
    image: "/images/projects/finexa.jpg",
    year: "2024",
    liveUrl: "https://finexa.dev",
  },
  {
    id: "bloom",
    name: "Bloom Beauty",
    stack: ["React", "JavaScript", "Axios", "Swiper"],
    image: "/images/projects/bloom.jpg",
    year: "2024",
    liveUrl: "https://bloombeauty.uz",
  },
  {
    id: "face-detection",
    name: "Real-time Face Detection",
    stack: ["Python", "OpenCV", "Haar Cascade", "Computer Vision"],
    image: "/images/projects/face-detection-cv.svg",
    year: "2026",
  },
];

export const experienceBase: BaseExperience[] = [
  { id: "arowwai", company: "Arowwai Industries", period: "2023 — 2025" },
  { id: "technest", company: "TechNest Digital", period: "2022 — 2023" },
  { id: "pixelcraft", company: "PixelCraft Studios", period: "2021 — 2022" },
  { id: "daegu", company: "Daegu Haany University", period: "2021 — 2025" },
];

export const socialsBase: BaseSocial[] = [
  {
    id: "email",
    handle: "akramov.ayubkhan@gmail.com",
    href: "mailto:akramov.ayubkhan@gmail.com",
  },
  {
    id: "github",
    handle: "github.com/aayubkhon",
    href: "https://github.com/aayubkhon",
  },
  { id: "telegram", handle: "@ayub701", href: "https://t.me/ayub701" },
  { id: "kakao", handle: "ayub701", href: "#" },
  { id: "phone", handle: "+82 10 8305 4111", href: "tel:+821083054111" },
];
