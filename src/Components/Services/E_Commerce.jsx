// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// import e_commerce1 from "../Assets/e_commerce1.avif";
// import newImage from "../Assets/newImage.avif"; // New image for the updated layout

// const EcommerceAppPage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200 }); // Initialize AOS animations
//   }, []);

//   return (
//     <div className="bg-gray-900 text-gray-100 min-h-screen">
//       {/* Hero Section with Glittery Background */}
//       <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" style={{ backgroundImage: "url('https://example.com/ecommerce-background.jpg')" }}>
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
//         <div className="absolute inset-0 bg-[url('https://example.com/glitter-bg.png')] bg-cover bg-center opacity-30"></div> {/* Glitter effect */}
//         <div className="relative z-10 flex flex-col items-center">
//           <img src={e_commerce1} alt="E-commerce" className="w-full h-80 object-contain mb-6" data-aos="zoom-in" />
//           <h1 className="text-lg md:text-4xl font-extrabold text-white mb-4" data-aos="fade-up">Revolutionize Your Online Store</h1>
//           <p className="text-sm md:text-xl text-gray-300 max-w-3xl mb-6" data-aos="fade-up" data-aos-delay="200">
//             Empower your business with our next-gen e-commerce solutions, designed to bring modern shopping experiences to life.
//           </p>
//           <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">Start Now</button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-gray-800">
//         <div className="container mx-auto text-center">
//           <h2 className="text-lg font-bold mb-12 text-white" data-aos="fade-up">Why Choose Our E-Commerce Solutions?</h2>
//           <div className="flex flex-col md:flex-row items-center justify-center gap-12">
//             <div className="md:w-1/2 text-center md:text-left" data-aos="fade-right">
//               <h3 className="text-sm font-semibold text-white mb-4">Unmatched Flexibility and Innovation</h3>
//               <p className="text-gray-300 mb-6">
//                 Our e-commerce solutions are tailored to meet your specific needs with innovative features that adapt as your business grows. From personalized user experiences to cutting-edge technologies, we offer a comprehensive package designed to boost your online presence.
//               </p>
//               <h3 className="text-lg font-semibold text-white mb-4">Comprehensive Support</h3>
//               <p className="text-gray-300">
//                 Our dedicated support team is available 24/7 to assist you with any issues or questions you may have. We ensure that your platform runs smoothly and efficiently, allowing you to focus on growing your business.
//               </p>
//             </div>
//             <div className="md:w-1/2">
//               <img src={newImage} alt="E-commerce Feature" className="w-full h-auto object-cover" data-aos="fade-left" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="py-16 bg-gray-900">
//         <div className="container mx-auto text-center">
//           <h2 className="text-lg font-bold mb-12 text-white" data-aos="fade-up">How It Works</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//             <div className="bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="fade-right">
//               <h3 className="text-sm font-semibold text-white mb-2">Step 1: Consultation</h3>
//               <p className="text-gray-300">We start by understanding your unique needs and objectives to create a tailored strategy for your e-commerce platform.</p>
//             </div>
//             <div className="bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
//               <h3 className="text-sm font-semibold text-white mb-2">Step 2: Design & Development</h3>
//               <p className="text-gray-300">Our team designs and develops a customized solution, incorporating the latest technologies and best practices to ensure top performance.</p>
//             </div>
//             <div className="bg-gray-800 p-8 rounded-lg shadow-lg" data-aos="fade-left" data-aos-delay="400">
//               <h3 className="text-sm font-semibold text-white mb-2">Step 3: Launch & Support</h3>
//               <p className="text-gray-300">We guide you through a smooth launch and provide ongoing support to ensure your platform's success and longevity.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-16 bg-gray-900 text-center">
//         <div className="container mx-auto">
//           <h2 className="text-lg font-bold mb-6 text-white" data-aos="fade-up">Ready to Start Your E-Commerce Journey?</h2>
//           <p className="text-sm mb-8 text-gray-300" data-aos="fade-up" data-aos-delay="200">Contact us now to transform your business with a customized e-commerce app.</p>
//           <button className="bg-customBlue hover:bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">Contact Us</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default EcommerceAppPage;


import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import e_commerce1 from "../Assets/e_commerce1.avif"

const EcommerceAppPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS animations
  }, []);

  return (
    <div className="bg-slate-50 text-gray-700 min-h-screen">
      {/* Hero Section with Glittery Background */}
      <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" style={{ backgroundImage: "url('https://example.com/ecommerce-background.jpg')" }}>
        <div className="absolute inset-0 bg-slate-50"></div>
        {/* <div className="absolute inset-0 bg-[url('https://example.com/glitter-bg.png')] bg-cover bg-center opacity-30"></div> Glitter effect */}
        <div className="relative z-10 flex flex-col items-center">
          <img src={e_commerce1} alt="E-commerce" className="gray-image w-full h-80 object-contain mb-6" data-aos="zoom-in" />
          <h1 className="text-lg md:text-lg font-extrabold text-gray-700 mb-4" data-aos="fade-up">Revolutionize Your Online Store</h1>
          <p className="text-sm md:text-sm text-gray-700 max-w-3xl mb-6" data-aos="fade-up" data-aos-delay="200">
            Empower your business with our next-gen e-commerce solutions, designed to bring modern shopping experiences to life.
          </p>
          {/* <Link to="/contact"> <button className=" text-sm bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Start Now</button></Link> */}
          </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-lg font-bold mb-12 text-gray-700" data-aos="fade-up">Why Choose Our E-Commerce Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-slate-50 p-8 rounded-lg shadow-lg" data-aos="fade-up">
              {/* <img src="https://example.com/icon1.svg" alt="Feature 1" className="w-16 h-16 mx-auto mb-4" /> */}
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Stunning User Experience</h3>
              <p className="text-gray-700">Beautiful, intuitive design that creates an effortless shopping experience.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              {/* <img src="https://example.com/icon2.svg" alt="Feature 2" className="w-16 h-16 mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Secure Payments</h3>
              <p className="text-gray-700">End-to-end encryption to ensure your customers' payment data stays safe.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
              {/* <img src="https://example.com/icon3.svg" alt="Feature 3" className="w-16 h-16 mx-auto mb-4" /> */}
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Scalable Design</h3>
              <p className="text-gray-700">Flexible design to grow alongside your business as it scales up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section with Alternating Layout */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-lg font-bold mb-12 text-gray-700" data-aos="fade-up">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-slate-50 p-8 rounded-lg shadow-lg" data-aos="fade-right">
              {/* <img src="https://example.com/step1.svg" alt="Step 1" className="w-16 h-16 mx-auto mb-4" /> */}
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Consultation</h3>
              <p className="text-gray-700">We collaborate with you to identify your needs and set a clear roadmap.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
              {/* <img src="https://example.com/step2.svg" alt="Step 2" className="w-16 h-16 mx-auto mb-4" /> */}
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Design & Development</h3>
              <p className="text-gray-700">We create a tailor-made app solution with innovative, scalable features.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg shadow-lg" data-aos="fade-left" data-aos-delay="400">
              {/* <img src="https://example.com/step3.svg" alt="Step 3" className="w-16 h-16 mx-auto mb-4" /> */}
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Launch & Support</h3>
              <p className="text-gray-700">We ensure a smooth launch and provide ongoing support to keep you ahead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-slate-50 text-center">
        <div className="container mx-auto">
          <p className="text-sm mb-8 text-gray-700" data-aos="fade-up" data-aos-delay="200">Contact us now to transform your business with a customized e-commerce app.</p>
          <Link to="/contact"> <button className=" text-sm bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Contact Us</button></Link>
          </div>
      </section>
    </div>
  );
};

export default EcommerceAppPage;