import React, { useState } from 'react';
import './CSS/Contact.css'; 
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; 

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setMessageSent(true);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get in Touch with Us</h2>
          <p>
            Have a question or need more information about ASM Infotech? Use the form below or email us at{' '}
            <a href="mailto:asminfoindia@gmail.com">asminfoindia@gmail.com</a>. We'll get back to you as soon as possible.
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <p>NO. 23, FIRST FLOOR, 8th Cross Street, Kamarajar Colony, Kodambakkam, Chennai, Tamil Nadu 600019.</p>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <p><a href="mailto:asminfoindia@gmail.com">asminfoindia@gmail.com</a></p>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <p>(044) 42129400</p>
            </div>
          </div>
          <div className="contact-form">
            {messageSent && <div className="message-success">Your message has been sent. Thank you!</div>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
