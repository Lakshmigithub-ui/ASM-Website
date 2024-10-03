// import React, { useEffect } from "react";
// import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
// import AOS from "aos";
// import "aos/dist/aos.css"; // Import AOS styles
// import logo from "./Assets/logo.png"

// const AboutUs = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
//   }, []);

//   return (
//     <footer className="bg-slate-600 text-slate-200 text-base py-14 px-4 md:px-8 lg:px-16">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* First Column: About Us */}
//         <div data-aos="fade-up" className="space-y-4">
//           {/* <h2 className="text-lg font-bold">About Us</h2> */}
//           <img src={logo} alt="logo" className="bg-white h-12 w-auto px-4 py-1 border border-gray-200" />
//           <br></br>
//           <p className="max-w-prose text-justify text-sm">
//             ASM Infotech is an internet consulting company focusing on the
//             efficient use of internet and web technologies in business. We have
//             helped several budding entrepreneurs in establishing their business
//             online since 2015.
//           </p>
//           <p className="max-w-prose text-justify text-sm">
//             ASM Infotech is dedicated to providing customized solutions for
//             businesses, ensuring that their online presence aligns with their
//             unique goals and visions.
//           </p>
//         </div>

//         {/* Second Column: Reach Us */}
//         <div data-aos="fade-up" data-aos-delay="200" className="space-y-5">
//           <h2 className="text-lg font-semibold p-5">Reach Us</h2>
//           <div className="flex items-start mb-4">
//                 <FaMapMarkerAlt className="text-customBlue text-3xl mr-4" />
//                 <p className="text-sm">No. 23, First Floor, 8th Cross Street, Kamarajar Colony, Kodambakkam, Chennai, Tamil Nadu 600019.</p>
//               </div> 
//               <div className="flex items-start">
//                 <FaPhoneAlt className="text-customBlue text-2xl mr-4" />
//                 <p className="text-sm">+91 9043957699 <br /> 044 42129400</p>               
//               </div>
//               <div className="flex items-start mb-4">
//                 <FaEnvelope className="text-customBlue text-2xl mr-4" />
//                 <p className="text-sm"><a href="mailto:asminfoindia@gmail.com" className="text-sky-400 hover:underline">admin@asminfotech.in</a></p>
//               </div>

//         </div>

//         {/* Third Column: Location Map */}
//         <div data-aos="fade-up" data-aos-delay="400" className="space-y-4">
//           <h2 className="text-lg font-bold">Location Map</h2>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.008616566269!2d80.1371654!3d13.0492177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266e5dd033e69%3A0x99d83eb38c1a12b5!2s23%2C%20FIRST%20FLOOR%2C%208th%20Street%2C%20Kamaraj%20Colony%2C%20Kodambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600019!5e0!3m2!1sen!2sin!4v1694864262758!5m2!1sen!2sin"
//             width="100%"
//             height="250"
//             allowFullScreen=""
//             loading="lazy"
//             title="ASM Infotech Location"
//             className="rounded-lg shadow-lg"
//           ></iframe>
//         </div>
//       </div>

//       <div className="text-center mt-8 text-sm">
//         ASM Infotech. All Rights Reserved 2024.
//       </div>
//     </footer>
//   );
// };

// export default AboutUs;

import React, { useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaSkype,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import logo from "./Assets/logo.png";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Animation will trigger once and won't reset on scroll up
    });
}, []);

  //   AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  // }, []);

  return (
    <footer className="bg-slate-600 text-slate-200 text-base py-14 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column: About Us */}
        <div data-aos="fade-up" className="space-y-4">
          <img
            src={logo}
            alt="logo"
            className="bg-white h-12 w-auto px-4 py-1 border border-gray-200"
          />
          <br />
          <p className="max-w-prose text-justify text-sm">
            ASM Infotech is an internet consulting company focusing on the
            efficient use of internet and web technologies in business. We have
            helped several budding entrepreneurs in establishing their business
            online since 2015.
          </p>
          <p className="max-w-prose text-justify text-sm">
            ASM Infotech is dedicated to providing customized solutions for
            businesses, ensuring that their online presence aligns with their
            unique goals and visions.
          </p>
        </div>

        {/* Second Column: Reach Us */}
        <div data-aos="fade-up" data-aos-delay="200" className="space-y-5">
          <h2 className="text-lg font-semibold p-5">Reach Us</h2>
          <div className="flex items-start mb-4">
            <FaMapMarkerAlt className="text-customBlue text-3xl mr-4" />
            <p className="text-sm">
              No. 23, First Floor, 8th Cross Street, Kamarajar Colony,
              Kodambakkam, Chennai, Tamil Nadu 600019.
            </p>
          </div>
          <div className="flex items-start">
            <FaPhoneAlt className="text-customBlue text-2xl mr-4" />
            <p className="text-sm">
              +91 9043957699 <br /> 044 42129400
            </p>
          </div>
          <div className="flex items-start mb-4">
            <FaEnvelope className="text-customBlue text-2xl mr-4" />
            <p className="text-sm">
              <a
                href="mailto:asminfoindia@gmail.com"
                className="text-sky-400 hover:underline"
              >
                admin@asminfotech.in
              </a>
            </p>
          </div>
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

      {/* Social Media Section */}
      <div className="mt-8 text-center space-y-4">
        <h2 className="text-lg font-semibold">Follow Us</h2>
        <div className="flex justify-center space-x-3">
          <a
            href="https://facebook.com/asminfotech"
            target="_blank"
            rel="noopener noreferrer"
            // className="text-xl text-slate-100 rounded-full hover:text-blue-500"
            className="mr-2 text-base text-slate-100 bg-slate-500 p-2 rounded-full inline-block hover:text-blue-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/asminfotech"
            target="_blank"
            rel="noopener noreferrer"
            // className="text-xl text-blue-400 hover:text-blue-300"
            className="mr-2 text-base text-slate-100 bg-slate-500 p-2 rounded-full inline-block hover:text-blue-500"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/asminfotech"
            target="_blank"
            rel="noopener noreferrer"
            // className="text-xl text-pink-500 hover:text-pink-400"
            className="mr-2 text-base text-slate-100 bg-slate-500 p-2 rounded-full inline-block hover:text-blue-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/asminfotech"
            target="_blank"
            rel="noopener noreferrer"
            // className="text-xl text-red-600 hover:text-red-500"
            className="mr-2 text-base text-slate-100 bg-slate-500 p-2 rounded-full inline-block hover:text-blue-500"
          >
            <FaYoutube />
          </a>
          <a
            href="https://linkedin.com/asminfotech"
            target="_blank"
            rel="noopener noreferrer"
            // className="text-xl text-blue-700 hover:text-blue-600"
            className="mr-2 text-base text-slate-100 bg-slate-500 p-2 rounded-full inline-block hover:text-blue-500"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://skype.com/asminfotech"
            target="_blank"
            rel="noopener noreferrer"
            // className="text-xl text-sky-500 hover:text-sky-400"
            className="mr-2 text-base text-slate-100 bg-slate-500 p-2 rounded-full inline-block hover:text-blue-500"
          >
            <FaSkype />
          </a>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 flex flex-col space-y-4 z-50">
  <a href="tel:+91 9043957699" className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all">
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>
</a>

  <a href="https://wa.me/+91 9043957699" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all">
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg> 
 </a>
</div>

      <div className="text-center mt-8 text-sm">
      © 2024 ASM Infotech Pvt Ltd.&nbsp; &nbsp;All Rights Reserved.
      </div>
    </footer>
  );
};

export default AboutUs;
