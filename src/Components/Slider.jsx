import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import slider_image1 from './Assets/slider_image1.avif';
import slider_image2 from './Assets/slider_image2.avif';
import slider_image3 from './Assets/slider_image3.avif';
import background_video3 from './Assets/background_video3.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Slide data
const slides = [
    {
        image: slider_image1,
        text: {
            h2: "Empowering Businesses with Cutting-Edge Web Development",
            p: "Our web development services are designed to help businesses thrive in the digital age. We create fast, secure, and responsive websites that deliver an exceptional user experience. Whether it's a simple website or a complex web application, we bring your vision to life with innovative technologies and solutions tailored to your needs."
        }
    },
    {
        image: slider_image2,
        text: {
            h2: "Innovative Mobile Development for a Connected World",
            p: "Crafting Innovative Digital Solutions.  We specialize in creating high-performance mobile apps that engage users and drive business growth. From iOS to Android, our mobile development solutions are tailored to deliver seamless user experiences on any device. With cutting-edge technologies and a focus on quality, we bring your ideas to life in the mobile-first era."
        }
    },
    {
        image: slider_image3,
        text: {
            h2: "Boost Your Online Presence with Expert Digital Marketing",
            p: "Our digital marketing strategies are designed to increase your brand visibility and drive meaningful engagement. From SEO to social media campaigns, we create data-driven solutions tailored to your business goals. Let us help you reach your audience effectively and grow your business in the competitive online landscape."
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
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

    return (
        <div className="relative bg-gray-900 text-white py-16 px-4 md:px-8">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src={background_video3} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay to darken the background video for better text visibility */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            <div className="relative z-20">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col lg:flex-row items-center justify-between p-4 md:p-8"
                        >
                            <div className="flex lg:flex-row flex-col">
                                {/* Text on the left */}
                                <div className='m-9'>
                                    <h2 
                                        className="text-3xl md:text-4xl font-bold mb-4"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 300}
                                    >
                                        {slide.text.h2}
                                    </h2>
                                    <p 
                                        className="text-lg mb-4"
                                        data-aos="fade-up"
                                        data-aos-delay={index * 400}
                                    >
                                        {slide.text.p}
                                    </p>
                                    <br />
                                    <Link to='/GetQuote'>
                                        <button
                                            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                                            data-aos="fade-up"
                                            data-aos-delay={index * 500}
                                        >
                                            Get Quote
                                        </button>
                                    </Link>
                                </div>

                                {/* Image on the right */}
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
        </div>
    );
};

export default Hero;
