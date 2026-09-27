import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  FileText,
  Sparkles,
  ArrowUpRight
} from "lucide-react";

export default function Navbar({ theme, toggleTheme, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["hero", "about", "education", "skills", "experience", "projects", "research", "certifications", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`navbar-fixed ${isScrolled ? "navbar-scrolled" : ""}`}
        role="banner"
      >
        <div className="container nav-container">
          {/* Logo / Brand */}
          <a
            href="#hero"
            className="brand-logo"
            onClick={(e) => handleLinkClick(e, "#hero")}
            aria-label="Yashika Chandra Home"
          >
            <span className="brand-monogram">YC</span>
            <span className="brand-text">
              <span className="brand-name">Yashika Chandra</span>
              <span className="brand-badge">
                <span className="live-dot" aria-hidden="true"></span>
                <span>AI & Full-Stack</span>
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                  {isActive && <span className="active-pill" />}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="nav-actions">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="icon-btn theme-btn"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="btn-primary resume-nav-btn"
              aria-label="View and Download Resume"
            >
              <FileText size={15} />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="icon-btn mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay & Menu */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-header">
          <div className="brand-logo">
            <span className="brand-monogram">YC</span>
            <span className="brand-name">Yashika Chandra</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="icon-btn"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mobile-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-nav-link"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              <span>{link.name}</span>
              <ArrowUpRight size={16} className="mobile-link-arrow" />
            </a>
          ))}
        </nav>

        <div className="mobile-drawer-footer">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="btn-primary mobile-resume-btn"
          >
            <FileText size={16} />
            <span>Download Resume</span>
          </button>

          <div className="mobile-theme-row">
            <span>Theme Appearance</span>
            <button
              onClick={toggleTheme}
              className="theme-pill-toggle"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <>
                  <Moon size={15} /> Dark Mode
                </>
              ) : (
                <>
                  <Sun size={15} /> Light Mode
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
