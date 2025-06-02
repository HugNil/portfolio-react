// src/app/components/Contact.jsx
'use client';

import { useState } from 'react';
import styles from '../styles/components/Contact.module.css';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('pending');
    // Exempel: anropa en API-route senare…
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Kontakt</h2>

        {status === 'success' ? (
          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)' }}>
            Tack! Jag återkommer snart.
          </p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              <span className={styles.labelText}>Namn</span>
              <input
                className={styles.input}
                type="text"
                name="name"
                required
              />
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>E-post</span>
              <input
                className={styles.input}
                type="email"
                name="email"
                required
              />
            </label>

            <label className={styles.label}>
              <span className={styles.labelText}>Meddelande</span>
              <textarea
                className={styles.textarea}
                name="message"
                rows="4"
                required
              />
            </label>

            <button className={`buttonPrimary ${styles.buttonPrimary}`} type="submit">
              {status === 'pending' ? 'Skickar...' : 'Skicka'}
            </button>
          </form>
        )}

        <div className={styles.socialLinks}>
          <a href="mailto:youremail@example.com" className={styles.link}>E-post</a>
          <a href="https://github.com/ditt-anvandarnamn" className={styles.link}>GitHub</a>
          <a href="https://linkedin.com/in/ditt-anvandarnamn" className={styles.link}>LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
