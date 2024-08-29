import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';

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
            "We tried Mirror Minds for a particular need. We are extremely satisfied with the end result, cost, delivery time and communication. Mr.Rajendran and Mr.Dinesh are an exceptionally sharp guys who takes good care of our needs and delivered above PAR. Mirror Minds is trustworthy, skilled and an overall good partner for a wide variety of Application and website development needs."
          </p>
          <p className="testimonial-author">- Mr.Dhas Karthick </p>
          <p className="testimonial-company">Marlen India Pvt.Ltd</p>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. Credits to Mr. Rajendran on completing my website with a great outcome."
          </p>
          <p className="testimonial-author">- Mr.SSS</p>
          <p className="testimonial-company">SSS Automation.net</p>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. Credits to Mr. Rajendran on completing my website with a great outcome."
          </p>
          <p className="testimonial-author">- Mr.Inspire Media</p>
          <p className="testimonial-company">Inspire Media.in</p>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. Credits to Mr. Rajendran on completing my website with a great outcome."
          </p>
          <p className="testimonial-author">- Mr.SMK</p>
          <p className="testimonial-company">SMK Traders</p>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. Credits to Mr. Rajendran on completing my website with a great outcome."
          </p>
          <p className="testimonial-author">- Mr.Priyamehan</p>
          <p className="testimonial-company">Priyamehan Novels.com</p>
        </div>

        <div className="testimonial">
          <p className="testimonial-text">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. Credits to Mr. Rajendran on completing my website with a great outcome."
          </p>
          <p className="testimonial-author">- Mr.Uyirmei</p>
          <p className="testimonial-company">Uriymei Seithigal</p>
        </div>


      </Slider>
    </div>
  );
};

export default Testimonials;
