// src/components/InventoryApp.js

import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Example images
import inventoryImage1 from '../Assets/inventoryImage1.avif';
import inventoryImage2 from '../Assets/inventoryImage2.avif';
import inventoryImage3 from '../Assets/inventoryImage3.avif';

const Inventory_app = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      <section className="py-16 px-4 md:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4" data-aos="fade-up">Inventory Management App</h1>
          <p className="text-lg md:text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
            Efficiently manage your inventory with our comprehensive solution. Track stock levels, manage orders, and generate detailed reports with ease.
          </p>
          <Link to="/get-started">
            <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300" data-aos="fade-up" data-aos-delay="400">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <img src={inventoryImage1} alt="Inventory Tracking" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">Real-Time Inventory Tracking</h2>
              <p className="text-gray-400">
                Monitor your stock levels in real-time. Manage multiple warehouses and receive alerts for low inventory.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <img src={inventoryImage2} alt="Order Management" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">Order Management</h2>
              <p className="text-gray-400">
                Process purchase orders and sales orders efficiently. Track order status and generate invoices.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="600">
              <img src={inventoryImage3} alt="Reporting and Analytics" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">Reporting and Analytics</h2>
              <p className="text-gray-400">
                Generate detailed reports on stock levels, sales, and order history. Analyze trends and forecast demand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" data-aos="fade-up">Used By</h2>
          <p className="text-lg md:text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
            Our Inventory App is trusted by businesses across various industries for efficient inventory management.
          </p>
          <ul className="list-disc text-left mx-auto max-w-lg space-y-4">
            <li className="text-gray-400" data-aos="fade-up" data-aos-delay="300">Retail Stores</li>
            <li className="text-gray-400" data-aos="fade-up" data-aos-delay="400">Warehouses</li>
            <li className="text-gray-400" data-aos="fade-up" data-aos-delay="500">Manufacturers</li>
            <li className="text-gray-400" data-aos="fade-up" data-aos-delay="600">E-commerce Businesses</li>
            <li className="text-gray-400" data-aos="fade-up" data-aos-delay="700">Distributors</li>
            <li className="text-gray-400" data-aos="fade-up" data-aos-delay="800">Logistics Companies</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Inventory_app;
