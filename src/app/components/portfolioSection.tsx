"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    category: "MOBILE & WEB APP",
    title: "Crowdsourced Disaster Response Platform",
    description:
      "A mobile & web app built with FlutterFlow, React, Node.js, and Firebase.",
    image: "/images/cdrp.png",
    link: "#",
  },
  {
    category: "UI/UX DESIGN",
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built using React and Tailwind CSS.",
    image: "/images/portfolio.png",
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

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300"
            >
              {/* Image Section */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Category Label */}
                <span className="inline-block mb-3 text-xs font-medium text-pink-300 bg-pink-500/20 px-3 py-1 rounded-full">
                  {project.category}
                </span>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-5">
                  {project.description}
                </p>

                {/* View Project Button */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-purple-400 font-medium hover:text-purple-300 transition"
                >
                  View case study →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
