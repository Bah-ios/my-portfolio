"use client";

import React, { useEffect, useRef, useState } from "react";
import "./PortfolioSection.css";

const PortfolioSection = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const gridRef = useRef<HTMLDivElement | null>(null);

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/projects");
        const data = await res.json();

        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // IntersectionObserver animation
  useEffect(() => {
    if (!gridRef.current || projects.length === 0) return;

    const cards = gridRef.current.querySelectorAll(".portfolio-card");

    const options = {
      threshold: 0.2,
    };

    const callback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("pop-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    cards.forEach((card, i) => {
      (card as HTMLElement).style.transitionDelay = `${i * 150}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [projects]);

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">My Projects</h2>

      {loading && <p>Loading projects...</p>}

      <div className="portfolio-grid" ref={gridRef}>
        {projects.map((project) => (
          <div className="portfolio-card" key={project._id}>
            <div className="portfolio-image-wrapper">
              <img
                src={project.image || "/placeholder.png"}
                alt={project.title}
                className="portfolio-image"
              />
            </div>

            <div className="portfolio-card-content">
              <span className="portfolio-category">
                {project.category}
              </span>

              <h3 className="portfolio-card-title">
                {project.title}
              </h3>

              <p className="portfolio-card-desc">
                {project.description}
              </p>

              <a
                href={project.link}
                className="portfolio-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View case study →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;