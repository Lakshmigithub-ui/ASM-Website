import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import customerManagementImage from "../Assets/customer-management.png"; // Image for Customer Management service
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faClipboardCheck, faChartLine } from "@fortawesome/free-solid-svg-icons";

const CustomerManagement = () => {
  useEffect(() => {
    AOS.init({
      disable: () => window.innerWidth < 768, // Disable AOS on small screens
    });
  }, []);

  return (
    <div className="bg-slate-100 text-gray-700 min-h-screen p-8">
      {/* Header Section */}
      <section className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
        <div className="lg:w-1/2" data-aos="zoom-in">
          <img
            src={customerManagementImage}
            alt="Customer Management"
            className=" gray-image w-5/6 "
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left" data-aos="fade-up">
          <h1 className="text-2xl text-gray-600 font-extrabold mb-4 leading-tight">
            Streamline Your Business with <br /> Cutting-Edge Customer Management
          </h1>
          <p className="text-lg mb-6">
            Unlock the power of effective customer relationship management with tailored solutions. Increase customer loyalty,
            improve satisfaction, and drive performance with our advanced CRM strategies.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center justify-center lg:justify-start">
              <FontAwesomeIcon icon={faUserFriends} className="mr-3 text-sky-600" />
              <span>Comprehensive CRM Solutions</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <FontAwesomeIcon icon={faClipboardCheck} className="mr-3 text-sky-600" />
              <span>Efficient Data Management</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <FontAwesomeIcon icon={faChartLine} className="mr-3 text-sky-600" />
              <span>Performance Analytics and Insights</span>
            </li>
          </ul>
          <Link to="/contact"> <button className=" text-sm tracking-wider bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Contact Us</button></Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 text-center lg:text-left" data-aos="fade-up">
        <div className="bg-slate-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-3">Personalized Customer Journeys</h2>
          <p className="text-base">
            Deliver tailored experiences to each customer based on their unique behaviors, preferences, and needs.
          </p>
        </div>
        <div className="bg-slate-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-3">Effortless Communication</h2>
          <p className="text-base">
            Maintain streamlined communication channels that keep your customers informed and engaged.
          </p>
        </div>
        <div className="bg-slate-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-xl font-bold mb-3">Powerful Analytics Tools</h2>
          <p className="text-base">
            Leverage powerful reporting tools to analyze customer behavior and optimize your strategy.
          </p>
        </div>
      </section>

    </div>
  );
};

export default CustomerManagement;
