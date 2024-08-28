import React, { useState } from 'react';
import "./Gettouch.css";

const Gettouch = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <h2 className="contact-us-heading">Have a project in mind?</h2>
        <p className="contact-us-description">
          We&apos;d love to help you. Drop us a note using the form below. We will get back to you within 24 hours.
        </p>
        <form className="contact-us-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Get in Touch</button>
          {submitted && <p className="submission-message">Thank you for your message! We will get back to you within 24 hours.</p>}
        </form>
      </div>
    </div>
  );
};

export default Gettouch;
