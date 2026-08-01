import type { Experience, Project, Education } from "./types";

export const PROJECTS: Project[] = [
  {
    name: "범일운수 ERP",
    subtitle: "2024~2025 · 서울소프트",
    description: "서울 시내버스 업체 범일운수의 ERP 개발 프로젝트입니다.",
    techStack: ["Django", "jQuery", "AWS", "Firebase", "Bootstrap"],
    works: [
      { importance: "high", content: "대용량 테이블 렌더링 성능 개선" },
      { importance: "high", content: "바코드 입력 UX 개선" },
      { importance: "other", content: "레거시 DBF → MySQL 마이그레이션" },
      {
        importance: "other",
        content: "공통 인쇄 레이아웃 설계 및 tablib 기반 엑셀 템플릿 구현",
      },
      {
        importance: "other",
        content:
          "배차 생성 / 급여 산정 / 자재 입·출고 / 연차 수당 계산 핵심 로직 개발",
      },
      {
        importance: "other",
        content: "AWS Elastic Beanstalk 기반 배포 환경 구축",
      },
    ],
    caseStudies: [
      {
        title: "대용량 테이블 렌더링 성능 개선",
        issue:
          "Django 서버 사이드 렌더링 구조에서 10,000건 이상의 데이터를 테이블로 출력할 때, 템플릿 렌더링 단계에서 병목이 발생해 초기 로딩에 30초 이상이 소요되었습니다.",
        solve:
          "서버 렌더링 부담을 줄이기 위해, 서버에서는 테이블을 제외한 영역만 렌더링하고 테이블 데이터는 JSON 응답으로 분리했습니다. 클라이언트에서는 가상 스크롤(virtual scrolling)을 지원하는 Tabulator로 테이블을 렌더링하도록 변경했습니다.",
        result:
          "화면에 보이는 영역의 행만 DOM으로 생성하기 때문에 데이터가 늘어나도 초기 렌더링 비용이 일정하게 유지되어, 초기 로딩 시간을 30초에서 1초 내외로 단축할 수 있었습니다.",
      },
      {
        title: "바코드 입력 UX 개선",
        issue:
          "자재 출고 시 바코드 스캐너를 사용하는 경우가 있었습니다. 기존에는 스캔 값을 입력받는 input에 포커스가 없으면 값이 입력되지 않아, 사용자가 매번 화면을 클릭해 포커스를 맞춘 뒤 스캔해야 하는 불편함이 있었습니다.",
        solve:
          "바코드 전용 hidden input을 배치하고, 페이지 내 클릭 이벤트가 발생할 때마다 포커스가 되도록 구현했습니다. 또한 일반 입력 필드 사용을 방해하지 않도록 데이터 입력을 모달에서 받도록 했습니다. 모달이 닫힌 상태에서는 바코드 입력을 위해 자동 포커싱 되고, 모달이 열린 상태에서는 수량, 담당자와 같은 데이터 입력을 위해 포커싱이 비활성화 되도록 개발했습니다.",
        result:
          "바코드 스캔과 데이터 입력 흐름이 개선되었으며, 별도 화면 조작 없이 스캔만으로 출고 작업을 이어갈 수 있도록 개선하여, 바코드 기반 출고 업무 처리 효율을 높일 수 있었습니다.",
      },
    ],
  },
  {
    name: "노바위키",
    subtitle: "2026 · 개인프로젝트",
    description:
      "노바위키는 위키의 느리고 단절된 소통 구조를 개선하기 위해 시작된 플랫폼입니다. Supabase Realtime Broadcast 기반 채팅 기능을 통해 이용자 간 실시간 소통이 가능합니다.",
    techStack: [
      "React",
      "Next.js",
      "Tanstack Query",
      "Zustand",
      "Supabase",
      "Vercel",
      "Tailwind",
    ],
    link: "https://novawiki.vercel.app",
    github: "https://github.com/Leewonno/novawiki",
    works: [
      {
        importance: "high",
        content: "클라이언트 캐시의 정합성 확보를 위한 데이터 페칭 전략 개선",
      },
      {
        importance: "high",
        content: "데이터 무결성 확보를 위한 Supabase RPC 도입",
      },
      {
        importance: "high",
        content: "타이핑 중 부분 입력 매칭을 위한 한글 자모 분해 검색 구현",
      },
      { importance: "other", content: "마크다운 파서 및 에디터 구현" },
      {
        importance: "other",
        content: "Supabase Realtime Broadcast 기반 실시간 채팅 구현",
      },
    ],
    caseStudies: [
      {
        title: "클라이언트 캐시의 정합성 확보를 위한 데이터 페칭 전략 개선",
        issue:
          "Next.js의 fetch 캐싱(revalidate) 기반 SSR 구조에서, 사용자가 데이터를 수정해도 다음 진입 시 캐시된 응답이 그대로 노출되어 최신 상태가 즉시 반영되지 않는 문제가 있었습니다.",
        solve:
          "SSR 구조를 유지하면서 TanStack Query를 도입했습니다. 서버에서 prefetchQuery와 hydration을 통해 초기 데이터를 캐싱하고, 클라이언트에서는 useQuery로 데이터를 관리하도록 구성했습니다. 데이터 변경 시 invalidateQueries를 통해 캐시를 무효화하고 최신 데이터를 재요청하도록 캐시 전략을 개선했습니다.",
        result:
          "데이터 수정 후 홈·상세·편집 화면에서 상태가 어긋나던 문제가 해결되고, 최신 데이터가 즉시 반영되는 흐름이 만들어졌습니다.",
      },
      {
        title: "데이터 무결성 확보를 위한 Supabase RPC 도입",
        issue:
          "위키 서비스의 문서 데이터를 원본 테이블(document)과 이력 테이블(history)로 분리했습니다. 데이터가 변경될 때 두 테이블이 항상 함께 갱신되어야 했지만, 이력 테이블 INSERT 실패나 동시 수정 시 version 덮어쓰기 등의 위험이 있었습니다.",
        solve:
          "원본과 이력 테이블의 일관성, version 증가의 원자성을 보장하기 위해 처리 위치를 서버로 옮기고 트랜잭션으로 묶었습니다. 이미 RLS로 접근 제어를 하고 있었고 DB 내부에서 끝낼 작업이라고 판단해, 클라이언트는 단일 RPC만 호출하고 원본 갱신·이력 저장·version 증가는 DB 내부 트랜잭션에서 수행되도록 구조를 변경했습니다.",
        result:
          "위키 데이터의 원본과 변경 이력이 항상 함께 갱신되며, version은 동시 요청에도 중복 없이 순차 부여가 보장됐습니다. 클라이언트는 단일 RPC 호출만 하면 되므로 책임 범위도 줄일 수 있었습니다.",
      },
      {
        title: "타이핑 중 부분 입력 매칭을 위한 한글 자모 분해 검색 구현",
        issue:
          "사용자가 검색어를 타이핑하는 도중 미완성 음절이 입력되면 의도한 결과가 매칭되지 않는 문제가 있었습니다. 예를 들어 '오리'를 검색할 때 입력은 ㅇ → 오 → 올 → 오리 순으로 진행되는데, '올' 시점에 자동완성에도 검색 결과에도 '오리'가 노출되지 않았습니다.",
        solve:
          "영어·숫자는 그대로 보존하고, 한글 음절을 자모 단위로 분해해 문서 테이블에 저장했습니다. 검색 시 입력값도 같은 방식으로 분해해 비교하는 구조를 만들었습니다. 예를 들어 '오리123'은 'ㅇㅗㄹㅣ123'으로 저장됩니다.",
        result:
          "사용자가 검색어를 입력하는 동안 매 키 입력마다 자동완성 결과가 끊기지 않고 자연스럽게 노출되었습니다.",
      },
    ],
  },
  {
    name: "질문서랍",
    subtitle: "2026 · 개인프로젝트",
    description:
      "AI 답변을 읽다가 생긴 궁금증을 놓치지 않기 위해 만든 크롬 확장 프로그램입니다. Claude · ChatGPT · Gemini · Grok · Kimi · DeepSeek 6개 서비스를 지원하며 크롬 웹 스토어에 배포했습니다.",
    techStack: ["WXT", "React", "TypeScript", "Tailwind", "Zod", "Vitest"],
    link: "https://chromewebstore.google.com/detail/question-drawer/mipekafnkjahilpfjkfhmmjjbhkofnlj",
    github: "https://github.com/Leewonno/QuestionDrawer",
    works: [
      {
        importance: "high",
        content: "호스트 페이지 레이아웃을 밀어내는 사이드 도킹 구현",
      },
      {
        importance: "high",
        content: "SPA 라우팅 환경에서의 대화 전환 감지 및 대화별 질문 분리",
      },
      {
        importance: "high",
        content: "크롬 내장 온디바이스 AI(Gemini Nano) 기반 질문 요약 구현",
      },
      // {
      //   importance: "other",
      //   content:
      //     "어댑터 패턴으로 6개 AI 서비스의 입력창 삽입·메시지 영역 판별 로직 분리",
      // },
      // {
      //   importance: "other",
      //   content:
      //     "Shadow DOM 렌더링과 CSP 우회 런타임 폰트 로딩으로 호스트 페이지와 스타일 격리",
      // },
      // {
      //   importance: "other",
      //   content:
      //     "Zod 스키마 검증 기반 로컬 스토리지 영속화 및 데이터 마이그레이션",
      // },
      // {
      //   importance: "other",
      //   content: "브라우저 언어 감지 기반 한국어·영어 i18n 및 호스트 테마 연동",
      // },
    ],
    caseStudies: [
      {
        title: "호스트 페이지 레이아웃을 밀어내는 사이드 도킹 구현",
        issue:
          "서랍 패널을 fixed 오버레이로 띄우면 읽고 있던 답변을 가려버려서, 확장이 오히려 읽는 흐름을 방해했습니다. html에 margin-right를 주는 방식으로 페이지를 밀어봤지만 claude.ai에서만 동작했고, ChatGPT·Gemini·DeepSeek에서는 패널이 그대로 본문을 덮었습니다.",
        solve:
          "원인은 세 사이트의 최상위 셸이 뷰포트 단위(100vw)로 폭을 잡고 있다는 점이었습니다. vw는 margin으로 줄어든 html 박스가 아니라 뷰포트 기준으로 계산되고 CSS로 재정의할 수도 없어서, 셸 요소의 width를 calc(100vw - 패널 너비)로 직접 덮어쓰도록 했습니다. Gemini는 min-width까지 100vw로 고정해 두어 width·min-width·max-width를 함께 지정했고, 뷰포트 우측에 붙는 형제 요소인 상단 바는 폭이 아닌 transform으로 밀었습니다. 안정적인 클래스가 없는 DeepSeek은 해시 클래스 대신 입력창을 포함하는 구조적 선택자를 우선 anchor로 잡고 해시 클래스를 fallback으로 함께 걸었습니다. transition은 토글 클래스가 아닌 기본 선택자에 선언해 열고 닫을 때 양방향으로 애니메이션이 동작하도록 했습니다.",
        result:
          "6개 서비스 모두에서 패널이 대화 내용을 가리지 않고, 본문과 서랍이 같은 300ms 타이밍으로 함께 움직이도록 만들었습니다. 도킹이 실패하는 환경에서도 패널은 오버레이로 계속 동작하도록 해 확장 자체가 죽지 않게 했습니다.",
      },
      {
        title: "SPA 라우팅 환경에서의 대화 전환 감지 및 대화별 질문 분리",
        issue:
          "담아둔 질문이 모든 대화에 그대로 노출되어, 다른 주제의 대화로 넘어가도 이전 질문이 섞여 보였습니다. 대상 사이트들은 pushState 기반 SPA라 대화를 전환해도 페이지 이동 이벤트가 발생하지 않았고, content script는 isolated world에서 실행되기 때문에 history 객체를 패치해도 페이지의 라우터가 호출하는 객체와 달라 전환을 감지할 수 없었습니다.",
        solve:
          "대화 ID가 URL 경로에 남는다는 점을 이용해 사이트별 경로 패턴에서 ID를 추출하고, 400ms 주기 URL 폴링과 isolated world에도 전달되는 popstate 이벤트를 함께 사용해 전환을 감지했습니다. 저장 시점에 아직 ID가 없는 새 대화의 질문은 conversationId를 null로 두고 보관하다가, 첫 메시지 전송으로 ID가 생기는 순간 해당 대화로 귀속시키는 로직을 넣었습니다. 이때 귀속 대상이 없으면 쓰기를 건너뛰어 불필요한 스토리지 변경 알림이 퍼지지 않도록 했습니다.",
        result:
          "대화별로 질문이 분리되어 노출되고, 아직 ID가 없는 새 대화에서 담은 질문도 유실 없이 해당 대화에 귀속되었습니다. 기존 사용자의 데이터도 초기화 없이 마이그레이션되도록 처리했습니다.",
      },
      {
        title: "크롬 내장 온디바이스 AI 기반 질문 요약 구현",
        issue:
          "드래그로 담는 특성상 문단 단위의 긴 텍스트가 그대로 저장되는 경우가 많아, 카드가 길어지고 생성되는 후속 질문 문장도 어색했습니다. 서버 LLM을 붙이면 해결되지만 사용자가 읽던 대화 내용이 외부로 전송되는 문제가 있었습니다.",
        solve:
          "크롬 내장 Prompt API(Gemini Nano)를 content script에서 직접 호출해, 30자를 넘는 텍스트만 핵심 주제 구절로 요약하도록 했습니다. 모든 추론이 기기 안에서 끝나 선택한 텍스트가 밖으로 나가지 않습니다. 다만 이 API는 특정 크롬 버전 이상에서만 존재하고 모델 다운로드 상태에 따라 사용 불가일 수 있어, API 미지원·다운로드 중·호출 실패를 모두 null로 수렴시키고 호출부는 항상 원문으로 폴백하도록 계약을 단순화했습니다. 모델이 지시를 무시하고 따옴표로 감싸거나 설명을 덧붙이는 경우가 있어 첫 줄만 취하고 감싼 따옴표를 제거하는 후처리도 함께 넣었습니다.",
        result:
          "긴 선택 영역도 짧은 주제 구절로 정리되어 카드와 후속 질문 문장이 자연스러워졌고, 온디바이스 AI를 쓸 수 없는 환경에서도 원문 그대로 동작해 사용 가능한 브라우저 범위를 좁히지 않았습니다.",
      },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: "틸론",
    role: "Frontend Engineer",
    period: "2026.06 ~",
    summary: "React, Vue.js 기반 클라이언트 개발",
    works: [
      "React, Vue.js 기반 클라이언트 개발",
      // "jupyterlab 커스텀 개발",
      // "TheOtherTown 유지 보수 및 신규 기능 개발",
      // "TheOtherSpace 유지 보수 및 신규 기능 개발",
    ],
  },
  {
    company: "이로운소프트",
    role: "Frontend Engineer",
    period: "2025.12 ~ 2026.03",
    summary: "VanillaJS · Wijmo 기반 ERP 서비스 클라이언트 개발",
    works: [
      "동적 로딩 구조 개선을 통한 서비스 성능 개선",
      "공통 유틸 개발을 통한 입력 로직 표준화",
    ],
  },
  {
    company: "서울소프트",
    role: "Fullstack Developer",
    period: "2024.04 ~ 2025.11",
    summary: "Django 기반 ERP 서비스 서버·클라이언트 개발",
    works: [
      "대용량 테이블 렌더링 및 바코드 입력 UX 개선",
      "레거시 DBF → MySQL 마이그레이션",
      "AWS 배포 환경 구축",
    ],
  },
];

export const EDUCATIONS: Education[] = [
  {
    school: "남서울대학교",
    degree: "컴퓨터소프트웨어학과",
    period: "2018.03 ~ 2024.02",
  },
  {
    school: "서산서일고등학교",
    degree: "이과",
    period: "2015.03 ~ 2018.02",
  },
];
