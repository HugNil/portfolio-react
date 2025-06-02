// src/app/components/ProjectCard.jsx
import Link from 'next/link';
import styles from '../styles/components/ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <Link href={`/projects/${project.id}`}>
        {/* Inget <a> inuti – Link är nu root */}
        <img
          className={styles.image}
          src={project.image}
          alt={project.title}
        />
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
        </div>
      </Link>
    </div>
  );
}
