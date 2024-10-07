// import React, { useEffect } from 'react';
// import {Link} from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// import e_commerce1 from "../Assets/e_commerce1.avif"

// const EcommerceAppPage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200 }); // Initialize AOS animations
//   }, []);

//   return (
//     <div className="bg-slate-50 text-gray-700 min-h-screen">
//       {/* Hero Section with Glittery Background */}
//       <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" style={{ backgroundImage: "url('https://example.com/ecommerce-background.jpg')" }}>
//         <div className="absolute inset-0 bg-slate-50"></div>
//         {/* <div className="absolute inset-0 bg-[url('https://example.com/glitter-bg.png')] bg-cover bg-center opacity-30"></div> Glitter effect */}
//         <div className="relative z-10 flex flex-col items-center">
//           <img src={e_commerce1} alt="E-commerce" className="gray-image w-full h-80 object-contain mb-6" data-aos="zoom-in" />
//           <h1 className="text-lg md:text-lg font-extrabold text-gray-700 mb-4" data-aos="fade-up">Revolutionize Your Online Store</h1>
//           <p className="text-sm md:text-sm text-gray-700 max-w-3xl mb-6" data-aos="fade-up" data-aos-delay="200">
//             Empower your business with our next-gen e-commerce solutions, designed to bring modern shopping experiences to life.
//           </p>
//           {/* <Link to="/contact"> <button className=" text-sm bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Start Now</button></Link> */}
//           </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-slate-50">
//         <div className="container mx-auto text-center">
//           <h2 className="text-lg font-bold mb-12 text-gray-700" data-aos="fade-up">Why Choose Our E-Commerce Solutions?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             <div className="bg-slate-50 p-8 rounded-lg shadow-lg" data-aos="fade-up">
//               {/* <img src="https://example.com/icon1.svg" alt="Feature 1" className="w-16 h-16 mx-auto mb-4" /> */}
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Stunning User Experience</h3>
//               <p className="text-gray-700">Beautiful, intuitive design that creates an effortless shopping experience.</p>
//             </div>
//             <div className="bg-slate-50 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
//               {/* <img src="https://example.com/icon2.svg" alt="Feature 2" className="w-16 h-16 mx-auto mb-4" /> */}
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">Secure Payments</h3>
//               <p className="text-gray-700">End-to-end encryption to ensure your customers' payment data stays safe.</p>
//             </div>
//             <div className="bg-slate-50 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
//               {/* <img src="https://example.com/icon3.svg" alt="Feature 3" className="w-16 h-16 mx-auto mb-4" /> */}
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">Scalable Design</h3>
//               <p className="text-gray-700">Flexible design to grow alongside your business as it scales up.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section with Alternating Layout */}
//       <section className="py-16 bg-slate-50">
//         <div className="container mx-auto text-center">
//           <h2 className="text-lg font-bold mb-12 text-gray-700" data-aos="fade-up">How It Works</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             <div className="bg-slate-50 p-8 rounded-lg shadow-lg" data-aos="fade-right">
//               {/* <img src="https://example.com/step1.svg" alt="Step 1" className="w-16 h-16 mx-auto mb-4" /> */}
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Consultation</h3>
//               <p className="text-gray-700">We collaborate with you to identify your needs and set a clear roadmap.</p>
//             </div>
//             <div className="bg-slate-50 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
//               {/* <img src="https://example.com/step2.svg" alt="Step 2" className="w-16 h-16 mx-auto mb-4" /> */}
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Design & Development</h3>
//               <p className="text-gray-700">We create a tailor-made app solution with innovative, scalable features.</p>
//             </div>
//             <div className="bg-slate-50 p-8 rounded-lg shadow-lg" data-aos="fade-left" data-aos-delay="400">
//               {/* <img src="https://example.com/step3.svg" alt="Step 3" className="w-16 h-16 mx-auto mb-4" /> */}
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Launch & Support</h3>
//               <p className="text-gray-700">We ensure a smooth launch and provide ongoing support to keep you ahead.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-16 bg-slate-50 text-center">
//         <div className="container mx-auto">
//           <p className="text-sm mb-8 text-gray-700" data-aos="fade-up" data-aos-delay="200">Contact us now to transform your business with a customized e-commerce app.</p>
//           <Link to="/contact"> <button className=" text-sm bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Contact Us</button></Link>
//           </div>
//       </section>
//     </div>
//   );
// };

// export default EcommerceAppPage;

// import React, { useEffect } from 'react';
// import { Link } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// import e_commerce1 from "../Assets/e_commerce1.avif";

// const EcommerceAppPage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200 }); // Initialize AOS animations
//   }, []);

//   return (
//     <div className="bg-slate-100 text-gray-700 min-h-screen">
//       {/* Hero Section with Glittery Background */}
//       <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" style={{ backgroundImage: "url('https://example.com/ecommerce-background.jpg')" }}>
//         <div className="absolute inset-0 bg-slate-50 opacity-75"></div>
//         <div className="relative z-10 flex flex-col items-center">
//           <img src={e_commerce1} alt="E-commerce" className="gray-image w-full h-80 object-contain mb-6" data-aos="zoom-in" />
//           <h1 className="text-lg font-extrabold text-gray-800 mb-4" data-aos="fade-up">Transform Your Online Store Experience</h1>
//           <p className="text-base text-gray-600 max-w-2xl mb-6" data-aos="fade-up" data-aos-delay="200">
//             Unlock the potential of your business with our cutting-edge e-commerce solutions designed for modern consumers.
//           </p>
//           <Link to="/contact">
//             <button className="text-sm bg-customBlue text-white px-1 py-3 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Get Started Today</button>
//           </Link>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-slate-50">
//         <div className="container mx-auto text-center">
//           <h2 className="text-2xl font-bold mb-12 text-gray-800" data-aos="fade-up">Why Our E-Commerce Solutions Stand Out</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             <div className="p-4" data-aos="fade-up">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">User-Centric Design</h3>
//               <p className="text-gray-600">Engaging and intuitive interfaces crafted for a seamless shopping journey.</p>
//             </div>
//             <div className="p-4" data-aos="fade-up" data-aos-delay="200">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Robust Security</h3>
//               <p className="text-gray-600">Advanced encryption methods to keep customer information secure.</p>
//             </div>
//             <div className="p-4" data-aos="fade-up" data-aos-delay="400">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Adaptive Scalability</h3>
//               <p className="text-gray-600">Solutions designed to grow with your business needs.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-16 bg-slate-50">
//         <div className="container mx-auto text-center">
//           <h2 className="text-2xl font-bold mb-12 text-gray-800" data-aos="fade-up">Our Process Simplified</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             <div className="p-4" data-aos="fade-right">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Step 1: Consultation</h3>
//               <p className="text-gray-600">We listen to your goals and create a tailored action plan.</p>
//             </div>
//             <div className="p-4" data-aos="fade-up" data-aos-delay="200">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Step 2: Development</h3>
//               <p className="text-gray-600">Our team builds a custom solution aligned with your business vision.</p>
//             </div>
//             <div className="p-4" data-aos="fade-left" data-aos-delay="400">
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">Step 3: Launch</h3>
//               <p className="text-gray-600">We support your launch and offer continuous improvement to optimize performance.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-16 bg-slate-50 text-center">
//         <div className="container mx-auto">
//           <p className="text-lg mb-8 text-gray-700" data-aos="fade-up" data-aos-delay="200">Reach out to us today and elevate your business with a bespoke e-commerce application.</p>
//           <Link to="/contact">
//             <button className="text-lg bg-customBlue text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Contact Us</button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default EcommerceAppPage;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ecommerceImage from "../Assets/e_commerce1.avif"; // Image for the E-commerce service
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCreditCard, faTruck } from '@fortawesome/free-solid-svg-icons';

const EcommerceService = () => {
  useEffect(() => {
    AOS.init({
      disable: () => window.innerWidth < 768, // Disable AOS on small screens
    });
  }, []);

  return (
    <div className="bg-slate-100 text-gray-700 min-h-screen p-8">
      {/* Main Section */}
      <section className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-up">
          <h1 className="text-3xl text-gray-600 font-bold mb-4">Empower Your Business with E-commerce Solutions</h1>
          <p className="text-base mb-6">
            Our cutting-edge e-commerce services will transform your business, providing seamless shopping experiences for your customers. 
            We take care of everything from store design to secure payment integration.
          </p>
          <ul className="text-base list-none mb-8">
            <li className="mb-3 flex items-center">
              <FontAwesomeIcon icon={faShoppingCart} className="mr-3 " />
              Custom E-commerce Store Development
            </li>
            <li className="mb-3 flex items-center">
              <FontAwesomeIcon icon={faCreditCard} className="mr-3 " />
              Secure Payment Gateway Integration
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faTruck} className="mr-3 " />
              Fast and Reliable Shipping Solutions
            </li>
          </ul>
          <Link to="/contact">
            <button className="text-sm tracking-wider bg-customBlue text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-400 transition-transform transform hover:scale-105">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2" data-aos="fade-down">
          <img
            src={ecommerceImage}
            alt="E-commerce"
            className="gray-image rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </section>

      {/* Information Boxes Section */}
      <section className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 text-left" data-aos="fade-up">
        <div className="bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-3">Tailored E-commerce Design</h2>
          <p className="text-sm mb-4">
            Our designs are crafted specifically to meet the branding and functional needs of your business, ensuring a unique online shopping experience.
          </p>
        </div>
        <div className="bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-3">SEO-Optimized Platforms</h2>
          <p className="text-sm mb-4">
            We build SEO-friendly platforms that enhance visibility and drive traffic to your store, helping you rank higher on search engines.
          </p>
        </div>
        <div className="bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-3">Mobile-Friendly Shopping</h2>
          <p className="text-sm mb-4">
            We ensure a mobile-first design approach, offering seamless shopping experiences across all devices.
          </p>
        </div>
        <div className="bg-gray-100 text-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-3">Advanced Analytics</h2>
          <p className="text-sm mb-4">
            Monitor and improve performance with advanced analytics integration, giving you insights into customer behavior and store performance.
          </p>
        </div>
      </section>
    </div>
  );
};

export default EcommerceService;
