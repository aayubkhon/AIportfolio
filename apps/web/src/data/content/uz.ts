import type { LocalizedStrings } from '@/libs/types/content.types'

export const uz: LocalizedStrings = {
  nav: {
    home: 'Bosh sahifa',
    about: 'Men haqimda',
    skills: "Ko'nikmalar",
    work: 'Loyihalar',
    journey: 'Tajriba',
    assistant: "AI'dan so'rash",
    contact: 'Aloqa',
  },
  hero: {
    availability: "Ishga tayyor · D-10 vizasi",
    tagline:
      "AI mahsulotlarini boshidan oxirigacha quraman — LLM pipeline'dan backend API'gacha va ekrandagi pikselgacha.",
    viewWork: "Loyihalarni ko'rish",
    askAI: "AI'dan so'rash",
  },
  profile: {
    role: 'AI muhandisi va Fullstack dasturchi',
    location: 'Janubiy Koreya',
  },
  stats: ['Yillik tajriba', "Yakka yozilgan qatorlar", 'Mahsulot yetkazildi', 'Til biladi'],
  about: {
    eyebrow: '01 · Men haqimda',
    title: 'Avvalo muhandis, odat bilan universal',
    subtitle: "Bir funksiyani boshidan oxirigacha o'zim olib borishni yoqtiraman — ma'lumotlar bazasi sxemasidan tortib ekranga chiqadigan pikselgacha.",
    bio: [
      "AI muhandisi va fullstack dasturchi, 5+ yillik tajriba bilan produksiya darajasidagi ilovalarni dizayndan deploy va operatsiyagacha — odatda yakka — olib boraman. Kundalik ishim: LLM integratsiyasi (Claude, OpenAI, Gemini), RAG va agentli AI pipeline'lar, asosan Python, TypeScript, NestJS, FastAPI va Next.js'da.",
      "AI mahsulotini to'liq o'zim olib borishni yoqtiraman: prompt engineering va ko'p bosqichli LLM pipeline'lardan backend, frontend va u ishlaydigan ser- vergacha. Yaqinda yakka o'zim jonli AI reklama-kreativ SaaS (60k+ qator TypeScript) ishlab chiqdim va Python/FastAPI'da multi-tenant agentli RAG chatbot qurdim.",
    ],
  },
  skills: {
    eyebrow: "02 · Ko'nikmalar",
    title: 'Haqiqatan ishga tushadigan stack',
    subtitle: "Muammo qayerda ekaniga qarab tanlaydigan to'rtta bir-birini to'ldiruvchi to'plam.",
    groups: {
      ai: 'AI / LLM muhandisligi',
      backend: 'Backend tizimlar',
      frontend: 'Mahsulot Frontend',
      devops: 'Infratuzilma va DevOps',
    },
  },
  work: {
    eyebrow: '03 · Loyihalar',
    title: 'Tanlangan loyihalar',
    subtitle: "Qilgan ishlarimning bir qismi — savdo, ko'chmas mulk, moliya va bir oz kompyuter ko'rish.",
    projects: {
      nimora: {
        tagline: "B2B zargarlik ko'p sotuvchili marketplace",
        description:
          "Administrator, sotuvchi va xaridorlarni bog'lovchi kengayuvchan ko'p sotuvchili savdo platformasi. Rolga asoslangan autentifikatsiya, kengaytirilgan mahsulot qidiruvi va filtrlash, Socket.IO real vaqt chat va bildirishnomalar, admin kontent paneli — Docker, NGINX va PM2 bilan Linux VPS'ga yakka deploy qilingan.",
      },
      nestar: {
        tagline: "Ko'chmas mulk bitimlari platformasi",
        description:
          "Agent va quruvchilar uchun ko'chmas mulk marketplace'i: katta ma'lumotlar bo'yicha dinamik qidiruv va filtrlash, real vaqt xabar almashinuvi, RBAC va GraphQL API, fon vazifalari hamda umumiy kutubxonalarni ajratuvchi monorepo backend — optimallashtirilgan MongoDB so'rovlari bilan.",
      },
      finexa: {
        tagline: 'Shaxsiy moliya paneli · fullstack',
        description:
          "Balans, daromad/xarajat tarixi, byudjet va xarajat hisobotlarini bitta ekranga jamlaydigan moliya paneli. Recharts oylik oqim va kategoriya naqshlarini vizuallashtiradi; NestJS API tranzaksiyalarni avtomatik tasniflaydi va byudjetdan oshib ketishni ogohlantiradi.",
      },
      bloom: {
        tagline: "Ko'p tilli go'zallik e-commerce",
        description:
          "O'zbekistondagi go'zallik va kosmetika do'konining vitrinasi: narx/chegirma bo'yicha saralash va kategoriya-brend filtrlari bilan moslashuvchan katalog, promo-banner slayder, istaklar ro'yxati va savat — koreys, rus va ingliz tillarida.",
      },
      'face-detection': {
        tagline: "Kompyuter ko'rish, jonli veb-kamera",
        description:
          "Python + OpenCV ilovasi jonli oqimdan yuzlarni real vaqtda aniqlaydi va kuzatadi, Haar Cascade klassifikatori va kadr darajasidagi optimallashtirish bilan 98,63% ishonchga erishadi.",
      },
    },
  },
  journey: {
    eyebrow: '04 · Tajriba',
    title: "Bosib o'tgan yo'lim",
    subtitle: 'Ish va ta’lim, eng yangisidan boshlab.',
    items: {
      finsight: {
        role: "Fullstack dasturchi va AI muhandisi",
        location: "FinSight · Deterministik AI agent",
        bullets: [
          "To'lov risklarini tahlil qiluvchi moliyaviy darajadagi AI agentni loyihaladim — LLM hech qachon arifmetik hisob qilmaydi.",
          "Hisob-kitob ko'rsatkichlarini hisoblaydigan va LLM yaratgan [CLAIM: function_name] teglarini tekshiradigan Python workflow'larini qurdim.",
          "1 468 ta batch ichida $305 lik takroriy hisob-kitob anomaliyasini topdim va LLM nomuvofiqliklarini human-in-the-loop tekshiruviga yo'naltirdim.",
          "Deterministik kod va LLM risk xulosalari orasidagi chegarani loyihaladim, Claude Code bilan tez amalga oshirdim.",
        ],
      },
      smartfactory: {
        role: "Fullstack dasturchi va AI muhandisi",
        location: "Smart Factory Ops · Muddat riski va kuzatuvchanlik",
        bullets: [
          "Statik UI maketlarni to'liq ishlaydigan real vaqt smart-zavod monitoring tizimiga aylantirdim.",
          "Jarayon sikl vaqtlarini jamlab, real vaqtda yetkazib berish risk darajasini hisoblaydigan teskari hisoblash mantiqini yaratdim.",
          "Unit ID'larni yagona buyurtma timeline'iga bog'lab, material, inspeksiya va test bo'yicha to'liq kuzatuvchanlikni qurdim.",
          "Murakkab dropdown holat xatolarini tuzatdim; Claude Code bilan tez prototiplashtirdim.",
        ],
      },
      nomad: {
        role: "Fullstack dasturchi",
        location: "Nomad Industries · Janubiy Koreya (Freelance)",
        bullets: [
          "Next.js, React, Tailwind CSS va MUI bilan moslashuvchan, kengayuvchan veb-ilovalar qurdim.",
          "React Query, Apollo Client, GraphQL va REST bilan holat boshqaruvi va API ishlatishni soddalashtirdim.",
          "WebSockets va Socket.IO bilan past kechikishli real vaqt UI komponentlarini ishlab chiqdim.",
          "Aqlli avtomatlashtirilgan funksiyalar uchun LLM API va AI interfeyslarini integratsiya qildim.",
        ],
      },
      abh: {
        role: "Frontend dasturchi",
        location: "ABH Digital · Janubiy Koreya (Masofaviy)",
        bullets: [
          "Next.js, React, Tailwind CSS va MUI bilan yuqori unumli moslashuvchan veb-ilovalar qurdim.",
          "React Query va Apollo Client bilan REST/GraphQL ma'lumot olishni optimallashtirdim.",
          "WebSockets va Socket.IO bilan real vaqt, event-driven UI funksiyalarini amalga oshirdim.",
          "AI interfeyslari va prompt workflow'larini frontendga integratsiya qildim.",
        ],
      },
      haany: {
        role: "Haany universiteti",
        location: "Janubiy Koreya",
        bullets: [
          "Koreys, ingliz va rus tillarini yaxshi bilaman; o'zbek tili — ona tilim.",
        ],
      },
    },
  },
  assistant: {
    eyebrow: "05 · AI'dan so'rash",
    title: 'Portfoliom bilan suhbatlashing',
    subtitle: "Oddiy bot emas — javoblarni haqiqiy rezyume va loyihalarimdan oladi.",
    points: [
      'Javoblar haqiqiy tajribamga asoslangan',
      'Gemini asosidagi RAG (qidiruv bilan kuchaytirilgan)',
      "Ingliz, koreys, rus yoki o'zbek tilida so'rang",
    ],
    hintPrefix: 'Masalan:',
  },
  contact: {
    eyebrow: '05 · Aloqa',
    title: 'Keling, birga nimadir quraylik',
    lead: "Vakansiya, loyiha yoki oddiy savolmi? Menga eng tez yo'l — email; odatda bir kun ichida javob beraman.",
    footerBuilt: "Next.js · RAG · va ko'p qahva bilan qurilgan",
    socials: {
      email: 'Email',
      github: 'GitHub',
      telegram: 'Telegram',
      kakao: 'KakaoTalk',
      phone: 'Telefon',
    },
  },
}
