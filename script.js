const experiences = [
  {
    id: "bmw",
    company: "BMW Korea",
    type: "CRM 마케팅 인턴",
    period: "2026.01 – 2026.06",
    title: "Customer Lifecycle 기반 CRM 마케팅",
    summary: "7개 딜러사의 판매 성과와 VOC를 분석하고, 타깃 캠페인을 실제 계약 전환까지 연결했습니다.",
    roles: ["marketing", "newbiz", "investment"],
    talents: ["discipline", "creative", "purpose"],
    skills: ["analysis", "planning", "customer", "communication"],
    tags: ["#고객니즈분석", "#CRM", "#판매전환", "#데이터자동화"],
    metrics: [
      { value: "7개", label: "딜러사 Sales Funnel 관리" },
      { value: "4,000명+", label: "1·2 Series 캠페인 참여" },
      { value: "35건+", label: "캠페인 계약 전환" }
    ],
    role: [
      "7개 딜러사의 계약–판매 Funnel 관리 및 월별 Sales Conversion 리포트 작성",
      "VOC·고객 만족도 분석을 통한 주요 불만 유형과 고객 니즈 파악",
      "고객 데이터 추출·가공 및 신규 모델 Launch Committee 지원"
    ],
    action: [
      "BMW New 1·2 Series 특성 기반 핵심 타깃 및 차별화 USP 도출",
      "퀴즈형 앱 캠페인 기획 및 유관부서 협업",
      "채널별 영업 현황 관리와 VOC 프로세스 자동화"
    ],
    result: "채널 평균 대비 210% 유입, 4,000명+ 참여, 35건+ 계약 전환",
    fit: {
      marketing: "CRM 고객 데이터를 타깃과 디지털 캠페인으로 전환해 채널 평균 대비 210% 유입, 4,000명+ 참여, 35건+ 계약을 만들었습니다.",
      newbiz: "VOC와 판매 Funnel을 함께 분석하고 프로세스를 자동화해 데이터 기반 실행력을 검증했습니다.",
      investment: "7개 딜러사의 계약–판매 전환을 비교해 성과를 구조적으로 관리했습니다."
    }
  },
  {
    id: "ob",
    company: "OB맥주",
    type: "신제품 기획·마케팅 인턴",
    period: "2025.09 – 2025.12",
    title: "시장·소비자 분석을 신제품 런칭으로 연결",
    summary: "주류 시장과 소비자 반응을 분석해 제품 콘셉트, 패키지, 홍보 방향을 구체화하고 출시를 지원했습니다.",
    roles: ["marketing", "newbiz", "investment"],
    talents: ["discipline", "creative"],
    skills: ["analysis", "planning", "customer"],
    tags: ["#신제품기획", "#AI분석", "#포지셔닝", "#트렌드리서치"],
    metrics: [
      { value: "500개+", label: "경쟁제품 판매 데이터" },
      { value: "3,000건+", label: "정량·정성 버즈 분석" },
      { value: "실제 반영", label: "런칭·공식 SNS 콘텐츠" }
    ],
    role: [
      "국내외 주류 시장 트렌드와 경쟁 제품 조사",
      "500개+ 경쟁제품 판매 데이터 관리·분석 및 성과 비교",
      "경쟁사 SNS·마케팅 모니터링과 위클리 뉴스레터 제작"
    ],
    action: [
      "AI 분석 플랫폼 Quettai와 SQL 쿼리로 3,000건+ 소비자 반응 분석",
      "신제품 콘셉트에 맞는 패키지와 홍보 전략 아이데이션",
      "브랜드 이미지를 고려한 모델 및 협업 콘텐츠 방향 제안"
    ],
    result: "모델 리서치와 콘셉트 인사이트가 실제 제품 런칭 및 공식 인스타그램 콘텐츠 기획에 반영",
    fit: {
      marketing: "판매·버즈 데이터로 브랜드 포지셔닝과 모델·협업 콘텐츠를 기획해 실제 런칭과 공식 SNS에 반영했습니다.",
      newbiz: "AI 기반 정량·정성 분석으로 제품 콘셉트와 시장 진입 방향을 설계했습니다.",
      investment: "500개+ 제품의 판매 성과를 비교해 시장성과 경쟁 구도를 판단했습니다."
    }
  },
  {
    id: "kolon",
    company: "코오롱모빌리티그룹",
    type: "산학협력 프로젝트",
    period: "대상 수상",
    title: "인증중고차 마케팅 및 판매 전략 프로젝트",
    summary: "국내외 중고차 시장과 소비자 218명의 구매 여정을 분석해 차량 상태에 대한 불신을 도출하고, 자사 A/S 인프라 기반의 차별화 서비스와 판매 전략을 제안했습니다.",
    roles: ["marketing", "newbiz", "investment"],
    talents: ["discipline", "creative", "purpose"],
    skills: ["analysis", "planning", "customer", "communication"],
    tags: ["#인증중고차", "#고객여정", "#판매전략", "#서비스기획"],
    metrics: [
      { value: "218명", label: "소비자 설문·심층 인터뷰" },
      { value: "42개", label: "자사 A/S 센터 활용" },
      { value: "30%+", label: "제안 전략 실제 반영" }
    ],
    role: [
      "국내 중고차 플랫폼 12곳의 매물·서비스·마케팅 분석",
      "소비자 218명 설문·심층 인터뷰를 통한 구매 여정 분석",
      "인도·중국 등 글로벌 경쟁사 30곳+ 서비스 벤치마킹"
    ],
    action: [
      "차량 상태를 직접 확인하기 어렵다는 핵심 불신 요인 도출",
      "자사 42개 A/S 센터를 활용한 차량 점검 서비스 설계",
      "바이백·고객 혜택 프로그램과 오프라인 판매 활성화 전략 제안"
    ],
    result: "제안 전략 30%+ 실제 서비스 반영 및 산학협력 프로젝트 대상 수상",
    gallery: [
      { src: "./assets/project-slides/kolon-cover.jpg", label: "프로젝트 표지" },
      { src: "./assets/project-slides/kolon-service.jpg", label: "A/S 인프라 기반 차별화 전략" },
      { src: "./assets/project-slides/kolon-campaign.jpg", label: "702 브랜드 각인 캠페인" }
    ],
    fit: {
      marketing: "218명의 구매 여정을 분석해 차량 상태에 대한 불신을 핵심 진입 장벽으로 정의하고, 자사 인프라를 고객 신뢰와 구매 이유로 전환했습니다.",
      newbiz: "12곳의 국내 플랫폼과 30곳+ 글로벌 경쟁사를 비교하고, 42개 A/S 센터를 활용한 신규 점검·바이백 서비스를 설계했습니다.",
      investment: "시장·고객·경쟁 환경을 공통 기준으로 분석해 실행 우선순위를 정하고, 제안 전략의 30%+ 실제 반영을 이끌었습니다."
    }
  },
  {
    id: "lgchem",
    company: "LG화학",
    type: "산학협력 프로젝트 · PM",
    period: "2025.04 – 2025.05",
    title: "친환경 소재 적용 및 LETZero IMC 전략",
    summary: "가전제품 내 친환경 소재 적용 가능성과 소비자 커뮤니케이션 전략을 제안했습니다.",
    roles: ["marketing", "newbiz", "investment"],
    talents: ["creative", "purpose", "discipline"],
    skills: ["analysis", "planning", "customer", "communication", "global"],
    tags: ["#PM", "#고객세분화", "#IMC", "#친환경소재"],
    metrics: [
      { value: "750건+", label: "소비자 설문·인터뷰" },
      { value: "PM", label: "프로젝트 전 과정 리딩" },
      { value: "올라운더", label: "팀원 피드백" }
    ],
    role: [
      "가전 시장과 국가별 규제 분석 및 친환경 소재 활용 사례 비교",
      "750건+ 설문·인터뷰 기반 인지도와 가격 민감도 분석",
      "프로젝트 전 과정 PM 및 팀 커뮤니케이션"
    ],
    action: [
      "소비자 조사 기반 핵심 고객군 정의",
      "국가·가전별 친환경 소재 적용 방향 도출",
      "LETZero 브랜딩 및 IMC 커뮤니케이션 전략 제안"
    ],
    result: "소비자 세분화와 시장 분석을 제품별 소재 적용안 및 IMC 전략으로 연결",
    gallery: [
      { src: "./assets/project-slides/lgchem-cover.jpg", label: "프로젝트 표지" },
      { src: "./assets/project-slides/lgchem-imc.jpg", label: "LETZero 인지·경험·확산 IMC 구조" },
      { src: "./assets/project-slides/lgchem-collab.jpg", label: "LG트윈스 브랜드 협업 실행안" }
    ],
    fit: {
      marketing: "750건+ 고객 조사로 세그먼트를 정의하고 LETZero 브랜드의 소재 적용·IMC 전략으로 연결했습니다.",
      newbiz: "규제·시장·고객 데이터를 결합해 친환경 소재의 신규 적용 기회를 설계했습니다.",
      investment: "국가별 규제와 가격 민감도를 함께 비교해 시장 진입 우선순위를 판단했습니다."
    }
  },
  {
    id: "kakao",
    company: "카카오뱅크",
    type: "산학협력 프로젝트",
    period: "2025.04 – 2025.05",
    title: "User Journey 기반 DAU 성장 전략",
    summary: "상위 트래픽 앱과 금융앱 이용자 행동을 분석해 ‘금융+생활 필수앱’을 위한 DAU 확보 전략을 제안했습니다.",
    roles: ["marketing", "newbiz", "investment"],
    talents: ["creative", "purpose", "discipline"],
    skills: ["analysis", "planning", "customer", "communication"],
    tags: ["#그로스마케팅", "#UserJourney", "#서비스기획", "#조율"],
    metrics: [
      { value: "100개+", label: "상위 DAU 앱 벤치마킹" },
      { value: "90건+", label: "설문·인터뷰" },
      { value: "16건+", label: "DAU 확보 전략" }
    ],
    role: [
      "상위 100개+ DAU 앱 분석 및 유저 저니별 유입·DAU 확보 요인 도출",
      "90건+ 금융앱 이용자 설문·인터뷰와 2030 이용 행태 분석",
      "시장·서비스·사용자 조사 모듈의 결과 조율"
    ],
    action: [
      "스캐터맵 분석으로 카카오뱅크의 보완 지점과 벤치마킹 포인트 도출",
      "유입·체류·재방문·락인 전 과정의 단기·중장기 전략 설계",
      "신기능 및 서비스 개선 전략 기획"
    ],
    result: "16건+ DAU 확보 전략 제안, ‘현업에서 바로 실행 가능한 전략’ 평가와 우수상 수상",
    gallery: [
      { src: "./assets/project-slides/kakao-cover.jpg", label: "프로젝트 표지" },
      { src: "./assets/project-slides/kakao-summary.jpg", label: "DAU 성장 전략 Executive Summary" },
      { src: "./assets/project-slides/kakao-campaign.jpg", label: "일상 접점형 금융 챌린지 캠페인" }
    ],
    fit: {
      marketing: "90건+ 고객 조사와 100개+ 앱 벤치마킹을 유입·체류·재방문·락인 전 과정의 디지털 마케팅 전략으로 구체화했습니다.",
      newbiz: "100개+ 앱과 90건+ 사용자 조사를 결합해 16건+ 신규 서비스 전략을 만들었습니다.",
      investment: "앱별 지표를 공통 기준으로 비교하고 고객 검증을 더해 실행 우선순위를 정했습니다."
    }
  },
  {
    id: "finter",
    company: "Quantit · Finter",
    type: "산학협력 프로젝트",
    period: "2024.11 – 2024.12 · 대상",
    title: "주식 커뮤니티 리텐션 향상 전략",
    summary: "투자 정보의 격차를 줄이고 신뢰 기반 커뮤니티를 만들기 위해 유입부터 리텐션까지의 이용 여정을 분석하고 서비스 활성화 전략을 제안했습니다.",
    roles: ["marketing", "newbiz", "investment"],
    talents: ["discipline", "creative", "purpose"],
    skills: ["analysis", "planning", "customer", "communication"],
    tags: ["#금융산업", "#주식커뮤니티", "#리텐션", "#게이미피케이션"],
    metrics: [
      { value: "20개", label: "전략 아이디어 도출" },
      { value: "8개", label: "서비스 전략 구체화" },
      { value: "대상", label: "산학협력 프로젝트" }
    ],
    role: [
      "주식 커뮤니티 이용자의 글·댓글 행태 모니터링 및 이용 패턴 분석",
      "유저 테스트 설계와 커뮤니티 이탈 요인 도출",
      "주식 커뮤니티 플랫폼과 플레이어 벤치마킹"
    ],
    action: [
      "유입–탐색–참여–리텐션 전 과정의 사용자 여정과 Pain Point 구조화",
      "관심사 기반 큐레이션, 활동 등급제와 게이미피케이션 전략 설계",
      "메인 UI/UX 개선과 벤치마킹을 포함한 20개 아이디어·8개 전략 구체화"
    ],
    result: "유저 인사이트 기반 서비스 활성화 전략으로 산학협력 프로젝트 대상 수상",
    gallery: [
      { src: "./assets/project-slides/finter-cover.jpg", label: "프로젝트 표지" },
      { src: "./assets/project-slides/finter-journey.jpg", label: "유저 저니별 Pain Point" },
      { src: "./assets/project-slides/finter-strategy.jpg", label: "관심 키워드 기반 오늘의 핀터픽" }
    ],
    fit: {
      marketing: "투자자의 이용 행태와 이탈 요인을 고객 여정으로 구조화하고, 리텐션을 높이는 콘텐츠·게이미피케이션 전략으로 전환했습니다.",
      newbiz: "주식 커뮤니티의 문제를 유저 테스트로 검증하고 20개 아이디어를 8개 실행 전략으로 구체화했습니다.",
      investment: "투자 정보 탐색과 커뮤니티 참여 행태를 분석해 금융 고객의 니즈와 서비스 활성화 요인을 도출했습니다."
    }
  },
  {
    id: "verish",
    company: "Verish",
    type: "산학협력 프로젝트",
    period: "2025.02 – 2025.04",
    title: "북미 인플루언서 시딩·플래그십 바이럴",
    summary: "4개국 시장을 비교해 우선 진출 국가를 선정하고 북미 인플루언서 시딩까지 직접 실행했습니다.",
    roles: ["marketing", "newbiz", "investment"],
    talents: ["discipline", "creative", "purpose"],
    skills: ["analysis", "planning", "customer", "global"],
    tags: ["#글로벌마케팅", "#인플루언서", "#시딩", "#시장분석"],
    metrics: [
      { value: "4개국", label: "해외 시장 비교" },
      { value: "120→30", label: "컨택 → 시딩" },
      { value: "10만 회", label: "UGC 누적 조회" }
    ],
    role: [
      "북미·대만·싱가포르·홍콩의 트렌드, 유통 채널, 프로모션 방식 비교",
      "국가별 시장성·타깃·경쟁환경 기반 우선 시장 도출",
      "성수 플래그십스토어 바이럴 마케팅 전략 기획"
    ],
    action: [
      "틱톡 인플루언서 120명 직접 컨택 및 약 30명 북미 시딩",
      "‘Verish의 그녀, Very She’ 콘셉트 기반 SNS 캠페인과 프로모션 제안",
      "UGC 성과 모니터링 및 실행안 보완"
    ],
    result: "UGC 누적 조회수 10만 회 달성, 솔로지옥 협업 전략 실제 반영",
    gallery: [
      { src: "./assets/project-slides/verish-concept.jpg", label: "Very She 바이럴 핵심 콘셉트" },
      { src: "./assets/project-slides/verish-content.jpg", label: "북미 인플루언서 시딩 콘텐츠" }
    ],
    fit: {
      marketing: "4개국 시장 분석부터 인플루언서 시딩·바이럴 캠페인 실행까지 연결해 UGC 10만 조회를 달성했습니다.",
      newbiz: "4개국을 비교해 우선 시장을 선택하고 현지 고객 접점을 실제로 검증했습니다.",
      investment: "시장성·타깃·경쟁환경을 기준으로 4개국의 우선순위를 도출했습니다."
    }
  },
  {
    id: "loreal",
    company: "L’Oréal Brandstorm",
    type: "2025 공모전",
    period: "2024.12 – 2025.03",
    title: "남성 셀프케어 솔루션 NOVAIR 기획",
    summary: "남성 그루밍 시장과 면도 후 피부 고민을 분석해 3-in-1 디바이스와 개인화 앱 서비스를 기획했습니다.",
    roles: ["newbiz", "marketing", "investment"],
    talents: ["creative", "purpose"],
    skills: ["analysis", "planning", "customer", "global"],
    tags: ["#신제품기획", "#TAM·SAM·SOM", "#개인화", "#Figma"],
    metrics: [
      { value: "8.0%", label: "분석 시장 CAGR" },
      { value: "3-in-1", label: "올인원 디바이스" },
      { value: "1개 앱", label: "개인화 서비스 연동" }
    ],
    role: [
      "TAM·SAM·SOM 기반 Beard Care 시장성 검토",
      "L’Oréal 제품 포트폴리오 공백 분석",
      "남성 셀프케어 시장과 소비자 불편 정의"
    ],
    action: [
      "면도 후 자극과 관리 번거로움을 핵심 Pain Point로 설정",
      "Razor·Cleanser·Massager 결합 NOVAIR 콘셉트 기획",
      "피부 상태 기반 개인화 기능과 앱 연동 서비스 제안"
    ],
    result: "시장 성장성과 고객 문제를 결합한 3-in-1 신규 제품·서비스 콘셉트 완성",
    fit: {
      marketing: "남성 셀프케어 고객의 불편과 시장 공백을 브랜드 제품 콘셉트·개인화 앱으로 구체화했습니다.",
      newbiz: "TAM·SAM·SOM과 포트폴리오 공백을 근거로 신규 제품·서비스를 설계했습니다.",
      investment: "CAGR 8.0% 시장의 규모와 포트폴리오 공백을 함께 검토했습니다."
    }
  },
  {
    id: "communication",
    company: "ECON · 이화로사",
    type: "대외 홍보·기업 커뮤니케이션",
    period: "2022.03 – 2025.06",
    title: "사람과 조직을 잇는 커뮤니케이션",
    summary: "기업 대상 협력 제안부터 학교 대표 홍보까지 내외부 고객과의 접점을 직접 운영했습니다.",
    roles: ["marketing", "newbiz"],
    talents: ["discipline", "purpose"],
    skills: ["planning", "customer", "communication"],
    tags: ["#기업커뮤니케이션", "#SNS", "#리더십", "#대외홍보"],
    metrics: [
      { value: "3건", label: "산학협력 프로젝트 수주" },
      { value: "9.3천 회", label: "SNS 게시글 조회" },
      { value: "30여 명", label: "모교방문단 관리" }
    ],
    role: [
      "ECON 대외 홍보와 기업 커뮤니케이션 총괄",
      "공식 인스타그램·홈페이지·링크트리 운영",
      "이화여대 홍보대사 및 모교방문단 팀장"
    ],
    action: [
      "기업 대상 산학협력 제안서 기획·발송 및 미팅 진행",
      "수험생·새내기 대상 학교 홍보 콘텐츠와 온라인 멘토링 운영",
      "COEX 입시박람회 부스 운영 및 30여 명 단원 커뮤니케이션"
    ],
    result: "산학협력 프로젝트 3건 수주, 공식 SNS 게시글 9.3천 회 조회",
    gallery: [
      { src: "./assets/project-slides/communication-overview.jpg", label: "ECON PR·이화로사 커뮤니케이션 결과물" }
    ],
    fit: {
      marketing: "브랜드 SNS와 대외 커뮤니케이션을 직접 운영해 9.3천 조회와 협력 프로젝트 3건 수주로 연결했습니다.",
      newbiz: "기업별 협력 가능성을 제안서와 미팅으로 구체화해 신규 프로젝트를 확보했습니다.",
      investment: "직접적인 투자 직무 근거보다는 이해관계자 설득과 커뮤니케이션 역량을 보여줍니다."
    }
  }
];

const rankings = {
  marketing: ["bmw", "ob", "kolon", "verish", "lgchem", "communication", "kakao", "finter", "loreal"],
  newbiz: ["kakao", "kolon", "finter", "loreal", "lgchem", "verish", "ob", "bmw", "communication"],
  investment: ["finter", "kakao", "loreal", "verish", "lgchem", "kolon", "ob", "bmw", "communication"]
};

const roleLabels = { marketing: "BRAND / MARKETING", newbiz: "NEW BUSINESS", investment: "INVESTMENT" };
const jdFitExperienceIds = {
  finance: ["finter", "kakao"],
  campaign: ["bmw"],
  data: ["bmw", "ob"],
  imc: ["lgchem", "kolon"],
  brand: ["verish", "communication"]
};
let selectedRole = "marketing";
let selectedSkill = "all";
let selectedFit = "all";
let searchTerm = "";
const compared = new Set();

const grid = document.getElementById("experienceGrid");
const resultCount = document.getElementById("resultCount");
const compareTray = document.getElementById("compareTray");
const compareCount = document.getElementById("compareCount");
const compareNames = document.getElementById("compareNames");
const compareDialog = document.getElementById("compareDialog");
const compareContent = document.getElementById("compareContent");
const slideDialog = document.getElementById("slideDialog");
const slideImage = document.getElementById("slideImage");
const slideCaption = document.getElementById("slideCaption");

function cardTemplate(item, rank) {
  const metrics = item.metrics.map(metric => `
    <div class="metric"><strong>${metric.value}</strong><span>${metric.label}</span></div>
  `).join("");
  const tags = item.tags.map(tag => `<span class="tag">${tag}</span>`).join("");
  const roleItems = item.role.map(text => `<li>${text}</li>`).join("");
  const actionItems = item.action.map(text => `<li>${text}</li>`).join("");
  const gallery = item.gallery?.length ? `
    <div class="project-gallery-wrap">
      <div class="gallery-heading"><h4>Project Deck</h4><span>표지와 핵심 장표 · 클릭해서 크게 보기</span></div>
      <div class="project-gallery">
        ${item.gallery.map((slide, index) => `
          <button class="gallery-thumb" type="button" data-slide-src="${slide.src}" data-slide-caption="${item.company} · ${slide.label}">
            <img src="${slide.src}" alt="${item.company} ${slide.label}" loading="lazy">
            <span><b>${String(index + 1).padStart(2, "0")}</b>${slide.label}</span>
          </button>
        `).join("")}
      </div>
    </div>` : "";
  return `
    <article class="experience-card ${rank <= 3 ? "is-recommended" : ""}" id="experience-${item.id}" data-id="${item.id}">
      ${rank <= 3 ? `<span class="card-rank">추천 ${rank}</span>` : ""}
      <div class="card-meta">
        <span class="company">${item.company} · ${item.type}</span>
        <span class="period">${item.period}</span>
      </div>
      <h3>${item.title}</h3>
      <p class="card-summary">${item.summary}</p>
      <div class="metric-strip">${metrics}</div>
      <div class="tag-list">${tags}</div>
      <div class="card-details" id="details-${item.id}"><div>
        <div class="detail-columns">
          <div><h4>Role</h4><ul>${roleItems}</ul></div>
          <div><h4>Action</h4><ul>${actionItems}</ul></div>
        </div>
        <div class="detail-columns">
          <div><h4>Result</h4><ul><li>${item.result}</li></ul></div>
          <div><h4>Hanwha Finance Fit</h4><ul><li>${item.fit[selectedRole]}</li></ul></div>
        </div>
        ${gallery}
      </div></div>
      <div class="card-actions">
        <button class="details-button" type="button" aria-expanded="false" aria-controls="details-${item.id}">세부 경험 펼치기</button>
        <button class="compare-button ${compared.has(item.id) ? "selected" : ""}" type="button" data-compare="${item.id}" aria-pressed="${compared.has(item.id)}">${compared.has(item.id) ? "비교함에 담김" : "비교에 담기"}</button>
      </div>
    </article>`;
}

function getVisibleExperiences() {
  const order = rankings[selectedRole];
  return [...experiences]
    .filter(item => item.roles.includes(selectedRole))
    .filter(item => selectedFit === "all" || jdFitExperienceIds[selectedFit].includes(item.id))
    .filter(item => selectedSkill === "all" || item.skills.includes(selectedSkill))
    .filter(item => {
      if (!searchTerm) return true;
      const haystack = [item.company, item.type, item.title, item.summary, item.result, ...item.tags, ...item.role, ...item.action].join(" ").toLowerCase();
      return haystack.includes(searchTerm);
    })
    .sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
}

function renderCards() {
  const visible = getVisibleExperiences();
  const order = rankings[selectedRole];
  grid.innerHTML = visible.length
    ? visible.map(item => cardTemplate(item, order.indexOf(item.id) + 1)).join("")
    : `<div class="empty-state">조건에 맞는 경험이 없습니다. 필터나 검색어를 바꿔보세요.</div>`;
  resultCount.textContent = visible.length;
  bindCardEvents();
}

function bindCardEvents() {
  document.querySelectorAll(".details-button").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".experience-card");
      const isOpen = card.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
      button.textContent = isOpen ? "세부 경험 접기" : "세부 경험 펼치기";
    });
  });
  document.querySelectorAll("[data-compare]").forEach(button => {
    button.addEventListener("click", () => toggleCompare(button.dataset.compare));
  });
  document.querySelectorAll("[data-slide-src]").forEach(button => {
    button.addEventListener("click", () => openSlide(button.dataset.slideSrc, button.dataset.slideCaption));
  });
}

function toggleCompare(id) {
  if (compared.has(id)) {
    compared.delete(id);
  } else if (compared.size < 3) {
    compared.add(id);
  } else {
    compareTray.animate([{ transform: "translateX(-50%)" }, { transform: "translateX(-52%)" }, { transform: "translateX(-48%)" }, { transform: "translateX(-50%)" }], { duration: 280 });
    return;
  }
  updateCompareTray();
  renderCards();
}

function updateCompareTray() {
  compareTray.hidden = compared.size === 0;
  compareCount.textContent = compared.size;
  compareNames.innerHTML = [...compared].map(id => {
    const item = experiences.find(exp => exp.id === id);
    return `<span>${item.company}</span>`;
  }).join("");
}

function openComparison() {
  const items = [...compared].map(id => experiences.find(exp => exp.id === id));
  if (!items.length) return;
  compareContent.style.gridTemplateColumns = `repeat(${items.length}, minmax(0, 1fr))`;
  compareContent.innerHTML = items.map(item => `
    <article class="compare-column">
      <span class="company">${item.company}</span>
      <h3>${item.title}</h3>
      <h4>정량 성과</h4>
      <div class="compare-metrics">${item.metrics.map(metric => `<span>${metric.value} · ${metric.label}</span>`).join("")}</div>
      <h4>역할</h4><ul>${item.role.map(text => `<li>${text}</li>`).join("")}</ul>
      <h4>핵심 행동</h4><ul>${item.action.map(text => `<li>${text}</li>`).join("")}</ul>
      <h4>결과</h4><ul><li>${item.result}</li></ul>
      <h4>${roleLabels[selectedRole]} 활용 근거</h4><ul><li>${item.fit[selectedRole]}</li></ul>
    </article>
  `).join("");
  compareDialog.showModal();
}

function openSlide(src, caption) {
  slideImage.src = src;
  slideImage.alt = caption;
  slideCaption.textContent = caption;
  slideDialog.showModal();
}

document.querySelectorAll(".jd-fit-card").forEach(button => {
  button.addEventListener("click", () => {
    const nextFit = button.dataset.fit;
    selectedFit = selectedFit === nextFit ? "all" : nextFit;
    document.querySelectorAll(".jd-fit-card").forEach(item => {
      const active = item.dataset.fit === selectedFit;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderCards();
    document.getElementById("experiences").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll("#skillChips button").forEach(button => {
  button.addEventListener("click", () => {
    selectedSkill = button.dataset.skill;
    document.querySelectorAll("#skillChips button").forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderCards();
  });
});

document.getElementById("experienceSearch").addEventListener("input", event => {
  searchTerm = event.target.value.trim().toLowerCase();
  renderCards();
});

document.getElementById("openCompare").addEventListener("click", openComparison);
document.getElementById("closeCompare").addEventListener("click", () => compareDialog.close());
compareDialog.addEventListener("click", event => {
  if (event.target === compareDialog) compareDialog.close();
});
document.getElementById("closeSlide").addEventListener("click", () => slideDialog.close());
slideDialog.addEventListener("click", event => {
  if (event.target === slideDialog) slideDialog.close();
});
slideDialog.addEventListener("close", () => {
  slideImage.removeAttribute("src");
});

const motionToggle = document.getElementById("motionToggle");
motionToggle.addEventListener("click", () => {
  const active = document.body.classList.toggle("motion-on");
  motionToggle.setAttribute("aria-pressed", String(active));
  motionToggle.textContent = active ? "MOTION OFF" : "MOTION ON";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .08 });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

renderCards();
