// import React from "react";
// import './Slider.css'
// import arrow_icon from '../Assets/arrow.png'
// import slider_image from '../Assets/slider_image.avif'


// const Hero = () => {
//     return (
//         <div className="hero">
//             <div className="hero-left">
//                 <p>We Design Delightful Customer Experience</p>
//                 <h2>We partner with brands, agencies and start-ups to create engaging
//                 content and meaningful experiences in the digital space.</h2>
//                 <h3>Learn more about our services and portfolio of work</h3>

//                     <div className="hero-latest-btn">
//                         <div>Register</div>
//                         <img src={arrow_icon} alt=""/>
//                     </div>
//             </div>
//             {/* <div className="hero-right">
//                 <img className="slider-img"src={slider_image} alt=""/>

//             </div> */}

//         </div>
//     )
// }

// export default Hero;



// import React, { useState, useEffect } from "react";
// import './Slider.css';
// import arrow_icon from '../Assets/arrow.png';
// import slider_image1 from '../Assets/slider_image1.avif';
// import slider_image2 from '../Assets/slider_image2.avif';
// import slider_image3 from '../Assets/slider_image3.avif';


// // Define your slider content here
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

// const Hero = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);

//     useEffect(() => {
//         const slideInterval = setInterval(() => {
//             setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//         }, 3000); // Change slide every 5 seconds

//         return () => clearInterval(slideInterval); // Cleanup interval on component unmount
//     }, []);

//     const { image, text } = slides[currentSlide];



//     return (
//         <div className="hero">
//             <div className="hero-left">
//                 <p className="hero-text">{text.p}</p>
//                 <h2 className="hero-text">{text.h2}</h2>
//                 <h3 className="hero-text">{text.h3}</h3>

//                 <div className="hero-latest-btn">
//                     <div>Register</div>
//                     <img src={arrow_icon} alt="arrow" />
//                 </div>
//             </div>
//             <div className="hero-right">
//                 <img className="slider-img" src={image} alt="Slider" />
//             </div>
//         </div>
//     );
// }

// export default Hero;

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
                    <Link to='/login'><button>Register</button></Link>
                    <img src={arrow_icon} alt="arrow" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
 