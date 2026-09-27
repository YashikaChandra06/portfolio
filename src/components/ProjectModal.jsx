import React, { useEffect } from "react";
import {
  X,
  ExternalLink,
  Shield,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
  AlertTriangle,
  Lightbulb,
  Workflow,
  UserCheck,
  Code2
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="modal-content card-elevated"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-area">
            <div className="modal-badge-row">
              <span className="project-category-badge">
                <Sparkles size={13} /> {project.category}
              </span>
              <span className={`project-status-badge ${project.isOngoing ? "status-ongoing" : ""}`}>
                {project.isOngoing && <span className="live-dot-sm" aria-hidden="true"></span>}
                <span>{project.statusBadge}</span>
              </span>
            </div>
            <h3 id="modal-project-title" className="modal-title">{project.title}</h3>
            <h4 className="modal-subtitle">{project.subtitle}</h4>
          </div>
          <button
            onClick={onClose}
            className="icon-btn modal-close-btn"
            aria-label="Close project modal"
            title="Close (Esc)"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Tagline / Executive Summary */}
          <div className="modal-summary-box">
            <p className="modal-description">{project.description}</p>
          </div>

          {/* Problem & Solution Grid */}
          <div className="modal-problem-solution-grid">
            {/* Problem Card */}
            <div className="problem-box">
              <div className="block-label text-warning">
                <AlertTriangle size={16} />
                <span>The Problem</span>
              </div>
              <p className="block-body-text">{project.problem}</p>
            </div>

            {/* Solution Card */}
            <div className="solution-box">
              <div className="block-label text-success">
                <Lightbulb size={16} />
                <span>The Solution</span>
              </div>
              <p className="block-body-text">{project.solution}</p>
            </div>
          </div>

          {/* Architecture / Implementation Flow */}
          <div className="modal-architecture-box">
            <div className="block-label">
              <Workflow size={16} className="feature-header-icon" />
              <span>Architecture &amp; Implementation Flow</span>
            </div>
            <div className="architecture-diagram-pill">
              <code>{project.architecture}</code>
            </div>
          </div>

          {/* My Engineering Contribution */}
          <div className="modal-contribution-box">
            <div className="block-label">
              <UserCheck size={16} className="feature-header-icon" />
              <span>My Contribution</span>
            </div>
            <p className="contribution-text">{project.myContribution}</p>
          </div>

          {/* Key Features List */}
          <div className="modal-features-section">
            <div className="block-label">
              <Shield size={16} className="feature-header-icon" />
              <span>Key Features ({project.features.length})</span>
            </div>
            <div className="modal-features-grid">
              {project.features.map((feature, i) => (
                <div key={i} className="modal-feature-item">
                  <CheckCircle2 size={15} className="feature-check" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Categorized Technology Stack */}
          <div className="modal-tech-section">
            <div className="block-label">
              <Cpu size={16} className="feature-header-icon" />
              <span>Technology Stack</span>
            </div>

            {project.techCategories ? (
              <div className="tech-categories-stack">
                {Object.entries(project.techCategories).map(([category, items]) => (
                  <div key={category} className="tech-category-group">
                    <span className="tech-group-title">{category}:</span>
                    <div className="tech-tags-container">
                      {items.map((tech) => (
                        <span key={tech} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="tech-tags-container">
                {project.technologies.map((t) => (
                  <span key={t} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="modal-footer">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary modal-action-btn"
            aria-label={`View ${project.title} on GitHub (opens in new tab)`}
          >
            <GithubIcon size={17} />
            <span>View on GitHub</span>
          </a>

          {/* Optional Live Demo (Only when available) */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary modal-action-btn"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}

          <button onClick={onClose} className="btn-secondary modal-action-btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
