// ExperienceSection.tsx
"use client";

import React, { useEffect, useRef } from 'react';

interface Experience {
  id: number;
  date: string;
  title: string;
  company: string;
  link?: string;
}

const experiences: Experience[] = [
  { id: 1, date: 'August 2025 - Ongoing', title: 'Flutter Developer', company: 'unknown company', link: '#' },
  { id: 2, date: 'June 2020 - June 2021', title: 'President', company: 'AIGA Cal Poly SLO', link: '#' },
  { id: 3, date: 'May 2023 - Aug 2024', title: 'Network Engineer intern', company: 'Viva Tech', link: '#' },
  
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

      <style jsx>{`
        .experience-section {
          background: #221e3eff;
          padding: 120px 0;
        }

        .experience-container {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: start;
          gap: 60px;
          padding: 0 40px;
        }

        .experience-text h2 {
          font-size: 3rem;
          font-weight: 800;
          color: #faf6f6ff;
        }

        .highlight-bar {
          width: 50px;
          height: 4px;
          background: #5a3ef2;
          margin-bottom: 15px;
        }

        .timeline {
          position: relative;
          padding-left: 40px;
        }

        .timeline-line {
          position: absolute;
          left: 10px;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #5a3ef2;
          opacity: 0.3;
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 1s ease-out;
        }

        .timeline-card {
          position: relative;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
          padding: 20px;
          margin-bottom: 40px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .timeline-card::before {
          content: '';
          position: absolute;
          left: -28px;
          top: 24px;
          width: 14px;
          height: 14px;
          background: #5a3ef2;
          border-radius: 50%;
        }

        .timeline-card h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #222;
          margin-bottom: 4px;
        }

        .timeline-card .company a {
          color: #5a3ef2;
          text-decoration: none;
        }

        .timeline-card .company a:hover {
          text-decoration: underline;
        }

        .animate-pop {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .grow-line {
          transform: scaleY(1) !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
