// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

// const EcommerceAppPage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200 }); // Initialize AOS with smooth animations
//   }, []);

//   return (
//     <div className="bg-gray-900 text-gray-100 min-h-screen">
//       {/* Hero Section with Glittery Background */}
//       <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" style={{ backgroundImage: "url('https://example.com/hero-image.jpg')" }}>
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
//         <div className="absolute inset-0 bg-[url('https://example.com/glitter-pattern.png')] opacity-30"></div> {/* Glitter effect */}
//         <div className="relative z-10 max-w-4xl px-6">
//           <img src="https://example.com/ecommerce-icon.png" alt="Ecommerce Icon" className="w-24 h-24 mx-auto mb-4" data-aos="zoom-in" />
//           <h1 className="text-6xl font-bold text-white mb-6" data-aos="fade-up">Transform Your Business with Cutting-Edge E-Commerce Solutions</h1>
//           <p className="text-xl md:text-2xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">Unlock the potential of online retail with our innovative app development services. Seamless integration, modern design, and powerful features.</p>
//           <button className="bg-teal-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">Get Started</button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-gray-800">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">Features of Our E-Commerce Solutions</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gray-700 p-6 rounded-lg shadow-lg" data-aos="fade-up">
//               <img src="https://example.com/feature1-icon.svg" alt="Feature 1" className="w-16 h-16 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2 text-white">User-Friendly Interface</h3>
//               <p className="text-gray-300">Enjoy a seamless shopping experience with an intuitive and user-friendly design.</p>
//             </div>
//             <div className="bg-gray-700 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
//               <img src="https://example.com/feature2-icon.svg" alt="Feature 2" className="w-16 h-16 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2 text-white">Secure Payment Gateway</h3>
//               <p className="text-gray-300">Ensure safe and secure transactions with our reliable payment integration.</p>
//             </div>
//             <div className="bg-gray-700 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
//               <img src="https://example.com/feature3-icon.svg" alt="Feature 3" className="w-16 h-16 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2 text-white">Customizable Design</h3>
//               <p className="text-gray-300">Tailor the look and feel of your e-commerce app to match your brand’s identity.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section with Grid Layout */}
//       <section className="py-16 bg-gray-900">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">How It Works</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up">
//               <img src="https://example.com/step1-icon.svg" alt="Step 1" className="w-16 h-16 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2 text-white">Step 1: Consultation</h3>
//               <p className="text-gray-300">Discuss your business needs with our experts to define your requirements.</p>
//             </div>
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
//               <img src="https://example.com/step2-icon.svg" alt="Step 2" className="w-16 h-16 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2 text-white">Step 2: Design & Development</h3>
//               <p className="text-gray-300">Our team will create a custom e-commerce solution tailored to your business.</p>
//             </div>
//             <div className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
//               <img src="https://example.com/step3-icon.svg" alt="Step 3" className="w-16 h-16 mx-auto mb-4" />
//               <h3 className="text-xl font-semibold mb-2 text-white">Step 3: Launch & Support</h3>
//               <p className="text-gray-300">We assist with the launch and provide ongoing support to ensure your success.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Client Testimonials Section */}
//       <section className="py-16 bg-gray-800">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">What Our Clients Say</h2>
//           <div className="flex flex-wrap justify-center gap-8">
//             <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full sm:w-1/3" data-aos="fade-up">
//               <img src="https://example.com/client1.jpg" alt="Client 1" className="w-16 h-16 mx-auto mb-4 rounded-full" />
//               <h3 className="text-xl font-semibold mb-2 text-white">John Doe</h3>
//               <p className="text-gray-300">"The e-commerce app development exceeded our expectations. The user experience is top-notch and the support has been fantastic."</p>
//             </div>
//             <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-full sm:w-1/3" data-aos="fade-up" data-aos-delay="200">
//               <img src="https://example.com/client2.jpg" alt="Client 2" className="w-16 h-16 mx-auto mb-4 rounded-full" />
//               <h3 className="text-xl font-semibold mb-2 text-white">Jane Smith</h3>
//               <p className="text-gray-300">"Our online store has seen incredible growth thanks to the innovative features and seamless integration provided."</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-16 bg-gray-900 text-center">
//         <div className="container mx-auto">
//           <h2 className="text-4xl font-bold mb-6 text-white" data-aos="fade-up">Ready to Transform Your Business?</h2>
//           <p className="text-lg mb-8 text-gray-300" data-aos="fade-up" data-aos-delay="200">Contact us today to start your journey with a cutting-edge e-commerce app tailored to your needs.</p>
//           <button className="bg-teal-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">Contact Us</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default EcommerceAppPage;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const EcommerceAppPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS animations
  }, []);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section with Glittery Background */}
      <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" style={{ backgroundImage: "url('https://example.com/ecommerce-background.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
        <div className="absolute inset-0 bg-[url('https://example.com/glitter-bg.png')] bg-cover bg-center opacity-30"></div> {/* Glitter effect */}
        <div className="relative z-10 flex flex-col items-center">
          <img src="https://example.com/ecommerce-image.png" alt="E-commerce" className="w-40 h-40 object-contain mb-6" data-aos="zoom-in" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4" data-aos="fade-up">Revolutionize Your Online Store</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-6" data-aos="fade-up" data-aos-delay="200">
            Empower your business with our next-gen e-commerce solutions, designed to bring modern shopping experiences to life.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">Start Now</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">Why Choose Our E-Commerce Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg" data-aos="fade-up">
              <img src="https://example.com/icon1.svg" alt="Feature 1" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Stunning User Experience</h3>
              <p className="text-gray-300">Beautiful, intuitive design that creates an effortless shopping experience.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <img src="https://example.com/icon2.svg" alt="Feature 2" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Secure Payments</h3>
              <p className="text-gray-300">End-to-end encryption to ensure your customers' payment data stays safe.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <img src="https://example.com/icon3.svg" alt="Feature 3" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Scalable Design</h3>
              <p className="text-gray-300">Flexible design to grow alongside your business as it scales up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section with Alternating Layout */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="fade-right">
              <img src="https://example.com/step1.svg" alt="Step 1" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Consultation</h3>
              <p className="text-gray-300">We collaborate with you to identify your needs and set a clear roadmap.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <img src="https://example.com/step2.svg" alt="Step 2" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Design & Development</h3>
              <p className="text-gray-300">We create a tailor-made app solution with innovative, scalable features.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="fade-left" data-aos-delay="400">
              <img src="https://example.com/step3.svg" alt="Step 3" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Launch & Support</h3>
              <p className="text-gray-300">We ensure a smooth launch and provide ongoing support to keep you ahead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg" data-aos="zoom-in">
              <img src="https://example.com/client1.jpg" alt="Client 1" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">John Doe</h3>
              <p className="text-gray-300">"Our e-commerce app has been a game-changer, allowing us to scale effortlessly and increase conversions."</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-lg shadow-lg" data-aos="zoom-in" data-aos-delay="200">
              <img src="https://example.com/client2.jpg" alt="Client 2" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Jane Smith</h3>
              <p className="text-gray-300">"A seamless, secure shopping experience has earned us rave reviews from our customers."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-900 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-white" data-aos="fade-up">Ready to Start Your E-Commerce Journey?</h2>
          <p className="text-lg mb-8 text-gray-300" data-aos="fade-up" data-aos-delay="200">Contact us now to transform your business with a customized e-commerce app.</p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default EcommerceAppPage;
