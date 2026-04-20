"use client";

import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import PortfolioSection from "./components/projects/portfolioSection";
import ContactModal from "./components/contactModal/ContactModal";
import ExperienceSection from "./experience/ExperienceSection";

export default function Home() {
  
  const [showModal, setShowModal] = useState(false);

  return (
    <main>
      <Header onContactClick={() => setShowModal(true)} />
      <HeroSection />
      <PortfolioSection />
      <ExperienceSection />
      <Footer />
      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </main>
  );
}
