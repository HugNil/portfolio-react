import styles from '../styles/components/MenuModal.module.css';
import Link from 'next/link';
import { useEffect } from 'react';

export default function MenuModal({ isOpen, onClose }) {
  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    // If menu is open, prevent background scrolling
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div className={`${styles.overlay} ${isOpen ? styles.show : ''}`}>
        <div className={styles.menuFirst}>
          <ul>
            <li><Link href="/" onClick={onClose}>HOME</Link></li>
            <li><Link href="/projects" onClick={onClose}>PROJECTS</Link></li>
            <li><Link href="/about" onClick={onClose}>ABOUT</Link></li>
            <li><Link href="/contact" onClick={onClose}>CONTACT</Link></li>
          </ul>
        </div>
        <div className={styles.menuSecond}>
          <ul>
            <li><Link href="/resume" onClick={onClose}>DOWNLOAD CV</Link></li>
            <li><Link href="https://github.com" target="_blank" rel="noopener noreferrer" onClick={onClose}>GITHUB</Link></li>
            <li><Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" onClick={onClose}>LINKEDIN</Link></li>
            <li><Link href="mailto:me@email.com" onClick={onClose}>EMAIL</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
