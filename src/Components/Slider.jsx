import React from 'react';
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import slider_image1 from './Assets/slider_image1.avif';
import slider_image2 from './Assets/slider_image2.avif';
import slider_image3 from './Assets/slider_image3.avif';

// Slide data
const slides = [
    {
        image: slider_image1,
        text: {
            p: "We Design Delightful Customer Experience",
            h2: "Partnering with brands, agencies, and start-ups to create engaging content and meaningful experiences.",
            h3: "Learn more about our services and portfolio"
        }
    },
    {
        image: slider_image2,
        text: {
            p: "Crafting Innovative Digital Solutions",
            h2: "Creating cutting-edge digital experiences that drive engagement and success.",
            h3: "Discover our approach and success stories"
        }
    },
    {
        image: slider_image3,
        text: {
            p: "Transforming Ideas into Reality",
            h2: "Turning visions into reality with tailored digital strategies and designs.",
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
    customPaging: i => (
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
    ),
    dotsClass: "slick-dots absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
};

const Hero = () => {
    return (
        <div className="relative bg-gray-900 text-white py-16 px-4 md:px-8">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between text-center lg:text-left p-4 md:p-8">
                        <div className="lg:w-1/2 max-w-xl lg:max-w-md lg:pr-8">
                            <p className="text-lg mb-4">{slide.text.p}</p>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">{slide.text.h2}</h2>
                            <h3 className="text-xl mb-6">{slide.text.h3}</h3>
                            <Link to='/GetQuote'>
                                <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                                    Get Quote
                                </button>
                            </Link>
                        </div>
                        <br></br>

                        <div className="lg:w-1/2 mt-8 lg:mt-0">
                            <img 
                                className="w-[500px] h-auto object-cover rounded-lg shadow-lg" 
                                src={slide.image} 
                                alt={`Slide ${index + 1}`} 
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Hero;
