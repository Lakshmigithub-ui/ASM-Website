import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css'; // Import the CSS file for styling

const Testimonials = () => {
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
    <div className="testimonials-container">
      <h2 className="testimonials-heading">Happy Clients</h2>
      <Slider {...settings} className="testimonials-slider">
        <div className="testimonial">
          <p className="testimonial-text">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. Credits to Mr. Rajendran on completing my website with a great outcome."
          </p>
          <p className="testimonial-author">- Mr. Ramesh</p>
          <p className="testimonial-company">Kaaviya Properties</p>
        </div>
        
        <div className="testimonial">
          <p className="testimonial-text">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. Credits to Mr. Rajendran on completing my website with a great outcome."
          </p>
          <p className="testimonial-author">- Mr. Ramesh</p>
          <p className="testimonial-company">Kaaviya Properties</p>
        </div>
        <div className="testimonial">
          <p className="testimonial-text">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. Credits to Mr. Rajendran on completing my website with a great outcome."
          </p>
          <p className="testimonial-author">- Mr. Ramesh</p>
          <p className="testimonial-company">Kaaviya Properties</p>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. Credits to Mr. Rajendran on completing my website with a great outcome."
          </p>
          <p className="testimonial-author">- Mr. Ramesh</p>
          <p className="testimonial-company">Kaaviya Properties</p>
        </div>

        {/* You can add more testimonials here */}
      </Slider>
    </div>
  );
};

export default Testimonials;
