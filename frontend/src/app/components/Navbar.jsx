'use client';

import { useState } from 'react';
import styles from '../styles/components/Navbar.module.css';
import hamburgerstyles from '../styles/components/Hamburger.module.css';
import MenuModal from './MenuModal';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.inner}>
          <h1 className={styles.logo}>Hugo Nilsson</h1>
        </div>
      </nav>
      <div className={`${hamburgerstyles.hamburger} ${menuOpen ? hamburgerstyles.open : ''}`} onClick={toggleMenu}>
        <div className={`${hamburgerstyles.line} ${hamburgerstyles.top}`}></div>
        <div className={`${hamburgerstyles.line} ${hamburgerstyles.middle}`}></div>
        <div className={`${hamburgerstyles.line} ${hamburgerstyles.bottom}`}></div>
      </div>
      <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
