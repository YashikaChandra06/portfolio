import React from "react";
import {
  BookOpen,
  Cpu,
  Leaf,
  Sparkles,
  ExternalLink,
  BookmarkCheck,
  CheckCircle2
} from "lucide-react";
import { researchData } from "../data/portfolioData";

export default function Research() {
  return (
    <section id="research" className="section-wrapper research-section" aria-label="Academic Research">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Scientific Publications</span>
          <h2 className="section-title">Research</h2>
          <p className="section-subtitle">
            Published scientific research exploring reinforcement learning, carbon-aware workload scheduling, and sustainable cloud and edge infrastructure.
          </p>
        </div>

        {/* Academic Paper Card */}
        <div className="research-paper-card card-elevated">
          {/* Header Banner */}
          <div className="paper-top-bar">
            <div className="paper-status-indicator">
              <span className="paper-pill published-pill">
                <BookmarkCheck size={14} />
                {researchData.status}
              </span>
              <span className="paper-field">Cloud &amp; Edge Computing &middot; Artificial Intelligence</span>
            </div>
            <div className="paper-domain-tag">
              <Leaf size={14} className="leaf-icon" /> Sustainable AI
            </div>
          </div>

          {/* Paper Title & Subtitle */}
          <div className="paper-main-heading">
            <h3 className="paper-title">{researchData.title}</h3>
            <h4 className="paper-subtitle">{researchData.subtitle}</h4>
          </div>

          <div className="paper-divider"></div>

          {/* Abstract Section */}
          <div className="paper-section-block">
            <h5 className="paper-block-title">
              <BookOpen size={16} /> Abstract &amp; Proposal Summary
            </h5>
            <p className="paper-abstract-text">{researchData.description}</p>
          </div>

          {/* Investigation Pillars */}
          <div className="paper-section-block">
            <h5 className="paper-block-title">
              <Sparkles size={16} /> Key Methodological Highlights
            </h5>
            <div className="paper-highlights-grid">
              {researchData.abstractHighlights.map((highlight, idx) => (
                <div key={idx} className="highlight-box">
                  <span className="highlight-number">0{idx + 1}</span>
                  <p className="highlight-desc">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Concept Tags */}
          <div className="paper-section-block">
            <h5 className="paper-block-title">
              <Cpu size={16} /> Core Research Concepts
            </h5>
            <div className="research-concepts-wrap">
              {researchData.keyConcepts.map((concept) => (
                <span key={concept} className="concept-pill">
                  {concept}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row & Publication Link */}
          <div className="paper-action-row">
            <a
              href={researchData.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary paper-link-btn"
              aria-label="Read published research article in STM Journals (opens in new tab)"
            >
              <span>Read Published Article</span>
              <ExternalLink size={16} />
            </a>

            <div className="paper-citation-badge">
              <CheckCircle2 size={15} className="citation-check" />
              <span>Published &amp; Indexed in <strong>{researchData.journal}</strong> (2026)</span>
            </div>
          </div>

          {/* Academic Integrity Footnote */}
          <div className="paper-footer-disclaimer">
            <span>
              <strong>Publication Reference:</strong> Published in <em>STM Journals</em> (2026). Full-text peer-reviewed paper available via official journal repository link above.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
