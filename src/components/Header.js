import React, { useState } from "react"
import "../styles/header.css"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(false) // close mobile menu after click
  }

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          Hornbill <span>Farmhouse</span>
        </div>


        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={handleClick}>Home</a>
          <a href="#rooms" onClick={handleClick}>Rooms</a>
          <a href="#facilities" onClick={handleClick}>Facilities</a>
          <a href="#offer" onClick={handleClick}>Offers</a>
          <a href="#gallery" onClick={handleClick}>Gallery</a>
          <a href="#booking" onClick={handleClick}>Book Now</a>
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
  )
}
