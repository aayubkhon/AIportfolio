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
      "AI muhandisi va fullstack dasturchi, 4+ yillik tajriba bilan produksiya darajasidagi ilovalarni dizayndan deploy va operatsiyagacha — odatda yakka — olib boraman. Kundalik ishim: LLM integratsiyasi (Claude, OpenAI, Gemini), RAG va agentli AI pipeline'lar, asosan Python, TypeScript, NestJS, FastAPI va Next.js'da.",
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
      arowwai: {
        role: 'Fullstack dasturchi va AI muhandisi',
        location: 'Niderlandiya · Masofaviy',
        bullets: [
          "GraphQL / REST bilan qo'llab-quvvatlanadigan ma'lumot qatlamiga ega kengayuvchan NestJS monorepo backend qurdim.",
          "React Query va Apollo Client bilan holatni optimallashtirib, moslashuvchan Next.js + Tailwind ilovalarini ishlab chiqdim.",
          "Socket.IO orqali real vaqt ikki tomonlama aloqani amalga oshirdim.",
          "Docker, NGINX va PM2 bilan Linux deploy va operatsiyani yuqori ishonchlilik uchun boshqardim.",
          "Aqlli avtomatlashtirish uchun LLM va AI API'larni integratsiya qildim.",
        ],
      },
      technest: {
        role: 'Frontend dasturchi',
        location: 'Tallin, Estoniya',
        bullets: [
          'React, TypeScript va SCSS bilan moslashuvchan veb-UI loyihaladim va qurdim.',
          "REST integratsiyasi va holat boshqaruvi (Redux, Context API) bilan ma'lumot oqimini optimallashtirdim.",
          "Cross-brauzer optimallashtirish va qayta ishlatiladigan komponent arxitekturasi bilan shug'ullandim.",
          'Git asosidagi jamoaviy jarayonda faol kod-review qildim.',
        ],
      },
      pixelcraft: {
        role: 'Frontend dasturchi',
        location: 'Toshkent, O‘zbekiston',
        bullets: [
          'HTML, CSS, JavaScript va React bilan kompaniya saytini qurdim va qo‘llab-quvvatladim.',
          "Turli qurilma va ekran o'lchamlariga moslashgan responsive maketlarni amalga oshirdim.",
          'Dizayn jamoasi bilan maxsus grafika, animatsiya va o‘tishlarni yaratdim.',
          'Samarali deploy jarayonini boshqarishga yordam berdim va loyiha sifatini tekshirdim.',
        ],
      },
      daegu: {
        role: 'Daegu Haany universiteti',
        location: 'Daegu, Janubiy Koreya',
        bullets: [
          "Koreyada o'qib, parallel ravishda dasturiy muhandis sifatida mustaqil o'rgandim.",
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
    eyebrow: '06 · Aloqa',
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
