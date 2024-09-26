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

import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import e_commerce1 from "../Assets/e_commerce1.avif";

const EcommerceAppPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS animations
  }, []);

  return (
    <div className="bg-slate-100 text-gray-700 min-h-screen">
      {/* Hero Section with Glittery Background */}
      <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" style={{ backgroundImage: "url('https://example.com/ecommerce-background.jpg')" }}>
        <div className="absolute inset-0 bg-slate-50 opacity-75"></div>
        <div className="relative z-10 flex flex-col items-center">
          <img src={e_commerce1} alt="E-commerce" className="gray-image w-full h-80 object-contain mb-6" data-aos="zoom-in" />
          <h1 className="text-lg font-extrabold text-gray-800 mb-4" data-aos="fade-up">Transform Your Online Store Experience</h1>
          <p className="text-base text-gray-600 max-w-2xl mb-6" data-aos="fade-up" data-aos-delay="200">
            Unlock the potential of your business with our cutting-edge e-commerce solutions designed for modern consumers.
          </p>
          <Link to="/contact">
            <button className="text-sm bg-customBlue text-white px-1 py-3 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Get Started Today</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-12 text-gray-800" data-aos="fade-up">Why Our E-Commerce Solutions Stand Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-4" data-aos="fade-up">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">User-Centric Design</h3>
              <p className="text-gray-600">Engaging and intuitive interfaces crafted for a seamless shopping journey.</p>
            </div>
            <div className="p-4" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Robust Security</h3>
              <p className="text-gray-600">Advanced encryption methods to keep customer information secure.</p>
            </div>
            <div className="p-4" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Adaptive Scalability</h3>
              <p className="text-gray-600">Solutions designed to grow with your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-12 text-gray-800" data-aos="fade-up">Our Process Simplified</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-4" data-aos="fade-right">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Step 1: Consultation</h3>
              <p className="text-gray-600">We listen to your goals and create a tailored action plan.</p>
            </div>
            <div className="p-4" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Step 2: Development</h3>
              <p className="text-gray-600">Our team builds a custom solution aligned with your business vision.</p>
            </div>
            <div className="p-4" data-aos="fade-left" data-aos-delay="400">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Step 3: Launch</h3>
              <p className="text-gray-600">We support your launch and offer continuous improvement to optimize performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-slate-50 text-center">
        <div className="container mx-auto">
          <p className="text-lg mb-8 text-gray-700" data-aos="fade-up" data-aos-delay="200">Reach out to us today and elevate your business with a bespoke e-commerce application.</p>
          <Link to="/contact">
            <button className="text-lg bg-customBlue text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Contact Us</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EcommerceAppPage;
