import React, { useState, useEffect } from "react";
import "./Header.css";
import logoImage from "../../assets/Maanikya.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Toggle body scroll when menu is open
    document.body.style.overflow = !menuOpen ? 'hidden' : 'auto';
  };

  // Close menu when clicking outside
  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${sticky ? 'sticky' : ''}`}>
        <a href="#home" className="logo">
          <img src={logoImage} alt="Maanikya Logo" />
        </a>

        <i 
          className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`} 
          id="menu-icon" 
          onClick={toggleMenu}
        ></i>

        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#vision" onClick={closeMenu}>How it Works</a>
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#about" onClick={closeMenu}>Our Team</a>
        </nav>

        <a href="#contact" className="gradient-btn">Contact Us</a>
      </header>
      
      {/* Overlay for mobile menu */}
      <div 
        className={`menu-overlay ${menuOpen ? "active" : ""}`} 
        onClick={closeMenu}
      ></div>
    </>
  );
};

export default Header;