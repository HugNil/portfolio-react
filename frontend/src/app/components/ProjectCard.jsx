// src/app/components/ProjectCard.jsx
import styles from '../styles/components/ProjectCard.module.css';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={project.image}
        alt={project.title}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.technologies}>
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className={styles.tech}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className={styles.moreCount}>
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
