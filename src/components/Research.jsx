import React from "react";
import {
  BookOpen,
  FileCode2,
  Cpu,
  Leaf,
  Layers,
  Sparkles,
  ArrowRight,
  Bookmark,
  Share2
} from "lucide-react";
import { researchData } from "../data/portfolioData";

export default function Research() {
  return (
    <section id="research" className="section-wrapper research-section" aria-label="Academic Research">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Scientific Inquiry &amp; Systems</span>
          <h2 className="section-title">Research</h2>
          <p className="section-subtitle">
            Exploring the intersection of autonomous reinforcement learning models, distributed cloud infrastructure, and carbon footprint reduction.
          </p>
        </div>

        {/* Academic Paper Card */}
        <div className="research-paper-card card-elevated">
          {/* Header Banner */}
          <div className="paper-top-bar">
            <div className="paper-status-indicator">
              <span className="paper-pill">
                <Bookmark size={13} />
                Research Paper &amp; Investigation
              </span>
              <span className="paper-field">Cloud Computing &middot; Artificial Intelligence</span>
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

          {/* Academic Integrity Footnote */}
          <div className="paper-footer-disclaimer">
            <span>
              <strong>Note on Academic Status:</strong> Ongoing academic research initiative at GGSIPU. Formal preprint and open-source benchmarks under structured iteration.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
