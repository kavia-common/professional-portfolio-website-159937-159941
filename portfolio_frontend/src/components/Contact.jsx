import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * Contact
 * A basic contact form layout with name, email, and message fields.
 * Note: This is a static UI. Hook to a backend/email service as needed.
 */
 // PUBLIC_INTERFACE
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, integrate with a backend/email service here.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section alt">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-description">Have a question or want to work together? Send a message.</p>

        {!submitted ? (
          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" placeholder="Tell me about your project or inquiry..." required />
            </div>
            <div className="form-actions">
              <button className="btn btn-primary" type="submit">Send Message</button>
              <a className="btn btn-outline" href="#home">Back to top</a>
            </div>
          </form>
        ) : (
          <div className="success" role="status" aria-live="polite">
            Thank you! Your message has been submitted. I will get back to you soon.
          </div>
        )}
      </div>
    </section>
  );
}
