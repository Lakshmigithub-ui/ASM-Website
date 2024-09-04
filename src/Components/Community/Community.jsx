// import React from 'react';
// import './Community.css'; 
// import web_development from "../Assets/web_development.avif";
// import digital_marketing from "../Assets/digital_marketing.jpg";
// import billing_solutions from "../Assets/billing-solutions.avif";

// const Community = () => {
//   return (
//     <div className="services-container">
//       <h1 className="services-title">Manage your entire community  </h1>
//       <h1 className="services-title">in a single system</h1>
//       <p>Who is Nextcent suitable for?</p>
//       <div className="services-boxes">
//         <div className="service-box">
//           <img src={web_development} alt="Web Development" className="service-logo" />
//           <h2>Web Development</h2>
//           <p>We create responsive and high-performance websites tailored to your business needs. From design to deployment, our team ensures your web presence stands out.</p>
//         </div>
//         <div className="service-box">
//           <img src={digital_marketing} alt="Digital Marketing" className="service-logo" />
//           <h2>Digital Marketing</h2>
//           <p>Boost your online presence with our comprehensive digital marketing services. We offer SEO, social media management, and targeted advertising to grow your audience.</p>
//         </div>
//         <div className="service-box">
//           <img src={billing_solutions} alt="Billing Solutions" className="service-logo" />
//           <h2>Billing Solutions</h2>
//           <p>Streamline your billing process with our innovative solutions. We provide easy-to-use billing systems that simplify invoicing, payments, and financial reporting.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Community;

import React from 'react';
import web_development from "../Assets/web_development.avif";
import digital_marketing from "../Assets/digital_marketing.jpg";
import billing_solutions from "../Assets/billing-solutions.avif";

const Community = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Manage your entire community</h1>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">in a single system</h1>
        <p className="text-lg mb-12">Who is Nextcent suitable for?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-box bg-gray-800 p-6 rounded-lg flex flex-col items-center">
            <img src={web_development} alt="Web Development" className="w-32 h-32 object-cover mb-4 rounded-full border-2 border-gray-700" />
            <h2 className="text-xl font-semibold mb-2">Web Development</h2>
            <p className="text-center">We create responsive and high-performance websites tailored to your business needs. From design to deployment, our team ensures your web presence stands out.</p>
          </div>
          <div className="service-box bg-gray-800 p-6 rounded-lg flex flex-col items-center">
            <img src={digital_marketing} alt="Digital Marketing" className="w-32 h-32 object-cover mb-4 rounded-full border-2 border-gray-700" />
            <h2 className="text-xl font-semibold mb-2">Digital Marketing</h2>
            <p className="text-center">Boost your online presence with our comprehensive digital marketing services. We offer SEO, social media management, and targeted advertising to grow your audience.</p>
          </div>
          <div className="service-box bg-gray-800 p-6 rounded-lg flex flex-col items-center">
            <img src={billing_solutions} alt="Billing Solutions" className="w-32 h-32 object-cover mb-4 rounded-full border-2 border-gray-700" />
            <h2 className="text-xl font-semibold mb-2">Billing Solutions</h2>
            <p className="text-center">Streamline your billing process with our innovative solutions. We provide easy-to-use billing systems that simplify invoicing, payments, and financial reporting.</p>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Community;

