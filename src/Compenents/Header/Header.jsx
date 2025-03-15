import React, { useState } from "react";
import "./Header.css";  // Import the CSS file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <a href="#home" className="logo">
        <img src="static/LOGO.png" alt="EleEYE Logo" />
      </a>

      <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`} id="menu-icon" onClick={() => setMenuOpen(!menuOpen)}></i>

      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#why">How it Works</a>
        <a href="#about">Our Team</a>
      </nav>

      <a href="#contact" className="gradient-btn">Contact Us</a>
    </header>
  );
};

export default Header;