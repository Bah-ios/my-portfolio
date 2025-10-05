
// Header.tsx
import React from 'react';
import './Header.css';
import Link from "next/link";
import ExperiencePage from '../experience/page';  
const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="logo">Bahran Solomon</div>

        <nav className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          
        </nav>


      <button className="contact-button">Contact</button>
    </header>
  );
};

export default Header;