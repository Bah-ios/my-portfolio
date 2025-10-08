

import React, { useEffect, useRef } from 'react';
    // ... rest of your component code
import Header from './components/Header';
import Footer from './components/Footer'
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/portfolioSection';

    // Define metadata for the page (Next.js feature)
    export const metadata = {
      title: 'Bahran | Portfolio',
      description: 'A responsive portfolio built with Next.js and Tailwind CSS.',
    };

    // This is the main page component that assembles the UI
    export default function Home() {
      return (
        <main > {/* Add padding-top to account for fixed header */}
          
          {/* 1. Navigation/Header */}
          <Header />
          <HeroSection />
          <PortfolioSection />
          <Footer />
        </main>
      );
    }