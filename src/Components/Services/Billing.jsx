import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faUsers, faHeadset, faFileInvoice, faChartLine, faUserCog, faIndustry } from '@fortawesome/free-solid-svg-icons';
import './Billing.css'; // Custom CSS for animations
import billing from "../Assets/billing.avif";

const sections = [
  { title: 'POS', icon: faCashRegister, content: ['Point-of-Sale: Efficient, dependable, and precise billing', 'POS System: Quick, accurate, and reliable transactions'] },
  { title: 'Customer Retail', icon: faUsers, content: ['Retail Management: Precise and highly responsive software solutions', 'Customer-Focused Retail: Accurate, responsive, and intuitive software'] },
  { title: 'Support', icon: faHeadset, content: ['Customer Assistance: Rapid resolution with dedicated and hassle-free support', 'Technical Support: Swift problem-solving with personalized assistance'] },
  { title: 'GST', icon: faFileInvoice, content: ['Tax Compliance: Accurate GST management for regulatory adherence', 'GST Solutions: Ensure compliance with precise tax calculations'] },
  { title: 'MIS', icon: faChartLine, content: ['Management Information System: Access real-time, accurate data in a single dashboard', 'Data Insights: Centralized, reliable information for informed decision-making'] },
  { title: 'Account', icon: faUserCog, content: ['Financial Management: Secure and up-to-date account details in one place', 'Account Overview: Comprehensive and secure account information management'] },
];

const industries = [
  "Supermarkets",
  "Garments & Textiles",
  "Pharmacies",
  "Grocery Stores",
  "Department Stores",
  "Textile Mills",
  "Footwear Stores",
  "Furniture Stores",
  "Electronics Stores",
  "Automobile Dealerships",
  "Stationery Shops",
  "Home Decor and Furnishing Stores",
];

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Enhance Your Business Operations with Advanced Retail Billing Software</h1>
      <p className="text-xl mb-6 text-center">Let’s discuss your business. Get a personalized plan to go online.</p>
      <div className="flex justify-center mb-6">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">Book a Demo</button>
      </div>
      <div className="mb-8 text-center">
      <img src={billing} alt="Billing Software" className="mx-auto mb-4 rounded-lg shadow-lg" />
        <h2 className="text-2xl font-semibold mb-4 text-center">Industries We Serve</h2>
        <div className="relative overflow-hidden">
          <div className="animate-slide flex space-x-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg flex items-center space-x-3 transform transition-transform hover:scale-105">
                <FontAwesomeIcon icon={faIndustry} className="text-blue-400 text-2xl" />
                <span className="text-lg font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        {sections.map((section, index) => (
          <CSSTransition
            key={index}
            timeout={500}
            classNames="fade"
            in={true}
            appear={true}
          >
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={section.icon} className="text-blue-400 text-3xl mr-3" />
                <h2 className="text-2xl font-semibold">{section.title}</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-lg">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </CSSTransition>
        ))}
      </div>
    </div>
  );
}

export default App;


