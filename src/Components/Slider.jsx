// import React, { useEffect } from 'react';
// import { Link } from "react-router-dom";
// import Slider from 'react-slick';
// import slider_image1 from './Assets/slider_image1.avif';
// import slider_image2 from './Assets/slider_image2.avif';
// import slider_image3 from './Assets/slider_image3.avif';
// import background_video3 from './Assets/background_video3.mp4';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

// // Slide data
// const slides = [
//     {
//         image: slider_image1,
//         text: {
//             h2: "Empowering Businesses with Cutting-Edge Web Development",
//             p: "Our web development services are designed to help businesses thrive in the digital age. We create fast, secure, and responsive websites that deliver an exceptional user experience. Whether it's a simple website or a complex web application, we bring your vision to life with innovative technologies and solutions tailored to your needs."
//         }
//     },
//     {
//         image: slider_image2,
//         text: {
//             h2: "Innovative Mobile Development for a Connected World",
//             p: "Crafting Innovative Digital Solutions.  We specialize in creating high-performance mobile apps that engage users and drive business growth. From iOS to Android, our mobile development solutions are tailored to deliver seamless user experiences on any device. With cutting-edge technologies and a focus on quality, we bring your ideas to life in the mobile-first era."
//         }
//     },
//     {
//         image: slider_image3,
//         text: {
//             h2: "Boost Your Online Presence with Expert Digital Marketing",
//             p: "Our digital marketing strategies are designed to increase your brand visibility and drive meaningful engagement. From SEO to social media campaigns, we create data-driven solutions tailored to your business goals. Let us help you reach your audience effectively and grow your business in the competitive online landscape."
//         }
//     }
// ];

// // Slider settings
// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     customPaging: i => (
//         <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
//     ),
//     dotsClass: "slick-dots absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
// };

// const Hero = () => {
//     useEffect(() => {
//         AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
//     }, []);

//     return (
//         <div className="relative bg-slate-50 text-gray-700 py-16 px-4 md:px-8">
//             {/* Background Video
//             <video
//                 autoPlay
//                 loop
//                 muted
//                 className="absolute inset-0 w-full h-full object-cover z-0"
//             >
//                 <source src={background_video3} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>
//  */}
//             {/* Overlay to darken the background video for better text visibility */}
//             <div className="absolute inset-0 bg-slate-50 opacity-50 z-10"></div>

//             <div className="relative z-20">
//                 <Slider {...settings}>
//                     {slides.map((slide, index) => (
//                         <div
//                             key={index}
//                             className="relative flex flex-col lg:flex-row items-center justify-between p-4 md:p-8"
//                         >
//                             <div className="flex lg:flex-row flex-col">
//                                 {/* Text on the left */}
//                                 <div className='m-9'>
//                                     <h2
//                                         className="text-3xl md:text-3xl font-semibold mb-4"
//                                         data-aos="fade-up"
//                                         data-aos-delay={index * 300}
//                                     >
//                                         {slide.text.h2}
//                                     </h2>
//                                     <p
//                                         className="text-base mb-4 font-medium"
//                                         data-aos="fade-up"
//                                         data-aos-delay={index * 400}
//                                     >
//                                         {slide.text.p}
//                                     </p>
//                                     <br />
//                                     <Link to='/GetQuote'>
//                                         <button
//                                             className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
//                                             data-aos="fade-up"
//                                             data-aos-delay={index * 500}
//                                         >
//                                             Get Quote
//                                         </button>
//                                     </Link>
//                                 </div>

//                                 {/* Image on the right */}
//                                 <img
//                                     src={slide.image}
//                                     alt="Slide image"
//                                     className="w-full h-auto max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg"
//                                     data-aos="fade-left"
//                                     data-aos-delay={index * 600}
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default Hero;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import slider_image1 from "./Assets/web_slide.png";
import slider_image2 from "./Assets/mobile_slide.png";
import slider_image3 from "./Assets/digital_slide.png";
import background_video3 from "./Assets/background_video3.mp4"
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
// Slide data
const slides = [
  {
    image: slider_image1,
    text: {
      // h2: "Empowering Businesses with Cutting-Edge Web Development",
      h2: "We build amazing websites and robust software applications",
      p:"ASM Infotech – Web Design & Development"
      // p: "Our web development services are designed to help businesses thrive in the digital age. We create fast, secure, and responsive websites that deliver an exceptional user experience. Whether it's a simple website or a complex web application, we bring your vision to life with innovative technologies and solutions tailored to your needs.",
    },
  },
  {
    image: slider_image2,
    text: {
      h2: "Innovative Mobile Development for a Connected World",
      p:"ASM Infotech – Mobile Design & Development"
      // p: "Crafting Innovative Digital Solutions.  We specialize in creating high-performance mobile apps that engage users and drive business growth. From iOS to Android, our mobile development solutions are tailored to deliver seamless user experiences on any device. With cutting-edge technologies and a focus on quality, we bring your ideas to life in the mobile-first era.",
    },
  },
  {
    image: slider_image3,
    text: {
      h2: "Boost Your Online Presence with Expert Digital Marketing",
      p:"ASM Infotech – Digital Marketing"
      // p: "Our digital marketing strategies are designed to increase your brand visibility and drive meaningful engagement. From SEO to social media campaigns, we create data-driven solutions tailored to your business goals. Let us help you reach your audience effectively and grow your business in the competitive online landscape.",
    },
  },
];

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  customPaging: (i) => <div className="w-3 h-3 bg-gray-400 rounded-full"></div>,
  dotsClass:
    "slick-dots absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2",
};

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false); // Form modal state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // Submission state
  const [formFilled, setFormFilled] = useState(false); // Track if form is filled

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000 // Animation will trigger once and won't reset on scroll up
    });
}, []);

  //   AOS.init({ duration: 1000 });
  // }, []);

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name.trim()) formErrors.name = "Name is required";
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) formErrors.email = "Email is required";
    else if (!emailPattern.test(formData.email))
      formErrors.email = "Invalid email format";
    if (!formData.phone.trim()) formErrors.phone = "Phone number is required";
    if (!formData.message.trim()) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data: ", formData);
      setIsSubmitted(true); // Show success message
      setIsFormOpen(false); // Close the form modal
      setFormFilled(true); // Mark the form as filled
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGetQuoteClick = () => {
    if (formFilled) {
      // Reset form data if it's already filled and submitted
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      setIsFormOpen(false); // Close the modal
      setFormFilled(false); // Reset filled status
    } else {
      setIsFormOpen(true); // Open the form modal
    }
  };

  return (
    <div className="relative bg-slate-50 text-slate-50 py-6 px-4 md:px-8">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="gray-image absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={background_video3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <div className="relative z-20">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex flex-col lg:flex-row items-center justify-between p-4 md:p-8"
            >
              <div className="flex lg:flex-row flex-col">
                <div className="m-9">
                <p
                    className="text-xl  mb-4 font-semibold  tracking-wider"
                    data-aos="fade-up"
                    data-aos-delay={index * 400}
                  >
                    {slide.text.p}
                  </p>
<br></br>
                  <h2
                    className="text-5xl md:text-5xl font-extrabold mb-4 tracking-wider"
                    data-aos="fade-up"
                    data-aos-delay={index * 300}
                  >
                    {slide.text.h2}
                  </h2>
                  <br />
                  <button
  className="bg-transparent tracking-wider outline text-extrabold text-large text-white py-3 px-6 hover:bg-sky-800 transition duration-700 ease-in-out flex items-center space-x-2"
  data-aos="fade-up"
  data-aos-delay={index * 500}
  onClick={handleGetQuoteClick} // Open the form modal
>
  Get Quote
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-9 h-9 md:w-6 md:h-6 ml-2 animate-bounce-right"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 7l5 5m0 0l-5 5m5-5H6"
    />
  </svg>
</button>

                  {/* <button
                    className="bg-transparant tracking-wider outline text-extrabold text-base text-white py-3 px-6 hover:bg-neutral-600  transition duration-700 ease-in-out "
                    data-aos="fade-up"
                    data-aos-delay={index * 500}
                    onClick={handleGetQuoteClick} // Open the form modal
                  >
                    Get Quote 🡺
                  </button> */}
                </div>
                <img
                  src={slide.image}
                  alt="Slide image"
                  className="w-full h-auto max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg shadow-lg"
                  data-aos="fade-left"
                  data-aos-delay={index * 600}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Modal for Get Quote form */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xs relative">
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
              onClick={() => setIsFormOpen(false)} // Close the modal
            >
              &times;
            </button>

            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Get a Quote
            </h2>
            
            <form className="text-sm" onSubmit={handleSubmit}>
              <div className="mb-4">
                {/* <label className="block text-gray-700 mb-2">Name</label> */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
              <div className="mb-4">
                {/* <label className="block text-gray-700 mb-2">Email</label> */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                {/* <label className="block text-gray-700 mb-2">Phone</label> */}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <div className="mb-4">
                {/* <label className="block text-gray-700 mb-2">Message</label> */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:border-blue-500"
                  rows="4"
                  placeholder="Enter your message"
                  required
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-customBlue text-white rounded hover:bg-blue-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {isSubmitted && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-gray-900"
              onClick={() => setIsSubmitted(false)} // Close the success message
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Thank You!
            </h2>
            <p className="text-gray-600">
              Thank you for enquiring. We will get back to you shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
