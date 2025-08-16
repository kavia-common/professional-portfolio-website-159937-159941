import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Footer
 * The footer area with copyright and quick links.
 */
 // PUBLIC_INTERFACE
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-primary">Pro</span>folio
        </div>
        <div className="footer-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-copy">© {year} Your Name. All rights reserved.</div>
      </div>
    </footer>
  );
}
