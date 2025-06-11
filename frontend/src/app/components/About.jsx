// src/app/components/About.jsx
import styles from '../styles/components/About.module.css';
import Image from 'next/image';
import profilePic from '../assets/profile.jpg';
import TechStack from './TechStack';

export default function About() {
  return (
    <section className='section' id='about'>
      <div className='container'>
        <h1 className={styles.heading}>About Me</h1>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <p className={styles.paragraph}>
              I'm a Computer Science student at Kristianstad University with a strong passion for technology. I enjoy solving problems, exploring new tools, and learning how things work under the hood. What drives me most is seeing my projects come to life — turning ideas into functional solutions that people can actually use. Whether it's a simple web app or a more complex system, I find real satisfaction in building something from scratch and continuously improving it.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image src={profilePic} alt="Profile picture" className={styles.img} width={300} height={300} />
          </div>
        </div>
        <section>
          <TechStack />
        </section>
      </div>
    </section>
  );
}
