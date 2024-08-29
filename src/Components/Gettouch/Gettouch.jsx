
import React, { useState } from 'react';
import Modal from 'react-modal';
import "./Gettouch.css";

// Make sure to bind the modal to your app element
Modal.setAppElement('#root');

const Gettouch = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission (e.g., send to server)
    // Reset form fields
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSubmitted(false); // Optionally reset submission state
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <h2 className="contact-us-heading">Have a project in mind?</h2>
        <p className="contact-us-description">
          We&apos;d love to help you. Drop us a note using the form below. We will get back to you within 24 hours.
        </p>
        <center>
        <button className="open-form-button" onClick={openModal}>
          Get in Touch
        </button>
        </center>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Contact Form"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <button className="modal-close-button" onClick={closeModal}>×</button>
          {!submitted ? (
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
              <button type="submit">Submit</button>
            </form>
          ) : (
            <p className="submission-message">
              Thank you for your message! We will get back to you within 24 hours.
            </p>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Gettouch;
