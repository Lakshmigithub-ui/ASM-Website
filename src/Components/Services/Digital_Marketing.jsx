import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import digitalMarketingImage from "../Assets/digital_marketing.png"; // Image for Digital Marketing service
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faSearch, faChartPie } from '@fortawesome/free-solid-svg-icons';

const DigitalMarketing = () => {
  useEffect(() => {
    AOS.init({ disable: () => window.innerWidth < 768 });
  }, []);

  return (
    <div className="bg-slate-100 text-gray-700 min-h-screen p-12">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl text-gray-600 font-extrabold mb-4" data-aos="fade-up">Unleash the Power of Digital Marketing</h1>
        <p className="text-lg  mb-6" data-aos="fade-up" data-aos-delay="200">
        Digital marketing is a powerful tool for businesses to connect with their audience, drive engagement, and increase brand visibility. It leverages channels like social media, search engines, email, and content marketing to promote products or services. Through targeted advertising and SEO optimization, businesses can reach specific customer groups more effectively. Additionally, performance tracking and analytics provide insights to refine strategies and maximize ROI. A well-executed digital marketing plan can significantly enhance a company's online presence and lead to measurable business growth.        </p>
        <Link to="/contact"> <button className=" text-sm tracking-wider bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Contact Us</button></Link>
        </section>

      {/* Image and Services Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Image */}
        <div className="lg:w-1/2" data-aos="fade-right">
          <img src={digitalMarketingImage} alt="Digital Marketing" className="gray-image w-3/4" />
        </div>

        {/* Services List */}
        <div className="lg:w-1/2 space-y-8" data-aos="fade-left">
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faBullhorn} className="text-customBlue text-2xl" />
            <div>
              <h3 className="text-xl font-bold">Targeted Advertising</h3>
              <p className="text-gray-400">Reach the right audience with precision targeting and tailored campaigns.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faSearch} className="text-customBlue text-2xl" />
            <div>
              <h3 className="text-xl font-bold">SEO Optimization</h3>
              <p className="text-gray-400">Boost your visibility on search engines and drive organic traffic to your site.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faChartPie} className="text-customBlue text-2xl" />
            <div>
              <h3 className="text-xl font-bold">Performance Tracking</h3>
              <p className="text-gray-400">Track the success of your campaigns with detailed analytics and reports.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DigitalMarketing;
