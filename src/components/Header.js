import React, { useState } from "react";
import "../styles/header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">Soho Hotel</div>

        {/* Desktop Menu */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/accommodation">Accommodation</a>
          <a href="/blog">Blog</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </nav>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
