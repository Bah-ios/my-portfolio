// src/app/page.tsx


// src/app/components/ExperienceSection.tsx

import React, { useEffect, useRef } from 'react';
// ... rest of your component code
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';

// Define metadata for the page (Next.js feature)
export const metadata = {
  title: 'Bahran | Portfolio',
  description: 'A responsive portfolio built with Next.js and Tailwind CSS.',
};

// This is the main page component that assembles the UI
export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-20"> {/* Add padding-top to account for fixed header */}
      
      {/* 1. Navigation/Header */}
      <Header />

      {/* 2. Main Content Sections */}
      
      {/* The About Section (your pink background content) */}
      <AboutSection />
      
      {/* 2. RENDER the Experience Section right after the About Section */}
      <ExperienceSection />

      {/* 3. Footer (optional) */}
      
    </main>
  );
}