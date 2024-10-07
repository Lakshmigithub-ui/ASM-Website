import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import softwareImage from "../Assets/moi.png"; // Image for Software Development service
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCogs, faDesktop } from '@fortawesome/free-solid-svg-icons';

const MozhiSoftware = () => {
  useEffect(() => {
    AOS.init({
      disable: () => window.innerWidth < 768, // Disable AOS on small screens
    });
  }, []);

  return (
    <div className="bg-gray-100  text-gray-700 min-h-screen p-8">
      <div className="max-w-7xl mx-auto items-center  justify-between">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between mb-12">
        <div className="lg:w-3/4 mb-8 lg:mb-0" data-aos="fade-right">
          <h1 className="text-3xl  font-bold mb-4 text-gray-600">Innovative Software Solutions by Mozhi Software</h1>
          <p className="text-base text-justify mb-6">
          At ASM Infotech, we recognize that collecting information about gifts exchanged among friends and relatives, as well as return gifts, is essential for fostering deeper personal connections and enhancing the gifting experience. This data enables individuals and businesses to understand the preferences and tastes of their loved ones, ensuring that future gifts are more thoughtful and meaningful. By tracking gift information, you can avoid duplicate gifts and curate a personalized approach to gifting that resonates with each recipient. Furthermore, understanding the return gift dynamics allows you to express gratitude and appreciation appropriately, enhancing relationships and creating a positive impression. Ultimately, this approach not only enriches the joy of giving and receiving but also cultivates a culture of thoughtfulness and consideration among friends and family. </p>
          <Link to="/contact"> <button className=" text-sm tracking-wider bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105" data-aos="fade-up" data-aos-delay="200">Contact Us</button></Link>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2" data-aos="fade-left">
          <img
            src={softwareImage}
            alt="Software Development"
            className=" w-9/12 h-auto"
          />
        </div>
      </section>

      {/* Service Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FontAwesomeIcon icon={faCode} className="text-sky-600 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-3">Custom Software Development</h2>
          <p className="text-sm">
            Tailored software solutions to meet your unique business requirements and challenges. We focus on scalability and performance.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FontAwesomeIcon icon={faCogs} className="text-sky-600 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-3">System Integration Services</h2>
          <p className="text-sm">
            Seamlessly integrate various software systems and applications to ensure smooth operations and data flow across your organization.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <FontAwesomeIcon icon={faDesktop} className="text-sky-600 text-4xl mb-4" />
          <h2 className="text-xl font-semibold mb-3">Web and Mobile Application Development</h2>
          <p className="text-sm">
            Develop responsive and user-friendly web and mobile applications that enhance user engagement and accessibility.
          </p>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
        <div className="bg-slate-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-lg font-bold mb-3">Consultation & Strategy</h2>
          <p className="text-sm mb-4">
            Our experts provide insights and strategies to help you navigate the complex software landscape and achieve your business goals.
          </p>
        </div>
        <div className="bg-slate-50 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <h2 className="text-lg font-bold mb-3">Maintenance & Support</h2>
          <p className="text-sm mb-4">
            We offer ongoing maintenance and support services to ensure your software remains up-to-date and performs optimally.
          </p>
        </div>
      </section>

      </div>
    </div>
  );
};

export default MozhiSoftware;
