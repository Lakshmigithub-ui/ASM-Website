import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const MatrimonyApp = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with smooth animations
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-500 to-blue-500 p-12 rounded-lg shadow-lg mb-12">
        <img src="path/to/your/hero-image.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-30 z-[-1]" />
        <div className="text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6" data-aos="fade-up">Discover Your Soulmate with Our Matrimony App</h1>
          <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="200">Join now and access exclusive features designed to enhance your matchmaking journey.</p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-purple-700 transition" data-aos="fade-up" data-aos-delay="400">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105" data-aos="fade-right">
            <img src="path/to/your/feature1-icon.png" alt="Feature 1" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Advanced Search</h3>
            <p>Find potential matches with highly customizable search filters.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105" data-aos="fade-up">
            <img src="path/to/your/feature2-icon.png" alt="Feature 2" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Verified Profiles</h3>
            <p>Browse through genuine and verified user profiles for authenticity.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105" data-aos="fade-left">
            <img src="path/to/your/feature3-icon.png" alt="Feature 3" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Private Messaging</h3>
            <p>Communicate securely with potential matches through our chat system.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative bg-gray-800 p-12 rounded-lg shadow-lg mb-12">
        <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-[-1]" style={{ backgroundImage: "url('path/to/your/how-it-works-background.jpg')" }} />
        <div className="relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">How It Works</h2>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="lg:w-1/3 p-6" data-aos="fade-right">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-2xl font-semibold mb-2">Step 1: Sign Up</h3>
                <p>Create your profile and set your preferences to start the matchmaking process.</p>
              </div>
            </div>
            <div className="lg:w-1/3 p-6" data-aos="fade-up">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-2xl font-semibold mb-2">Step 2: Search & Match</h3>
                <p>Use advanced filters to find matches and connect with them directly.</p>
              </div>
            </div>
            <div className="lg:w-1/3 p-6" data-aos="fade-left">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-2xl font-semibold mb-2">Step 3: Connect</h3>
                <p>Start conversations and build connections with your potential match.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mx-4 mb-8 w-full md:w-1/3" data-aos="fade-up">
            <blockquote className="text-lg italic mb-4">“An amazing app! Found my soulmate in no time. Highly recommended!”</blockquote>
            <p className="font-semibold">Jane Doe</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mx-4 mb-8 w-full md:w-1/3" data-aos="fade-up" data-aos-delay="200">
            <blockquote className="text-lg italic mb-4">“The features are user-friendly and the matchmaking is spot on!”</blockquote>
            <p className="font-semibold">John Smith</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">Ready to Find Your Match?</h2>
        <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="200">Download our app and start your journey to find your perfect match today!</p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-purple-700 transition" data-aos="zoom-in">Download Now</button>
      </section>
    </div>
  );
}

export default MatrimonyApp;
