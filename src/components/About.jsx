import React from "react";
import {
  GraduationCap,
  Calendar,
  Layers,
  Sparkles,
  Compass,
  Code,
  Users2,
  Rocket
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  const statIcons = [
    <GraduationCap key="grad" size={24} className="stat-card-icon" />,
    <Calendar key="cal" size={24} className="stat-card-icon" />,
    <Layers key="layer" size={24} className="stat-card-icon" />,
    <Sparkles key="spark" size={24} className="stat-card-icon" />
  ];

  const pillars = [
    {
      icon: <Code size={20} />,
      title: "Full-Stack Craftsmanship",
      desc: "Architecting reliable, scalable web applications with modular frontend components and resilient backend APIs."
    },
    {
      icon: <Sparkles size={20} />,
      title: "Intelligent Systems",
      desc: "Integrating state-of-the-art AI models to deliver contextual reasoning, predictive scoring, and smart recommendations."
    },
    {
      icon: <Users2 size={20} />,
      title: "Leadership & Outreach",
      desc: "Active in hackathons, entrepreneurship cells, and tech communities, cultivating collaborative engineering environments."
    }
  ];

  return (
    <section id="about" className="section-wrapper about-section" aria-label="About Me">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Background &amp; Philosophy</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A builder with an engineering mindset, driven to create impactful full-stack software and intelligent AI solutions.
          </p>
        </div>

        {/* Highlight Stats Cards (Strictly authentic, non-fabricated) */}
        <div className="about-stats-grid">
          {personalInfo.stats.map((stat, idx) => (
            <div key={stat.label} className="about-stat-card card-elevated">
              <div className="stat-icon-wrapper">
                {statIcons[idx]}
              </div>
              <div className="stat-info">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-subtext">{stat.subtext}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="about-content-grid">
          {/* Main Narrative Card */}
          <div className="about-narrative-card card-elevated">
            <h3 className="about-narrative-title">
              Engineering Practical, Human-Centered Software
            </h3>
            <div className="about-paragraphs">
              {personalInfo.fullAbout.map((paragraph, index) => (
                <p key={index} className="about-paragraph-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Core Pillars / Engineering Focus Cards */}
          <div className="about-pillars-column">
            <h3 className="about-pillars-heading">How I Approach Technology</h3>
            <div className="pillars-list">
              {pillars.map((pillar, idx) => (
                <div key={pillar.title} className="pillar-item card-elevated">
                  <div className="pillar-icon-box">{pillar.icon}</div>
                  <div className="pillar-text">
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
