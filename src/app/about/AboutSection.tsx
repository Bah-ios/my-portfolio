// components/AboutSection.tsx
"use client";

import Image from "next/image";
import React from "react";
import './AboutPage.css';
const AboutSection: React.FC = () => {
  return (
    <div className="about-page-wrapper"> {/* New wrapper for the whole page/view */}
      
      {/* About Page Content */}
      <section id="about" className="about-page-container">
        {/* Profile image section */}
        <div className="profile-image-section">
          <Image
            src="/profile.JPG" // Ensure this path is correct in your public/ folder
            alt="Bahran Solomon"
            width={350} // Matches CSS fixed width
            height={350} // Matches CSS fixed height
            className="profile-image" // Class for image within container
            priority
          />
        </div>

        {/* About text content */}
        <div className="about-me-content">
          <h2 className="about-me-header">
            <span className="emoji-prefix">👀</span>About me
          </h2>
          <p>
            I'm a new grad with a Computer Science and Engineering major at Adama
            Science and Technology University.
          </p>
          <p>
            I'm a huge foodie and an avid home cook. You can catch me surfing on
            the central coast, drooling over keyboards, or hiking with my dog, Kipper!
          </p>

          <div className="about-me-buttons">
            <a href="#resume" className="resume-button">
              Resume
            </a>
            <a href="#contact" className="contact-button-alt">
              contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;