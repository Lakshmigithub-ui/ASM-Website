// src/components/CustomerManagementApp.js

import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Example images
import customerManagementImage1 from '../Assets/customerManagementImage1.avif';
import customerManagementImage2 from '../Assets/customerManagementImage2.avif';
import customerManagementImage3 from '../Assets/customerManagementImage3.avif';
import customerManagementImage4 from '../Assets/customerManagementImage4.avif';
import customerManagementImage5 from '../Assets/customerManagementImage5.avif';

const Customer_Management = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="bg-slate-100 text-gray-700">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-lg md:text-lg font-bold mb-6" data-aos="fade-up">Effortless Customer Management</h1>
          <p className="text-base md:text-base mb-8" data-aos="fade-up" data-aos-delay="200">
            Our Customer Management App streamlines your customer interactions, enhances engagement, and boosts productivity with a suite of powerful features. Discover how we can help you manage your customers more effectively.
          </p>
          {/* <Link to="/contact"> <button className=" text-sm bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Get Started</button></Link> */}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-lg md:text-lg font-bold text-center mb-12" data-aos="fade-up">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <img src={customerManagementImage1} alt="Customer Profiles" className="gray-image w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-base font-semibold mb-2">Customer Profiles</h3>
              <p className="text-gray-700 text-sm">
                Create and manage detailed customer profiles to keep track of interactions, preferences, and history all in one place.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <img src={customerManagementImage2} alt="Automated Follow-Ups" className="gray-image w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-base font-semibold mb-2">Automated Follow-Ups</h3>
              <p className="text-gray-700 text-sm">
                Automate follow-up emails and reminders to ensure timely communication with your customers and enhance engagement.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="600">
              <img src={customerManagementImage3} alt="Advanced Analytics" className="gray-image w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-base font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-700 text-sm">
                Gain insights into customer behavior and trends with our advanced analytics tools, helping you make informed decisions.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="800">
              <img src={customerManagementImage4} alt="Integration with Other Tools" className="gray-image w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-base font-semibold mb-2">Integration with Other Tools</h3>
              <p className="text-gray-700 text-sm">
                Seamlessly integrate with other applications such as CRM systems and email marketing tools to streamline your workflow.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="1000">
              <img src={customerManagementImage5} alt="Mobile Accessibility" className="gray-image w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-base font-semibold mb-2">Mobile Accessibility</h3>
              <p className="text-gray-700 text-sm">
                Access customer data and manage interactions from anywhere with our mobile-friendly design, ensuring you stay connected on the go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-lg md:text-lg font-bold mb-12" data-aos="fade-up">How It Works</h2>
          <div className="flex flex-col lg:flex-row justify-center gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18m-6 5h6M5 17H3v-2h2v2zM17 17h2v-2h-2v2z"/>
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-700 text-sm">
                Register for the Customer Management App and create your account. The setup is quick and easy, so you can start managing your customers immediately.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM5 7h14v10H5V7z"/>
                </svg>
              </div>
              <h3 className="text-base  font-semibold mb-2">Customize</h3>
              <p className="text-gray-700 text-sm">
                Tailor the app to fit your business needs. Customize customer fields, set up automated workflows, and adjust settings to suit your operations.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="600">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10v10H7z"/>
                </svg>
              </div>
              <h3 className="text-base  font-semibold mb-2">Manage</h3>
              <p className="text-gray-700 text-sm">
                Start managing your customer interactions with ease. Use our intuitive dashboard to track customer details, monitor engagement, and generate reports.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-lg  md:text-lg font-bold mb-6" data-aos="fade-up">Ready to Enhance Your Customer Management?</h2>
          <p className="text-sm md:text-base mb-8" data-aos="fade-up" data-aos-delay="200">
            Discover how our Customer Management App can streamline your processes and improve customer relationships. Get in touch to learn more.
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

export default Customer_Management;
