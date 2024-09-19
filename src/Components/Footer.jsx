import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import logo from "./Assets/logo.png"

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <footer className="bg-slate-600 text-slate-200 text-base py-14 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column: About Us */}
        <div data-aos="fade-up" className="space-y-4">
          {/* <h2 className="text-lg font-bold">About Us</h2> */}
          <img src={logo} alt="logo" className="bg-white p-2 border border-gray-200" />
          <br></br>
          <p className="max-w-prose text-sm">
            ASM Infotech is an internet consulting company focusing on the
            efficient use of internet and web technologies in business. We have
            helped several budding entrepreneurs in establishing their business
            online since 2015.
          </p>
          <p className="max-w-prose text-sm">
            ASM Infotech is dedicated to providing customized solutions for
            businesses, ensuring that their online presence aligns with their
            unique goals and visions.
          </p>
        </div>

        {/* Second Column: Reach Us */}
        <div data-aos="fade-up" data-aos-delay="200" className="space-y-14">
          <h2 className="text-lg font-bold">Reach Us</h2>
          <p className="text-sm">
            NO. 23, <br />
            FIRST FLOOR, <br />
            8th Street, Kamarajar Colony <br />
            Kodambakkam, Chennai <br />
            Tamil Nadu 600019.
          </p>
          <p className="text-sm">
            Phone: (+91) 90439 57699 <br />
            044 42129400 <br />
            E-Mail:{" "}
            <a
              href="mailto:asminfoindia@gmail.com"
              className="text-customBlue  text-sm hover:underline"
            >
              asminfoindia@gmail.com
            </a>
          </p>
        </div>

        {/* Third Column: Location Map */}
        <div data-aos="fade-up" data-aos-delay="400" className="space-y-4">
          <h2 className="text-lg font-bold">Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.008616566269!2d80.1371654!3d13.0492177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e5dd033e69%3A0x99d83eb38c1a12b5!2s23%2C%20FIRST%20FLOOR%2C%208th%20Street%2C%20Kamaraj%20Colony%2C%20Kodambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600019!5e0!3m2!1sen!2sin!4v1694864262758!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            title="ASM Infotech Location"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      <div className="text-center mt-8 text-sm">
        ASM Infotech. All Rights Reserved 2015.
      </div>
    </footer>
  );
};

export default AboutUs;
