import React from "react";
import {
  Users,
  Compass,
  Megaphone,
  Handshake,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { leadershipData } from "../data/portfolioData";

export default function Leadership() {
  const highlightIcons = [
    <Megaphone key="mega" size={16} />,
    <Sparkles key="spark" size={16} />,
    <Compass key="comp" size={16} />,
    <Users key="users" size={16} />,
    <Handshake key="hand" size={16} />
  ];

  return (
    <section id="leadership" className="section-wrapper leadership-section" aria-label="Leadership Experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Community &amp; Organizational Impact</span>
          <h2 className="section-title">Leadership &amp; Outreach</h2>
          <p className="section-subtitle">
            Cultivating collaborative student tech communities, driving communication initiatives, and championing entrepreneurship.
          </p>
        </div>

        {/* Leadership Card */}
        <div className="leadership-card-wrapper">
          <div className="leadership-card card-elevated">
            <div className="leadership-header-row">
              <div className="leadership-avatar-icon">
                <Users size={28} />
              </div>
              <div className="leadership-role-info">
                <span className="leadership-tag">Student Leadership</span>
                <h3 className="leadership-role">{leadershipData.role}</h3>
                <h4 className="leadership-org">{leadershipData.organization}</h4>
              </div>
            </div>

            <p className="leadership-summary">{leadershipData.summary}</p>

            <div className="leadership-highlights-block">
              <h5 className="highlights-title">Key Responsibilities &amp; Focus Areas:</h5>
              <div className="highlights-grid">
                {leadershipData.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-pill">
                    <span className="pill-icon">{highlightIcons[idx] || <CheckCircle2 size={16} />}</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
