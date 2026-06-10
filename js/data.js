/* ============================================================
 * data.js — ALL site content lives here.
 *
 * HOW TO EDIT:
 *  - Plain strings (e.g. paper titles, URLs, "ICLR 2026") are shown
 *    in BOTH languages as-is.
 *  - Objects shaped { en: "...", ko: "..." } are language-switched.
 *  - To add a publication / news item / award, copy an existing
 *    object in the matching array and edit it. Order on the page
 *    follows array order (put newest first).
 *  - Simple HTML (<b>, <a>) is allowed ONLY inside news `text`.
 * ============================================================ */

const SITE = {
  config: {
    siteUrl: "https://smkim37.github.io",
    myName: "Sumin Kim", // bolded automatically in author lists
    portrait: "assets/suminkim_image.jpg",
    cv: "assets/suminkim_cv.pdf",
  },

  /* ---------- UI labels (nav + section/sub-section titles) ---------- */
  ui: {
    nav: {
      about:          { en: "About",             ko: "소개" },
      news:           { en: "News",              ko: "소식" },
      education:      { en: "Education",         ko: "학력" },
      publications:   { en: "Publications",      ko: "논문" },
      patents:        { en: "Patents",           ko: "특허" },
      workExperience: { en: "Work Experience",   ko: "경력" },
      projects:       { en: "Projects",          ko: "연구 과제" },
      fellowships:    { en: "Fellowships & Scholarships", ko: "펠로우십·장학금" },
      awards:         { en: "Honors & Awards",   ko: "수상 내역" },
      talks:          { en: "Invited Talks",     ko: "초청 발표" },
      teaching:       { en: "Teaching",          ko: "강의" },
      services:       { en: "Academic Services", ko: "학술 활동" },
      activities:     { en: "Activities",        ko: "대외 활동" },
    },
    labels: {
      skipLink:    { en: "Skip to content",            ko: "본문 바로가기" },
      heroEyebrow: { en: "Hello, I am",                ko: "안녕하세요," },
      cvButton:    { en: "CV",                         ko: "이력서" },
      tocTitle:    { en: "Contents",                   ko: "목차" },
      interests:   { en: "Research Interests",         ko: "연구 분야" },
      conference:  { en: "Conference Papers",          ko: "학회 논문" },
      preprints:   { en: "Preprints",                  ko: "프리프린트" },
      eqContrib:   { en: "* equal contribution",       ko: "* 공동 1저자" },
      corresp:     { en: "† corresponding author",     ko: "† 교신저자" },
      inventors:   { en: "Inventors",                  ko: "발명자" },
      ta:          { en: "Teaching Assistant",         ko: "조교" },
      backToTop:   { en: "Back to top",                ko: "맨 위로" },
      themeToggle: { en: "Toggle dark mode",           ko: "다크 모드 전환" },
      langToggle:  { en: "한국어로 보기",               ko: "View in English" },
      langButton:  { en: "KO",                         ko: "EN" },
      menuOpen:    { en: "Open menu",                  ko: "메뉴 열기" },
      menuClose:   { en: "Close menu",                 ko: "메뉴 닫기" },
    },
  },

  /* ---------- Profile / hero / about ---------- */
  profile: {
    name: "Sumin Kim", // shown in English in both languages
    title: {
      en: "Ph.D. Student",
      ko: "박사과정",
    },
    lab: {
      name: { en: "Visual Information Processing Lab", ko: "시각정보처리 연구실" },
      url: "https://vip.snu.ac.kr",
    },
    university: { en: "Seoul National University", ko: "서울대학교" },
    universityUrl: "https://en.snu.ac.kr",
    email: "sumink@snu.ac.kr",
    emailDisplay: "sumink [at] snu.ac.kr", // spam-safe display form
    location: { en: "Seoul, South Korea", ko: "대한민국 서울" },
    // Simple <a> tags are allowed inside bio paragraphs.
    bio: [
      {
        en: 'I am a second-year Integrated M.S./Ph.D. student in <a href="https://gsds.snu.ac.kr" target="_blank" rel="noopener">Data Science</a> at <a href="https://en.snu.ac.kr" target="_blank" rel="noopener">Seoul National University</a>, where I am fortunate to be advised by <a href="http://www.joonseok.net/home.html" target="_blank" rel="noopener">Prof. Joonseok Lee</a> as a member of the <a href="https://vip.snu.ac.kr" target="_blank" rel="noopener">Visual Information Processing Lab</a>. Prior to that, I received my B.S. in <a href="https://sw.skku.edu/eng_sw/index.do" target="_blank" rel="noopener">Applied Artificial Intelligence</a> from <a href="https://www.skku.edu/eng/index.do" target="_blank" rel="noopener">Sungkyunkwan University</a>.',
        ko: '<a href="https://www.snu.ac.kr" target="_blank" rel="noopener">서울대학교</a> <a href="https://gsds.snu.ac.kr" target="_blank" rel="noopener">데이터사이언스</a> 석박사통합과정 2년차로, <a href="https://vip.snu.ac.kr" target="_blank" rel="noopener">시각정보처리 연구실</a>에서 <a href="http://www.joonseok.net/home.html" target="_blank" rel="noopener">이준석 교수님</a>의 지도를 받고 있습니다. 그 전에는 <a href="https://www.skku.edu" target="_blank" rel="noopener">성균관대학교</a>에서 <a href="https://sw.skku.edu" target="_blank" rel="noopener">인공지능융합</a> 학사 학위를 받았습니다.',
      },
      {
        en: "My research lies at the intersection of computer vision and multimodal learning, with a focus on video understanding. I am particularly interested in learning spatiotemporal video representations that enable machines to effectively perceive and reason over multimodal signals. My recent work centers on multimodal video summarization, spanning generative modeling and end-to-end learning approaches.",
        ko: "컴퓨터 비전과 멀티모달 학습의 교차점에서 비디오 이해를 중심으로 연구하고 있습니다. 특히 기계가 멀티모달 신호를 효과적으로 인지하고 추론할 수 있도록 하는 시공간 비디오 표현 학습에 관심이 많습니다. 최근에는 생성 모델링과 end-to-end 학습을 아우르는 멀티모달 비디오 요약 연구에 집중하고 있습니다.",
      },
    ],
    interests: {
      broad: {
        en: ["Video Understanding", "Representation Learning", "Multimodal Learning"],
        ko: ["비디오 이해", "표현 학습", "멀티모달 학습"],
      },
      topics: {
        en: ["Video Summarization", "Highlight Detection", "Video Object Segmentation", "Moment Retrieval"],
        ko: ["비디오 요약", "하이라이트 검출", "비디오 객체 분할", "모먼트 검색"],
      },
    },
    links: [
      { icon: "email",    label: "Email",          url: "mailto:sumink@snu.ac.kr" },
      { icon: "linkedin", label: "LinkedIn",       url: "https://www.linkedin.com/in/smkim37" },
      { icon: "github",   label: "GitHub",         url: "https://github.com/smkim37" },
      { icon: "scholar",  label: "Google Scholar", url: "https://scholar.google.com/citations?user=-CnUimcAAAAJ" },
      { icon: "cv",       label: "CV",             url: "assets/suminkim_cv.pdf" },
    ],
  },

  education: [
    {
      school: { en: "Seoul National University", ko: "서울대학교" },
      degree: { en: "Integrated M.S./Ph.D. in Data Science", ko: "데이터사이언스 석박사통합과정" },
      period: { en: "Mar 2025 – Present", ko: "2025.03 – 현재" },
      note: {
        en: "Advisor: Prof. Joonseok Lee · Visual Information Processing Lab",
        ko: "지도교수: 이준석 · 시각정보처리 연구실",
      },
    },
    {
      school: { en: "Sungkyunkwan University", ko: "성균관대학교" },
      degree: { en: "B.S. in Applied Artificial Intelligence", ko: "인공지능융합 학사" },
      period: { en: "Mar 2020 – Feb 2025", ko: "2020.03 – 2025.02" },
      note: { en: "GPA 4.23/4.50 · Magna Cum Laude", ko: "GPA 4.23/4.50 · 우등 졸업" },
    },
  ],

  /* ---------- News (newest first; `highlight: true` = accent border)
   * Keep this list focused: program admissions, paper acceptances,
   * and reviewer service only. ---------- */
  news: [
    {
      date: { en: "Jan 2026", ko: "2026.01" },
      highlight: true,
      text: {
        en: "<b>TripleSumm</b> is accepted to <b>ICLR 2026</b>!",
        ko: "<b>TripleSumm</b> 논문이 <b>ICLR 2026</b>에 게재 승인되었습니다!",
      },
    },
    {
      date: { en: "2026", ko: "2026" },
      text: {
        en: "Serving as a reviewer for ICML 2026 and NeurIPS 2026.",
        ko: "ICML 2026, NeurIPS 2026 리뷰어로 활동하고 있습니다.",
      },
    },
    {
      date: { en: "Jun 2025", ko: "2025.06" },
      highlight: true,
      text: {
        en: "<b>SummDiff</b> is accepted to <b>ICCV 2025</b> as a <b>Highlight</b> presentation (top 2.34%)!",
        ko: "<b>SummDiff</b> 논문이 <b>ICCV 2025</b>에 <b>Highlight</b>(상위 2.34%)로 선정되었습니다!",
      },
    },
    {
      date: { en: "Mar 2025", ko: "2025.03" },
      text: {
        en: "Started the Integrated M.S./Ph.D. program at Seoul National University (Visual Information Processing Lab).",
        ko: "서울대학교 시각정보처리 연구실에서 석박사통합과정을 시작했습니다.",
      },
    },
  ],

  /* ---------- Publications ---------- */
  publications: [
    {
      id: "C2",
      type: "conference",
      title: "TripleSumm: Adaptive Triple-Modality Fusion for Video Summarization",
      authors: "Sumin Kim*, Hyemin Jeong*, Mingu Kang*, Yejin Kim, Yoori Oh†, and Joonseok Lee†",
      venue: "International Conference on Learning Representations (ICLR), 2026",
      venueTag: "ICLR 2026",
      award: null,
      links: [
        { label: "Paper",   url: "https://openreview.net/pdf?id=x74NsHGywD" },
        { label: "arXiv",   url: "https://arxiv.org/abs/2603.01169" },
        { label: "Website", url: "https://smkim37.github.io/TripleSumm-page" },
        { label: "Code",    url: "https://github.com/smkim37/TripleSumm" },
        { label: "Dataset", url: "https://huggingface.co/datasets/hminjeong/TripleSumm-MoSu" },
      ],
    },
    {
      id: "C1",
      type: "conference",
      title: "SummDiff: Generative Modeling of Video Summarization with Diffusion",
      authors: "Kwanseok Kim*, Jaehoon Hahm*, Sumin Kim, Jinhwan Sul, Byunghak Kim, and Joonseok Lee†",
      venue: "International Conference on Computer Vision (ICCV), 2025",
      venueTag: "ICCV 2025",
      award: { en: "Highlight Presentation (top 2.34%)", ko: "Highlight 발표 (상위 2.34%)" },
      links: [
        { label: "Paper",   url: "https://openaccess.thecvf.com/content/ICCV2025/papers/Kim_SummDiff_Generative_Modeling_of_Video_Summarization_with_Diffusion_ICCV_2025_paper.pdf" },
        { label: "arXiv",   url: "https://arxiv.org/abs/2510.08458" },
        { label: "Website", url: "https://jaehoon-hahm.github.io/summdiff-page" },
        { label: "Code",    url: "https://github.com/Kwanseok-K/SummDiff" },
      ],
    },
    {
      id: "P2",
      type: "preprint",
      title: "Do Not Stop at Frame Scoring: Enabling End-to-end Training for Video Summarization",
      authors: "Sumin Kim*, Mingu Kang*, Minjun Kim, Sungmin Yang, U Kang, Jaegul Choo†, Yoori Oh†, and Joonseok Lee†",
      venue: { en: "Under review, 2026", ko: "심사 중, 2026" },
      award: null,
      links: [],
    },
    {
      id: "P1",
      type: "preprint",
      title: "From Matching to Reasoning: Query-Aware Long Video Summarization",
      authors: "Mingu Kang, Sumin Kim, Hyunjin Lee, Sungmin Yang, Yoori Oh†, and Joonseok Lee†",
      venue: { en: "Under review, 2026", ko: "심사 중, 2026" },
      award: null,
      links: [],
    },
  ],

  patents: [
    {
      title: "Video Summarization Method and Computer Apparatus for the Same",
      inventors: "Sumin Kim, Hyemin Jeong, Mingu Kang, Yejin Kim, Yoori Oh, and Joonseok Lee",
      status: {
        en: "Korean patent application filed May 2026 (application number pending)",
        ko: "국내 특허 출원, 2026.05 (출원번호 부여 중)",
      },
    },
    {
      title: "Method for Generating Video Summaries and Computer Apparatus Therefor",
      inventors: "Kwanseok Kim, Jaehoon Hahm, Sumin Kim, Jinhwan Sul, Byunghak Kim, and Joonseok Lee",
      status: {
        en: "Korean Patent Application No. 10-2026-0063327, filed Apr 2026",
        ko: "국내 특허 출원 제10-2026-0063327호, 2026.04",
      },
    },
  ],

  /* ---------- Experience & Projects ---------- */
  experience: [
    {
      role: { en: "Undergraduate Research Intern", ko: "학부 연구 인턴" },
      org: {
        en: "Center for Artificial Intelligence, AI & Robotics Institute, KIST",
        ko: "한국과학기술연구원(KIST) AI·로봇연구소 인공지능연구센터",
      },
      period: { en: "Feb 2023 – Jun 2023", ko: "2023.02 – 2023.06" },
      desc: {
        en: "Investigated parameter-efficient model adaptation for temporal action localization, reducing trainable parameters while preserving localization performance, and analyzed the trade-off between adaptation efficiency and temporal localization accuracy on standard benchmarks.",
        ko: "시간적 행동 검출(temporal action localization)을 위한 파라미터 효율적 모델 적응 기법을 연구하여, 검출 성능을 유지하면서 학습 파라미터를 줄이고 적응 효율과 검출 정확도 간의 트레이드오프를 벤치마크에서 분석했습니다.",
      },
    },
  ],

  projects: [
    {
      name: { en: "Multi-modal Fusion for Video Summarization", ko: "멀티모달 융합 기반 비디오 요약" },
      sponsor: { en: "NRF Basic Science Research Program", ko: "한국연구재단 기초연구사업" },
      period: { en: "Sep 2025 – Present", ko: "2025.09 – 현재" },
      desc: {
        en: "Selected for the 2025 Basic Science Research Program funded by the National Research Foundation of Korea. Leading a research project to develop a robust video summarization framework by fusing multimodal data.",
        ko: "2025년 한국연구재단 기초연구사업에 선정되어, 멀티모달 데이터를 융합한 강건한 비디오 요약 프레임워크 개발 연구를 이끌고 있습니다.",
      },
    },
    {
      name: { en: "Generative AI for Visual Effects", ko: "시각효과를 위한 생성형 AI" },
      sponsor: { en: "Samsung Electronics", ko: "삼성전자" },
      period: { en: "Jun 2025 – Dec 2025", ko: "2025.06 – 2025.12" },
      desc: {
        en: "Designed an SDXL-based visual-effects generation pipeline using LoRA fine-tuning, balancing style transfer strength with object-level semantic and geometric preservation.",
        ko: "LoRA 파인튜닝을 활용한 SDXL 기반 시각효과 생성 파이프라인을 설계하여, 스타일 변환 강도와 객체 수준의 의미·기하 보존 간 균형을 맞췄습니다.",
      },
    },
  ],

  /* ---------- Fellowships & Awards ---------- */
  fellowships: [
    {
      name: { en: "NRF Graduate Research Encouragement Grant", ko: "석사과정생 연구장려금" },
      org: { en: "National Research Foundation of Korea", ko: "한국연구재단" },
      year: { en: "Sep 2025", ko: "2025.09" },
      note: null,
    },
    {
      name: { en: "Yulchon AI Research Fellowship", ko: "율촌 AI 연구 펠로우십" },
      org: { en: "Yulchon Foundation", ko: "율촌재단" },
      year: { en: "Aug 2025", ko: "2025.08" },
      note: null,
    },
    {
      name: { en: "Presidential Science Scholarship (Engineering)", ko: "대통령과학장학금 (공학)" },
      org: { en: "Korea Student Aid Foundation", ko: "한국장학재단" },
      year: { en: "Mar 2023 – Feb 2025", ko: "2023.03 – 2025.02" },
      note: { en: "National merit-based scholarship — one of 60 national scholars", ko: "국가 우수 장학금 — 전국 60명 선발" },
    },
    {
      name: { en: "Student Success Leader Scholarship", ko: "학생성공 리더 장학금" },
      org: { en: "Sungkyunkwan University", ko: "성균관대학교" },
      year: "2022 · 2023 · 2024",
      note: null,
    },
    {
      name: { en: "Excellence Performance Scholarship", ko: "우수성과 장학금" },
      org: { en: "AI Convergence and Open Sharing System (COSS)", ko: "AI 혁신공유대학 (COSS)" },
      year: { en: "Jan 2024", ko: "2024.01" },
      note: null,
    },
    {
      name: { en: "University Innovation Scholarship", ko: "대학혁신 장학금" },
      org: { en: "Sungkyunkwan University", ko: "성균관대학교" },
      year: "2021 · 2023",
      note: null,
    },
    {
      name: { en: "Academic Excellence Scholarship", ko: "성적우수 장학금" },
      org: { en: "College of Computing and Informatics, Sungkyunkwan University", ko: "성균관대학교 소프트웨어융합대학" },
      year: { en: "Dec 2023", ko: "2023.12" },
      note: null,
    },
  ],

  awards: [
    {
      name: { en: "Bronze Award, Industry-Academic-Linked AI Hackathon", ko: "동상, 산학연계 AI 해커톤" },
      org: { en: "AI Convergence and Open Sharing System (COSS)", ko: "AI 혁신공유대학 (COSS)" },
      year: { en: "Aug 2024", ko: "2024.08" },
    },
    {
      name: { en: "Dean’s List Award, High Scholastic Achievement", ko: "Dean’s List, 학업성취 우수상" },
      org: { en: "College of Computing and Informatics, Sungkyunkwan University", ko: "성균관대학교 소프트웨어융합대학" },
      year: { en: "Dec 2023", ko: "2023.12" },
    },
    {
      name: { en: "SK Telecom Special Award, Seoul Central AI Competition", ko: "SK텔레콤 특별상, 서울 중앙 AI 경진대회" },
      org: { en: "Joint competition across 8 universities in Seoul", ko: "서울 소재 8개 대학 연합 경진대회" },
      year: { en: "Nov 2023", ko: "2023.11" },
    },
    {
      name: { en: "Special Award, Uni-DTHON (AI & Data Track)", ko: "특별상, Uni-DTHON (AI·데이터 트랙)" },
      org: { en: "Joint hackathon across 8 universities incl. SNU, KAIST, POSTECH", ko: "서울대·KAIST·POSTECH 등 8개 대학 연합 해커톤" },
      year: { en: "Nov 2023", ko: "2023.11" },
    },
    {
      name: { en: "Grand Award, Capstone Design and AI Hackathon Competition", ko: "대상, 캡스톤디자인 & AI 해커톤" },
      org: { en: "The Korean Association of Computer Education", ko: "한국컴퓨터교육학회" },
      year: { en: "Oct 2023", ko: "2023.10" },
    },
    {
      name: { en: "Excellence Award, KOPIS Big Data Analysis Contest", ko: "우수상, KOPIS 빅데이터 분석 공모전" },
      org: { en: "Ministry of Culture, Sports and Tourism", ko: "문화체육관광부" },
      year: { en: "Sep 2023", ko: "2023.09" },
    },
    {
      name: { en: "Excellence Award, AI Service Design Hackathon", ko: "우수상, AI 서비스 디자인 해커톤" },
      org: { en: "Samsung Electronics", ko: "삼성전자" },
      year: { en: "Aug 2023", ko: "2023.08" },
    },
    {
      name: { en: "Top Award, Co-Deep Learning Project Competition", ko: "최우수상, Co-Deep Learning 프로젝트 경진대회" },
      org: { en: "Sungkyunkwan University", ko: "성균관대학교" },
      year: { en: "Jan 2023", ko: "2023.01" },
    },
    {
      name: { en: "President’s List Award, University-wide Undergraduate Honor", ko: "President’s List, 교내 우수 학부생" },
      org: { en: "Sungkyunkwan University", ko: "성균관대학교" },
      year: { en: "Dec 2022", ko: "2022.12" },
      note: { en: "Selected as one of the top 20 students university-wide", ko: "교내 20명 선발" },
    },
    {
      name: { en: "Excellence Award, Web Development Competition Using AI", ko: "우수상, AI 활용 웹 개발 경진대회" },
      org: { en: "College of Computing and Informatics, Sungkyunkwan University", ko: "성균관대학교 소프트웨어융합대학" },
      year: { en: "Aug 2022", ko: "2022.08" },
    },
    {
      name: { en: "Top Award, Web Development Competition Using AI", ko: "최우수상, AI 활용 웹 개발 경진대회" },
      org: { en: "College of Computing and Informatics, Sungkyunkwan University", ko: "성균관대학교 소프트웨어융합대학" },
      year: { en: "Aug 2021", ko: "2021.08" },
    },
  ],

  /* ---------- Talks, Teaching, Service, Activities ---------- */
  talks: [
    {
      title: { en: "“Where Do Good Research Ideas Come From?”", ko: "“좋은 연구 아이디어는 어디에서 오는가?”" },
      venue: { en: "Student Success Alumni Talk, Sungkyunkwan University", ko: "학생성공 동문 토크, 성균관대학교" },
      date: { en: "May 2026", ko: "2026.05" },
    },
    {
      title: { en: "“Why Do We Pursue Graduate Studies?”", ko: "“우리는 왜 대학원에 가는가?”" },
      venue: { en: "The 6th HAYAKU Conference, Yonsei University", ko: "제6회 HAYAKU 콘퍼런스, 연세대학교" },
      date: { en: "Mar 2026", ko: "2026.03" },
    },
    {
      title: { en: "“Multimodal Video Summarization Research”", ko: "“멀티모달 비디오 요약 연구”" },
      venue: { en: "The 5th HAYAKU Conference, Korea University", ko: "제5회 HAYAKU 콘퍼런스, 고려대학교" },
      date: { en: "Sep 2025", ko: "2025.09" },
    },
    {
      title: { en: "“Reflections on Video Research”", ko: "“비디오 연구를 돌아보며”" },
      venue: { en: "Student Success Alumni Talk, Sungkyunkwan University", ko: "학생성공 동문 토크, 성균관대학교" },
      date: { en: "May 2025", ko: "2025.05" },
    },
  ],

  teaching: [
    {
      course: { en: "Machine Learning for Visual Understanding", ko: "시각적 이해를 위한 기계학습" },
      school: { en: "Seoul National University", ko: "서울대학교" },
      term: { en: "Spring 2026", ko: "2026년 1학기" },
    },
    {
      course: { en: "Core Computing: Thinking with Computers", ko: "컴퓨팅핵심: 컴퓨터로 생각하기" },
      school: { en: "Seoul National University", ko: "서울대학교" },
      term: { en: "Spring 2026", ko: "2026년 1학기" },
    },
    {
      course: { en: "Programming for Data Analysis", ko: "데이터 분석을 위한 프로그래밍" },
      school: { en: "Seoul National University", ko: "서울대학교" },
      term: { en: "Winter 2026", ko: "2026년 겨울학기" },
    },
    {
      course: { en: "Core Computing: Thinking with Computers", ko: "컴퓨팅핵심: 컴퓨터로 생각하기" },
      school: { en: "Seoul National University", ko: "서울대학교" },
      term: { en: "Fall 2025", ko: "2025년 2학기" },
    },
    {
      course: { en: "Basic Computing: First Adventures in Computing", ko: "컴퓨팅 기초: 처음 만나는 컴퓨팅" },
      school: { en: "Seoul National University", ko: "서울대학교" },
      term: { en: "Summer 2025", ko: "2025년 여름학기" },
    },
    {
      course: { en: "Computational Thinking and Software Coding", ko: "컴퓨팅사고와 SW코딩" },
      school: { en: "Sungkyunkwan University", ko: "성균관대학교" },
      term: { en: "Spring 2024", ko: "2024년 1학기" },
    },
    {
      course: { en: "Artificial Intelligence Basics & Uses", ko: "AI 기초와 활용" },
      school: { en: "Sungkyunkwan University", ko: "성균관대학교" },
      term: { en: "Fall 2022", ko: "2022년 2학기" },
    },
  ],

  service: [
    {
      role: { en: "Reviewer", ko: "리뷰어" },
      detail: "Conference on Neural Information Processing Systems (NeurIPS)",
      year: "2026",
    },
    {
      role: { en: "Reviewer", ko: "리뷰어" },
      detail: "International Conference on Machine Learning (ICML)",
      year: "2026",
    },
  ],

  activities: [
    {
      role: { en: "Founding President", ko: "초대 학회장" },
      org: { en: "AI Academic Student Society “brAIn”, Sungkyunkwan University", ko: "AI 학술 동아리 “brAIn”, 성균관대학교" },
      period: { en: "Sep 2024 – Feb 2025", ko: "2024.09 – 2025.02" },
    },
    {
      role: { en: "President", ko: "학생회장" },
      org: { en: "School of Global Convergence Student Council “cresc.”, Sungkyunkwan University", ko: "글로벌융합학부 학생회 “cresc.”, 성균관대학교" },
      period: { en: "Nov 2021 – Nov 2022", ko: "2021.11 – 2022.11" },
    },
    {
      role: { en: "Member", ko: "중앙운영위원" },
      org: { en: "Central Student Steering Committee, Sungkyunkwan University", ko: "중앙운영위원회, 성균관대학교" },
      period: { en: "Nov 2021 – Nov 2022", ko: "2021.11 – 2022.11" },
    },
    {
      role: { en: "President", ko: "대표 학생" },
      org: { en: "School of Global Convergence Ambassadors “Alimi”, Sungkyunkwan University", ko: "글로벌융합학부 홍보대사 “알리미”, 성균관대학교" },
      period: { en: "Sep 2021 – Aug 2022", ko: "2021.09 – 2022.08" },
    },
    {
      role: { en: "Visiting Student", ko: "방문 학생" },
      org: { en: "Intensive Programming and Startup (CS496), KAIST", ko: "몰입캠프: 프로그래밍 및 창업 (CS496), KAIST" },
      period: { en: "Dec 2021 – Feb 2022", ko: "2021.12 – 2022.02" },
    },
  ],

  footer: {
    copyright: "© 2026 Sumin Kim. All rights reserved.",
    sub: {
      en: "Last updated June 10, 2026",
      ko: "2026년 6월 10일 업데이트",
    },
  },
};
