// src/app/projects/page.js
import fs   from 'fs';
import path from 'path';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
  const filePath = path.join(process.cwd(), 'src/app/data/projects.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const projects = JSON.parse(jsonData);

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
      <div className="container">
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 500,
          marginBottom: '2rem',
          color: 'var(--color-text-primary)'
        }}>
          Mina projekt
        </h1>
        <div className="grid-3">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
