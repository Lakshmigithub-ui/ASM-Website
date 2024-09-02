
import React from 'react';
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import './Slider.css';
import arrow_icon from '../Assets/arrow.png';
import slider_image1 from '../Assets/slider_image1.avif';
import slider_image2 from '../Assets/slider_image2.avif';
import slider_image3 from '../Assets/slider_image3.avif';

// Define your slider content here
const slides = [
    {
        image: slider_image1,
        text: {
            p: "We Design Delightful Customer Experience",
            h2: "We partner with brands, agencies and start-ups to create engaging content and meaningful experiences in the digital space.",
            h3: "Learn more about our services and portfolio of work"
        }
    },
    {
        image: slider_image2,
        text: {
            p: "Crafting Innovative Digital Solutions",
            h2: "Our team creates cutting-edge digital experiences that drive engagement and success.",
            h3: "Discover our approach and success stories"
        }
    },
    {
        image: slider_image3,
        text: {
            p: "Transforming Ideas into Reality",
            h2: "We help brands turn their visions into reality with tailored digital strategies and designs.",
            h3: "Explore our case studies and services"
        }
    }
];

const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop sliding
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto play the slides
    autoplaySpeed: 3000, // Auto play speed in milliseconds
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="slide">
                            <img className="slider-img" src={slide.image} alt={`Slide ${index + 1}`} />
                            <div className="slide-text">
                                <h2>{slide.text.p}</h2>
                                <br></br>
                                <h3>{slide.text.h2}</h3>
                                <br></br>
                                <h3>{slide.text.h3}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="hero-latest-btn">
                    <Link to='/GetQuote'><button className='quotebtn'>Get Quote</button></Link>
                    <img src={arrow_icon} alt="arrow" />
                </div>
            </div>
        </div>
    );
};

export default Hero;

// import React from 'react';
// import { Link } from "react-router-dom";
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import arrow_icon from '../Assets/arrow.png';
// import slider_image1 from '../Assets/slider_image1.avif';
// import slider_image2 from '../Assets/slider_image2.avif';
// import slider_image3 from '../Assets/slider_image3.avif';

// const slides = [
//     {
//         image: slider_image1,
//         text: {
//             p: "We Design Delightful Customer Experience",
//             h2: "We partner with brands, agencies and start-ups to create engaging content and meaningful experiences in the digital space.",
//             h3: "Learn more about our services and portfolio of work"
//         }
//     },
//     {
//         image: slider_image2,
//         text: {
//             p: "Crafting Innovative Digital Solutions",
//             h2: "Our team creates cutting-edge digital experiences that drive engagement and success.",
//             h3: "Discover our approach and success stories"
//         }
//     },
//     {
//         image: slider_image3,
//         text: {
//             p: "Transforming Ideas into Reality",
//             h2: "We help brands turn their visions into reality with tailored digital strategies and designs.",
//             h3: "Explore our case studies and services"
//         }
//     }
// ];

// const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     appendDots: dots => (
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
//             <ul className="flex space-x-3"> {dots} </ul>
//         </div>
//     ),
//     customPaging: i => (
//         <div className="w-3 h-3 bg-white rounded-full opacity-70 hover:opacity-100 transition-opacity" />
//     )
// };

// const Hero = () => {
//     return (
//         <div className="relative w-full h-screen overflow-hidden">
//             <Slider {...settings} className="w-full h-full">
//                 {slides.map((slide, index) => (
//                     <div key={index} className="relative w-full h-full flex flex-col lg:flex-row">
//                         {/* Image on the left for large screens */}
//                         <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex justify-center items-center lg:order-1">
//                             <img className="w-full h-full object-cover" src={slide.image} alt={`Slide ${index + 1}`} />
//                         </div>
//                         {/* Text on the right for large screens */}
//                         <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-30 p-6 lg:p-12 lg:order-2">
//                             <p className="text-lg md:text-xl lg:text-2xl font-light mb-2">{slide.text.p}</p>
//                             <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">{slide.text.h2}</h2>
//                             <h3 className="text-sm md:text-base lg:text-lg">{slide.text.h3}</h3>
//                         </div>
//                     </div>
//                 ))}
//             </Slider>
//             <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4">
//                 <Link to='/GetQuote'>
//                     <button className='bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300'>
//                         Get Quote
//                     </button>
//                 </Link>
//                 <img className="w-6 h-6" src={arrow_icon} alt="arrow" />
//             </div>
//         </div>
//     );
// };

// export default Hero;

 