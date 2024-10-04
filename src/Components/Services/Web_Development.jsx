// import React, { useEffect} from 'react';
// import { Link } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// import web_development from "../Assets/inspire.PNG"
// import weblogo1 from "../Assets/weblogo1.avif";
// import weblogo2 from "../Assets/weblogo2.avif";
// import weblogo3 from "../Assets/weblogo3.avif";

// const WebAppDevelopment = () => {
//   useEffect(() => {
//     AOS.init({ 
//       disable: function() {
//         return window.innerWidth < 768; // Disable AOS on screens smaller than 768px
//       },

//      }); // Initialize AOS with smooth animations
//   }, []);

//   return (
//     <div className="bg-slate-100 text-gray-700 min-h-screen relative">
//       {/* Background Animation */}
//       {/* <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-r bg-slate-50 opacity-40" data-aos="fade" data-aos-duration="1500"></div>
//         <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?t=st=1726824958~exp=1726828558~hmac=915b83628d93ed09c5a67e1e6fa2c994b4da24f55c722cbdb7ff3a097f6d3c1c&w=740')] bg-cover bg-center opacity-60"></div>
//       </div> */}

//       {/* Main Content */}
//       <div className="relative z-10 p-8 lg:p-16">
//         {/* Hero Section */}
//         <section className="text-center mb-16">
//           <h1 className="text-xl font-bold mb-4" data-aos="fade-up">Elevate Your Business with Cutting-Edge Web Development</h1>
//           <p className="text-base mb-8" data-aos="fade-up" data-aos-delay="200">Our web development services specialize in creating dynamic, user-friendly websites tailored to your business needs. From sleek designs to seamless functionality, we ensure your website not only looks great but also delivers an exceptional user experience, helping you connect with your audience and drive business growth.</p>
//           {/* <button className=" text-sm bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">Get Started</button> */}
//         </section>

// {/* Key Features Section */}
// <section className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16 rounded-lg  ">
//   <div className="bg-slate-50 p-8 " data-aos="fade-up">
//     <h2 className="text-lg font-semibold mb-4">Why Choose Us?</h2>
//     <p className="text-base mb-4">
//       We blend creativity and technology to build web applications that are not only functional but also visually stunning.
//     </p>
//     <ul className="text-base list-disc list-inside space-y-2">
//       <li>Custom Solutions Tailored to Your Needs</li>
//       <li>Responsive and Mobile-Friendly Designs</li>
//       <li>Seamless Integration with Third-Party Services</li>
//       <li>Ongoing Support and Maintenance</li>
//       <li>Fast and Optimized Performance</li>
//       <li>Scalable Architecture for Future Growth</li>
//       <li>Enhanced Security and Data Protection</li>
//       <li>User-Centric Design for Better Engagement</li>
//     </ul>
//   </div>
//   <div className="flex items-center justify-center" data-aos="fade-down">
//     <img src={web_development} alt="Web Development" className=" gray-image w-11/12 h-auto " />
//   </div>
// </section>
//         {/* Features Section */}
//         <section className="bg-slate-50 p-8 rounded-lg shadow-lg mb-16" data-aos="fade-up">
//           <h2 className="text-lg font-semibold mb-6 text-center">Our Core Features</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="text-center" data-aos="fade-up">
//               <img src={weblogo1} alt="Feature 1" className="gray-image w-16 h-16 mx-auto mb-4" />
//               <h3 className="text-lg font-semibold mb-2">Innovative Design</h3>
//               <p className='text-sm'>Engage users with a unique and modern design tailored to your brand.</p>
//             </div>
//             <div className="text-center" data-aos="fade-up" data-aos-delay="200">
//               <img src={weblogo2} alt="Feature 2" className="gray-image w-16 h-16 mx-auto mb-4" />
//               <h3 className="text-sm font-semibold mb-2">Advanced Technology</h3>
//               <p className='text-sm'>Utilize the latest technology to ensure high performance and scalability.</p>
//             </div>
//             <div className="text-center" data-aos="fade-up" data-aos-delay="400">
//               <img src={weblogo3} alt="Feature 3" className="gray-image w-16 h-16 mx-auto mb-4" />
//               <h3 className="text-sm font-semibold mb-2">Dedicated Support</h3>
//               <p className='text-sm'>Receive ongoing support to keep your web app up-to-date and fully functional.</p>
//             </div>
//           </div>
//         </section>


//         {/* Call to Action Section */}
//         <footer className="text-center">
//           <h2 className="text-lg font-semibold mb-4" data-aos="fade-up">Ready to Take Your Web Presence to the Next Level?</h2>
//           <p className="text-sm mb-6">Contact us today to discuss your web app development needs and get a customized plan.</p>
//           <Link to="/contact"> <button className=" text-sm bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Contact Us</button></Link>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default WebAppDevelopment;

import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import web_development from "../Assets/inspire.PNG";
import weblogo1 from "../Assets/weblogo1.avif";
import weblogo2 from "../Assets/weblogo2.avif";
import weblogo3 from "../Assets/weblogo3.avif";
import contact from "../Assets/contact2.png"

const WebAppDevelopment = () => {
  useEffect(() => {
    AOS.init({
      disable: function() {
        return window.innerWidth < 768; // Disable AOS on screens smaller than 768px
      },
    }); // Initialize AOS with smooth animations
  }, []);

  return (
    <div className="bg-slate-100 text-gray-700 min-h-screen relative">
      {/* Main Content */}
      <div className="relative z-10 p-4 lg:p-8"> {/* Adjusted padding */}
        {/* Hero Section */}
        <section className="text-center mb-8"> {/* Reduced margin */}
          <h1 className="text-xl font-bold mb-2" data-aos="fade-up">Elevate Your Business with Cutting-Edge Web Development</h1>
          <p className="text-base mb-4" data-aos="fade-up" data-aos-delay="200">
            Our web development services specialize in creating dynamic, user-friendly websites tailored to your business needs. From sleek designs to seamless functionality, we ensure your website not only looks great but also delivers an exceptional user experience, helping you connect with your audience and drive business growth.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 rounded-lg"> {/* Reduced margin and gap */}
          <div className="bg-slate-50 p-4" data-aos="fade-up"> {/* Adjusted padding */}
            <h2 className="text-lg font-semibold mb-2">Why Choose Us?</h2>
            <p className="text-base mb-2">
              We blend creativity and technology to build web applications that are not only functional but also visually stunning.
            </p>
            <ul className="text-base list-disc list-inside space-y-1"> {/* Reduced space between list items */}
              <li>Custom Solutions Tailored to Your Needs</li>
              <li>Responsive and Mobile-Friendly Designs</li>
              <li>Seamless Integration with Third-Party Services</li>
              <li>Ongoing Support and Maintenance</li>
              <li>Fast and Optimized Performance</li>
              <li>Scalable Architecture for Future Growth</li>
              <li>Enhanced Security and Data Protection</li>
              <li>User-Centric Design for Better Engagement</li>
            </ul>
          </div>
          <div className="flex items-center justify-center" data-aos="fade-down">
            <img src={web_development} alt="Web Development" className="gray-image w-11/12 h-auto" />
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-slate-50 p-4 rounded-lg shadow-lg mb-8" data-aos="fade-up"> {/* Adjusted padding and margin */}
          <h2 className="text-lg font-semibold mb-4 text-center">Our Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center" data-aos="fade-up">
              <img src={weblogo1} alt="Feature 1" className="gray-image w-16 h-16 mx-auto mb-2" />
              <h3 className="text-lg font-semibold mb-1">Innovative Design</h3>
              <p className='text-sm'>Engage users with a unique and modern design tailored to your brand.</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <img src={weblogo2} alt="Feature 2" className="gray-image w-16 h-16 mx-auto mb-2" />
              <h3 className="text-sm font-semibold mb-1">Advanced Technology</h3>
              <p className='text-sm'>Utilize the latest technology to ensure high performance and scalability.</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <img src={weblogo3} alt="Feature 3" className="gray-image w-16 h-16 mx-auto mb-2" />
              <h3 className="text-sm font-semibold mb-1">Dedicated Support</h3>
              <p className='text-sm'>Receive ongoing support to keep your web app up-to-date and fully functional.</p>
            </div>
          </div>
        </section>

{/* Call to Action Section */}
<footer className="flex items-center justify-center p-8 bg-slate-50 rounded-lg shadow-lg mb-12">
  <img
    src={contact} // Replace with your small image source
    alt="Call to Action"
    className=" gray-image w-32 h-32 mr-4" // Adjust size as needed
    data-aos="fade-right" // Add AOS animation for the image
  />
  <div className="text-center">
    <h2 className="text-lg font-semibold mb-2" data-aos="fade-up">
      Ready to Take Your Web Presence to the Next Level?
    </h2>
    <p className="text-sm mb-4">
      Contact us today to discuss your web app development needs and get a customized plan.
    </p>
    <Link to="/contact">
      <button
        className="text-sm bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Contact Us
      </button>
    </Link>
  </div>
</footer>
      </div>
    </div>
  );
}

export default WebAppDevelopment;
