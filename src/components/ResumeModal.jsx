import React, { useEffect } from "react";
import {
  X,
  Printer,
  Download,
  Mail,
  MapPin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Sparkles,
  BookOpen
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import {
  personalInfo,
  skillsData,
  experienceData,
  projectsData,
  researchData,
  certificationsData,
  leadershipData
} from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop resume-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content resume-modal-dialog card-elevated"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar */}
        <div className="resume-controls-bar">
          <div className="controls-left">
            <span className="doc-pill">Verified Curriculum Vitae</span>
            <span className="doc-name">Yashika_Chandra_Resume.pdf</span>
          </div>
          <div className="controls-right">
            <button
              onClick={handlePrint}
              className="btn-secondary control-btn"
              title="Print / Save PDF"
            >
              <Printer size={15} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="icon-btn close-modal-btn"
              aria-label="Close resume viewer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="resume-sheet">
          {/* Header */}
          <div className="resume-header">
            <div className="resume-header-main">
              <h1 className="resume-person-name">{personalInfo.name}</h1>
              <h2 className="resume-person-title">{personalInfo.title}</h2>
            </div>
            <div className="resume-contact-meta">
              <div className="contact-meta-item">
                <Mail size={13} />
                <span>{personalInfo.socials.email}</span>
              </div>
              <div className="contact-meta-item">
                <MapPin size={13} />
                <span>Delhi, India</span>
              </div>
              <div className="contact-meta-item">
                <GithubIcon size={13} />
                <span>github.com/yashikachandra06</span>
              </div>
              <div className="contact-meta-item">
                <LinkedinIcon size={13} />
                <span>linkedin.com/in/yashika-chandra-3b2b75355</span>
              </div>
            </div>
          </div>

          <div className="sheet-divider"></div>

          {/* Education */}
          <section className="sheet-section">
            <h3 className="sheet-section-title">
              <GraduationCap size={15} /> Education
            </h3>
            <div className="sheet-entry">
              <div className="entry-row">
                <span className="entry-title">{personalInfo.education.degree}</span>
                <span className="entry-time">Expected {personalInfo.education.expectedGraduation}</span>
              </div>
              <div className="entry-sub">{personalInfo.education.institution}</div>
              <div className="entry-notes">
                <strong>Coursework:</strong> {personalInfo.education.coursework.join(", ")}
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="sheet-section">
            <h3 className="sheet-section-title">
              <Code size={15} /> Technical Competencies
            </h3>
            <div className="sheet-skills-compact">
              <p>
                <strong>Languages:</strong> Java, Python, JavaScript
              </p>
              <p>
                <strong>Frontend:</strong> React.js, HTML, CSS, Bootstrap, Tailwind CSS
              </p>
              <p>
                <strong>Backend &amp; Databases:</strong> Node.js, Express.js, MongoDB, MySQL, PostgreSQL
              </p>
              <p>
                <strong>Tools &amp; Core:</strong> Git, GitHub, Docker, Kubernetes, Postman, Cloud, APIs, System Design, Data Structures &amp; Algorithms
              </p>
            </div>
          </section>

          {/* Work Experience */}
          <section className="sheet-section">
            <h3 className="sheet-section-title">
              <Briefcase size={15} /> Experience
            </h3>
            {experienceData.map((exp, idx) => (
              <div key={idx} className="sheet-entry">
                <div className="entry-row">
                  <span className="entry-title">{exp.role} &middot; {exp.company}</span>
                  <span className="entry-time">{exp.period}</span>
                </div>
                <ul className="entry-bullets">
                  {exp.achievements.map((item, bIdx) => (
                    <li key={bIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Projects */}
          <section className="sheet-section">
            <h3 className="sheet-section-title">
              <Sparkles size={15} /> Key Engineering Projects
            </h3>
            {projectsData.map((p) => (
              <div key={p.id} className="sheet-entry">
                <div className="entry-row">
                  <span className="entry-title">{p.title} — {p.subtitle}</span>
                </div>
                <p className="entry-desc">{p.description}</p>
                <div className="entry-notes">
                  <strong>Stack:</strong> {p.technologies.join(", ")}
                </div>
              </div>
            ))}
          </section>

          {/* Publications & Research */}
          <section className="sheet-section">
            <h3 className="sheet-section-title">
              <BookOpen size={15} /> Publications &amp; Research
            </h3>
            <div className="sheet-entry">
              <div className="entry-row">
                <span className="entry-title">{researchData.title}</span>
                <span className="entry-time">{researchData.status} (2026)</span>
              </div>
              <div className="entry-sub">{researchData.journal} &middot; Peer-Reviewed Article</div>
              <p className="entry-desc">{researchData.description}</p>
              <div className="entry-notes">
                <strong>Publication URL:</strong> {researchData.paperUrl}
              </div>
            </div>
          </section>

          {/* Leadership & Certifications */}
          <section className="sheet-section">
            <h3 className="sheet-section-title">
              <Award size={15} /> Leadership &amp; Certifications
            </h3>
            <div className="sheet-entry">
              <div className="entry-row">
                <span className="entry-title">{leadershipData.role} &mdash; {leadershipData.organization}</span>
              </div>
              <p className="entry-desc">{leadershipData.summary}</p>
            </div>
            <div className="sheet-entry">
              <p className="entry-desc">
                <strong>Certifications:</strong> AWS Introduction to Generative AI &middot; Google Solution Challenge 2026 &middot; McKinsey.org Forward Program
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
