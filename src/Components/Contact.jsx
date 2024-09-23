import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; 

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setMessageSent(true);
  };

  return (
    <section id="contact" className="bg-slate-50 text-gray-600 py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Get in Touch with Us</h2>
          <p className="text-base">
            Have a question or need more information about ASM Infotech? Use the form below or email us at{' '}
            <a href="mailto:asminfoindia@gmail.com" className="text-customBlue hover:underline">asminfoindia@gmail.com</a>. 
            We'll get back to you as soon as possible.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="bg-slate-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="text-customBlue text-2xl mr-4" />
                <p className="text-base">No. 23, First Floor, 8th Cross Street, Kamarajar Colony, Kodambakkam, Chennai, Tamil Nadu 600019.</p>
              </div>
              <div className="flex items-start mb-4">
                <FaEnvelope className="text-customBlue text-2xl mr-4" />
                <p className="text-base"><a href="mailto:asminfoindia@gmail.com" className="text-customBlue hover:underline">asminfoindia@gmail.com</a></p>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-customBlue text-2xl mr-4" />
                <p className="text-base">+91 9043957699</p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            {messageSent && <div className="bg-customBlue text-gray-900 p-4 rounded mb-6">Your message has been sent. Thank you!</div>}
            <form onSubmit={handleSubmit} className="bg-slate-50 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  className="w-full p-3 bg-slate-100 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  className="w-full p-3 bg-slate-100 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                  className="w-full p-3 bg-slate-100 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Message" 
                  required 
                  className="w-full p-3 bg-slate-100 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
