import React from 'react';
import './Header.css'; // Assuming you'll create a Header.css file for styling

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="logo">Bahran Solomon</div>
      <nav className="nav-menu">
        <a href="#home" className="nav-item">home</a>
        <a href="#portfolio" className="nav-item">portfolio</a>
        <a href="#about" className="nav-item active">about</a>
      </nav>
      <button className="contact-button">Contact</button>
    </header>
  );
};

export default Header;