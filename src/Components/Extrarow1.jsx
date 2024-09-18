import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import office from "./Assets/office.avif";

const Extrarow1 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="bg-slate-800 text-slate-200 py-12 px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
      <div
        className="lg:w-1/2 mb-8 lg:mb-0"
        data-aos="fade-up" // Animate the text when it scrolls into view
      >
        <h2 className="text-2xl font-semibold leading-tight">
         About Us
        </h2>
        <br></br>
        <p className="text-lg font-thin mb-4">
ASM Infotech, based in Chennai, is a creative agency specializing in responsive web development and online marketing. We offer web-based IT solutions, including website design, CMS, eCommerce, web applications, SEO, SEM, and digital marketing. Our services also include social media marketing, mobile app development, graphic design, and web hosting.

We are committed to delivering customized solutions that meet our clients' unique needs and goals. From simple corporate websites to complex eCommerce platforms, we create tailor-made web solutions. As a local agency, we prioritize clear, interactive communication, ensuring we're always accessible to our clients.</p>

      </div>

      <div
        className="lg:w-1/2 flex justify-center items-center"
        data-aos="fade-down" // Animate the image when it scrolls into view
      >
        <img
          className="w-full h-auto rounded-lg shadow-lg transition-transform transform"
          src={office}
          alt="Design"
        />
      </div>


    </div>
  );
}

export default Extrarow1;
