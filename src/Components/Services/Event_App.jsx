// src/components/EventApp.js

import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Example image
import eventAppImage from '../Assets/eventAppImage.avif';

const Event_App = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="bg-slate-50 text-gray-700">
      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2" data-aos="fade-right">
            <h1 className="text-lg md:text-lg font-bold mb-4">
              Transform Your Events with Ease
            </h1>
            <p className="text-base mb-8">
              Our Event App provides you with a seamless solution to manage, organize, and execute events efficiently. From planning to execution, we’ve got you covered.
            </p>
          </div>
          {/* Main Image */}
          <div className="md:w-1/2 mt-12 md:mt-0" data-aos="fade-left">
            <img src={eventAppImage} alt="Event Management App" className="gray-image w-3/4 h-auto rounded-lg shadow-lg"/>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-lg md:text-lg font-bold mb-12" data-aos="fade-up">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-base font-semibold mb-2">Comprehensive Scheduling</h3>
              <p className="text-gray-700 text-sm">
                Efficiently manage all aspects of your event schedule, from session times to breaks, ensuring everything runs smoothly.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-base font-semibold mb-2">Seamless Registration</h3>
              <p className="text-gray-700 text-sm">
                Simplify attendee registration with our easy-to-use online forms and keep track of all participant details effortlessly.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-base font-semibold mb-2">Real-Time Updates</h3>
              <p className="text-gray-700 text-sm">
                Keep your attendees informed with instant updates and notifications, ensuring they are always up-to-date with event changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-lg md:text-lg font-bold mb-12" data-aos="fade-up">
            How It Works
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-2">Set Up Your Event</h3>
              <p className="text-gray-700 text-sm">
                Create and customize your event by defining key details such as date, location, and agenda to fit your needs.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12l5 5L20 7"/>
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-2">Manage Registrations</h3>
              <p className="text-gray-700 text-sm">
                Monitor and manage attendee registrations, view analytics, and keep track of all the important metrics.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="600">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-2">Host and Execute</h3>
              <p className="text-gray-700 text-sm">
                Execute your event with all the tools you need, including real-time updates, notifications, and a smooth user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-lg md:text-lg font-bold mb-6" data-aos="fade-up">
            Ready to Transform Your Events?
          </h2>
          <p className="text-base md:text-base mb-8" data-aos="fade-up" data-aos-delay="200">
            Discover how our Event App can streamline your event management process. Contact us today for a demo or more information.
          </p>
          <Link to="/contact">
            <button className="bg-blue-500 text-sm text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300" data-aos="fade-up" data-aos-delay="400">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Event_App;
