// import React from 'react';

// export const AboutUs = () => {
//   return (
//     <div className="bg-slate-50 text-gray-900 p-8">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-lg text-gray-900 font-semibold  mb-6 border-b border-customBlue pb-2">
//           ASM Infotech Profile
//         </h1>
//         <p className="text-sm mb-6 leading-relaxed">
//           ASM Infotech is a Chennai-based creative agency specializing in responsive website development and online marketing services. Using the latest technologies, coupled with creativity and proficiency, the agency offers web-based IT solutions including corporate website design, content management system (CMS), eCommerce solutions, web application development, search engine optimization (SEO), search engine marketing (SEM), and digital marketing. Other services cover interactive media design, social media marketing, mobile application development, web hosting, graphic design, eCard design, eBook design.
//         </p>
//         <p className="text-sm mb-6 leading-relaxed">
//           We are always committed to providing services to our clients in the best possible ways. ASM Infotech is dedicated to understanding clients' needs and creating customized web-based solutions with unique goals and vision. We create tailor-made websites that range from simple corporate websites with CMS to more complex custom eCommerce solutions, and even more sophisticated online web portals to achieve the business demands of our clients.
//         </p>
//         <p className="text-sm leading-relaxed">
//           As a locally based company, we are dedicated to making communication with our clients interactive and effective. ASM Infotech is always open to our clients, readily available, and easy to contact.
//         </p>
//       </div>
//     </div>
//   );
// };

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Animation will trigger once and won't reset on scroll up
    });
}, []);

  //   AOS.init({ duration: 1000 });
  // }, []);

  return (
    <div className="bg-slate-100 text-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-lg text-gray-900 font-semibold mb-6 border-b border-customBlue pb-2"
          data-aos="fade-up"
        >
          ASM Infotech Profile
        </h1>
        <p className="text-sm text-justify mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          ASM Infotech is a Chennai-based creative agency specializing in responsive website
          development and online marketing services. Using the latest technologies, coupled with
          creativity and proficiency, the agency offers web-based IT solutions including corporate
          website design, content management system (CMS), eCommerce solutions, web application
          development, search engine optimization (SEO), search engine marketing (SEM), and digital
          marketing. Other services cover interactive media design, social media marketing, mobile
          application development, web hosting, graphic design, eCard design, eBook design.
        </p>
        <p className="text-sm mb-6 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
          We are always committed to providing services to our clients in the best possible ways.
          ASM Infotech is dedicated to understanding clients' needs and creating customized
          web-based solutions with unique goals and vision. We create tailor-made websites that
          range from simple corporate websites with CMS to more complex custom eCommerce solutions,
          and even more sophisticated online web portals to achieve the business demands of our
          clients.
        </p>
        <p className="text-sm leading-relaxed" data-aos="fade-up" data-aos-delay="300">
          As a locally based company, we are dedicated to making communication with our clients
          interactive and effective. ASM Infotech is always open to our clients, readily available,
          and easy to contact.
        </p>
      </div>
    </div>
  );
};
