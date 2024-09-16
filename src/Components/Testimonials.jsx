// // import React, { useEffect } from 'react';
// // import Slider from 'react-slick';
// // import AOS from 'aos';
// // import 'aos/dist/aos.css'; // Import AOS styles

// // const Testimonials = () => {
// //   useEffect(() => {
// //     AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
// //   }, []);

// //   // Slider settings
// //   const settings = {
// //     dots: true, // Show dots for navigation
// //     infinite: true, // Infinite loop sliding
// //     speed: 500, // Transition speed in milliseconds
// //     slidesToShow: 1, // Number of slides to show at a time
// //     slidesToScroll: 1, // Number of slides to scroll at a time
// //     autoplay: true, // Auto play the slides
// //     autoplaySpeed: 3000, // Auto play speed in milliseconds
// //     // fade: true, // Enable fade effect
// //     // cssEase: 'ease-in-out' // Smooth fade transition
// //   };

// //   return (
// //     <div className="bg-slate-800 text-white py-12 px-6 lg:px-16">
// //       <h2 className="text-3xl font-bold mb-6 text-center" data-aos="fade-up">Some Words from our Happy Clients</h2>
// //       <Slider {...settings} className="text-center">
// //         <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
// //           <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
// //             Mr. Ramesh &nbsp;- &nbsp; <span className="font-normal">Kaaviya Properties</span>
// //           </p>
// //           <p className="text-gray-300">
// //             "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
// //           </p>
// //         </div>
// //         <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
// //           <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
// //             Mr. Dhas Karthick &nbsp;- &nbsp; <span className="font-normal">Marlen India Pvt. Ltd</span>
// //           </p>
// //           <p className="text-gray-300">
// //             "We tried Mirror Minds for a particular need. We are extremely satisfied with the end result, cost, delivery time and communication. Mr.Rajendran and Mr.Dinesh are exceptionally sharp guys who take good care of our needs and delivered above PAR. Mirror Minds is trustworthy, skilled and an overall good partner for a wide variety of Application and website development needs."
// //           </p>
// //         </div>
// //         <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
// //           <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
// //             Mr. SSS &nbsp;- &nbsp; <span className="font-normal">SSS Automation.net</span>
// //           </p>
// //           <p className="text-gray-300">
// //             "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
// //           </p>
// //         </div>
// //         <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
// //           <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
// //             Mr. Inspire Media &nbsp;- &nbsp; <span className="font-normal">Inspire Media.in</span>
// //           </p>
// //           <p className="text-gray-300">
// //             "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
// //           </p>
// //         </div>
// //         <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="500">
// //           <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
// //             Mr. Muthu Kumar &nbsp;- &nbsp; <span className="font-normal">SMK Traders</span>
// //           </p>
// //           <p className="text-gray-300">
// //             "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Akash on completing my website with a great outcome."
// //           </p>
// //         </div>
// //         <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
// //           <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
// //             Mr. Priyamehan &nbsp;- &nbsp; <span className="font-normal">Priyamehan Novels.com</span>
// //           </p>
// //           <p className="text-gray-300">
// //             "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
// //           </p>
// //         </div>
// //         <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="700">
// //           <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
// //             Mr. Uyirmei &nbsp;- &nbsp; <span className="font-normal">Uriymei Seithigal</span>
// //           </p>
// //           <p className="text-gray-300">
// //             "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
// //           </p>
// //         </div>
// //       </Slider>
// //     </div>
// //   );
// // };

// // export default Testimonials;


// import React, { useEffect } from 'react';
// import Slider from 'react-slick';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

// const Testimonials = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
//   }, []);

//   // Slider settings
//   const settings = {
//     dots: true, // Show dots for navigation
//     infinite: true, // Infinite loop sliding
//     speed: 500, // Transition speed in milliseconds
//     slidesToShow: 1, // Number of slides to show at a time
//     slidesToScroll: 1, // Number of slides to scroll at a time
//     autoplay: true, // Auto play the slides
//     autoplaySpeed: 3000, // Auto play speed in milliseconds
//   };

//   return (
//     <div className="bg-slate-800 text-white py-12 px-6 lg:px-16">
//       <h2 className="text-3xl font-bold mb-6 text-center" data-aos="fade-up">Some Words from our Happy Clients</h2>
//       <Slider {...settings} className="text-center">
//         <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
//           <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
//             Mr. Ramesh &nbsp;- &nbsp; <span className="font-normal">Kaaviya Properties</span>
//           </p>
//           <p className="text-gray-300">
//             "ASM Infotech provided an excellent service in building our website. Their attention to detail and responsiveness to feedback were outstanding."
//           </p>
//         </div>
//         <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
//           <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
//             Mr. Dhas Karthick &nbsp;- &nbsp; <span className="font-normal">Marlen India Pvt. Ltd</span>
//           </p>
//           <p className="text-gray-300">
//             "Working with ASM Infotech has been a pleasure. Their team delivered our project on time and exceeded our expectations. We look forward to future collaborations."
//           </p>
//         </div>
//         <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
//           <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
//             Mr. SSS &nbsp;- &nbsp; <span className="font-normal">SSS Automation.net</span>
//           </p>
//           <p className="text-gray-300">
//             "ASM Infotech did an incredible job with our website, providing top-notch technical solutions. Their communication was seamless throughout the process."
//           </p>
//         </div>
//         <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
//           <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
//             Mr. Inspire Media &nbsp;- &nbsp; <span className="font-normal">Inspire Media.in</span>
//           </p>
//           <p className="text-gray-300">
//             "Our experience with ASM Infotech has been nothing short of amazing. They transformed our vision into reality and delivered a highly functional website."
//           </p>
//         </div>
//         <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="500">
//           <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
//             Mr. Muthu Kumar &nbsp;- &nbsp; <span className="font-normal">SMK Traders</span>
//           </p>
//           <p className="text-gray-300">
//             "The ASM Infotech team did an excellent job building our website. They provided great customer service and delivered a highly polished product."
//           </p>
//         </div>
//         <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
//           <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
//             Mr. Priyamehan &nbsp;- &nbsp; <span className="font-normal">Priyamehan Novels.com</span>
//           </p>
//           <p className="text-gray-300">
//             "We are thrilled with the website ASM Infotech developed for us. Their expertise and dedication made the entire process smooth and enjoyable."
//           </p>
//         </div>
//         <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="700">
//           <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
//             Mr. Uyirmei &nbsp;- &nbsp; <span className="font-normal">Uriymei Seithigal</span>
//           </p>
//           <p className="text-gray-300">
//             "ASM Infotech's creative approach and technical proficiency truly stand out. They developed a website that perfectly meets our needs."
//           </p>
//         </div>
//       </Slider>
//     </div>
//   );
// };

// export default Testimonials;

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  // Slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto play the slides
    autoplaySpeed: 3000, // Auto play speed in milliseconds
  };

  return (
    <div className="bg-slate-800 text-white py-12 px-6 lg:px-16">
      <h2 className="text-3xl font-bold mb-6 text-center" data-aos="fade-up">Some Words from our Happy Clients</h2>
      <Slider {...settings} className="text-center">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. Ramesh &nbsp;- &nbsp; <span className="font-normal">Kaaviya Properties</span>
          </p>
          <p className="text-gray-300">
            "We are thoroughly impressed by the team at ASM Infotech. They not only understood our requirements quickly but also provided valuable insights on how to improve our website. The final product exceeded our expectations, both in terms of design and functionality. Their attention to detail and commitment to quality are truly commendable."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
          <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. Dhas Karthick &nbsp;- &nbsp; <span className="font-normal">Marlen India Pvt. Ltd</span>
          </p>
          <p className="text-gray-300">
            "The experience with ASM Infotech has been fantastic. They were always open to our suggestions, and their creativity shone through in every aspect of the project. The website they built is both visually appealing and highly functional, making it easier for our customers to navigate and engage with our services. We are beyond satisfied with the outcome."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
          <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. SSS &nbsp;- &nbsp; <span className="font-normal">SSS Automation.net</span>
          </p>
          <p className="text-gray-300">
            "ASM Infotech truly impressed us with their professionalism and dedication. From the very first meeting to the final handover, they ensured that our vision was translated into a high-quality website. Their technical expertise and problem-solving abilities were evident throughout the project. We would gladly recommend them to anyone seeking a reliable partner for web development."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
          <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. Inspire Media &nbsp;- &nbsp; <span className="font-normal">Inspire Media.in</span>
          </p>
          <p className="text-gray-300">
            "It was a pleasure working with ASM Infotech. Their approach was extremely collaborative, and they took the time to understand our business goals. The end result is a website that not only looks great but also provides a seamless user experience. Their ability to merge creative design with cutting-edge technology is truly impressive. We highly recommend their services."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="500">
          <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. Muthu Kumar &nbsp;- &nbsp; <span className="font-normal">SMK Traders</span>
          </p>
          <p className="text-gray-300">
            "The team at ASM Infotech delivered an outstanding website for our business. Their responsiveness to feedback and their ability to integrate the features we requested were remarkable. The website has helped improve our online presence and customer engagement significantly. We are extremely happy with their work and will definitely collaborate with them on future projects."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
          <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. Priyamehan &nbsp;- &nbsp; <span className="font-normal">Priyamehan Novels.com</span>
          </p>
          <p className="text-gray-300">
            "ASM Infotech took our ideas and turned them into a beautifully designed and fully functional website. Their creativity, professionalism, and timely delivery of the project were key in making this collaboration a success. The website not only looks great but also performs flawlessly across all devices. We highly appreciate their effort and dedication to the project."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="700">
          <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. Uyirmei &nbsp;- &nbsp; <span className="font-normal">Uriymei Seithigal</span>
          </p>
          <p className="text-gray-300">
            "Working with ASM Infotech has been an exceptional experience. Their team provided us with innovative ideas and solutions to enhance the functionality of our website. Their thorough understanding of the latest web development trends ensured that our website not only looks modern but also delivers a top-notch user experience. We are extremely pleased with the final result."
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
