import React, { useState, useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * PUBLIC_INTERFACE
 * App
 * The main application component that composes the site layout:
 * - Sticky Navbar with theme toggle
 * - Hero introduction
 * - Sections: Projects, Skills, Experience
 * - Contact form
 * - Footer
 * Handles theme switching by applying a data-theme attribute on the document element.
 */
 // PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  /**
   * PUBLIC_INTERFACE
   * toggleTheme
   * Toggles between light and dark themes for the UI.
   */
   // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="main">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
