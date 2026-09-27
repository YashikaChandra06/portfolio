import React, { useState } from "react";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Shield,
  CheckCircle2,
  ArrowRight,
  Code2
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { projectsData } from "../data/portfolioData";

export default function Projects({ onSelectProject }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleInlineFeatures = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="section-wrapper projects-section" aria-label="Featured Projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Engineering Showcase</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Large-scale full-stack and artificial intelligence applications engineered for real-world impact, proactive prevention, and contextual decision-making.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => {
            const isFeaturesExpanded = expandedId === project.id;
            const displayedFeatures = isFeaturesExpanded
              ? project.features
              : (project.highlightFeatures || project.features.slice(0, 5));

            return (
              <div
                key={project.id}
                className={`project-card card-elevated ${project.isOngoing ? "project-card-ongoing" : ""}`}
                id={`project-${project.id}`}
              >
                {/* 1. Category & Status Header */}
                <div className="project-card-header">
                  <div className="project-tag-row">
                    <span className="project-category-badge">
                      <Sparkles size={13} />
                      {project.category}
                    </span>
                    <span className={`project-status-badge ${project.isOngoing ? "status-ongoing" : ""}`}>
                      {project.isOngoing && <span className="live-dot-sm" aria-hidden="true"></span>}
                      <span>{project.statusBadge}</span>
                    </span>
                  </div>

                  {/* 2. Project Name & Subtitle */}
                  <h3 className="project-title">{project.title}</h3>
                  <h4 className="project-subtitle">{project.subtitle}</h4>
                </div>

                {/* 3. Short Description */}
                <p className="project-description">{project.description}</p>

                {/* 4. Highlighted Features (3–5 Highlights) */}
                <div className="project-features-block">
                  <div className="features-block-header">
                    <Shield size={16} className="feature-header-icon" />
                    <span>Key Capabilities ({project.features.length} Features)</span>
                  </div>

                  <div className="features-tags-list">
                    {displayedFeatures.map((feature, idx) => (
                      <div key={idx} className="feature-item-pill">
                        <CheckCircle2 size={13} className="feature-check" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {project.features.length > 5 && (
                    <button
                      onClick={() => toggleInlineFeatures(project.id)}
                      className="expand-features-btn"
                      aria-expanded={isFeaturesExpanded}
                      title="Toggle all features inline"
                    >
                      {isFeaturesExpanded ? (
                        <>
                          Show Highlighted Features <ChevronUp size={14} />
                        </>
                      ) : (
                        <>
                          +{project.features.length - (project.highlightFeatures?.length || 5)} More Features <ChevronDown size={14} />
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* 5. Technology Badges */}
                <div className="project-tech-section">
                  <span className="tech-section-title">
                    <Code2 size={13} style={{ display: "inline", marginRight: "4px" }} />
                    Technology Stack:
                  </span>
                  <div className="tech-tags-container">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 6, 7, 8. Action Buttons (GitHub, Live Demo if available, Explore Project) */}
                <div className="project-card-footer">
                  {/* Explore Project Action */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="btn-primary project-action-btn btn-explore"
                    aria-label={`Explore ${project.title} project details, architecture, and contribution`}
                  >
                    <span>Explore Project</span>
                    <ArrowRight size={15} className="explore-arrow-icon" />
                  </button>

                  {/* GitHub Action */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary project-action-btn btn-github"
                    aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                  >
                    <GithubIcon size={16} className="github-btn-icon" />
                    <span>View on GitHub</span>
                  </a>

                  {/* Optional Live Demo (Only rendered when actual liveUrl is available) */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline project-action-btn btn-live-demo"
                      aria-label={`View ${project.title} Live Demo (opens in new tab)`}
                    >
                      <ExternalLink size={15} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
