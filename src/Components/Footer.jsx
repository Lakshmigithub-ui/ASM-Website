import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <footer className="bg-gray-900 text-slate-300 py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column: About Us */}
        <div data-aos="fade-up" className="space-y-4">
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="max-w-prose">
            ASM Infotech is an internet consulting company focusing on the efficient use of internet and web technologies in business. 
            We have helped several budding entrepreneurs in establishing their business online since 2015.
          </p>
          <p className="max-w-prose">
            ASM Infotech is dedicated to providing customized solutions for businesses, ensuring that their online presence aligns with their unique goals and visions.
          </p>
        </div>

        {/* Second Column: Reach Us */}
        <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
          <h2 className="text-2xl font-bold">Reach Us</h2>
          <p>
            NO. 23, <br />
            FIRST FLOOR, <br />
            8th Street, Kamarajar Colony <br />
            Kodambakkam, Chennai <br />
            Tamil Nadu 600019.
          </p>
          <p>
            Phone: (+91) 90439 57699 <br />
            044 42129400 <br />
            E-Mail: <a href="mailto:asminfoindia@gmail.com" className="text-customBlue hover:underline">asminfoindia@gmail.com</a>
          </p>
        </div>

        {/* Third Column: Location Map */}
        <div data-aos="fade-up" data-aos-delay="400" className="space-y-4">
          <h2 className="text-2xl font-bold">Location Map</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.504947354083!2d80.21139551533138!3d13.061208990802695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52662789e0c0f9%3A0x65fd469c4a9b8ae1!2sASM%20Infotech!5e0!3m2!1sen!2sin!4v1638806556216!5m2!1sen!2sin"
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


