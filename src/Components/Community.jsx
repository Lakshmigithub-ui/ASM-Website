import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import { FaCode, FaMobileAlt, FaHeart, FaFileInvoiceDollar, FaUsers, FaShoppingCart, FaBoxes, FaClock, FaIndustry, FaUserTie, FaCalendarAlt, FaBullhorn } from 'react-icons/fa';

const services = [
  { title: 'Web Development', description: 'We create responsive and high-performance websites tailored to your business needs till deployment.', icon: FaCode, link: '/web_development' },
  { title: 'Mobile App Development', description: 'Build intuitive and high-performance mobile apps for iOS and Android, tailored to meet your users’ needs.', icon: FaMobileAlt, link: '/mobile_app' },
  { title: 'Matrimony App', description: 'Custom matrimonial platforms designed to connect people and help them find meaningful relationships.', icon: FaHeart, link: '/matrimony_app' },
  { title: 'Billing Software',description: 'Innovative billing solutions that streamline invoicing, payments, and financial reporting for your business.', icon: FaFileInvoiceDollar, link: '/billing' },
  { title: 'CRM', description: 'Robust CRM systems to enhance customer relationships and manage interactions efficiently.', icon: FaUsers, link: '/crm' },
  { title: 'E-Commerce', description: ' Powerful e-commerce solutions to elevate your online store and drive sales.', icon: FaShoppingCart, link: '/e_commerce' },
  { title: 'Inventory App',  description: 'Simplify inventory management with our smart and user-friendly inventory control applications.', icon: FaBoxes, link: '/inventory_app' },
  { title: 'Timesheet', description: 'Track employee time and productivity efficiently with our timesheet software.', icon: FaClock, link: '/time_sheet' },
  { title: 'MOI Soft',  description: 'Specialized software solutions designed to meet specific industry needs and challenges.', icon: FaIndustry,link: '/moi_soft' },
  { title: 'Customer Management App', description: 'Tools to manage and nurture customer relationships, improving customer satisfaction and loyalty.', icon: FaUserTie, link: '/customer_management' },
  { title: 'Event App',description: 'Comprehensive event planning applications to organize and manage events seamlessly.', icon: FaCalendarAlt, link: '/event_app' },
  { title: 'Digital Marketing', description: 'Boost your online presence with targeted digital marketing services, including social media management.', icon: FaBullhorn, link: '/digital_marketing' }
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className="bg-gray-900 text-slate-300 py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 data-aos="fade-up" className="text-2xl md:text-2xl font-bold mb-4 text-center">Our Services</h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-lg mb-12 text-center">Explore the diverse range of services we offer to help your business thrive.</p>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4"
              data-aos="zoom-in"
              data-aos-delay={index * 100} // Staggered animation
            >
              <div className="bg-gray-800 flex flex-col items-center justify-between min-h-[300px] min-w-[250px] p-6 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <div className="text-center">
                  <service.icon className="text-4xl mx-auto text-customBlue" />
                </div>
               
                <h2 className="text-lg text-center font-medium mb-2">{service.title}</h2>
                <p className="text-center text-sm font-light mb-4">{service.description}</p>
                <div className="text-center ">
                  <Link to={service.link} className="text-customBlue font-semibold hover:underline">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
