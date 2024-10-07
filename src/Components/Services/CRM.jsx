import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faChartBar, faUsers, faCog } from '@fortawesome/free-solid-svg-icons';
import crm1 from "../Assets/crm1.png";

const CRMPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with smooth animations
  }, []);

  return (
    <div className="bg-slate-100 text-gray-700 min-h-screen py-16">
      {/* Main Section with Paragraph and Image */}
      <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left side: Big paragraph */}
        <div className="lg:w-3/4 px-6" data-aos="fade-up">
          <h1 className="text-3xl text-gray-600 md:text-2xl font-bold mb-6 ">Empower Your Business with Our CRM Solutions</h1>
          <p className="text-base text-justify md:text-base text-gray-700 leading-relaxed mb-6">
            Our CRM solutions are designed to transform the way you manage your customer relationships. 
            With seamless integration, real-time analytics, and a customizable dashboard, you’ll be able to gain 
            deeper insights into your customer interactions, streamline processes, and boost productivity. 
            Whether you're managing sales pipelines or enhancing customer support, our CRM offers a comprehensive 
            set of tools to help your business thrive. Join countless businesses that have revolutionized their operations 
            with our cutting-edge technology, and experience firsthand how we can help you grow.
          </p>
          <Link to="/contact"> <button className=" text-sm tracking-wider bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Contact Us</button></Link>
        </div>
        {/* Right side: Large Image */}
        <div className="lg:w-1/2 p-6" data-aos="fade-down">
          <img src={crm1} alt="CRM Software" className="gray-image  w-3/5 h-auto" />
        </div>
      </section>

      {/* Additional Content with Icons */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-bold mb-12 text-gray-700" data-aos="fade-up">Why Choose Our CRM?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition" data-aos="fade-up" data-aos-delay="100">
              <FontAwesomeIcon icon={faSyncAlt} className="text-customBlue text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Seamless Integration</h3>
              <p className="text-gray-700 text-base">Easily integrate with existing tools like ERP, email, and customer support systems.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition" data-aos="fade-up" data-aos-delay="200">
              <FontAwesomeIcon icon={faChartBar} className="text-customBlue text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Real-Time Analytics</h3>
              <p className="text-gray-700 text-base ">Track performance and monitor key metrics with real-time data visualization.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition" data-aos="fade-up" data-aos-delay="300">
              <FontAwesomeIcon icon={faUsers} className="text-customBlue text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Customer Management</h3>
              <p className="text-gray-700 text-base">Manage customer data and interactions effectively with an intuitive interface.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition" data-aos="fade-up" data-aos-delay="400">
              <FontAwesomeIcon icon={faCog} className="text-customBlue text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Customizable Workflows</h3>
              <p className="text-gray-700 text-base">Customize CRM workflows to match your business processes and goals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CRMPage;

