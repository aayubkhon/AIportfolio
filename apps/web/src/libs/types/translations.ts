export type Language = 'en' | 'ko' | 'uz' | 'ru';

export interface Translation {
  welcomeMessage: string;
  assistantTitle: string;
  assistantSubtitle: string;
  activeStatus: string;
  inputPlaceholder: string;
  aboutTab: string;
  skillsTab: string;
  bioTitle: string;
  bioText1: string;
  bioText2: string;
  eduTitle: string;
  eduUni: string;
  eduDate: string;
  eduLocation: string;
  eduMajor: string;
  langTitle: string;
  langEn: string;
  langKo: string;
  personalInfoTitle: string;
  contactTitle: string;
  locationTitle: string;
  locationValue: string;
  visaValue: string;
  suggestions: string[];
}

export const translations: Record<Language, Translation> = {
  en: {
    welcomeMessage: "Hello! I'm **Leo's AI Assistant**. Ask me anything about Leo's experience, skills, or projects. 😊",
    assistantTitle: "Leo AI Assistant",
    assistantSubtitle: "Powered by Gemini + RAG · Ask about Leo",
    activeStatus: "Active",
    inputPlaceholder: "Ask something about Leo... (Enter to send)",
    aboutTab: "About",
    skillsTab: "Skills",
    bioTitle: "Professional Bio",
    bioText1: "Fullstack & AI Engineer with 4+ years of experience building scalable backend architectures and interactive real-time experiences.",
    bioText2: "Specializes in modern TypeScript web ecosystems (Next.js, NestJS) and designing intelligent Agentic/RAG systems.",
    eduTitle: "Education",
    eduUni: "Daegu Hanny University",
    eduDate: "2021–2025",
    eduLocation: "Daegu, South Korea",
    eduMajor: "Global Tourism & Aviation Service Major",
    langTitle: "Languages",
    langEn: "English",
    langKo: "Korean",
    personalInfoTitle: "Personal Info",
    contactTitle: "Quick Contacts",
    locationTitle: "Location",
    locationValue: "South Korea",
    visaValue: "Visa D-10",
    suggestions: [
      "What are Leo's main skills?",
      "Tell me about the Nimora project",
      "What's Leo's work experience?",
      "How can I contact Leo?",
    ],
  },
  ko: {
    welcomeMessage: "안녕하세요! **레오(Leo)의 AI 비서**입니다. 레오의 경력, 기술, 프로젝트에 대해 무엇이든 물어보세요. 😊",
    assistantTitle: "레오 AI 어시스턴트",
    assistantSubtitle: "Gemini + RAG 기반 · 레오에 대해 질문하기",
    activeStatus: "활성 상태",
    inputPlaceholder: "레오에 대해 궁금한 점을 입력하세요... (Enter 전송)",
    aboutTab: "프로필",
    skillsTab: "보유 기술",
    bioTitle: "전문가 소개",
    bioText1: "확장 가능한 백엔드 아키텍처와 인터랙티브 실시간 사용자 경험을 구축해 온 4년 이상의 경력을 가진 풀스택 & AI 엔지니어입니다.",
    bioText2: "현대적인 TypeScript 웹 생태계(Next.js, NestJS)와 지능형 에이전트/RAG 시스템 설계에 특화되어 있습니다.",
    eduTitle: "학력",
    eduUni: "대구한의대학교",
    eduDate: "2021년 ~ 2025년",
    eduLocation: "대한민국 대구광역시",
    eduMajor: "글로벌관광학부 항공서비스학 전공",
    langTitle: "외국어 능력",
    langEn: "영어",
    langKo: "한국어",
    personalInfoTitle: "인적 사항",
    contactTitle: "빠른 연락처",
    locationTitle: "거주지",
    locationValue: "대한민국",
    visaValue: "구직 비자 (D-10)",
    suggestions: [
      "레오의 주요 기술은 무엇인가요?",
      "Nimora 프로젝트에 대해 설명해주세요",
      "레오의 실무 경력은 어떻게 되나요?",
      "레오에게 어떻게 연락할 수 있나요?",
    ],
  },
  uz: {
    welcomeMessage: "Assalomu alaykum! Men **Leoning sun'iy intellekt yordamchisiman**. Mendan Leoning tajribasi, ko'nikmalari yoki loyihalari haqida so'rang. 😊",
    assistantTitle: "Leo AI Assistant",
    assistantSubtitle: "Gemini + RAG tizimi · Leo haqida so'rash",
    activeStatus: "Faol",
    inputPlaceholder: "Leo haqida biror narsa so'rang... (Yuborish uchun Enter)",
    aboutTab: "Men haqimda",
    skillsTab: "Ko'nikmalar",
    bioTitle: "Kasbiy Biografiya",
    bioText1: "Yuqori darajada kengayuvchi backend arxitekturalari va real vaqtdagi interaktiv interfeyslarni yaratish bo'yicha 4 yildan ortiq tajribaga ega Fullstack & AI muhandisi.",
    bioText2: "Zamonaviy TypeScript web ekotizimi (Next.js, NestJS) hamda intellektual Agent/RAG tizimlarini loyihalashga ixtisoslashgan.",
    eduTitle: "Ma'lumot",
    eduUni: "Daegu Hanny Universiteti",
    eduDate: "2021–2025",
    eduLocation: "Daegu, Janubiy Koreya",
    eduMajor: "Global Turizm va Aviatsiya Xizmati mutaxassisligi",
    langTitle: "Tillar",
    langEn: "Ingliz tili",
    langKo: "Koreys tili",
    personalInfoTitle: "Shaxsiy Ma'lumot",
    contactTitle: "Tezkor Kontaktlar",
    locationTitle: "Manzil",
    locationValue: "Janubiy Koreya",
    visaValue: "Visa D-10 (Ish qidirish)",
    suggestions: [
      "Leoning asosiy ko'nikmalari nimalardan iborat?",
      "Nimora loyihasi haqida aytib bering",
      "Leoning ish tajribasi qanday?",
      "Leo bilan qanday bog'lansam bo'ladi?",
    ],
  },
  ru: {
    welcomeMessage: "Здравствуйте! Я **ИИ-ассистент Лео**. Спросите меня о его опыте, навыках или проектах. 😊",
    assistantTitle: "ИИ-ассистент Лео",
    assistantSubtitle: "На базе Gemini + RAG · Спросите о Лео",
    activeStatus: "Онлайн",
    inputPlaceholder: "Спросите что-нибудь о Лео... (Enter — отправить)",
    aboutTab: "Обо мне",
    skillsTab: "Навыки",
    bioTitle: "Профессиональная биография",
    bioText1: "ИИ-инженер и фулстек-разработчик с опытом 4+ года: от проектирования до деплоя и эксплуатации продакшн-приложений.",
    bioText2: "Специализируется на интеграции LLM (Claude, OpenAI, Gemini), RAG и агентных ИИ-пайплайнах на Python, TypeScript, NestJS и Next.js.",
    eduTitle: "Образование",
    eduUni: "Университет Тэгу Хани",
    eduDate: "2021–2025",
    eduLocation: "Тэгу, Южная Корея",
    eduMajor: "Глобальный туризм и авиасервис",
    langTitle: "Языки",
    langEn: "Английский",
    langKo: "Корейский",
    personalInfoTitle: "Личная информация",
    contactTitle: "Быстрые контакты",
    locationTitle: "Местоположение",
    locationValue: "Южная Корея",
    visaValue: "Виза D-10 (поиск работы)",
    suggestions: [
      "Какие основные навыки у Лео?",
      "Расскажи о проекте Nimora",
      "Какой у Лео опыт работы?",
      "Как связаться с Лео?",
    ],
  },
};
