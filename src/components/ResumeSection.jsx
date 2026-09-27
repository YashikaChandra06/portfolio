import React from "react";
import {
  FileText,
  Download,
  Eye,
  CheckCircle,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function ResumeSection({ onOpenResume }) {
  return (
    <section id="resume" className="section-wrapper resume-section" aria-label="Resume">
      <div className="container">
        <div className="resume-cta-banner card-elevated">
          <div className="resume-banner-content">
            <div className="resume-pill-tag">
              <Sparkles size={14} /> Comprehensive Portfolio Document
            </div>

            <h2 className="resume-headline">Want to know more about my journey?</h2>

            <p className="resume-subtext">
              Explore my experience, projects, technical skills, and achievements in detail.
            </p>

            <div className="resume-features-row">
              <div className="resume-feature">
                <CheckCircle size={15} className="resume-feature-icon" />
                <span>Verified Academic Credentials</span>
              </div>
              <div className="resume-feature">
                <CheckCircle size={15} className="resume-feature-icon" />
                <span>Full-Stack &amp; AI Tech Stack</span>
              </div>
              <div className="resume-feature">
                <CheckCircle size={15} className="resume-feature-icon" />
                <span>Internship &amp; Project Track Record</span>
              </div>
            </div>

            <div className="resume-actions-group">
              <button
                onClick={onOpenResume}
                className="btn-primary resume-action-btn"
                aria-label="View and Download Resume"
              >
                <Download size={17} />
                <span>Download Resume</span>
              </button>
              <button
                onClick={onOpenResume}
                className="btn-secondary resume-action-btn"
                aria-label="Interactive CV Preview"
              >
                <Eye size={17} />
                <span>Quick CV Preview</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
