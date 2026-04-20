// ExperienceSection.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import './ExperienceSection.css';
interface Experience {
  id: number;
  date: string;
  title: string;
  company: string;
  link?: string;
}

const experiences: Experience[] = [
  { id: 1, date: 'December 2025 - Ongoing', title: 'Backend Developer', company: 'Commercial Bank of Ethiopia', link: 'https://combanketh.et/home' },
  { id: 2, date: 'May 2023 - Aug 2024', title: 'Network Engineer intern', company: 'Viva Tech', link: 'https://vivatc.com/' },
  
];

const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll('.timeline-card');
    const line = sectionRef.current.querySelector('.timeline-line');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const item = entry.target as HTMLElement;
          item.classList.add('animate-pop');
          obs.unobserve(item);
        }
      });
    }, { threshold: 0.1 });

    items.forEach((item, idx) => {
      (item as HTMLElement).style.transitionDelay = `${idx * 150}ms`;
      observer.observe(item);
    });

    if (line) {
      const lineObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('grow-line');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      lineObserver.observe(line);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="experience-section">
      
      <div className="experience-container">
        <div className="experience-text">
          <div className="highlight-bar"></div>
          <h2>Experience</h2>
          <p>Catch up on what I've been up to recently:</p>
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          <div className="timeline-list">
            {experiences.map((exp) => (
              <div key={exp.id} className="timeline-card">
                <p className="date">{exp.date}</p>
                <h3>{exp.title}</h3>
                <p className="company">
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    {exp.company}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default ExperienceSection;
