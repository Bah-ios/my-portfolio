"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.css";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className="header-container">
      <div className="logo">Bahran Solomon</div>

      <nav className="nav-links">
        <Link href="/" className={pathname === "/" ? "active" : ""}>Home</Link>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>About</Link>
        <Link href="/experience" className={pathname === "/experience" ? "active" : ""}>Experience</Link>
      </nav>

      <button className="contact-button">Contact</button>
    </header>
  );
};

export default Header;
