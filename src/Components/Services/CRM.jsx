// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// import './CRM.css'; // Custom CSS for additional styling
// import crm1 from "../Assets/crm1.avif";
// import crmlogo1 from "../Assets/crmlogo1.avif";
// import crmlogo2 from "../Assets/crmlogo2.avif";
// import crmlogo3 from "../Assets/crmlogo3.avif";

// const CRMPage = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200 }); // Initialize AOS with smooth animations
//   }, []);

//   return (
//     <div className="bg-gray-900 text-gray-100 min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-cover bg-center h-screen flex items-center justify-center text-center" style={{ backgroundImage: "url('path/to/your/hero-background.jpg')" }}>
//         <div className="absolute inset-0 bg-black opacity-60"></div>
//         <div className="relative z-10 max-w-4xl px-6">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" data-aos="fade-up">Transform Your CRM Experience</h1>
//           <p className="text-lg md:text-xl text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">Empower your business with our innovative CRM solutions that streamline your customer interactions.</p>
//           <button className="bg-teal-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">Get Started</button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-gray-800">
//         <div className="container mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">Features That Drive Success</h2>
//           <div className="flex flex-wrap justify-center">
//             <div className="w-full md:w-1/3 p-4" data-aos="fade-right">
//               <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition-transform transform hover:scale-105">
//                 <img src={crmlogo1} alt="Feature 1" className="w-20 h-20 mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold mb-2 text-white">Seamless Integration</h3>
//                 <p className="text-gray-300">Effortlessly integrate with your existing tools and platforms for a smooth workflow.</p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/3 p-4" data-aos="fade-up">
//               <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition-transform transform hover:scale-105">
//                 <img src={crmlogo2} alt="Feature 2" className="w-20 h-20 mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold mb-2 text-white">Real-Time Analytics</h3>
//                 <p className="text-gray-300">Get instant insights into your sales and customer interactions with real-time analytics.</p>
//               </div>
//             </div>
//             <div className="w-full md:w-1/3 p-4" data-aos="fade-left">
//               <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition-transform transform hover:scale-105">
//                 <img src={crmlogo3} alt="Feature 3" className="w-20 h-20 mx-auto mb-4" />
//                 <h3 className="text-xl font-semibold mb-2 text-white">Customizable Dashboard</h3>
//                 <p className="text-gray-300">Tailor your dashboard to display the metrics and data most important to you.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Interactive Section */}
//       <section className="relative bg-gray-900 py-16">
//         <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-70"></div>
//         <div className="container mx-auto text-center relative z-10">
//           <h2 className="text-4xl font-bold mb-12 text-white" data-aos="fade-up">Interactive CRM Demo</h2>
//           <div className="flex flex-col lg:flex-row justify-center">
//             <div className="lg:w-1/2 p-4" data-aos="fade-right">
//               <img src={crm1} alt="CRM Demo" className="rounded-lg shadow-lg" />
//             </div>
//             <div className="lg:w-1/2 p-4" data-aos="fade-left">
//               <h3 className="text-2xl font-semibold mb-4 text-white">Experience the Power of Our CRM</h3>
//               <p className="text-gray-300 mb-4">Explore our interactive demo to see how our CRM can streamline your business processes and enhance customer interactions.</p>
//               <button className="bg-teal-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105">Try the Demo</button>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* Call to Action Section */}
//       <section className="text-center py-16">
//         <h2 className="text-4xl font-bold mb-6 text-white" data-aos="fade-up">Ready to Transform Your CRM?</h2>
//         <p className="text-lg mb-8 text-gray-300" data-aos="fade-up" data-aos-delay="200">Join countless businesses that have enhanced their operations with our cutting-edge CRM solutions.</p>
//         <button className="bg-teal-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105" data-aos="zoom-in">Get Started</button>
//       </section>
//     </div>
//   );
// }

// export default CRMPage;

import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faChartBar, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';
import crm1 from "../Assets/crm1.avif";

const CRMPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with smooth animations
  }, []);

  return (
    <div className="bg-slate-100 text-gray-700 min-h-screen py-16">
      {/* Main Section with Paragraph and Image */}
      <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left side: Big paragraph */}
        <div className="lg:w-1/2 px-6" data-aos="fade-up">
          <h1 className="text-lg md:text-lg font-bold mb-6 text-gray-700">Empower Your Business with Our CRM Solutions</h1>
          <p className="text-sm text-justify md:text-sm text-gray-700 leading-relaxed mb-6">
            Our CRM solutions are designed to transform the way you manage your customer relationships. 
            With seamless integration, real-time analytics, and a customizable dashboard, you’ll be able to gain 
            deeper insights into your customer interactions, streamline processes, and boost productivity. 
            Whether you're managing sales pipelines or enhancing customer support, our CRM offers a comprehensive 
            set of tools to help your business thrive. Join countless businesses that have revolutionized their operations 
            with our cutting-edge technology, and experience firsthand how we can help you grow.
          </p>
          <Link to="/contact"> <button className=" text-sm bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Contact Us</button></Link>
        </div>
        {/* Right side: Large Image */}
        <div className="lg:w-1/2 p-6" data-aos="fade-down">
          <img src={crm1} alt="CRM Software" className="gray-image rounded-lg shadow-lg w-3/4 h-auto" />
        </div>
      </section>

      {/* Additional Content with Icons */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-lg font-bold mb-12 text-gray-700" data-aos="fade-up">Why Choose Our CRM?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition" data-aos="fade-up" data-aos-delay="100">
              <FontAwesomeIcon icon={faSyncAlt} className="text-customBlue text-4xl mb-4" />
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Seamless Integration</h3>
              <p className="text-gray-700 text-sm">Easily integrate with existing tools like ERP, email, and customer support systems.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition" data-aos="fade-up" data-aos-delay="200">
              <FontAwesomeIcon icon={faChartBar} className="text-customBlue text-4xl mb-4" />
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Real-Time Analytics</h3>
              <p className="text-gray-700 text-sm ">Track performance and monitor key metrics with real-time data visualization.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition" data-aos="fade-up" data-aos-delay="300">
              <FontAwesomeIcon icon={faUsers} className="text-customBlue text-4xl mb-4" />
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Customer Management</h3>
              <p className="text-gray-700 text-sm">Manage customer data and interactions effectively with an intuitive interface.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition" data-aos="fade-up" data-aos-delay="400">
              <FontAwesomeIcon icon={faCog} className="text-customBlue text-4xl mb-4" />
              <h3 className="text-sm font-semibold text-white mb-2">Customizable Workflows</h3>
              <p className="text-gray-700 text-sm">Customize CRM workflows to match your business processes and goals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CRMPage;
