import React from "react";
import {
  ArrowUp,
  Mail,
  Heart,
  Sparkles,
  Code
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="portfolio-footer" role="contentinfo">
      <div className="container footer-container">
        {/* Top Tier: Branding & Quick Links */}
        <div className="footer-main-row">
          {/* Identity */}
          <div className="footer-identity">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, "#hero")}
              className="footer-brand-logo"
            >
              <span className="brand-monogram">YC</span>
              <span className="footer-name">{personalInfo.name}</span>
            </a>
            <p className="footer-tagline">{personalInfo.title}</p>
            <p className="footer-short-quote">
              Building intelligent, accessible, and high-performance web systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-nav-col">
            <span className="footer-col-title">Navigation</span>
            <ul className="footer-links-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="footer-social-col">
            <span className="footer-col-title">Profiles</span>
            <div className="footer-social-icons">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.socials.email}`}
                className="footer-social-btn"
                aria-label="Email Yashika Chandra"
              >
                <Mail size={18} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="back-to-top-btn"
              aria-label="Back to top of page"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom Tier: Copyright & Engineering Creds */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; 2026 {personalInfo.name}. All rights reserved.
          </p>
          <div className="footer-built-tag">
            <Code size={14} className="code-tag-icon" />
            <span>Crafted with React, Vite &amp; Soft Rose Design System</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
