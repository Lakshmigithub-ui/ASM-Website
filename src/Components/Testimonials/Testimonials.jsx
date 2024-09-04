// import React from 'react';
// import Slider from 'react-slick';
// import './Testimonials.css';

// const Testimonials = () => {
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
//     <div className="testimonials-container">
//       <h2 className="testimonials-heading">Some Words from our Happy Clients</h2>
//       <Slider {...settings} className="testimonials-slider">
//         <div className="testimonial">
//         <p className="testimonial-author">Mr. Ramesh &nbsp;- &nbsp; </p>
//           <p className="testimonial-company">Kaaviya Properties</p>
//           <p className="testimonial-text">
//             "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
//           </p>
//         </div>
        
//         <div className="testimonial">
//         <p className="testimonial-author">Mr.Dhas Karthick  &nbsp;- &nbsp; </p>
//           <p className="testimonial-company">Marlen India Pvt.Ltd</p>
//           <p className="testimonial-text">
//             "We tried Mirror Minds for a particular need. We are extremely satisfied with the end result, cost, delivery time and communication. Mr.Rajendran and Mr.Dinesh are an exceptionally sharp guys who takes good care of our needs and delivered above PAR. Mirror Minds is trustworthy, skilled and an overall good partner for a wide variety of Application and website development needs."
//           </p>
//         </div>

//         <div className="testimonial">
//         <p className="testimonial-author">Mr.SSS  &nbsp;- &nbsp;</p>
//           <p className="testimonial-company">SSS Automation.net</p>
//           <p className="testimonial-text">
//             "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
//           </p>
//         </div>

//         <div className="testimonial">
//         <p className="testimonial-author">Mr.Inspire Media  &nbsp;- &nbsp;</p>
//           <p className="testimonial-company">Inspire Media.in</p>
//           <p className="testimonial-text">
//             "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
//           </p>
//         </div>

//         <div className="testimonial">
//         <p className="testimonial-author">Mr.Muthu Kumar &nbsp;- &nbsp;</p>
//           <p className="testimonial-company">SMK Traders</p>
//           <p className="testimonial-text">
//             "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.AAkash on completing my website with a great outcome."
//           </p>
//         </div>

//         <div className="testimonial">
//         <p className="testimonial-author">Mr.Priyamehan &nbsp;- &nbsp;</p>
//           <p className="testimonial-company">Priyamehan Novels.com</p>
//           <p className="testimonial-text">
//             "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
//           </p>
//         </div>

//         <div className="testimonial">
//         <p className="testimonial-author">Mr.Uyirmei &nbsp;- &nbsp;</p>
//           <p className="testimonial-company">Uriymei Seithigal</p>
//           <p className="testimonial-text">
//             "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
//           </p>
//         </div>

//       </Slider>
//     </div>
//   );
// };

// export default Testimonials;

import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css'; // You can leave this empty or remove if all styles are in Tailwind

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
    <div className="bg-slate-800 text-white py-12 px-6 lg:px-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Some Words from our Happy Clients</h2>
      <Slider {...settings} className="text-center">
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <p className="text-xl font-semibold mb-2">Mr. Ramesh &nbsp;- &nbsp; <span className="font-normal">Kaaviya Properties</span></p>
          <p className="text-gray-300">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <p className="text-xl font-semibold mb-2">Mr. Dhas Karthick &nbsp;- &nbsp; <span className="font-normal">Marlen India Pvt. Ltd</span></p>
          <p className="text-gray-300">
            "We tried Mirror Minds for a particular need. We are extremely satisfied with the end result, cost, delivery time and communication. Mr.Rajendran and Mr.Dinesh are exceptionally sharp guys who take good care of our needs and delivered above PAR. Mirror Minds is trustworthy, skilled and an overall good partner for a wide variety of Application and website development needs."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <p className="text-xl font-semibold mb-2">Mr. SSS &nbsp;- &nbsp; <span className="font-normal">SSS Automation.net</span></p>
          <p className="text-gray-300">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <p className="text-xl font-semibold mb-2">Mr. Inspire Media &nbsp;- &nbsp; <span className="font-normal">Inspire Media.in</span></p>
          <p className="text-gray-300">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <p className="text-xl font-semibold mb-2">Mr. Muthu Kumar &nbsp;- &nbsp; <span className="font-normal">SMK Traders</span></p>
          <p className="text-gray-300">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Akash on completing my website with a great outcome."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <p className="text-xl font-semibold mb-2">Mr. Priyamehan &nbsp;- &nbsp; <span className="font-normal">Priyamehan Novels.com</span></p>
          <p className="text-gray-300">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
          </p>
        </div>
        <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
          <p className="text-xl font-semibold mb-2">Mr. Uyirmei &nbsp;- &nbsp; <span className="font-normal">Uriymei Seithigal</span></p>
          <p className="text-gray-300">
            "They did a very good job on designing my website and absolutely listened to the client's queries and fixed it accordingly. My Credits to Mr.Rajendran on completing my website with a great outcome."
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;

