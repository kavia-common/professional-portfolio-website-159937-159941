import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Skills
 * Displays categorized technical skills as badges.
 */
 // PUBLIC_INTERFACE
export default function Skills() {
  const skillGroups = {
    'Frontend': ['React', 'JavaScript', 'HTML5', 'CSS3', 'Accessibility'],
    'Styling': ['Sass', 'CSS Modules', 'Responsive Design', 'Animations'],
    'Tooling': ['Webpack', 'Vite', 'Babel', 'ESLint', 'Jest'],
  };

  return (
    <section id="skills" className="section alt">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-description">Technologies and tools I use to build products.</p>
        <div className="skills">
          {Object.keys(skillGroups).map((group) => (
            <div key={group} className="skill-group">
              <h3 className="skill-group-title">{group}</h3>
              <div className="skill-badges">
                {skillGroups[group].map((s) => (
                  <span key={s} className="badge">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
