'use client';

import { useState } from 'react';
import styles from '../styles/components/Contact.module.css';
import EmailIcon from '../assets/new-post-64.png';
import Arrow from '../assets/up-circular-48.png';
import Link from 'next/link';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  return (
    <section className={styles.section} id='contact'>
      <div className={styles.container}>
        <h2 className={styles.heading}>Reach out<mark>!</mark></h2>
        <article className={styles.socialLinks}>
          <a href="mailto:youremail@example.com" className={styles.link}><img src={EmailIcon.src} alt="Email" /></a>
          <a href="https://github.com/hugnil" target="_blank" rel="noopener noreferrer" className={styles.link}><i style={{ fontSize: '48px' }} className="devicon-github-original"></i></a>
          <a href="https://www.linkedin.com/in/hugo-nilsson-80b33621b/?locale=sv_SE" target="_blank" rel="noopener noreferrer" className={styles.link}><i style={{ fontSize: '48px' }} className="devicon-linkedin-plain"></i></a>
        </article>   
      </div>
    </section>
  );
}
