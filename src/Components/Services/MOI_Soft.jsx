// src/components/MOISoft.js

import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Example images
import moiSoftImage1 from '../Assets/moiSoftImage1.avif';
import moiSoftImage2 from '../Assets/moiSoftImage2.avif';
import moiSoftImage3 from '../Assets/moiSoftImage3.avif';
import moiSoftImage4 from '../Assets/moiSoftImage4.avif';
import moiSoftImage5 from '../Assets/moiSoftImage5.avif';

const MOISoft = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="bg-slate-100 text-gray-700">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-xl md:text-xl font-bold mb-6" data-aos="fade-up">Welcome to MOI Soft</h1>
          <p className="text-base md:text-base mb-8" data-aos="fade-up" data-aos-delay="200">
            MOI Soft offers a robust suite of solutions designed to streamline your business operations, enhance productivity, and provide actionable insights. Discover how our advanced features can transform your workflow.
          </p>
          {/* <Link to="/get-started">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300" data-aos="fade-up" data-aos-delay="400">
              Get Started
            </button>
          </Link> */}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl md:text-xl font-bold text-center mb-12" data-aos="fade-up">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <img src={moiSoftImage1} alt="Advanced Analytics" className="gray-image w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-base font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-gray-700 text-sm">
                Utilize advanced analytics to track key metrics, generate detailed reports, and make data-driven decisions that propel your business forward.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <img src={moiSoftImage2} alt="Customizable Dashboard" className="gray-image w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-base font-semibold mb-2">Customizable Dashboard</h3>
              <p className="text-gray-700 text-sm">
                Tailor your dashboard to fit your specific needs. Add widgets, rearrange components, and access your most important data effortlessly.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="600">
              <img src={moiSoftImage3} alt="Seamless Integration" className="gray-image w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-base font-semibold mb-2">Seamless Integration</h3>
              <p className="text-gray-700 text-sm">
                Easily integrate with existing systems and applications. Our open API ensures smooth connectivity with other tools you use.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="800">
              <img src={moiSoftImage4} alt="Mobile Accessibility" className="gray-image w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-base font-semibold mb-2">Mobile Accessibility</h3>
              <p className="text-gray-700 text-sm">
                Access your data and manage tasks on the go with our mobile-friendly platform. Stay connected and productive no matter where you are.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="1000">
              <img src={moiSoftImage5} alt="Enhanced Security" className="gray-image w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-base font-semibold mb-2">Enhanced Security</h3>
              <p className="text-gray-700 text-sm">
                Protect your data with our advanced security features. From encryption to secure access controls, we prioritize your privacy and data safety.
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
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-10v10a2 2 0 01-2 2h-3.736a2 2 0 01-1.832-1.048L12 15l-1.464-2.928A2 2 0 017.736"/>
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-700 text-sm">
                Register for MOI Soft and set up your account. Our easy onboarding process ensures that you get started without any hassle.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-2">Customize</h3>
              <p className="text-gray-700 text-sm">
                Tailor the platform to fit your needs. Configure settings, add modules, and customize your dashboard for optimal performance.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="600">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15l-6 6m6-6l6 6m-6-6v-8"/>
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-2">Start Using</h3>
              <p className="text-gray-700 text-sm">
                Begin using MOI Soft for your business needs. Enjoy seamless functionality and support as you integrate it into your workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-lg md:text-lg font-bold mb-6" data-aos="fade-up">Ready to Transform Your Business?</h2>
          <p className="text-sm md:text-sm mb-8" data-aos="fade-up" data-aos-delay="200">
            Discover how MOI Soft can enhance your business operations. Get started today and experience the difference.
          </p>
          <Link to="/contact"> <button className=" text-sm bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Contact Us</button></Link>
          </div>
      </section>
    </div>
  );
};

export default MOISoft;
 