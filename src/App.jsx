import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Certifications from "./components/Certifications";
import Leadership from "./components/Leadership";
import ResumeSection from "./components/ResumeSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import ResumeModal from "./components/ResumeModal";
import "./App.css";

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("yc_portfolio_theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("yc_portfolio_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="portfolio-app">
      {/* Ambient background orbs for delicate lighting */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-orb orb-1"></div>
        <div className="ambient-orb orb-2"></div>
        <div className="ambient-orb orb-3"></div>
      </div>

      {/* Navigation Header */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Semantic Content */}
      <main id="main-content">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Research />
        <Certifications />
        <Leadership />
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Project Architecture Deep-Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Interactive Verified Resume Viewer & PDF Export */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
