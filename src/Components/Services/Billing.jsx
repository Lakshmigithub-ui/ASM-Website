import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCashRegister,
  faUsers,
  faHeadset,
  faFileInvoice,
  faChartLine,
  faUserCog,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons";
import billing from "../Assets/smkbilling.png";

const sections = [
  {
    title: "POS",
    icon: faCashRegister,
    content: [
      "Point-of-Sale: Efficient, dependable, and precise billing",
      "POS System: Quick, accurate, and reliable transactions",
    ],
  },
  {
    title: "Customer Retail",
    icon: faUsers,
    content: [
      "Retail Management: Precise and highly responsive software solutions",
      "Customer-Focused Retail: Accurate, responsive, and intuitive software",
    ],
  },
  {
    title: "Support",
    icon: faHeadset,
    content: [
      "Customer Assistance: Rapid resolution with dedicated and hassle-free support",
      "Technical Support: Swift problem-solving with personalized assistance",
    ],
  },
  {
    title: "GST",
    icon: faFileInvoice,
    content: [
      "Tax Compliance: Accurate GST management for regulatory adherence",
      "GST Solutions: Ensure compliance with precise tax calculations",
    ],
  },
  {
    title: "MIS",
    icon: faChartLine,
    content: [
      "Management Information System: Access real-time, accurate data in a single dashboard",
      "Data Insights: Centralized, reliable information for informed decision-making",
    ],
  },
  {
    title: "Account",
    icon: faUserCog,
    content: [
      "Financial Management: Secure and up-to-date account details in one place",
      "Account Overview: Comprehensive and secure account information management",
    ],
  },
];

const industries = [
  "Supermarkets",
  "Garments & Textiles",
  "Pharmacies",
  "Textile Mills",
  "Footwear Stores",
  "Furniture Stores",
  "Electronics Stores",
  "Automobile Dealerships",
];

const App = () => {
  useEffect(() => {
    AOS.init({
      // disable: true,
      disable: function () {
        return window.innerWidth < 768; // Disable AOS on screens smaller than 768px
      },
      // easing: 'ease-in-out',
      // once: true,
    });
  }, []);

  return (
    <div className="bg-slate-100 text-gray-700 min-h-screen p-8">
      <h1
        className="text-lg font-semibold mb-6 text-center"
        data-aos="fade-down"
      >
        Enhance Your Business Operations with Advanced Retail Billing Software
      </h1>
      <p className="text-sm text-justify mb-6 text-center" data-aos="fade-up">
        Let’s discuss your business needs and goals. Whether you're just
        starting or looking to scale, we’re here to help you create a tailored
        strategy that maximizes your online presence. Our team of experts will
        analyze your unique requirements and craft a personalized plan to take
        your business online, ensuring growth and success in the digital world.
      </p>
      <div className="flex justify-center mb-6">
        <Link to="/contact">
          {" "}
          <button
            className=" text-sm bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Start Now
          </button>
        </Link>
      </div>

      {/* Section with Image on the left and paragraph on the right */}
      <div
        className="flex flex-col lg:flex-row items-center lg:space-x-6 mb-12"
        data-aos="fade-up"
      >
        <div className="lg:w-1/2">
          <img
            src={billing}
            alt="Billing Software"
            className="gray-image rounded-lg shadow-lg mb-4 lg:mb-0"
          />
        </div>
        <div className="lg:w-1/2 text-lg space-y-4">
          <h2 className="text-lg font-semibold">
            Why Choose Our Billing Software?
          </h2>
          <p className="text-sm text-justify">
            Our advanced billing software is designed to streamline your
            business operations, making transactions quick, accurate, and
            efficient. With features such as POS systems, GST compliance, and
            real-time MIS, we ensure your business remains productive and
            compliant, no matter the industry.
          </p>
          <p className="text-sm text-justify">
            Whether you operate a supermarket, textile mill, or electronics
            store, our tailored solutions offer reliable financial management,
            customer support, and detailed reporting to enhance every aspect of
            your business.
          </p>
        </div>
      </div>

      <div className="mb-8 text-center">
        <h2
          className="text-lg font-semibold mb-4 text-center"
          data-aos="fade-up"
        >
          Industries We Serve
        </h2>
        <div className="relative overflow-hidden">
          <div className="animate-slide flex space-x-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-slate-50 text-gray-700 p-4 mb-8 rounded-lg shadow-lg flex items-center space-x-3 transform transition-transform hover:scale-105"
                data-aos="fade-left"
                data-aos-delay={index * 100}
              >
                <FontAwesomeIcon
                  icon={faIndustry}
                  className="text-blue-400 text-2xl"
                />
                <span className="text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-slate-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            data-aos="fade-right"
            data-aos-delay={index * 200}
          >
            <div className="flex items-center mb-4">
              <FontAwesomeIcon
                icon={section.icon}
                className="text-blue-400 text-3xl mr-3"
              />
              <h2 className="text-lg font-medium">{section.title}</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm">
              {section.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
