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
    // fade: true, // Enable fade effect
    // cssEase: 'ease-in-out' // Smooth fade transition
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
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="200">
          <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. Dhas Karthick &nbsp;- &nbsp; <span className="font-normal">Marlen India Pvt. Ltd</span>
          </p>
          <p className="text-gray-300">
            "We tried Mirror Minds for a particular need. We are extremely satisfied with the end result, cost, delivery time and communication. Mr.Rajendran and Mr.Dinesh are exceptionally sharp guys who take good care of our needs and delivered above PAR. Mirror Minds is trustworthy, skilled and an overall good partner for a wide variety of Application and website development needs."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="300">
          <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. SSS &nbsp;- &nbsp; <span className="font-normal">SSS Automation.net</span>
          </p>
          <p className="text-gray-300">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="400">
          <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. Inspire Media &nbsp;- &nbsp; <span className="font-normal">Inspire Media.in</span>
          </p>
          <p className="text-gray-300">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="500">
          <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. Muthu Kumar &nbsp;- &nbsp; <span className="font-normal">SMK Traders</span>
          </p>
          <p className="text-gray-300">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Akash on completing my website with a great outcome."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="600">
          <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. Priyamehan &nbsp;- &nbsp; <span className="font-normal">Priyamehan Novels.com</span>
          </p>
          <p className="text-gray-300">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg" data-aos="fade-up" data-aos-delay="700">
          <p className="text-xl font-semibold mb-2 transition-transform duration-500 transform hover:scale-105">
            Mr. Uyirmei &nbsp;- &nbsp; <span className="font-normal">Uriymei Seithigal</span>
          </p>
          <p className="text-gray-300">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
