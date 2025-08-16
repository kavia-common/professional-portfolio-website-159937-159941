import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Experience
 * Renders a simple vertical timeline of professional experience.
 */
 // PUBLIC_INTERFACE
export default function Experience() {
  const items = [
    { role: 'Senior Frontend Engineer', company: 'TechCorp', period: '2023 — Present', desc: 'Leading UI architecture and performance optimization initiatives.' },
    { role: 'Frontend Engineer', company: 'WebWorks', period: '2020 — 2023', desc: 'Built component libraries and complex dashboards.' },
    { role: 'UI Developer', company: 'Creative Labs', period: '2018 — 2020', desc: 'Delivered pixel-perfect, accessible web interfaces.' }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-description">Career journey and notable roles.</p>

        <div className="timeline">
          {items.map((it, idx) => (
            <div key={it.role} className="timeline-item">
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <h3 className="timeline-title">{it.role} — <span className="company">{it.company}</span></h3>
                <div className="timeline-period">{it.period}</div>
                <p className="timeline-desc">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
