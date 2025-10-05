"use client";
import React, { useEffect, useRef } from "react";
import "./HeroSection.css";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = heroRef.current;
    if (section) {
      section.classList.add("fade-up");
    }
  }, []);

  return (
    <section className="hero-section" ref={heroRef}>
      <div className="hero-content">
        <div className="text-content">
          <p className="welcome-text">Welcome to my portfolio</p>
          <h1 className="hero-title">
            Hi, I’m <span className="highlight">Your Name</span>
          </h1>
          <h2 className="hero-subtitle">Creative Developer & Designer</h2>
          <p className="hero-description">
            I create fast, modern, and visually appealing web experiences with
            clean code and meaningful design.
          </p>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="image-container">
          <Image
            src="/globe.svg"
            alt="Globe illustration"
            width={400}
            height={400}
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
