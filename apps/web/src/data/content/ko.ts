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
      'AI 엔지니어이자 풀스택 개발자로 5년 넘게 설계부터 배포·운영까지 프로덕션 레벨 애플리케이션을 직접 맡아 왔습니다. 주로 LLM 연동(Claude, OpenAI, Gemini), RAG, 에이전틱 AI 파이프라인을 다루며 Python, TypeScript, NestJS, FastAPI, Next.js를 주력으로 사용합니다.',
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
      'smart-ops': {
        tagline: '스마트공장 통합 관제 시스템',
        description:
          '수주부터 시험성적까지 하나의 데이터 모델로 잇는 생산관리 시스템입니다. 관제 화면의 모든 KPI·라인 현황·차트를 PostgreSQL에서 실시간 집계하고, 납기 역산으로 위험 수주를 판정하며, 2주 자재 소요를 재고와 비교합니다. 수주번호 하나로 자재 LOT부터 검사·시험까지 전체 이력을 추적합니다.',
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
      finsight: {
        role: "풀스택 개발자 & AI 엔지니어",
        location: "FinSight · 결정론적 AI 에이전트",
        bullets: [
          "LLM이 산술 계산을 절대 하지 않는 결정론적 방식의 금융급 결제 리스크 분석 AI 에이전트를 설계했습니다.",
          "정산 지표를 계산하고 LLM이 생성한 [CLAIM: function_name] 태그를 검증하는 Python 워크플로우를 구축했습니다.",
          "1,468개 배치에서 $305 중복 정산 이상을 탐지하고 LLM 불일치 케이스를 휴먼 인 더 루프 검토 큐로 보냈습니다.",
          "결정론적 코드 실행과 LLM 리스크 요약 생성의 경계를 설계하고, Claude Code로 빠르게 구현했습니다.",
        ],
      },
      smartfactory: {
        role: "풀스택 개발자 & AI 엔지니어",
        location: "Smart Factory Ops · 납기 리스크 & 추적성",
        bullets: [
          "정적 UI 목업을 실시간 스마트 팩토리 모니터링 시스템으로 완성했습니다.",
          "공정 사이클 타임을 집계해 실시간 납기 리스크 레벨을 계산하는 역산 로직을 개발했습니다.",
          "자재 LOT 테이블의 유닛 ID를 하나의 주문 타임라인에 연결해 자재·검사·시험 전 과정 추적성을 구축했습니다.",
          "복잡한 드롭다운 상태 버그를 해결해 안정적인 데이터 흐름을 확보하고, Claude Code로 빠르게 프로토타이핑했습니다.",
        ],
      },
      nomad: {
        role: "풀스택 개발자",
        location: "Nomad Industries · 대한민국 (프리랜서)",
        bullets: [
          "Next.js, React, Tailwind CSS, MUI로 반응형·확장 가능한 웹 앱을 구축했습니다.",
          "React Query, Apollo Client, GraphQL, REST로 상태 관리와 API 연동을 간소화했습니다.",
          "WebSockets와 Socket.IO로 저지연 실시간 UI 컴포넌트를 개발했습니다.",
          "LLM API와 AI 기반 인터페이스를 통합해 지능형 자동화 기능을 제공했습니다.",
        ],
      },
      abh: {
        role: "프론트엔드 개발자",
        location: "ABH Digital · 대한민국 (원격)",
        bullets: [
          "Next.js, React, Tailwind CSS, MUI로 고성능 반응형 웹 앱을 구축했습니다.",
          "React Query와 Apollo Client로 REST/GraphQL 데이터 페칭을 최적화했습니다.",
          "WebSockets와 Socket.IO로 실시간 이벤트 기반 UI를 구현했습니다.",
          "AI 기반 인터페이스와 프롬프트 워크플로우를 프론트엔드에 통합했습니다.",
        ],
      },
      haany: {
        role: "한의대학교",
        location: "대한민국",
        bullets: [
          "한국어·영어·러시아어에 능통하며, 우즈베크어가 모국어입니다.",
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
