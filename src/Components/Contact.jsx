import React, { useState, useEffect } from 'react';
// import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaSkype,
} from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setMessageSent(true);
  };

  useEffect(() => {
    AOS.init({
      once: true, // Animation will trigger once and won't reset on scroll up
    });
}, []);

  //   AOS.init({ duration: 1000 });
  // }, []);

  return (
    <section id="contact" className="bg-slate-100 text-gray-600 py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-2xl font-bold mb-4">Get in Touch with Us</h2>
          <p className="text-base">
            Have a question or need more information about ASM Infotech? Use the form below or email us at{' '}
            <a href="mailto:admin@asminfotech.in" className="text-customBlue hover:underline">admin@asminfotech.in</a>.
            We'll get back to you as soon as possible.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-up">
            <div className="bg-slate-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-start mb-6">
                <FaMapMarkerAlt className="text-customBlue text-3xl mr-4" />
                <p className="text-base">No. 23, First Floor, 8th Cross Street, Kamarajar Colony, Kodambakkam, Chennai, Tamil Nadu 600019.</p>
              </div>
              <div className="flex items-start mb-6">
                <FaEnvelope className="text-customBlue text-2xl mr-4" />
                <p className="text-base"><a href="mailto:admin@asminfotech.in" className="text-customBlue hover:underline">admin@asminfotech.in</a></p>
              </div>
              <div className="flex items-start">
                <FaPhoneAlt className="text-customBlue text-2xl mr-4" />
                <p className="text-base">+91 9043957699 <br /> 044 42129400</p>               
              </div>
                    {/* Social Media Section */}
      <div className="mt-8 text-center space-y-4">
        {/* <h2 className="text-lg font-semibold">Follow Us</h2> */}
        <div className="flex justify-start space-x-3">
          <a
            href="https://facebook.com/asminfotech"
            target="_blank"
            rel="noopener noreferrer"
            // className="text-xl text-slate-100 rounded-full hover:text-blue-500"
            className="mr-2 text-base text-slate-100 bg-slate-500 p-2 rounded-full inline-block hover:text-blue-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/asminfotech"
            target="_blank"
            rel="noopener noreferrer"
            // className="text-xl text-blue-400 hover:text-blue-300"
            className="mr-2 text-base text-slate-100 bg-slate-500 p-2 rounded-full inline-block hover:text-blue-500"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/asminfotech"
            target="_blank"
            rel="noopener noreferrer"
            // className="text-xl text-pink-500 hover:text-pink-400"
            className="mr-2 text-base text-slate-100 bg-slate-500 p-2 rounded-full inline-block hover:text-blue-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/asminfotech"
            target="_blank"
            rel="noopener noreferrer"
            // className="text-xl text-red-600 hover:text-red-500"
            className="mr-2 text-base text-slate-100 bg-slate-500 p-2 rounded-full inline-block hover:text-blue-500"
          >
            <FaYoutube />
          </a>
          <a
            href="https://linkedin.com/asminfotech"
            target="_blank"
            rel="noopener noreferrer"
            // className="text-xl text-blue-700 hover:text-blue-600"
            className="mr-2 text-base text-slate-100 bg-slate-500 p-2 rounded-full inline-block hover:text-blue-500"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://skype.com/asminfotech"
            target="_blank"
            rel="noopener noreferrer"
            // className="text-xl text-sky-500 hover:text-sky-400"
            className="mr-2 text-base text-slate-100 bg-slate-500 p-2 rounded-full inline-block hover:text-blue-500"
          >
            <FaSkype />
          </a>
        </div>
      </div>

            </div>
          </div>
          <div className="lg:w-2/3" data-aos="fade-down">
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
