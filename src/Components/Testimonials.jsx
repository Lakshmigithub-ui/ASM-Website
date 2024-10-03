// import React, { useEffect } from 'react';
// import Slider from 'react-slick';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

// const Testimonials = () => {
//   useEffect(() => {
//     AOS.init({
//       once: true, // Animation will trigger once and won't reset on scroll up
//     });
// }, []);

//   //   AOS.init({ duration: 500 }); // Initialize AOS with a duration of 1000ms
//   // }, []);

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
//     <div className="bg-slate-100 text-gray-600 py-12 px-6 lg:px-16">
//       <h2 className="text-xl font-bold mb-1 text-center" data-aos="fade-up">What Our Client Say</h2>
//       <span className="block h-1 w-10 bg-customBlue mx-auto mb-6"></span>
//       <Slider {...settings} className="text-center">
//         <div className="p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
//           <p className="text-lg font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
//             Mr. Ramesh &nbsp;- &nbsp; <span className="font-lg">Kaaviya Properties</span>
//           </p>
//           <p className="text-gray-700">
//             "We are thoroughly impressed by the team at ASM Infotech. They not only understood our requirements quickly but also provided valuable insights on how to improve our website. The final product exceeded our expectations, both in terms of design and functionality. Their attention to detail and commitment to quality are truly commendable."
//           </p>
//         </div>
//         <div className="p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
//           <p className="text-lg font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
//             Mr. Dhas Karthick &nbsp;- &nbsp; <span className="font-lg">Marlen India Pvt. Ltd</span>
//           </p>
//           <p className="text-gray-700">
//             "The experience with ASM Infotech has been fantastic. They were always open to our suggestions, and their creativity shone through in every aspect of the project. The website they built is both visually appealing and highly functional, making it easier for our customers to navigate and engage with our services. We are beyond satisfied with the outcome."
//           </p>
//         </div>
//         <div className="p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
//           <p className="text-lg font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
//             <span className="font-lg">SSS Automation.net</span>
//           </p>
//           <p className="text-gray-700">
//             "ASM Infotech truly impressed us with their professionalism and dedication. From the very first meeting to the final handover, they ensured that our vision was translated into a high-quality website. Their technical expertise and problem-solving abilities were evident throughout the project. We would gladly recommend them to anyone seeking a reliable partner for web development."
//           </p>
//         </div>
//         <div className="p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
//           <p className="text-lg font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
//            <span className="font-lg">Inspire Media.in</span>
//           </p>
//           <p className="text-gray-700">
//             "It was a pleasure working with ASM Infotech. Their approach was extremely collaborative, and they took the time to understand our business goals. The end result is a website that not only looks great but also provides a seamless user experience. Their ability to merge creative design with cutting-edge technology is truly impressive. We highly recommend their services."
//           </p>
//         </div>
//         <div className="p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="500">
//           <p className="text-lg font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
//             Mr. Muthu Kumar &nbsp;- &nbsp; <span className="font-lg">SMK Traders</span>
//           </p>
//           <p className="text-gray-700">
//             "The team at ASM Infotech delivered an outstanding website for our business. Their responsiveness to feedback and their ability to integrate the features we requested were remarkable. The website has helped improve our online presence and customer engagement significantly. We are extremely happy with their work and will definitely collaborate with them on future projects."
//           </p>
//         </div>
//         {/* <div className="p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
//           <p className="text-lg font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
//             <span className="font-lg">Priyamehan Novels.com</span>
//           </p>
//           <p className="text-gray-700">
//             "ASM Infotech took our ideas and turned them into a beautifully designed and fully functional website. Their creativity, professionalism, and timely delivery of the project were key in making this collaboration a success. The website not only looks great but also performs flawlessly across all devices. We highly appreciate their effort and dedication to the project."
//           </p>
//         </div> */}
//         <div className="p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
//           <p className="text-lg font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
//             <span className="font-lg">Priyamehan Novels.com</span>
//           </p>
//           <p className="text-gray-700">
//             "ASM Infotech took our ideas and turned them into a beautifully designed and fully functional website. Their creativity, professionalism, and timely delivery of the project were key in making this collaboration a success. The website not only looks great but also performs flawlessly across all devices. We highly appreciate their effort and dedication to the project."
//           </p>
//         </div>

//         <div className="p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="700">
//           <p className="text-lg font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
//             <span className="font-lg">Uyirmei Seithigal</span>
//           </p>
//           <p className="text-gray-700">
//             "Working with ASM Infotech has been an exceptional experience. Their team provided us with innovative ideas and solutions to enhance the functionality of our website. Their thorough understanding of the latest web development trends ensured that our website not only looks modern but also delivers a top-notch user experience. We are extremely pleased with the final result."
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
    AOS.init({
      once: true, // Animation will trigger once and won't reset on scroll up
    });
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
    <div className="bg-slate-100 text-gray-600 py-12 px-6 lg:px-16">
      <h2 className="text-xl font-bold mb-1 text-center" data-aos="fade-up">What Our Client Say</h2>
      <span className="block h-1 w-10 bg-customBlue mx-auto mb-6"></span>
      <Slider {...settings} className="text-center">
      {/* <div className="p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100"> */}

        <div className="max-w-5xl mx-auto p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <p className="text-lg font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. Ramesh &nbsp;- &nbsp; <span className="font-lg">Kaaviya Properties</span>
          </p>
          <p className="text-gray-700">
            "We are thoroughly impressed by the team at ASM Infotech. They not only understood our requirements quickly but also provided valuable insights on how to improve our website. The final product exceeded our expectations, both in terms of design and functionality. Their attention to detail and commitment to quality are truly commendable."
          </p>
        </div>
        <div className="max-w-5xl mx-auto p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
          <p className="text-lg font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. Dhas Karthick &nbsp;- &nbsp; <span className="font-lg">Marlen India Pvt. Ltd</span>
          </p>
          <p className="text-gray-700">
            "The experience with ASM Infotech has been fantastic. They were always open to our suggestions, and their creativity shone through in every aspect of the project. The website they built is both visually appealing and highly functional, making it easier for our customers to navigate and engage with our services. We are beyond satisfied with the outcome."
          </p>
        </div>
        <div className="max-w-5xl mx-auto p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
          <p className="text-lg font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            <span className="font-lg">SSS Automation.net</span>
          </p>
          <p className="text-gray-700">
            "ASM Infotech truly impressed us with their professionalism and dedication. From the very first meeting to the final handover, they ensured that our vision was translated into a high-quality website. Their technical expertise and problem-solving abilities were evident throughout the project. We would gladly recommend them to anyone seeking a reliable partner for web development."
          </p>
        </div>
        <div className="max-w-5xl mx-auto p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
          <p className="text-lg font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            <span className="font-lg">Inspire Media.in</span>
          </p>
          <p className="text-gray-700">
            "It was a pleasure working with ASM Infotech. Their approach was extremely collaborative, and they took the time to understand our business goals. The end result is a website that not only looks great but also provides a seamless user experience. Their ability to merge creative design with cutting-edge technology is truly impressive. We highly recommend their services."
          </p>
        </div>
        <div className="max-w-5xl mx-auto p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="500">
          <p className="text-lg font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. Muthu Kumar &nbsp;- &nbsp; <span className="font-lg">SMK Traders</span>
          </p>
          <p className="text-gray-700">
            "The team at ASM Infotech delivered an outstanding website for our business. Their responsiveness to feedback and their ability to integrate the features we requested were remarkable. The website has helped improve our online presence and customer engagement significantly. We are extremely happy with their work and will definitely collaborate with them on future projects."
          </p>
        </div>
        <div className="max-w-5xl mx-auto p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
          <p className="text-lg font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            <span className="font-lg">Priyamehan Novels.com</span>
          </p>
          <p className="text-gray-700">
            "ASM Infotech took our ideas and turned them into a beautifully designed and fully functional website. Their creativity, professionalism, and timely delivery of the project were key in making this collaboration a success. The website not only looks great but also performs flawlessly across all devices. We highly appreciate their effort and dedication to the project."
          </p>
        </div>
        <div className="max-w-5xl mx-auto p-6 bg-slate-100 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="700">
          <p className="text-lg font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            <span className="font-lg">Uyirmei Seithigal</span>
          </p>
          <p className="text-gray-700">
            "Working with ASM Infotech has been an exceptional experience. Their team provided us with innovative ideas and solutions to enhance the functionality of our website. Their thorough understanding of the latest web development trends ensured that our website not only looks modern but also delivers a top-notch user experience. We are extremely pleased with the final result."
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;

