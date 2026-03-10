"use client";
import React from "react";
import "./ContactModal.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Contact Me</h2>
        <p>Choose how you’d like to reach out:</p>

        <div className="contact-options">
          <a
            href="mailto:bahfeb69@gmail.com"
            className="contact-option email"
          >
            <FaEnvelope />
            Email
          </a>
          <a
            href="https://linkedin.com/in/Bahran-Solomon-Tadesse"
            target="_blank"
            className="contact-option linkedin"
          >
            <FaLinkedin />
            LinkedIn
          </a>
          <a
            href="https://github.com/bah-ios"
            target="_blank"
            className="contact-option github"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
