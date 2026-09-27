import React from "react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Education() {
  const { education } = personalInfo;

  return (
    <section id="education" className="section-wrapper education-section" aria-label="Education">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Academic Foundation</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Strong theoretical grounding in computer science fundamentals paired with modern engineering coursework.
          </p>
        </div>

        {/* Education Timeline / Card */}
        <div className="education-card-wrapper">
          <div className="education-card card-elevated">
            {/* University & Degree Badge */}
            <div className="edu-top-row">
              <div className="edu-icon-badge">
                <GraduationCap size={28} />
              </div>
              <div className="edu-main-info">
                <div className="edu-badges-row">
                  <span className="badge-pill active-badge">
                    <span className="live-dot-sm"></span>
                    Undergraduate Study
                  </span>
                  <span className="badge-pill cohort-badge">
                    <Calendar size={13} />
                    Class of {education.expectedGraduation}
                  </span>
                </div>
                <h3 className="edu-degree">{education.degree}</h3>
                <div className="edu-institution-line">
                  <span className="edu-institution">{education.institution}</span>
                  <span className="edu-location">
                    <MapPin size={14} /> Delhi, India
                  </span>
                </div>
              </div>
            </div>

            <div className="edu-divider"></div>

            {/* Coursework Section */}
            <div className="edu-coursework-section">
              <div className="coursework-header">
                <BookOpen size={18} className="coursework-icon" />
                <h4 className="coursework-title">Key Core Coursework</h4>
              </div>
              <div className="coursework-grid">
                {education.coursework.map((course) => (
                  <div key={course} className="course-item">
                    <CheckCircle2 size={16} className="course-check-icon" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Highlights Footnote */}
            <div className="edu-footer-note">
              <Sparkles size={16} className="sparkle-icon" />
              <span>
                Focusing on core algorithmic computational complexity, robust object-oriented system design, distributed data models, and scalable cloud deployment architectures.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
