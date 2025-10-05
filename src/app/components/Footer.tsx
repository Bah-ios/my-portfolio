import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css"; // Import the separate CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Animated background glow */}
      <div className="footer-glow"></div>

      <div className="footer-container">
        {/* Brand / Name */}
        <div className="footer-brand">
          <h2>Your Name</h2>
          <p>A passionate developer crafting meaningful digital experiences.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <h3>Connect</h3>
          <div className="footer-icons">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:youremail@example.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
