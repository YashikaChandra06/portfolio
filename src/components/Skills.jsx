import React, { useState } from "react";
import {
  Code,
  Terminal,
  Cpu,
  Layers,
  FileCode,
  Palette,
  LayoutGrid,
  Sparkles,
  Server,
  Globe,
  Database,
  Table,
  GitBranch,
  Box,
  CloudRain,
  Send,
  Cloud,
  Zap,
  Network,
  Binary,
  CheckCircle,
  Filter
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { skillsData } from "../data/portfolioData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const iconMap = {
    Code: <Code size={20} />,
    Terminal: <Terminal size={20} />,
    Cpu: <Cpu size={20} />,
    Layers: <Layers size={20} />,
    FileCode: <FileCode size={20} />,
    Palette: <Palette size={20} />,
    LayoutGrid: <LayoutGrid size={20} />,
    Sparkles: <Sparkles size={20} />,
    Server: <Server size={20} />,
    Globe: <Globe size={20} />,
    Database: <Database size={20} />,
    Table: <Table size={20} />,
    GitBranch: <GitBranch size={20} />,
    Github: <GithubIcon size={20} />,
    Box: <Box size={20} />,
    CloudRain: <CloudRain size={20} />,
    Send: <Send size={20} />,
    Cloud: <Cloud size={20} />,
    Zap: <Zap size={20} />,
    Network: <Network size={20} />,
    Binary: <Binary size={20} />
  };

  const filteredSkills =
    activeCategory === "all"
      ? skillsData.items
      : skillsData.items.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="section-wrapper skills-section" aria-label="Technical Skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, frontend/backend frameworks, database engines, and DevOps tooling.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-filter-wrapper" role="tablist" aria-label="Skills categories">
          {skillsData.categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`skills-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
              <span className="tab-count">
                {cat.id === "all"
                  ? skillsData.items.length
                  : skillsData.items.filter((i) => i.category === cat.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-cards-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card card-elevated">
              <div className="skill-card-top">
                <div className="skill-icon-box">
                  {iconMap[skill.icon] || <Code size={20} />}
                </div>
                <span className="skill-category-badge">{skill.category}</span>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-highlight">{skill.highlight}</p>
            </div>
          ))}
        </div>

        {/* Interactive Notice on Realistic Skill Representation */}
        <div className="skills-footer-notice">
          <CheckCircle size={17} className="notice-icon" />
          <span>
            Evaluated by practical projects, production internships, and algorithmic problem solving — without arbitrary percentage bars.
          </span>
        </div>
      </div>
    </section>
  );
}
