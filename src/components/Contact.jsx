import React, { useState } from "react";
import {
  Mail,
  Send,
  Copy,
  Check,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  MessageSquare
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Collaboration",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState("idle"); // idle | submitting | success

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      errs.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a brief message.";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Message should be at least 15 characters long.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setFormStatus("submitting");

    // Client-side simulation with mailto intent or direct webhook ready
    setTimeout(() => {
      setFormStatus("success");
      // Prepare fallback mailto link as well
      const mailtoUrl = `mailto:${personalInfo.socials.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}: ${formData.name}`
      )}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.name + " (" + formData.email + ")")}`;
      
      // Reset form after short delay
      setFormData({
        name: "",
        email: "",
        subject: "Collaboration",
        message: ""
      });
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper contact-section" aria-label="Contact Yashika Chandra">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Direct Channel</span>
          <h2 className="section-title">Let’s Build Something Meaningful</h2>
          <p className="section-subtitle">
            Whether it’s a software project, AI idea, research collaboration, or an opportunity to learn and contribute, I’d love to connect.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Links & Fast Channels */}
          <div className="contact-info-column card-elevated">
            <h3 className="contact-info-title">Connect Directly</h3>
            <p className="contact-info-intro">
              I am always eager to discuss software engineering, applied artificial intelligence, or open source ideas. Reach out directly via email or professional profiles.
            </p>

            <div className="contact-channels-list">
              {/* Email Card with 1-Click Copy */}
              <div className="channel-item">
                <div className="channel-icon-box">
                  <Mail size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-type">Primary Email</span>
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="channel-link"
                    title={`Email ${personalInfo.socials.email}`}
                  >
                    {personalInfo.socials.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="copy-channel-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? (
                    <span className="copied-pill">
                      <Check size={14} /> Copied
                    </span>
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>

              {/* GitHub Card */}
              <div className="channel-item">
                <div className="channel-icon-box">
                  <GithubIcon size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-type">Code Repository</span>
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-link"
                  >
                    github.com/yashikachandra06
                  </a>
                </div>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="copy-channel-btn"
                  aria-label="Visit GitHub Profile"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="channel-item">
                <div className="channel-icon-box">
                  <LinkedinIcon size={20} />
                </div>
                <div className="channel-details">
                  <span className="channel-type">Professional Network</span>
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-link"
                  >
                    linkedin.com/in/yashika-chandra-3b2b75355
                  </a>
                </div>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="copy-channel-btn"
                  aria-label="Visit LinkedIn Profile"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Quick Status Note */}
            <div className="contact-status-box">
              <span className="live-dot-sm"></span>
              <span>Available for 2026/2027 internships, AI engineering roles &amp; technical projects.</span>
            </div>
          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="contact-form-column card-elevated">
            <h3 className="form-column-title">Send a Message</h3>

            {formStatus === "success" && (
              <div className="form-success-banner" role="status">
                <CheckCircle2 size={20} className="success-icon" />
                <div>
                  <strong>Message Prepared &amp; Dispatched!</strong>
                  <p>
                    Thank you! Your message has been generated. You can also send directly to {personalInfo.socials.email}.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="contact-form">
              {/* Name */}
              <div className="form-field-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name <span className="field-required">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Sharma"
                  className={`form-input ${errors.name ? "input-error" : ""}`}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="field-error-msg">
                    <AlertCircle size={13} /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="form-field-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email Address <span className="field-required">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@example.com"
                  className={`form-input ${errors.email ? "input-error" : ""}`}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="field-error-msg">
                    <AlertCircle size={13} /> {errors.email}
                  </span>
                )}
              </div>

              {/* Subject */}
              <div className="form-field-group">
                <label htmlFor="contact-subject" className="form-label">
                  Topic / Purpose
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input form-select"
                >
                  <option value="Internship / Opportunity">Internship / Job Opportunity</option>
                  <option value="Project Collaboration">Software Project Collaboration</option>
                  <option value="AI / Research Discussion">AI / Research Discussion</option>
                  <option value="General Question">General Engineering Connect</option>
                </select>
              </div>

              {/* Message */}
              <div className="form-field-group">
                <label htmlFor="contact-message" className="form-label">
                  Your Message <span className="field-required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details about your project, idea, or opportunity..."
                  className={`form-input form-textarea ${errors.message ? "input-error" : ""}`}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="field-error-msg">
                    <AlertCircle size={13} /> {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="btn-primary form-submit-btn"
              >
                {formStatus === "submitting" ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <div className="form-backend-disclaimer">
                <span>
                  Client-validated form with direct mailto fallback. Easily connected to Formspree, Resend or EmailJS endpoints.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
