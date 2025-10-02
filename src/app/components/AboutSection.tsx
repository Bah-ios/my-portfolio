import React from 'react';
import './AboutPage.css'; // Link to the CSS above

const AboutPage: React.FC = () => {
  return (
    <div className="about-page-container">
      <div className="profile-image-section">
        {/* Replace with your actual image */}
        <img src="IMG_3767 (1) - Copy.JPG" alt="Bahran Solomon" />
      </div>
      <div className="about-me-content">
        <h2 className="about-me-header">About me</h2>
        <p>
          I'm a new grad with a Computer Science and Engineering major at Adama Science and Technology University.
        </p>
        <p>
          I'm a huge foodie and an avid home cook. You can catch me surfing on the central coast, drooling over keyboards, or hiking with my dog, Kipper!
        </p>
        <div className="about-me-buttons">
          <a href="#resume" className="resume-button">resumé</a>
          <a href="#contact" className="contact-button-alt">contact</a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

