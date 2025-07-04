import React, { useState } from 'react';
import styles from './Header.module.css'; // Import the CSS Module
import { Play, Menu, X } from 'lucide-react'; // Import icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <header className={styles.header}>
      {/* Left Section: Logo and (Mobile) Request Demo Button */}
      <div className={styles.leftSection}>
        {/* Logo/Brand Name */}
        <div className={styles.logo}>
          {/* Diamond Icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 12L12 22L22 12L12 2Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span>KEENECT-SOFTWARE</span>
        </div>

        {/* Mobile Request a Demo Button (hidden on desktop via CSS) */}
        
      </div>
      <button className={styles.mobileRequestDemoButton}>
          <Play size={16} />
          REQUEST A DEMO
        </button>

      {/* Right Section: Hamburger/Close Icon (Mobile) & Nav + Desktop Request Demo Button */}
      <div className={styles.rightSection}>
        {/* Hamburger Menu Icon (Mobile) */}
        <button
          className={styles.hamburgerButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul>
            <li><a href="#company">COMPANY</a></li>
            <li><a href="#support">SUPPORT</a></li>
          </ul>
        </nav>

        {/* Desktop Request a Demo Button (hidden on mobile via CSS) */}
        <button className={styles.desktopRequestDemoButton}>
          <Play size={16} />
          REQUEST A DEMO
        </button>
      </div>

      {/* Mobile Menu Overlay (conditionally rendered and styled) */}
      {isMenuOpen && (
        <div className={`${styles.mobileNavOverlay} ${styles.open}`}>
          <ul>
            <li><a href="#company" onClick={() => setIsMenuOpen(false)}>COMPANY</a></li>
            <li><a href="#support" onClick={() => setIsMenuOpen(false)}>SUPPORT</a></li>
          </ul>
          {/* Optionally place the demo button here as well if it should be inside the opened menu */}
          {/* <button className={styles.requestDemoButtonBase} onClick={() => setIsMenuOpen(false)}>
            <Play size={16} /> REQUEST A DEMO
          </button> */}
        </div>
      )}
    </header>
  );
};

export default Header;