// import React from 'react';
// import './Community.css'; 
// import web_development from "../Assets/web_development.avif";
// import digital_marketing from "../Assets/digital_marketing.jpg";
// import billing_solutions from "../Assets/billing-solutions.avif";

// const Community = () => {
//   return (
//     <div className="services-container">
//       <h1 className="services-title">Manage your entire community  </h1>
//       <h1 className="services-title">in a single system</h1>
//       <p>Who is Nextcent suitable for?</p>
//       <div className="services-boxes">
//         <div className="service-box">
//           <img src={web_development} alt="Web Development" className="service-logo" />
//           <h2>Web Development</h2>
//           <p>We create responsive and high-performance websites tailored to your business needs. From design to deployment, our team ensures your web presence stands out.</p>
//         </div>
//         <div className="service-box">
//           <img src={digital_marketing} alt="Digital Marketing" className="service-logo" />
//           <h2>Digital Marketing</h2>
//           <p>Boost your online presence with our comprehensive digital marketing services. We offer SEO, social media management, and targeted advertising to grow your audience.</p>
//         </div>
//         <div className="service-box">
//           <img src={billing_solutions} alt="Billing Solutions" className="service-logo" />
//           <h2>Billing Solutions</h2>
//           <p>Streamline your billing process with our innovative solutions. We provide easy-to-use billing systems that simplify invoicing, payments, and financial reporting.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Community;

// import React from 'react';
// import web_development from '../Assets/web_development.avif';
// import mobile_app from '../Assets/mobile_app.avif';
// import matrimony_app from '../Assets/matrimony_app.avif';
// import billing_software from '../Assets/billing_software.avif';
// import crm from '../Assets/crm.avif';
// import e_commerce from '../Assets/e_commerce.avif';
// import inventory_app from '../Assets/inventory_app.avif';
// import timesheet from '../Assets/timesheet.avif';
// import moi_soft from '../Assets/moi_soft.avif';
// import customer_management from '../Assets/customer_management.avif';
// import event_app from '../Assets/event_app.avif';
// import digital_marketing from '../Assets/digital_marketing.avif';

// const services = [
//   { title: 'Web Development', img: web_development, description: 'We create responsive and high-performance websites tailored to your business needs. From design to deployment, our team ensures your web presence stands out.' },
//   { title: 'Mobile App Development', img: mobile_app, description: 'Build intuitive and high-performance mobile apps for iOS and Android, tailored to meet your users’ needs.' },
//   { title: 'Matrimony App', img: matrimony_app, description: 'Custom matrimonial platforms designed to connect people and help them find meaningful relationships.' },
//   { title: 'Billing Software', img: billing_software, description: 'Innovative billing solutions that streamline invoicing, payments, and financial reporting for your business.' },
//   { title: 'CRM', img: crm, description: 'Robust CRM systems to enhance customer relationships and manage interactions efficiently.' },
//   { title: 'E-Commerce', img: e_commerce, description: 'Powerful e-commerce solutions to elevate your online store and drive sales.' },
//   { title: 'Inventory App', img: inventory_app, description: 'Simplify inventory management with our smart and user-friendly inventory control applications.' },
//   { title: 'Timesheet', img: timesheet, description: 'Track employee time and productivity efficiently with our timesheet software.' },
//   { title: 'MOI Soft', img: moi_soft, description: 'Specialized software solutions designed to meet specific industry needs and challenges.' },
//   { title: 'Customer Management App', img: customer_management, description: 'Tools to manage and nurture customer relationships, improving customer satisfaction and loyalty.' },
//   { title: 'Event App', img: event_app, description: 'Comprehensive event planning applications to organize and manage events seamlessly.' },
//   { title: 'Digital Marketing', img: digital_marketing, description: 'Boost your online presence with targeted digital marketing services, including SEO and social media management.' }
// ];

// const Services = () => {
//   return (
//     <div className="bg-gray-900 text-white py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto text-center">
//         <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
//         <p className="text-lg mb-12">Explore the diverse range of services we offer to help your business thrive.</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
//             >
//               <img src={service.img} alt={service.title} className="w-32 h-32 object-cover mb-4 rounded-full border-2 border-gray-700" />
//               <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
//               <p className="text-center">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;


// import React from 'react';
// import Slider from 'react-slick';
// import web_development from '../Assets/web_development.avif';
// import mobile_app from '../Assets/mobile_app.avif';
// import matrimony_app from '../Assets/matrimony_app.avif';
// import billing_software from '../Assets/billing_software.avif';
// import crm from '../Assets/crm.avif';
// import e_commerce from '../Assets/e_commerce.avif';
// import inventory_app from '../Assets/inventory_app.avif';
// import timesheet from '../Assets/timesheet.avif';
// import moi_soft from '../Assets/moi_soft.avif';
// import customer_management from '../Assets/customer_management.avif';
// import event_app from '../Assets/event_app.avif';
// import digital_marketing from '../Assets/digital_marketing.avif';
// import './Community.css'; // Make sure this imports Slick styles as well

// const services = [
//   { title: 'Web Development', img: web_development, description: 'We create responsive and high-performance websites tailored to your business needs. From design to deployment, our team ensures your web presence stands out.' },
//   { title: 'Mobile App Development', img: mobile_app, description: 'Build intuitive and high-performance mobile apps for iOS and Android, tailored to meet your users’ needs.' },
//   { title: 'Matrimony App', img: matrimony_app, description: 'Custom matrimonial platforms designed to connect people and help them find meaningful relationships.' },
//   { title: 'Billing Software', img: billing_software, description: 'Innovative billing solutions that streamline invoicing, payments, and financial reporting for your business.' },
//   { title: 'CRM', img: crm, description: 'Robust CRM systems to enhance customer relationships and manage interactions efficiently.' },
//   { title: 'E-Commerce', img: e_commerce, description: 'Powerful e-commerce solutions to elevate your online store and drive sales.' },
//   { title: 'Inventory App', img: inventory_app, description: 'Simplify inventory management with our smart and user-friendly inventory control applications.' },
//   { title: 'Timesheet', img: timesheet, description: 'Track employee time and productivity efficiently with our timesheet software.' },
//   { title: 'MOI Soft', img: moi_soft, description: 'Specialized software solutions designed to meet specific industry needs and challenges.' },
//   { title: 'Customer Management App', img: customer_management, description: 'Tools to manage and nurture customer relationships, improving customer satisfaction and loyalty.' },
//   { title: 'Event App', img: event_app, description: 'Comprehensive event planning applications to organize and manage events seamlessly.' },
//   { title: 'Digital Marketing', img: digital_marketing, description: 'Boost your online presence with targeted digital marketing services, including SEO and social media management.' }
// ];

// const Services = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     centerMode: false,
//     focusOnSelect: true,
//     arrows: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         }
//       }
//     ]
//   };

//   return (
//     <div className="bg-gray-900 text-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Services</h1>
//         <p className="text-lg mb-12 text-center">Explore the diverse range of services we offer to help your business thrive.</p>
//         <Slider {...settings}>
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-gray-800 p-4 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl mx-2" // Added mx-2 for horizontal spacing
//             >
//               <img src={service.img} alt={service.title} className="w-full h-32 object-cover mb-4 border-2 border-gray-700" /> {/* Adjusted width and height */}
//               <h2 className="text-lg text-center font-semibold mb-2">{service.title}</h2>
//               <p className="text-center text-sm">{service.description}</p>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from 'react';
import Slider from 'react-slick';
import web_development from '../Assets/web_development.avif';
import mobile_app from '../Assets/mobile_app.avif';
import matrimony_app from '../Assets/matrimony_app.avif';
import billing_software from '../Assets/billing_software.avif';
import crm from '../Assets/crm.avif';
import e_commerce from '../Assets/e_commerce.avif';
import inventory_app from '../Assets/inventory_app.avif';
import timesheet from '../Assets/timesheet.avif';
import moi_soft from '../Assets/moi_soft.avif';
import customer_management from '../Assets/customer_management.avif';
import event_app from '../Assets/event_app.avif';
import digital_marketing from '../Assets/digital_marketing.avif';
import { FaCode, FaMobileAlt, FaHeart, FaFileInvoiceDollar, FaUsers, FaShoppingCart, FaBoxes, FaClock, FaIndustry, FaUserTie, FaCalendarAlt, FaBullhorn } from 'react-icons/fa';
import './Community.css'; // Make sure this imports Slick styles as well

const services = [
  { title: 'Web Development', img: web_development, description: 'We create responsive and high-performance websites tailored to your business needs till deployment.', icon: FaCode },
  { title: 'Mobile App Development', img: mobile_app, description: 'Build intuitive and high-performance mobile apps for iOS and Android, tailored to meet your users’ needs.', icon: FaMobileAlt },
  { title: 'Matrimony App', img: matrimony_app, description: 'Custom matrimonial platforms designed to connect people and help them find meaningful relationships.', icon: FaHeart },
  { title: 'Billing Software', img: billing_software, description: 'Innovative billing solutions that streamline invoicing, payments, and financial reporting for your business.', icon: FaFileInvoiceDollar },
  { title: 'CRM', img: crm, description: 'Robust CRM systems to enhance customer relationships and manage interactions efficiently.', icon: FaUsers },
  { title: 'E-Commerce', img: e_commerce, description: 'Powerful e-commerce solutions to elevate your online store and drive sales.', icon: FaShoppingCart },
  { title: 'Inventory App', img: inventory_app, description: 'Simplify inventory management with our smart and user-friendly inventory control applications.', icon: FaBoxes },
  { title: 'Timesheet', img: timesheet, description: 'Track employee time and productivity efficiently with our timesheet software.', icon: FaClock },
  { title: 'MOI Soft', img: moi_soft, description: 'Specialized software solutions designed to meet specific industry needs and challenges.', icon: FaIndustry },
  { title: 'Customer Management App', img: customer_management, description: 'Tools to manage and nurture customer relationships, improving customer satisfaction and loyalty.', icon: FaUserTie },
  { title: 'Event App', img: event_app, description: 'Comprehensive event planning applications to organize and manage events seamlessly.', icon: FaCalendarAlt },
  { title: 'Digital Marketing', img: digital_marketing, description: 'Boost your online presence with targeted digital marketing services, including social media management.', icon: FaBullhorn }
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-gray-900 text-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Services</h1>
        <p className="text-lg mb-12 text-center">Explore the diverse range of services we offer to help your business thrive.</p>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl mx-2" // Added mx-2 for horizontal spacing
            >
              <img src={service.img} alt={service.title} className="w-full h-40  mb-4 border-2 border-gray-700" />
              <h2 className="text-lg text-center font-semibold mb-2">{service.title}</h2>
              <p className="text-center text-sm mb-4">{service.description}</p>
              <div className="text-center">
                <service.icon className="text-4xl mx-auto text-gray-400" /> {/* Render the icon */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
