import React, { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  FileText,
  Mail,
  Terminal,
  Code2,
  Sparkles,
  Cpu,
  Layers,
  CheckCircle2,
  Copy,
  Check
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";

export default function Hero({ onOpenResume }) {
  const [activeTab, setActiveTab] = useState("engineer.ts");
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippets = {
    "engineer.ts": `// Yashika Chandra — Engineering Identity
interface SoftwareEngineer {
  name: string;
  education: string;
  expectedGraduation: number;
  specialization: string[];
  mindset: string;
}

export const yashika: SoftwareEngineer = {
  name: "Yashika Chandra",
  education: "Guru Gobind Singh Indraprastha University",
  expectedGraduation: 2028,
  specialization: [
    "Full-Stack Web Engineering",
    "Applied Artificial Intelligence",
    "Predictive Systems"
  ],
  mindset: "Building user-centric, intelligent software"
};`,
    "stack.json": `{
  "developer": "Yashika Chandra",
  "primaryLanguages": ["Java", "Python", "JavaScript"],
  "frontend": ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  "backend": ["Node.js", "Express.js", "FastAPI"],
  "databases": ["PostgreSQL", "MongoDB", "MySQL"],
  "tools": ["Git", "Docker", "Postman", "Vercel"],
  "aiFocus": ["Google Gemini", "Scikit-learn", "Reinforcement Learning"]
}`,
    "mission.py": `# Sustainable & Intelligent Computing
def empower_future(code: str, ai_models: list) -> dict:
    impact = {
        "user_experience": "Frictionless & accessible",
        "intelligence": "Contextual AI decision support",
        "sustainability": "Carbon-aware workload scheduling"
    }
    return impact

# Ready for impactful software engineering roles`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Introduction">
      <div className="container hero-container">
        {/* Left Column: Typography, Taglines & CTAs */}
        <div className="hero-content">
          <div className="hero-status-pill">
            <span className="hero-status-dot"></span>
            <span>B.Tech CSE Student &middot; Open to Opportunities</span>
          </div>

          <h1 className="hero-headline">
            Hi, I’m <span className="hero-name-gradient">Yashika Chandra</span>
          </h1>

          <p className="hero-supporting-headline">
            Computer Science Engineer <span className="hero-divider">|</span> Full-Stack Developer <span className="hero-divider">|</span> AI Enthusiast
          </p>

          <p className="hero-positioning">
            “Building intelligent web experiences with code and AI.”
          </p>

          <p className="hero-intro">
            Computer Science and Engineering student passionate about Full-Stack Development and Artificial Intelligence. I build practical, user-focused applications and explore how modern AI can make software more intelligent, useful, and impactful.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-group">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="btn-primary hero-btn"
            >
              <span>View My Work</span>
              <ArrowDown size={17} />
            </a>

            <button
              onClick={onOpenResume}
              className="btn-secondary hero-btn"
              aria-label="Download Yashika Chandra Resume"
            >
              <FileText size={17} />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="btn-outline hero-btn"
            >
              <span>Contact Me</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Social Links & Verified Identity */}
          <div className="hero-socials-wrapper">
            <span className="hero-socials-label">Connect with me:</span>
            <div className="hero-social-icons">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="GitHub Profile"
                title="GitHub: yashikachandra06"
              >
                <GithubIcon size={19} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="LinkedIn Profile"
                title="LinkedIn: Yashika Chandra"
              >
                <LinkedinIcon size={19} />
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="hero-social-link"
                aria-label="Email Address"
                title={`Email: ${personalInfo.socials.email}`}
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Developer Composition */}
        <div className="hero-visual" aria-hidden="true">
          {/* Ambient Glow */}
          <div className="hero-ambient-glow"></div>

          {/* Floating Badges */}
          <div className="floating-badge badge-top-left">
            <Cpu size={16} className="badge-icon" />
            <span>Full-Stack &amp; AI</span>
          </div>

          <div className="floating-badge badge-bottom-right">
            <Layers size={16} className="badge-icon" />
            <span>GGSIPU Delhi &middot; '28</span>
          </div>

          {/* Developer Code Card */}
          <div className="code-window-card">
            {/* Window Title Bar */}
            <div className="window-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>

              {/* Tabs */}
              <div className="window-tabs">
                {Object.keys(codeSnippets).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`window-tab ${activeTab === tab ? "active" : ""}`}
                  >
                    <Code2 size={13} />
                    <span>{tab}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={handleCopyCode}
                className="window-copy-btn"
                title="Copy code snippet"
                aria-label="Copy code snippet"
              >
                {copiedCode ? <Check size={14} className="text-success" /> : <Copy size={14} />}
              </button>
            </div>

            {/* Code Body */}
            <div className="code-body">
              <pre className="code-pre">
                <code>{codeSnippets[activeTab]}</code>
              </pre>
            </div>

            {/* Window Status Bar */}
            <div className="window-footer">
              <div className="footer-left">
                <span className="status-indicator"></span>
                <span className="status-text">TypeScript &middot; Node.js v24 &middot; UTF-8</span>
              </div>
              <div className="footer-right">
                <span>Ready to deploy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
