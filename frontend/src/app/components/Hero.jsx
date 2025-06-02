// src/app/components/Hero.jsx
import Link from 'next/link';
import styles from '../styles/components/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>my story</p>
        <h1 className={styles.heading}>
          Technology is powerful, but it’s only as impactful as the hands that shape it.
        </h1>
        <div className={styles.buttonContainer}>
          <button className={styles.buttonPrimary}>För kunder</button>
          <Link href="/projects">
            <button className={styles.buttonSecondary}>Se mina projekt</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
