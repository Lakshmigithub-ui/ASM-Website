import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const EcommerceAppPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with smooth animations
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-6xl font-bold text-white mb-6" data-aos="fade-up">Transform Your Business with Cutting-Edge E-Commerce Solutions</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">Unlock the potential of online retail with our innovative app development services. Seamless integration, modern design, and powerful features.</p>
          <button className="bg-teal-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">Features of Our E-Commerce Solutions</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-64 flex-none" data-aos="fade-up">
              <img src="https://example.com/feature1-icon.svg" alt="Feature 1" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">User-Friendly Interface</h3>
              <p className="text-gray-300">Enjoy a seamless shopping experience with an intuitive and user-friendly design.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-64 flex-none" data-aos="fade-up" data-aos-delay="200">
              <img src="https://example.com/feature2-icon.svg" alt="Feature 2" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Secure Payment Gateway</h3>
              <p className="text-gray-300">Ensure safe and secure transactions with our reliable payment integration.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-64 flex-none" data-aos="fade-up" data-aos-delay="400">
              <img src="https://example.com/feature3-icon.svg" alt="Feature 3" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Customizable Design</h3>
              <p className="text-gray-300">Tailor the look and feel of your e-commerce app to match your brand’s identity.</p>
            </div>
            {/* Add more feature blocks as needed */}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">How It Works</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-64 flex-none" data-aos="fade-up">
              <img src="https://example.com/step1-icon.svg" alt="Step 1" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Step 1: Consultation</h3>
              <p className="text-gray-300">Discuss your business needs with our experts to define your requirements.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-64 flex-none" data-aos="fade-up" data-aos-delay="200">
              <img src="https://example.com/step2-icon.svg" alt="Step 2" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Step 2: Design & Development</h3>
              <p className="text-gray-300">Our team will create a custom e-commerce solution tailored to your business.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-64 flex-none" data-aos="fade-up" data-aos-delay="400">
              <img src="https://example.com/step3-icon.svg" alt="Step 3" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Step 3: Launch & Support</h3>
              <p className="text-gray-300">We assist with the launch and provide ongoing support to ensure your success.</p>
            </div>
            {/* Add more steps as needed */}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full sm:w-1/3" data-aos="fade-up">
              <img src="https://example.com/client1.jpg" alt="Client 1" className="w-16 h-16 mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold mb-2 text-white">John Doe</h3>
              <p className="text-gray-300">"The e-commerce app development exceeded our expectations. The user experience is top-notch and the support has been fantastic."</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full sm:w-1/3" data-aos="fade-up" data-aos-delay="200">
              <img src="https://example.com/client2.jpg" alt="Client 2" className="w-16 h-16 mx-auto mb-4 rounded-full" />
              <h3 className="text-xl font-semibold mb-2 text-white">Jane Smith</h3>
              <p className="text-gray-300">"Our online store has seen incredible growth thanks to the innovative features and seamless integration provided."</p>
            </div>
            {/* Add more client testimonials as needed */}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-900 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white" data-aos="fade-up">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 text-gray-300" data-aos="fade-up" data-aos-delay="200">Contact us today to start your journey with a cutting-edge e-commerce app tailored to your needs.</p>
          <button className="bg-teal-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default EcommerceAppPage;
