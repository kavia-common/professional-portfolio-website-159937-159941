import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Hero
 * The prominent introduction area that summarizes the professional profile.
 * Shows a headline, a short description, and primary CTAs to guide navigation.
 */
 // PUBLIC_INTERFACE
export default function Hero() {
  return (
    <header id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-badge">Available for opportunities</div>
        <h1 className="hero-title">Hi, I’m <span className="highlight">Your Name</span></h1>
        <p className="hero-subtitle">
          Frontend Developer specializing in creating modern, accessible, and performant web experiences.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-primary btn-large" href="#projects">View Projects</a>
          <a className="btn btn-outline btn-large" href="#contact">Contact Me</a>
        </div>
      </div>
    </header>
  );
}
