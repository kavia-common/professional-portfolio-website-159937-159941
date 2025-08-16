import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Projects
 * Displays a grid of highlighted projects with titles, descriptions, and tags.
 */
 // PUBLIC_INTERFACE
export default function Projects() {
  const data = [
    {
      title: 'Project Alpha',
      description: 'A modern SPA featuring responsive layouts and real-time updates.',
      tags: ['React', 'CSS', 'API'],
      link: '#'
    },
    {
      title: 'Design System Kit',
      description: 'Reusable components and tokens for consistent UI across apps.',
      tags: ['Design Tokens', 'Theming', 'Accessibility'],
      link: '#'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive charts and insights built for scalability.',
      tags: ['D3.js', 'Performance', 'UX'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-description">A selection of recent work and experiments.</p>

        <div className="grid cards">
          {data.map((p) => (
            <article key={p.title} className="card">
              <div className="card-body">
                <h3 className="card-title">{p.title}</h3>
                <p className="card-text">{p.description}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="card-footer">
                <a className="btn btn-outline btn-small" href={p.link} aria-label={`Open ${p.title}`}>Open</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
