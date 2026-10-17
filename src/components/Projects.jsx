import { useMemo, useState } from 'react';
import Section from './Section.jsx';

// Projects are rendered from an array with map() and filtered with state.
export default function Projects({ projects }) {
  const filters = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category))],
    [projects]
  );

  const [activeFilter, setActiveFilter] = useState('All');

  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <Section id="projects" title="Projects" subtitle="Filter by category">
      <div className="chips" role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={`chip ${activeFilter === filter ? 'chip--active' : ''}`}
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card__top">
              <span className="project-card__tag">{project.category}</span>
              <span className="project-card__count">
                {String(project.id).padStart(2, '0')}
              </span>
            </div>
            <h3>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            {project.url && (
              <a
                className="project-card__link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub ↗
              </a>
            )}
          </article>
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <p className="empty">No projects in this category yet.</p>
      )}
    </Section>
  );
}