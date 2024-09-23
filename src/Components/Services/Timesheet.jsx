// src/components/TimeSheet.js

import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Example images
import timesheetImage1 from '../Assets/timesheetImage1.avif';
import timesheetImage2 from '../Assets/timesheetImage2.avif';
import timesheetImage3 from '../Assets/timesheetImage3.avif';

const TimeSheet = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000,
      disable: 'mobile'
     }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="bg-slate-50 text-gray-900">
      {/* Hero Section */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-lg md:text-lg font-bold mb-4" data-aos="fade-up">Time Tracking Simplified</h1>
          <p className="text-sm md:text-sm mb-8" data-aos="fade-up" data-aos-delay="200">
            Our TimeSheet application streamlines the process of tracking work hours, managing timesheets, and generating reports effortlessly.
          </p>
          <Link to="/get-started">
            <button className="bg-blue-500 text-white text-sm py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300" data-aos="fade-up" data-aos-delay="400">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <img src={timesheetImage1} alt="Real-Time Tracking" className="gray-image w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-lg font-semibold mb-2">Real-Time Tracking</h2>
              <p className="text-gray-700 text-sm">
                Keep track of work hours as they happen. Our app provides real-time updates and notifications.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <img src={timesheetImage2} alt="Automated Reports" className="gray-image w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-lg font-semibold mb-2">Automated Reports</h2>
              <p className="text-gray-700 text-sm">
                Generate detailed reports automatically. Customizable templates make reporting straightforward and efficient.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="600">
              <img src={timesheetImage3} alt="Team Management" className="gray-image w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-lg font-semibold mb-2">Team Management</h2>
              <p className="text-gray-700 text-sm">
                Manage team members and track their hours. Approve timesheets and handle payroll seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-lg md:text-lg font-bold mb-4" data-aos="fade-up">How It Works</h2>
          <p className="text-sm md:text-lg mb-8" data-aos="fade-up" data-aos-delay="200">
            Our TimeSheet app simplifies time tracking with a user-friendly interface and intuitive features.
          </p>
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            <div className="flex flex-col items-center bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="300">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-10v10a2 2 0 01-2 2h-3.736a2 2 0 01-1.832-1.048L12 15l-1.464-2.928A2 2 0 017.736 11H4a2 2 0 01-2-2V2a2 2 0 012-2h3.736a2 2 0 011.832 1.048L12 9l1.464-2.928A2 2 0 0116.264 4H20a2 2 0 012 2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Track Time</h3>
              <p className="text-gray-700">
                Start tracking time with just a few clicks. Our interface is designed for ease of use and minimal setup.
              </p>
            </div>
            <div className="flex flex-col items-center bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 14h12v4H6zm-2 0a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v6h-2V6H6v8H4v-2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Generate Reports</h3>
              <p className="text-gray-700">
                Automatically generate reports based on the tracked time. Customize and export as needed.
              </p>
            </div>
            <div className="flex flex-col items-center bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="500">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h8v4H8zm0 4h8v4H8z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Manage Payroll</h3>
              <p className="text-gray-700">
                Efficiently manage payroll by integrating with timesheet data. Ensure accurate and timely payments.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TimeSheet;
