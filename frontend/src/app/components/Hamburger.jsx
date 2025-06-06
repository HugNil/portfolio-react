import React, { useState } from 'react';
import styles from '../styles/components/Hamburger.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <div className={`${styles.line} ${styles.top}`}></div>
        <div className={`${styles.line} ${styles.middle}`}></div>
        <div className={`${styles.line} ${styles.bottom}`}></div>
      </div>

      <nav className={`${styles.menu} ${isOpen ? styles.show : ''}`}>
        <ul>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#services" onClick={toggleMenu}>Services</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
