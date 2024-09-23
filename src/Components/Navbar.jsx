import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Assets/logo.png";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css"; // Import the custom CSS file
import Slider from "./Slider";
import background_video3 from "./Assets/background_video3.mp4";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
      <nav className="bg-slate-50  text-gray-600 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  className="h-12 w-auto bg-white px-4 py-1 rounded-lg"
                  src={logo}
                  alt="Logo"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-base text- base font-semibold hover:bg-slate-200"
              >
                Home
              </Link>
              <Link
                to="/work"
                className="px-3 py-2 rounded-md text-base font-semibold hover:bg-slate-200"
              >
                Work
              </Link>

              {/* Services Dropdown */}
              <div className="relative dropdown-container">
                <button className="px-4 py-2 flex items-center rounded-md text-base font-semibold hover:bg-slate-200 dropdown-toggle">
                  Services
                  <FaChevronDown className="ml-2 transition-transform duration-200" />
                </button>

                {/* Dropdown Menu */}
                <div className="dropdown-menu">
                  <Link
                    to="/web_development"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/mobile_app"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
                  >
                    Mobile App
                  </Link>
                  <Link
                    to="/matrimony_app"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
                  >
                    Matrimony App
                  </Link>
                  <Link
                    to="/billing"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
                  >
                    Billing
                  </Link>
                  <Link
                    to="/crm"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
                  >
                    CRM
                  </Link>
                  <Link
                    to="/e_commerce"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
                  >
                    E-Commerce
                  </Link>
                  <Link
                    to="/inventory_app"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
                  >
                    Inventory App
                  </Link>
                  <Link
                    to="/time_sheet"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
                  >
                    Time Sheet
                  </Link>
                  <Link
                    to="/moi_soft"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
                  >
                    MOI Soft
                  </Link>
                  <Link
                    to="/customer_management"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
                  >
                    Customer Management
                  </Link>
                  <Link
                    to="/event_app"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
                  >
                    Event App
                  </Link>
                  <Link
                    to="/digital_marketing"
                    className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
                  >
                    Digital Marketing
                  </Link>
                </div>
              </div>

              <Link
                to="/aboutus"
                className="px-3 py-2 rounded-md text-base font-semibold hover:bg-slate-200"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 rounded-md text-base font-semibold hover:bg-slate-200"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black hover:bg-gray-400 p-2 rounded-md"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-slate-50 overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
            >
              Home
            </Link>
            <Link
              to="/work"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
            >
              Work
            </Link>

            {/* Services Dropdown for Mobile */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
              >
                Services
                <FaChevronDown
                  className={`ml-2 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isServicesOpen && (
                <div className="pl-3 space-y-1">
                  <Link
                    to="/web_development"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsServicesOpen(false);
                    }}
                    className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/mobile_app"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsServicesOpen(false);
                    }}
                    className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
                  >
                    Mobile App
                  </Link>
                  <Link
                    to="/matrimony_app"
                    onClick={() => setIsMenuOpen(false)}
                    className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
                  >
                    Matrimony App
                  </Link>
                  <Link
                    to="/billing"
                    onClick={() => setIsMenuOpen(false)}
                    className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
                  >
                    Billing
                  </Link>
                  <Link
                    to="/crm"
                    onClick={() => setIsMenuOpen(false)}
                    className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
                  >
                    CRM
                  </Link>
                  <Link
                    to="/e_commerce"
                    onClick={() => setIsMenuOpen(false)}
                    className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
                  >
                    E-Commerce
                  </Link>
                  <Link
                    to="/inventory_app"
                    onClick={() => setIsMenuOpen(false)}
                    className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
                  >
                    Inventory App
                  </Link>
                  <Link
                    to="/time_sheet"
                    onClick={() => setIsMenuOpen(false)}
                    className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
                  >
                    Time Sheet
                  </Link>
                  <Link
                    to="/moi_soft"
                    onClick={() => setIsMenuOpen(false)}
                    className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
                  >
                    MOI Soft
                  </Link>
                  <Link
                    to="/customer_management"
                    onClick={() => setIsMenuOpen(false)}
                    className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
                  >
                    Customer Management
                  </Link>
                  <Link
                    to="/event_app"
                    onClick={() => setIsMenuOpen(false)}
                    className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
                  >
                    Event App
                  </Link>
                  <Link
                    to="/digital_marketing"
                    onClick={() => setIsMenuOpen(false)}
                    className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
                  >
                    Digital Marketing
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/aboutus"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 border-b border-slate-400  rounded-md text-base font-medium hover:bg-slate-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
