// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

// const WebAppDevelopment = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS
//   }, []);

//   return (
//     <div className="bg-gray-900 text-white min-h-screen p-8">
//       <header className="text-center mb-12">
//         <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">Exceptional Web App Development Services</h1>
//         <p className="text-lg" data-aos="fade-up">Transform your business with our innovative and tailored web app solutions.</p>
//       </header>

//       <section className="mb-12">
//         <div className="flex flex-col lg:flex-row items-center">
//           <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
//             <img src="path/to/your/image1.jpg" alt="Web App" className="w-full h-auto rounded-lg shadow-lg" />
//           </div>
//           <div className="lg:w-1/2 lg:pl-8" data-aos="fade-left">
//             <h2 className="text-3xl font-semibold mb-4">Our Expertise</h2>
//             <p className="text-lg mb-4">We build dynamic and high-performance web applications tailored to your business needs.</p>
//             <ul className="list-disc list-inside mb-4">
//               <li>Custom Web App Development</li>
//               <li>Responsive Design</li>
//               <li>Front-End and Back-End Solutions</li>
//               <li>Integration with Third-Party Services</li>
//               <li>Ongoing Support and Maintenance</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       <section className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12" data-aos="fade-up">
//         <h2 className="text-3xl font-semibold mb-4 text-center">Why Choose Us?</h2>
//         <p className="text-lg mb-4 text-center">We combine creativity and technology to deliver web applications that drive results and enhance user experience.</p>
//         <div className="flex flex-col lg:flex-row justify-around">
//           <div className="lg:w-1/3 mb-8 lg:mb-0 text-center">
//             <img src="path/to/your/icon1.png" alt="Icon 1" className="w-16 h-16 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold">Innovative Design</h3>
//             <p>Our designs are user-centric, ensuring a seamless and engaging experience.</p>
//           </div>
//           <div className="lg:w-1/3 mb-8 lg:mb-0 text-center">
//             <img src="path/to/your/icon2.png" alt="Icon 2" className="w-16 h-16 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold">Advanced Technology</h3>
//             <p>We utilize the latest technologies to build scalable and efficient web applications.</p>
//           </div>
//           <div className="lg:w-1/3 text-center">
//             <img src="path/to/your/icon3.png" alt="Icon 3" className="w-16 h-16 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold">Dedicated Support</h3>
//             <p>Our team provides ongoing support to ensure your web app remains up-to-date and functional.</p>
//           </div>
//         </div>
//       </section>

//       <section className="mb-12">
//         <div className="flex flex-col lg:flex-row items-center">
//           <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-left">
//             <img src="path/to/your/image2.jpg" alt="Web App Features" className="w-full h-auto rounded-lg shadow-lg" />
//           </div>
//           <div className="lg:w-1/2 lg:pl-8" data-aos="fade-right">
//             <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
//             <p className="text-lg mb-4">Our web applications come equipped with a range of features designed to meet your business needs.</p>
//             <ul className="list-disc list-inside mb-4">
//               <li>Seamless User Experience</li>
//               <li>Cross-Device Compatibility</li>
//               <li>High Performance and Security</li>
//               <li>Customizable and Scalable</li>
//               <li>Integration with Popular Platforms</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       <footer className="text-center">
//         <h2 className="text-2xl font-semibold mb-4" data-aos="fade-up">Ready to Elevate Your Web Presence?</h2>
//         <p className="text-lg mb-4">Contact us today to discuss your web app development needs and get a customized plan.</p>
//         <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition" data-aos="fade-up">Get in Touch</button>
//       </footer>
//     </div>
//   );
// }

// export default WebAppDevelopment;

import React, { useEffect} from 'react';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import web_development from "../Assets/inspire.PNG"
import weblogo1 from "../Assets/weblogo1.avif";
import weblogo2 from "../Assets/weblogo2.avif";
import weblogo3 from "../Assets/weblogo3.avif";

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
      {/* Background Animation */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r bg-slate-50 opacity-40" data-aos="fade" data-aos-duration="1500"></div>
        <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/programming-background-collage_23-2149901770.jpg?t=st=1726824958~exp=1726828558~hmac=915b83628d93ed09c5a67e1e6fa2c994b4da24f55c722cbdb7ff3a097f6d3c1c&w=740')] bg-cover bg-center opacity-60"></div>
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 p-8 lg:p-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-lg font-bold mb-4" data-aos="fade-up">Elevate Your Business with Cutting-Edge Web Development</h1>
          <p className="text-sm mb-8" data-aos="fade-up" data-aos-delay="200">Our web development services specialize in creating dynamic, user-friendly websites tailored to your business needs. From sleek designs to seamless functionality, we ensure your website not only looks great but also delivers an exceptional user experience, helping you connect with your audience and drive business growth.</p>
          {/* <button className=" text-sm bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-teal-600 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">Get Started</button> */}
        </section>

{/* Key Features Section */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-16 rounded-lg shadow-lg ">
  <div className="bg-slate-50 p-8 " data-aos="fade-up">
    <h2 className="text-lg font-semibold mb-4">Why Choose Us?</h2>
    <p className="text-sm mb-4">
      We blend creativity and technology to build web applications that are not only functional but also visually stunning.
    </p>
    <ul className="text-sm list-disc list-inside space-y-2">
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
    <img src={web_development} alt="Web Development" className=" gray-image w-full h-auto " />
  </div>
</section>
        {/* Features Section */}
        <section className="bg-slate-50 p-8 rounded-lg shadow-lg mb-16" data-aos="fade-up">
          <h2 className="text-lg font-semibold mb-6 text-center">Our Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center" data-aos="fade-up">
              <img src={weblogo1} alt="Feature 1" className="gray-image w-16 h-16 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Innovative Design</h3>
              <p className='text-sm'>Engage users with a unique and modern design tailored to your brand.</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <img src={weblogo2} alt="Feature 2" className="gray-image w-16 h-16 mx-auto mb-4" />
              <h3 className="text-sm font-semibold mb-2">Advanced Technology</h3>
              <p className='text-sm'>Utilize the latest technology to ensure high performance and scalability.</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <img src={weblogo3} alt="Feature 3" className="gray-image w-16 h-16 mx-auto mb-4" />
              <h3 className="text-sm font-semibold mb-2">Dedicated Support</h3>
              <p className='text-sm'>Receive ongoing support to keep your web app up-to-date and fully functional.</p>
            </div>
          </div>
        </section>


        {/* Call to Action Section */}
        <footer className="text-center">
          <h2 className="text-lg font-semibold mb-4" data-aos="fade-up">Ready to Take Your Web Presence to the Next Level?</h2>
          <p className="text-sm mb-6">Contact us today to discuss your web app development needs and get a customized plan.</p>
          <Link to="/contact"> <button className=" text-sm bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Contact Us</button></Link>
        </footer>
      </div>
    </div>
  );
}

export default WebAppDevelopment;

