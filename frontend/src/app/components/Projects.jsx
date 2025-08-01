'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import projects from '../data/projects.json';
import styles from '../styles/components/Projects.module.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} onClick={() => handleProjectClick(project)}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
}
