'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/components/Footer.module.css';
import ArrowIcon from '../assets/up-circular-48.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.arrowContainer}>
        <Link 
          href="/" 
          className={styles.arrowLink}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
            window.history.pushState({}, '', '/');
          }}
        >
          <Image 
            src={ArrowIcon} 
            alt="Scroll to top" 
            width={48} 
            height={48}
          />
        </Link>
      </div>
      <div className={styles.footerContent}>
        <p className={styles.footerText}>
          &copy; {new Date().getFullYear()} Hugo Nilsson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}