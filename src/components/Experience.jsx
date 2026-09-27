import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper experience-section" aria-label="Work Experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Industry Internship Experience</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Hands-on software development and machine learning internships delivering production-ready web features and AI workflows.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="timeline-container">
          <div className="timeline-spine"></div>

          {experienceData.map((exp, index) => (
            <div key={`${exp.company}-${index}`} className="timeline-item">
              {/* Timeline Marker */}
              <div className="timeline-marker">
                <div className="timeline-dot">
                  <Briefcase size={16} />
                </div>
              </div>

              {/* Experience Card */}
              <div className="timeline-content card-elevated">
                <div className="timeline-card-header">
                  <div className="role-and-company">
                    <span className="exp-type-tag">{exp.type}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                  </div>
                  <div className="timeline-period-badge">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="timeline-divider"></div>

                {/* Bullet Points */}
                <div className="exp-achievements">
                  <h5 className="achievements-heading">Key Contributions &amp; Scope:</h5>
                  <ul className="achievements-list">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="achievement-item">
                        <CheckCircle2 size={16} className="achievement-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Used */}
                <div className="exp-tech-row">
                  <span className="tech-row-label">Technologies Applied:</span>
                  <div className="tech-pills-list">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
