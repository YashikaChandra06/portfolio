import React from "react";
import {
  Award,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  BookmarkCheck
} from "lucide-react";
import { certificationsData } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper certifications-section" aria-label="Certifications and Achievements">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Credentials &amp; Milestones</span>
          <h2 className="section-title">Certifications &amp; Achievements</h2>
          <p className="section-subtitle">
            Formal professional coursework, global innovation challenges, and specialized engineering certifications.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="cert-card card-elevated">
              <div className="cert-card-header">
                <div className="cert-icon-circle">
                  <Award size={22} />
                </div>
                <div className="cert-category-badge">
                  <BookmarkCheck size={13} />
                  <span>{cert.category}</span>
                </div>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <h4 className="cert-issuer">{cert.issuer}</h4>

              <div className="cert-divider"></div>

              <p className="cert-description">{cert.description}</p>

              <div className="cert-card-footer">
                <span className="cert-status-indicator">
                  <CheckCircle size={14} className="cert-verified-icon" />
                  <span>Verified Credential</span>
                </span>
                <span className="cert-date-tag">{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
