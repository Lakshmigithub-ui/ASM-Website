// import React from 'react';
// import { Link } from "react-router-dom";
// import Slider from 'react-slick';
// import './Slider.css';
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
//     dots: true, // Show dots for navigation
//     infinite: true, // Infinite loop sliding
//     speed: 500, // Transition speed in milliseconds
//     slidesToShow: 1, // Number of slides to show at a time
//     slidesToScroll: 1, // Number of slides to scroll at a time
//     autoplay: true, // Auto play the slides
//     autoplaySpeed: 3000, // Auto play speed in milliseconds
// };

// const Hero = () => {
//     return (
//         <div className="hero">
//             <div className="hero-left">
//                 <Slider {...settings}>
//                     {slides.map((slide, index) => (
//                         <div key={index} className="slide">
//                             <img className="slider-img" src={slide.image} alt={`Slide ${index + 1}`} />
//                             <div className="slide-text">
//                                 <h2>{slide.text.p}</h2>
//                                 <br></br>
//                                 <h3>{slide.text.h2}</h3>
//                                 <br></br>
//                                 <h3>{slide.text.h3}</h3>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//                 <div className="hero-latest-btn">
//                     <Link to='/GetQuote'><button className='quotebtn'>Get Quote</button></Link>
//                     <img src={arrow_icon} alt="arrow" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;


import React from 'react';
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import slider_image1 from '../Assets/slider_image1.avif';
import slider_image2 from '../Assets/slider_image2.avif';
import slider_image3 from '../Assets/slider_image3.avif';

// Slide data
const slides = [
    {
        image: slider_image1,
        text: {
            p: "We Design Delightful Customer Experience",
            h2: "We partner with brands, agencies, and start-ups to create engaging content and meaningful experiences in the digital space.",
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

// Slider settings
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
};

const Hero = () => {
    return (
        <div className="relative bg-gray-900 text-white py-16 px-4 md:px-8">
            <Slider {...settings} className="relative">
                {slides.map((slide, index) => (
                    <div key={index} className="flex items-center justify-between p-4 md:p-8">
                        <div className="text-left max-w-lg">
                            <p className="text-lg mb-4">{slide.text.p}</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{slide.text.h2}</h2>
                            <h3 className="text-xl">{slide.text.h3}</h3>
                        </div>
                        <img className="w-full h-auto object-contain h-48 w-96 " src={slide.image} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
            <div className="absolute bottom-4 left-4 md:left-8 flex items-center space-x-4">
                <Link to='/GetQuote'>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                        Get Quote
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;

