export const personalInfo = {
  name: "Yashika Chandra",
  title: "Computer Science Engineer | Full-Stack Developer | AI Enthusiast",
  shortPositioning: "Building intelligent web experiences with code and AI.",
  bioSummary:
    "Computer Science and Engineering student passionate about Full-Stack Development and Artificial Intelligence. I build practical, user-focused applications and explore how modern AI can make software more intelligent, useful, and impactful.",
  fullAbout: [
    "I’m Yashika Chandra, a Computer Science and Engineering student at Guru Gobind Singh Indraprastha University with a strong interest in Web Development and Artificial Intelligence. I enjoy building practical, user-focused applications and exploring how modern AI can make software more intelligent and useful.",
    "My technical experience includes Java, Python, JavaScript, React.js, Node.js, Express.js, MongoDB, and MySQL, along with tools such as Git, GitHub, Docker, and Postman. I have worked on projects involving AI-powered applications, career recommendation systems, scam detection, and full-stack web development.",
    "Beyond academics, I actively participate in hackathons, research, entrepreneurship initiatives, and technical communities. I’ve also taken leadership and outreach roles that have helped me develop strong communication, teamwork, and problem-solving skills.",
    "I’m currently focused on strengthening my full-stack development and AI engineering skills, building meaningful projects, and preparing for opportunities where I can learn, contribute, and grow as a software engineer."
  ],
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Guru Gobind Singh Indraprastha University, Delhi",
    expectedGraduation: "2028",
    status: "Undergraduate Student",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Software Engineering",
      "Cloud Computing"
    ]
  },
  stats: [
    { label: "Degree Program", value: "B.Tech CSE", subtext: "GGSIPU, Delhi" },
    { label: "Graduation Cohort", value: "Expected 2028", subtext: "4-Year Program" },
    { label: "Core Focus", value: "Full-Stack + AI", subtext: "Web & Intelligent Systems" },
    { label: "Active Engagement", value: "Hackathons & Research", subtext: "Tech Communities & Innovation" }
  ],
  socials: {
    github: "https://github.com/yashikachandra06",
    linkedin: "https://www.linkedin.com/in/yashika-chandra-3b2b75355/",
    email: "Yashikachandra06@gmail.com"
  }
};

export const skillsData = {
  categories: [
    { id: "all", name: "All Skills" },
    { id: "languages", name: "Languages" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "databases", name: "Databases" },
    { id: "tools", name: "Tools & DevOps" },
    { id: "other", name: "Core & Systems" }
  ],
  items: [
    // Languages
    { name: "Java", category: "languages", icon: "Code", highlight: "Object-oriented programming & system foundations" },
    { name: "Python", category: "languages", icon: "Terminal", highlight: "AI/ML scripting, FastAPI & data analysis" },
    { name: "JavaScript", category: "languages", icon: "Cpu", highlight: "ES6+, asynchronous programming & full-stack apps" },

    // Frontend
    { name: "React.js", category: "frontend", icon: "Layers", highlight: "Component architecture, hooks & responsive UIs" },
    { name: "HTML", category: "frontend", icon: "FileCode", highlight: "Semantic markup, accessibility & SEO structure" },
    { name: "CSS", category: "frontend", icon: "Palette", highlight: "Modern flexbox, grid, glassmorphism & responsive styling" },
    { name: "Bootstrap", category: "frontend", icon: "LayoutGrid", highlight: "Rapid responsive grid & component prototyping" },
    { name: "Tailwind CSS", category: "frontend", icon: "Sparkles", highlight: "Utility-first modern styling & custom themes" },

    // Backend
    { name: "Node.js", category: "backend", icon: "Server", highlight: "Server-side runtime, async I/O & event-driven APIs" },
    { name: "Express.js", category: "backend", icon: "Globe", highlight: "RESTful architecture, middleware & routing" },

    // Databases
    { name: "MongoDB", category: "databases", icon: "Database", highlight: "NoSQL document stores, aggregation pipelines & Mongoose" },
    { name: "MySQL", category: "databases", icon: "Table", highlight: "Relational modeling, complex queries & schema integrity" },
    { name: "PostgreSQL", category: "databases", icon: "Database", highlight: "ACID transactions, relational indexing & robust storage" },

    // Tools & DevOps
    { name: "Git", category: "tools", icon: "GitBranch", highlight: "Version control, branching strategies & clean commit logs" },
    { name: "GitHub", category: "tools", icon: "Github", highlight: "Collaborative development, PRs, actions & code review" },
    { name: "Docker", category: "tools", icon: "Box", highlight: "Containerization, reproducible environments & isolation" },
    { name: "Kubernetes", category: "tools", icon: "CloudRain", highlight: "Container orchestration & cluster management concepts" },
    { name: "Postman", category: "tools", icon: "Send", highlight: "API testing, endpoint validation & automated documentation" },

    // Other
    { name: "Cloud", category: "other", icon: "Cloud", highlight: "Deployment pipelines, cloud storage & serverless hosting" },
    { name: "APIs", category: "other", icon: "Zap", highlight: "RESTful API design, integration & third-party AI services" },
    { name: "System Design", category: "other", icon: "Network", highlight: "Scalable architecture, decoupling & component boundaries" },
    { name: "Data Structures & Algorithms", category: "other", icon: "Binary", highlight: "Algorithmic efficiency, graph theory, trees & optimization" }
  ]
};

export const experienceData = [
  {
    role: "Full Stack Development Intern",
    company: "UpStartInterns",
    period: "Sep 2026 – Oct 2026",
    location: "Remote / Internship",
    type: "Full-Stack Development",
    achievements: [
      "Developed a responsive travel discovery platform using Next.js, React.js, JavaScript, and CSS featuring popular Indian destinations with images and detailed information.",
      "Implemented RESTful CRUD operations for efficient destination data management.",
      "Created responsive UI components for mobile and desktop.",
      "Resolved responsive design and deployment challenges.",
      "Optimized the application for Vercel deployment.",
      "Gained practical experience in full-stack development and production deployment."
    ],
    techStack: ["Next.js", "React.js", "JavaScript", "CSS", "REST APIs", "Vercel"]
  },
  {
    role: "AI/ML Intern",
    company: "FlyRank AI",
    period: "Jun 2026 – Aug 2026",
    location: "Internship",
    type: "AI & Machine Learning",
    achievements: [
      "Worked on AI and Machine Learning solutions involving data preprocessing, feature engineering, model training, and evaluation using Python and ML libraries.",
      "Contributed to AI-driven search optimization and ranking systems.",
      "Assisted in development and testing of machine learning models using real-world datasets.",
      "Collaborated with cross-functional teams on AI-based applications and production-oriented ML workflows."
    ],
    techStack: ["Python", "Machine Learning", "Data Preprocessing", "Feature Engineering", "Search Ranking", "Model Evaluation"]
  }
];

export const projectsData = [
  {
    id: "aegis",
    title: "AEGIS",
    fullTitle: "AEGIS — AI-Powered Women's Safety Intelligence Platform",
    subtitle: "AI-Powered Women's Safety Intelligence Platform",
    category: "AI & Women's Safety Intelligence",
    tagline: "Proactive safety intelligence, real-time risk heatmaps, predictive routing, and emergency assistance",
    description:
      "AEGIS is an AI-powered women's safety intelligence platform designed to transform safety from reactive emergency response into proactive prevention through predictive risk analysis, AI-powered route recommendations, real-time incident mapping, and emergency assistance.",
    highlightFeatures: [
      "Predictive safety risk scoring & real-time heatmaps",
      "AI-powered safe route planning (safest, fastest, balanced)",
      "Context-aware AI safety assistant",
      "One-tap emergency SOS & real-time location sharing",
      "Emergency SMS and email notifications with evidence upload"
    ],
    features: [
      "Predictive safety risk scoring",
      "Real-time safety heatmaps",
      "Interactive incident mapping",
      "AI-powered safe route planning",
      "Safest, fastest, and balanced route options",
      "Context-aware AI safety assistant",
      "Crowdsourced safety reports",
      "One-tap emergency SOS",
      "Real-time location sharing",
      "Emergency SMS and email notifications",
      "Evidence upload and management",
      "Admin intelligence dashboard"
    ],
    techCategories: {
      "Frontend": ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Leaflet", "React-Leaflet", "Recharts"],
      "Backend": ["Python", "FastAPI", "SQLAlchemy", "PostgreSQL", "JWT"],
      "AI & ML": ["Scikit-learn", "Random Forest", "Pandas", "NumPy", "Joblib", "Google Gemini"],
      "Integrations": ["Twilio", "Resend", "Cloudinary"],
      "DevOps": ["Docker", "Docker Compose", "Nginx"]
    },
    technologies: [
      "React 19",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Scikit-learn",
      "Google Gemini",
      "Leaflet",
      "Twilio",
      "Resend",
      "Cloudinary",
      "Docker"
    ],
    architecture: "React frontend → FastAPI backend → PostgreSQL + ML safety engine → Gemini/Twilio/Resend/Cloudinary integrations.",
    problem:
      "Traditional safety solutions are fundamentally reactive—triggering basic sirens or notifying contacts only after danger has escalated. Women navigating cities lack proactive situational awareness, predictive spatial intelligence, and reliable guidance on unsafe transit corridors before embarking on a journey.",
    solution:
      "AEGIS transforms safety into a proactive system by evaluating temporal, geospatial, weather, and historical crime indicators to calculate predictive safety scores. It provides multi-criteria route recommendations (safest, fastest, balanced), real-time safety heatmaps, context-aware AI conversational safety tips, and rapid one-tap SOS dispatch with evidence transmission.",
    myContribution:
      "Architected the modular full-stack application and resilient FastAPI service layer; engineered machine learning risk prediction models using Scikit-learn (Random Forest); implemented interactive geospatial mapping with Leaflet; integrated Google Gemini for conversational safety reasoning; configured Twilio SMS, Resend email triggers, and Cloudinary evidence handling.",
    github: "https://github.com/YashikaChandra06/AEGIS",
    ctaText: "View on GitHub",
    liveUrl: null,
    statusBadge: "Active Architecture",
    isOngoing: false,
    color: "#C96F82"
  },
  {
    id: "genesis-ai",
    title: "Genesis AI",
    fullTitle: "Genesis AI — Community Decision Intelligence Platform",
    subtitle: "Community Decision Intelligence Platform",
    category: "AI & Decision Intelligence",
    tagline: "Real-time community telemetry, scenario simulations, GIS mapping, and automated crisis reports",
    description:
      "Genesis AI is an AI-powered Community Decision Intelligence Platform designed to analyze real-time community data, identify risks, generate actionable recommendations, and support proactive decision-making for smarter and more resilient communities.",
    highlightFeatures: [
      "AI-powered decision support & actionable recommendations",
      "Scenario-based analysis & cascading event simulations",
      "Interactive dashboards with GIS-based incident visualization",
      "Role-based access control & secure authentication",
      "Automated crisis PDF intelligence reports"
    ],
    features: [
      "AI-powered decision support",
      "Intelligent recommendations",
      "Scenario-based analysis",
      "Interactive dashboards",
      "GIS-based incident visualization",
      "Cascading event simulations",
      "Community intelligence",
      "Role-based access control",
      "Secure authentication",
      "Automated PDF reports"
    ],
    techCategories: {
      "Core Framework": ["Next.js", "React"],
      "Artificial Intelligence": ["Google Gemini"],
      "Mapping & Visualization": ["Leaflet", "React Flow", "Recharts"],
      "Security & Data": ["Firebase Authentication", "Role-Based Access Control (RBAC)", "Automated PDF Generation"]
    },
    technologies: [
      "Next.js",
      "React",
      "Google Gemini",
      "Leaflet",
      "React Flow",
      "Recharts",
      "Firebase Auth",
      "RBAC"
    ],
    architecture: "AI-powered decision support → real-time/community data → visualization and scenario analysis → actionable recommendations.",
    problem:
      "Civic leadership and municipal teams frequently struggle with fragmented data silos and slow manual risk assessments during emerging crises. Without simulation tools to test what-if scenarios, communities are unable to anticipate cascading hazards or quickly coordinate effective interventions.",
    solution:
      "Genesis AI unifies real-time incident data into interactive GIS dashboards and workflow simulation graphs. Powered by Google Gemini, the platform dynamically models cascading multi-hazard events, calculates mitigation trade-offs, and generates structured, role-specific action plans and downloadable PDF briefs.",
    myContribution:
      "Developed high-performance Next.js and React dashboard components; orchestrated Gemini prompt engineering pipelines for structured strategic insights; designed GIS incident layers using Leaflet; integrated React Flow node simulations for multi-event cascading impact modeling; implemented Firebase Authentication with granular role-based permissions.",
    github: "https://github.com/YashikaChandra06/Genesis-AI-Autonomous-Community-Decision-Intelligence-Platform",
    ctaText: "View on GitHub",
    liveUrl: null,
    statusBadge: "Decision Systems",
    isOngoing: false,
    color: "#8F4F60"
  },
  {
    id: "deepshield",
    title: "DeepShield",
    fullTitle: "DeepShield — AI Scam Detection System",
    subtitle: "AI Scam Detection System",
    category: "AI & Cybersecurity",
    tagline: "Machine learning scam pattern analysis, deepfake detection, and real-time threat evaluation",
    description:
      "DeepShield is an AI-driven scam and deepfake detection system designed to analyze scam patterns, detect manipulated synthetic media, and provide real-time threat evaluation for secure digital interactions.",
    highlightFeatures: [
      "Machine learning scam pattern analysis with Python & FastAPI",
      "Deepfake & AI scam detection mechanisms",
      "Real-time multimedia file upload analysis with Multer",
      "Secure JWT authentication and session protection",
      "Responsive analytics frontend built in React & Tailwind CSS"
    ],
    features: [
      "Machine learning scam pattern analysis",
      "Deepfake & AI scam detection mechanisms",
      "Real-time threat evaluation & risk classification",
      "Scalable RESTful API architecture in Node.js & Express",
      "MongoDB database integration for scalable data handling",
      "Secure JWT authentication & token protection",
      "Multipart file upload processing with Multer",
      "Responsive analytics frontend in React (Vite) & Tailwind CSS"
    ],
    techCategories: {
      "Frontend": ["React (Vite)", "Tailwind CSS"],
      "Backend": ["Python", "FastAPI", "Node.js", "Express.js"],
      "Database & Storage": ["MongoDB", "Multer Multipart Pipeline"],
      "AI & Security": ["Machine Learning", "Scam Pattern Analysis", "JWT Auth"]
    },
    technologies: [
      "Python",
      "FastAPI",
      "Machine Learning",
      "React (Vite)",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Multer"
    ],
    architecture: "React (Vite) + Tailwind CSS → Node.js / Express Gateway + Multer → FastAPI ML Detection Engine → MongoDB telemetry store.",
    problem:
      "Digital fraud and AI-generated synthetic media (deepfakes, phishing scams) are growing increasingly deceptive and sophisticated, making it difficult for users and organizations to identify manipulated audiovisual content or scam communication before financial or reputational damage occurs.",
    solution:
      "DeepShield provides an integrated multi-tier detection architecture. It combines Python and FastAPI machine learning algorithms for scam pattern analysis with a robust Node.js/Express backend, JWT security, and Multer file upload pipelines to deliver instantaneous verification and threat telemetry.",
    myContribution:
      "Building the machine learning pattern detection service with Python and FastAPI; developing the responsive client dashboard using React (Vite) and Tailwind CSS; implementing the Express.js API gateway, JWT authentication routines, and Multer file streaming for high-throughput multimedia analysis.",
    github: "https://github.com/yashikachandra06",
    ctaText: "View on GitHub",
    liveUrl: null,
    statusBadge: "Ongoing",
    isOngoing: true,
    color: "#C96F82"
  }
];

export const researchData = {
  title: "Carbon-Aware Autonomous AI Systems: Reinforcement Learning For Sustainable Cloud And Edge Computing",
  subtitle: "Autonomous Workload Optimization in Distributed Cloud & Edge Infrastructure",
  status: "Published Research Article",
  journal: "STM Journals",
  paperUrl: "https://journals.stmjournals.com/article/article=2026/view=249526/",
  description:
    "Published research proposing reinforcement-learning-based scheduling for carbon-aware cloud and edge workload optimization, with a focus on reducing energy consumption and carbon emissions across distributed computational infrastructure.",
  keyConcepts: [
    "Reinforcement Learning",
    "Carbon-aware computing",
    "Sustainable cloud computing",
    "Edge computing",
    "Workload scheduling",
    "Distributed infrastructure",
    "Energy optimization"
  ],
  abstractHighlights: [
    "Investigation into dynamically adapting compute workloads according to real-time grid carbon intensity signals.",
    "Formulation of reinforcement learning agent rewards balancing QoS latency constraints against kilowatt-hour carbon footprints.",
    "Exploration of intelligent job migration strategies across distributed heterogeneous cloud and edge nodes."
  ]
};

export const certificationsData = [
  {
    id: "aws-genai",
    title: "AWS Introduction to Generative AI",
    issuer: "Amazon Web Services (AWS)",
    category: "Artificial Intelligence",
    date: "Certified",
    description:
      "Completed foundational training in Generative AI concepts, applications, and AWS AI services."
  },
  {
    id: "google-solution-challenge",
    title: "Google Solution Challenge 2026",
    issuer: "Google Developer Student Clubs",
    category: "Innovation & Impact",
    date: "2026 Participant",
    description:
      "Developed innovative technology solutions addressing real-world problems using Google technologies."
  },
  {
    id: "mckinsey-forward",
    title: "McKinsey.org Forward Program",
    issuer: "McKinsey & Company",
    category: "Leadership & Strategy",
    date: "Program Graduate",
    description:
      "Completed a professional development program focused on leadership, problem solving, and career readiness."
  }
];

export const leadershipData = {
  role: "Deputy Head, PR & Outreach",
  organization: "E-Cell GNIT",
  focus: "Public Relations, Community Outreach & Entrepreneurship",
  highlights: [
    "Led outreach initiatives",
    "Promoted entrepreneurship",
    "Communication",
    "Community engagement",
    "Team collaboration"
  ],
  summary:
    "Served in a key leadership role driving community engagement and public relations for the entrepreneurship cell, fostering collaborative partnerships and championing student innovation initiatives."
};
