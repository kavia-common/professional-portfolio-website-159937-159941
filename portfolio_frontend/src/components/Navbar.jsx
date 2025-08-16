import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Navbar
 * A sticky top navigation bar for the portfolio site.
 * Props:
 * - theme: 'light' | 'dark' - current theme string for accessible labeling
 * - onToggleTheme: () => void - handler to toggle light/dark mode
 */
 // PUBLIC_INTERFACE
export default function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="container nav-inner">
        <a className="brand" href="#home" aria-label="Go to home">
          <span className="brand-primary">Pro</span>folio
        </a>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded="false"
          onClick={() => {
            const menu = document.getElementById('nav-menu');
            if (menu) {
              const open = menu.getAttribute('data-open') === 'true';
              menu.setAttribute('data-open', (!open).toString());
            }
          }}
        >
          ☰
        </button>

        <ul className="nav-menu" id="nav-menu" data-open="false">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a className="btn btn-accent btn-small" href="#contact">Contact</a></li>
          <li>
            <button
              className="btn btn-ghost btn-small"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
