import type { LocalizedStrings } from '@/libs/types/content.types'

export const ko: LocalizedStrings = {
  nav: {
    home: '홈',
    about: '소개',
    skills: '기술',
    work: '프로젝트',
    journey: '경력',
    assistant: 'AI 질문',
    contact: '연락처',
  },
  hero: {
    availability: '구직 중 · D-10 비자',
    tagline:
      'AI 제품을 처음부터 끝까지 만듭니다 — LLM 파이프라인부터 백엔드 API, 그리고 배포되는 화면까지.',
    viewWork: '프로젝트 보기',
    askAI: 'AI에게 질문',
  },
  profile: {
    role: 'AI 엔지니어 & 풀스택 개발자',
    location: '대한민국',
  },
  stats: ['년차 경력', '혼자 작성한 코드 라인', '완성한 제품', '구사 언어'],
  about: {
    eyebrow: '01 · 소개',
    title: '엔지니어, 그리고 제너럴리스트',
    subtitle: '데이터베이스 스키마부터 배포되는 화면까지, 기능 하나를 끝까지 책임지고 만드는 걸 좋아합니다.',
    bio: [
      'AI 엔지니어이자 풀스택 개발자로 4년 넘게 설계부터 배포·운영까지 프로덕션 레벨 애플리케이션을 직접 맡아 왔습니다. 주로 LLM 연동(Claude, OpenAI, Gemini), RAG, 에이전틱 AI 파이프라인을 다루며 Python, TypeScript, NestJS, FastAPI, Next.js를 주력으로 사용합니다.',
      '프롬프트 엔지니어링과 멀티스테이지 LLM 파이프라인부터 백엔드, 프론트엔드, 배포 서버까지 AI 제품을 처음부터 끝까지 혼자 만듭니다. 최근에는 실제 서비스 중인 AI 광고 크리에이티브 SaaS(TypeScript 6만 줄 이상)를 혼자 개발했고, Python/FastAPI로 멀티테넌트 에이전틱 RAG 챗봇도 만들었습니다.',
    ],
  },
  skills: {
    eyebrow: '02 · 기술',
    title: '실제로 배포하는 스택',
    subtitle: '문제가 어디에 있느냐에 따라 골라 쓰는 네 가지 도구 모음입니다.',
    groups: {
      ai: 'AI / LLM 엔지니어링',
      backend: '백엔드 시스템',
      frontend: '프로덕트 프론트엔드',
      devops: '인프라 & DevOps',
    },
  },
  work: {
    eyebrow: '03 · 프로젝트',
    title: '주요 프로젝트',
    subtitle: '커머스, 부동산, 금융, 그리고 약간의 컴퓨터 비전 — 그동안 만든 것들의 일부입니다.',
    projects: {
      nimora: {
        tagline: 'B2B 주얼리 멀티 벤더 마켓플레이스',
        description:
          '관리자·판매자·구매자를 잇는 확장 가능한 멀티 벤더 커머스 플랫폼입니다. 역할 기반 인증, 고급 상품 검색·필터링, Socket.IO 실시간 채팅·알림, 관리자 콘텐츠 대시보드를 갖췄으며 Docker·NGINX·PM2로 Linux VPS에 직접 배포했습니다.',
      },
      nestar: {
        tagline: '부동산 거래 플랫폼',
        description:
          '에이전트와 개발사를 위한 부동산 마켓플레이스입니다. 대용량 데이터에 대한 동적 검색·필터링, 실시간 메시징, RBAC, 그리고 GraphQL API·백그라운드 작업·공유 라이브러리를 분리한 모노레포 백엔드와 최적화된 MongoDB 쿼리를 구현했습니다.',
      },
      finexa: {
        tagline: '개인 재무 대시보드 · 풀스택',
        description:
          '잔액, 수입/지출 내역, 예산, 지출 리포트를 한 화면에 모아주는 재무 대시보드입니다. Recharts로 월별 흐름과 카테고리 패턴을 시각화하고, NestJS API가 거래를 자동 분류하며 예산 초과를 알려줍니다.',
      },
      bloom: {
        tagline: '다국어 뷰티 이커머스',
        description:
          '우즈베키스탄 뷰티·화장품 쇼핑몰의 스토어프론트입니다. 가격/할인순 정렬과 카테고리·브랜드 필터가 있는 반응형 카탈로그, 프로모션 배너 슬라이더, 위시리스트와 장바구니를 구현했고 한국어·러시아어·영어로 지원합니다.',
      },
      'face-detection': {
        tagline: '컴퓨터 비전, 실시간 웹캠',
        description:
          'Python과 OpenCV로 만든 앱으로, 라이브 스트림에서 얼굴을 실시간으로 감지·추적합니다. Haar Cascade 분류기와 프레임 단위 최적화로 98.63%의 신뢰도를 달성했습니다.',
      },
    },
  },
  journey: {
    eyebrow: '04 · 경력',
    title: '지나온 길',
    subtitle: '경력과 학력을 최신순으로.',
    items: {
      arowwai: {
        role: '풀스택 개발자 & AI 엔지니어',
        location: '네덜란드 · 원격',
        bullets: [
          'GraphQL / REST로 유지보수 가능한 데이터 레이어를 갖춘 확장 가능한 NestJS 모노레포 백엔드를 구축했습니다.',
          'Next.js + Tailwind 반응형 앱을 개발하고 React Query·Apollo Client로 상태 관리를 최적화했습니다.',
          'Socket.IO 기반 실시간 양방향 통신을 구현했습니다.',
          'Docker·NGINX·PM2로 Linux 배포·운영을 담당해 높은 가용성을 확보했습니다.',
          'LLM 및 AI API를 통합해 지능형 자동화 기능을 구현했습니다.',
        ],
      },
      technest: {
        role: '프론트엔드 개발자',
        location: '에스토니아 탈린',
        bullets: [
          'React, TypeScript, SCSS로 반응형 웹 UI를 설계하고 구현했습니다.',
          'REST 연동과 상태 관리(Redux, Context API)로 데이터 흐름을 최적화했습니다.',
          '크로스 브라우저 최적화와 재사용 가능한 컴포넌트 구조를 담당했습니다.',
          'Git 기반 팀 워크플로우에서 코드 리뷰에 적극 참여했습니다.',
        ],
      },
      pixelcraft: {
        role: '프론트엔드 개발자',
        location: '우즈베키스탄 타슈켄트',
        bullets: [
          'HTML, CSS, JavaScript, React로 회사 웹사이트를 구축·유지보수했습니다.',
          '다양한 기기와 화면 크기에 맞춘 반응형 레이아웃을 구현했습니다.',
          '디자인 팀과 협업해 커스텀 그래픽, 애니메이션, 트랜지션을 구현했습니다.',
          '효율적인 배포 프로세스를 관리하고 프로젝트 품질을 검토했습니다.',
        ],
      },
      daegu: {
        role: '대구한의대학교',
        location: '대한민국 대구',
        bullets: [
          '한국에서 공부하며 동시에 소프트웨어 엔지니어로 독학했습니다.',
          '한국어·영어·러시아어에 능통하며, 우즈베크어가 모국어입니다.',
        ],
      },
    },
  },
  assistant: {
    eyebrow: '05 · AI 질문',
    title: '제 포트폴리오와 대화하기',
    subtitle: '일반 챗봇이 아니라, 실제 이력서와 프로젝트에서 답을 찾아옵니다.',
    points: [
      '실제 경력에 근거한 답변',
      'Gemini 기반 RAG(검색 증강)',
      '영어·한국어·러시아어·우즈베크어로 질문 가능',
    ],
    hintPrefix: '예시:',
  },
  contact: {
    eyebrow: '05 · 연락처',
    title: '함께 만들어요',
    lead: '채용, 프로젝트, 아니면 간단한 질문이라도 좋습니다. 가장 빠른 방법은 이메일이며 보통 하루 안에 답장합니다.',
    footerBuilt: 'Next.js · RAG · 그리고 많은 커피로 제작',
    socials: {
      email: '이메일',
      github: 'GitHub',
      telegram: '텔레그램',
      kakao: '카카오톡',
      phone: '전화',
    },
  },
}
