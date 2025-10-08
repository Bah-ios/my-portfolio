"use client";
import React, { useEffect, useRef } from "react";
import "./PortfolioSection.css";

const projects = [
  {
    category: "MOBILE & WEB APP",
    title: "Crowdsourced Disaster Response Platform",
    description:
      "A mobile & web app built with FlutterFlow, React, Node.js, and Firebase.",
    image: "/Cdrp.png",
    link: "#",
  },
  {
    category: "UI/UX DESIGN",
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built using React and Tailwind CSS.",
    image: "/portfolio.png",
    link: "#",
  },
  {
    category: "DASHBOARD DESIGN",
    title: "Cyber Security Dashboard",
    description:
      "Interactive dashboard visualizing threat intelligence data.",
    image: "/images/cyber.png",
    link: "#",
  },
];

const PortfolioSection = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".portfolio-card");
    const options = {
      threshold: 0.2,
    };
    const callback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("pop-in");
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new window.IntersectionObserver(callback, options);
    cards.forEach((card: Element, i: number) => {
      (card as HTMLElement).style.transitionDelay = `${i * 150}ms`;
      observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-title">My Projects</h2>
      <div className="portfolio-grid" ref={gridRef}>
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <div className="portfolio-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-image"
              />
            </div>
            <div className="portfolio-card-content">
              <span className="portfolio-category">{project.category}</span>
              <h3 className="portfolio-card-title">{project.title}</h3>
              <p className="portfolio-card-desc">{project.description}</p>
              <a
                href={project.link}
                className="portfolio-link"
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