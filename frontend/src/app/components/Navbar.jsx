// src/app/components/Navbar.jsx
'use client';

import Link from 'next/link';
import styles from '../styles/components/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/">
          <a className={styles.logo}>
            Min Portfolio
          </a>
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link href="/">
              <a className={styles.menuItem}>Hem</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className={styles.menuItem}>Projekt</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
