'use client';

import { useEffect } from 'react';
import styles from '../styles/components/ProjectModal.module.css';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className={styles.header}>
          <img 
            src={project.image} 
            alt={project.title}
            className={styles.headerImage}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.description}>{project.longDescription}</p>
          </div>

          {project.technologies && project.technologies.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Technologies</h3>
              <div className={styles.technologies}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.contributors && project.contributors.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Contributors</h3>
              <p className={styles.contributorText}>
                {project.contributors.join(', ')}
              </p>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Features</h3>
              <ul className={styles.features}>
                {project.features.map((feature, index) => (
                  <li key={index} className={styles.feature}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.links}>
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M18 13V19C18 20.1046 17.1046 21 16 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H11M15 3H21V9M10 14L21 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.linkButton}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 19C4 20.5 4 16.5 2 16M22 16V19C22 20.1046 21.1046 21 20 21H16C14.8954 21 14 20.1046 14 19V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 7.5C14.8284 6.67157 14.8284 5.32843 14 4.5C13.1716 3.67157 11.8284 3.67157 11 4.5L7 8.5C6.17157 9.32843 6.17157 10.6716 7 11.5C7.82843 12.3284 9.17157 12.3284 10 11.5L12 9.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
