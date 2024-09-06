import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Make sure to bind the modal to your app element
Modal.setAppElement('#root');

const Gettouch = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

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
    <div className="bg-gray-900 text-white py-12 px-6 lg:px-16 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Have a project in mind?</h2>
      <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="200">
        We&apos;d love to help you. Drop us a note using the form below. We will get back to you within 24 hours.
      </p>
      <button 
        className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
        onClick={openModal}
        data-aos="fade-up" 
        data-aos-delay="400"
      >
        Get in Touch
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Form"
        className="bg-gray-800 text-white p-8 rounded-lg shadow-lg max-w-lg mx-auto relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <button 
          className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-red-500" 
          onClick={closeModal}
        >
          &times;
        </button>
        {!submitted ? (
          <form className="space-y-6" onSubmit={handleSubmit} data-aos="fade-up">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        ) : (
          <p className="text-lg text-center" data-aos="fade-up">
            Thank you for your message! We will get back to you within 24 hours.
          </p>
        )}
      </Modal>
    </div>
  );
};

export default Gettouch;
