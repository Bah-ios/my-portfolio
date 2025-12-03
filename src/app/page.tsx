"use client";

import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/portfolioSection";
import ContactModal from "./components/ContactModal";
import ExperiencePage from "./experience/page";
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
