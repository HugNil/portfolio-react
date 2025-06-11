// src/app/components/Hero.jsx
import Link from 'next/link';
import styles from '../styles/components/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 id='heading1' className={`${styles.heading} ${styles.heading1}`}>
          SOFTWARE
        </h1>
        <h1 id='heading2' className={`${styles.heading} ${styles.heading2}`}>
          DEVELOPMENT
        </h1>
        <h1 id='heading3' className={`${styles.heading} ${styles.heading3}`}>
          STUDENT
        </h1>
        <div className={styles.buttonContainer}>
          <button className="button-primary">DOWNLOAD CV</button>
          <Link href="#projects">
            <button className="button-primary">PROJECTS</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
