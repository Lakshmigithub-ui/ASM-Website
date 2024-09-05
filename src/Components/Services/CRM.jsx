import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './CRM.css'; // Custom CSS for additional styling

const CRMPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with smooth animations
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" style={{ backgroundImage: "url('path/to/your/hero-background.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" data-aos="fade-up">Transform Your CRM Experience</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">Empower your business with our innovative CRM solutions that streamline your customer interactions.</p>
          <button className="bg-teal-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">Features That Drive Success</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4" data-aos="fade-right">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition-transform transform hover:scale-105">
                <img src="path/to/your/feature1-icon.png" alt="Feature 1" className="w-20 h-20 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Seamless Integration</h3>
                <p className="text-gray-300">Effortlessly integrate with your existing tools and platforms for a smooth workflow.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4" data-aos="fade-up">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition-transform transform hover:scale-105">
                <img src="path/to/your/feature2-icon.png" alt="Feature 2" className="w-20 h-20 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Real-Time Analytics</h3>
                <p className="text-gray-300">Get instant insights into your sales and customer interactions with real-time analytics.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4" data-aos="fade-left">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition-transform transform hover:scale-105">
                <img src="path/to/your/feature3-icon.png" alt="Feature 3" className="w-20 h-20 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Customizable Dashboard</h3>
                <p className="text-gray-300">Tailor your dashboard to display the metrics and data most important to you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="relative bg-gray-900 py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-70"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">Interactive CRM Demo</h2>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="lg:w-1/2 p-4" data-aos="fade-right">
              <img src="path/to/your/demo-image.jpg" alt="CRM Demo" className="rounded-lg shadow-lg" />
            </div>
            <div className="lg:w-1/2 p-4" data-aos="fade-left">
              <h3 className="text-2xl font-semibold mb-4 text-white">Experience the Power of Our CRM</h3>
              <p className="text-gray-300 mb-4">Explore our interactive demo to see how our CRM can streamline your business processes and enhance customer interactions.</p>
              <button className="bg-teal-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105">Try the Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4" data-aos="fade-up">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <blockquote className="text-lg text-gray-300 italic mb-4">“Our CRM solution has significantly improved our efficiency and customer engagement.”</blockquote>
                <p className="font-semibold text-white">John Doe</p>
                <p className="text-gray-400">CEO, Company X</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
                <blockquote className="text-lg text-gray-300 italic mb-4">“The real-time analytics and customizable dashboard are game-changers for our business.”</blockquote>
                <p className="font-semibold text-white">Jane Smith</p>
                <p className="text-gray-400">Marketing Manager, Company Y</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-bold mb-6 text-white" data-aos="fade-up">Ready to Transform Your CRM?</h2>
        <p className="text-lg mb-8 text-gray-300" data-aos="fade-up" data-aos-delay="200">Join countless businesses that have enhanced their operations with our cutting-edge CRM solutions.</p>
        <button className="bg-teal-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105" data-aos="zoom-in">Get Started</button>
      </section>
    </div>
  );
}

export default CRMPage;
