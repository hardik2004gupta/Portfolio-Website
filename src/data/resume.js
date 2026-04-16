// ───────────────────────────────────────────────────────────────────
// RESUME DATA — single source of truth.
// Edit this file to update the portfolio. No component code changes needed.
// ───────────────────────────────────────────────────────────────────

export const PROFILE = {
  firstName: "Hardik",
  lastName: "Gupta",
  location: "New Delhi, IN",
  coords: { lat: "N 28°38′", lng: "E 77°13′" },
  timezone: "Asia/Kolkata",
  email: "hardik2004gupta@gmail.com",
  phone: "+91 87009 39561",
  links: {
    github: "https://github.com/hardik2004gupta",
    linkedin: "https://linkedin.com/in/hardikgupta2004",
    website: "https://hardik-gupta.netlify.app",
  },
  tagline: "Vol. 01 · Issue 2026 · ML / LLM / Systems",
};

export const HERO_STATS = [
  { value: "R² > 0.92", label: "model fidelity (DTC/DTS)" },
  { value: "< 100ms", label: "inference latency" },
  { value: "650+", label: "outcompeted at MAIT 6.0" },
  { value: "3 yrs", label: "shipping ML + GenAI" },
];

export const MARQUEE_TERMS = [
  "LLMs", "RAG", "Agentic AI", "LangChain", "XGBoost",
  "FastAPI", "Airflow", "PostgreSQL", "Python", "Transformers",
];

export const PRINCIPLES = [
  ["01", "Latency is a product feature, not an optimization."],
  ["02", "A model without a deployment is an essay."],
  ["03", "Prompts are interfaces; treat them like APIs."],
  ["04", "R² on the test set is a hypothesis, not a result."],
];

export const EDUCATION = {
  school: "Maharaja Agrasen Institute of Technology",
  degree: "B.Tech · Electronics (VLSI Design & Technology) · 2023–2027",
  coursework: "Machine Learning · Probability & Statistics · Linear Algebra · Signals & Systems",
};

export const SKILL_GROUPS = [
  {
    iconName: "Sparkles",
    name: "Generative AI & LLMs",
    items: [
      "LLMs", "RAG", "Prompt Engineering", "Agentic AI", "LangChain",
      "HuggingFace Transformers", "FAISS", "ChromaDB", "OpenAI", "Groq", "Ollama",
    ],
    featured: true,
  },
  {
    iconName: "Cpu",
    name: "Machine Learning & AI",
    items: ["Scikit-learn", "TensorFlow", "Keras", "XGBoost", "OpenCV", "NLP"],
  },
  {
    iconName: "Terminal",
    name: "Programming",
    items: ["Python", "SQL", "C++", "Java"],
  },
  {
    iconName: "Layers",
    name: "Data Engineering & Backend",
    items: ["FastAPI", "Apache Airflow", "ETL Pipelines"],
  },
  {
    iconName: "Database",
    name: "Databases",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    iconName: "Box",
    name: "Tools & Platforms",
    items: [
      "Docker", "Git", "Linux", "Streamlit", "LangSmith",
      "HuggingFace Spaces", "AWS Bedrock", "AWS Lambda",
    ],
  },
];

export const EXPERIENCE = [
  {
    org: "Ministry of Electronics & Information Technology",
    orgItalic: "Information Technology",
    body: "Ministry of Electronics &",
    role: "Project Intern",
    location: "New Delhi",
    badge: "Government of India",
    period: "Jul → Sept",
    periodNote: "2025 · 3 months · in-person",
    domain: "Applied ML for Upstream Oil & Gas · Petrophysics · Signal Processing",
    status: "Completed",
    bullets: [
      {
        intro: "Trained XGBoost models to predict",
        highlights: ["compressional (DTC)", "shear (DTS)"],
        joiner: ["sonic wave travel times from well log data — reaching", "with wavelet-based feature engineering and careful preprocessing."],
        mono: "R² > 0.92",
      },
      {
        intro: "Deployed the model behind a FastAPI inference service with",
        highlights: ["< 100 ms"],
        joiner: ["latency, providing an AI-driven alternative to traditional sonic logging — a process that is expensive and sometimes infeasible downhole."],
      },
    ],
    tags: ["XGBoost", "Wavelet Transforms", "FastAPI", "Signal Processing", "Docker", "Python"],
  },
];

// Update `live` and `code` URLs once you have them
export const PROJECTS = [
  {
    num: "P/01",
    title: "ConversoAI",
    italic: "conversational substrate",
    stack: ["LLaMA 3.1", "LangChain", "Groq", "Prompt Engineering"],
    blurb:
      "A low-latency conversational AI built on Groq-hosted LLaMA models with LangChain as the orchestration layer. Prompt-driven workflows, pluggable memory, and a scaffold ready for RAG and agent-based extensions.",
    tags: ["LLM", "Conversational", "Infra"],
    live: "https://hardik-gupta.netlify.app",
    code: "https://github.com/hardik2004gupta",
    accent: "amber",
    glyph: "◉",
  },
  {
    num: "P/02",
    title: "Sonic Wave Predictor",
    italic: "petrophysics × ML",
    stack: ["XGBoost", "FastAPI", "Scikit-learn", "Wavelets"],
    blurb:
      "Predicts DTC and DTS sonic travel times directly from well logs — removing the need for expensive sonic logging runs. R² > 0.92 on evaluation, served at sub-100ms latency through a FastAPI inference API.",
    tags: ["Research", "API", "Regression"],
    live: "https://hardik-gupta.netlify.app",
    code: "https://github.com/hardik2004gupta",
    accent: "phosphor",
    glyph: "◈",
  },
  {
    num: "P/03",
    title: "NASA APOD ETL Pipeline",
    italic: "orchestrated daily ingest",
    stack: ["Airflow", "Docker", "PostgreSQL", "REST"],
    blurb:
      "An Apache Airflow DAG that pulls NASA's Astronomy Picture of the Day every morning, lands it in PostgreSQL, and ships the whole thing as a containerized stack — scheduled, monitored, reproducible.",
    tags: ["Data Eng", "Pipeline", "Infra"],
    code: "https://github.com/hardik2004gupta",
    accent: "bone",
    glyph: "◎",
  },
];

export const ACHIEVEMENTS = [
  {
    place: "Winner",
    title: "HackWithMAIT 6.0",
    rank: "01",
    beat: "650+",
    detail:
      "Built an OpenCV microplastic detection system paired with Arduino/ESP32 for real-time sensing and automated alerts. Hardware + vision stack, end-to-end, in a hackathon window.",
  },
  {
    place: "1st Runner-Up",
    title: "IEEE SmartOHack 3.0",
    rank: "02",
    beat: "120+",
    detail:
      "AI-powered structural inspection tool — real-time crack detection and risk analysis through OpenCV, served behind Flask. Shipped with a working dashboard and triage logic.",
  },
];

export const LEADERSHIP = {
  org: "IOSD MAIT",
  role: "Vice-President",
  detail:
    "Coordinated technical events and workshops across campus — design, outreach, and sponsorship teams operating in parallel, each with their own deadlines. Shipped the calendar on time, twice.",
};

export const NOW_BLOCK = [
  ["now()", "Deepening RAG + agentic architectures"],
  ["reading", "System cards, retrieval papers, petrophysics"],
  ["building", "Evaluation loops for production LLMs"],
  ["wants", "A team that ships weekly"],
];
