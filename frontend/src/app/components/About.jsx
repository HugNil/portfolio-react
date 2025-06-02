// src/app/components/About.jsx
import styles from '../styles/components/About.module.css';

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Om mig</h2>
        <p className={styles.paragraph}>
          Jag är Hugo
        </p>
        <p className={styles.paragraph}>
          Mjuvaruutvecklare
        </p>
      </div>
    </section>
  );
}
