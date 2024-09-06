import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Assets/logo.png'; // Replace with your actual logo path
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const closeDropdown = () => {
        setIsDropdownOpen(false);
        setIsMenuOpen(false); // Close the mobile menu after selecting a service
    };

    return (
        <nav className=" bg-gray-900 text-white  sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img className="h-12 w-auto" src={logo} alt="Logo" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/" className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700">Home</Link>
                        <Link to="/work" className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700">Work</Link>
                        
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="px-4 py-2 flex items-center rounded-md text-lg font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
                            >
                                Services
                                <FaChevronDown className={`ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute z-10 mt-2 w-48 rounded-lg shadow-lg bg-gray-800 animate-fade-in">
                                    <Link
                                        to="/web_development"
                                        onClick={closeDropdown}
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    >
                                        Web Development
                                    </Link>

                                    <Link
                                        to="/mobile_app"
                                        onClick={closeDropdown}
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    >
                                        Mobile App
                                    </Link>

                                    <Link
                                        to="/matrimony_app"
                                        onClick={closeDropdown}
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    >
                                        Matrimony App
                                    </Link>

                                    <Link
                                        to="/billing"
                                        onClick={closeDropdown}
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    >
                                        Billing
                                    </Link>

                                    <Link
                                        to="/crm"
                                        onClick={closeDropdown}
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    >
                                        CRM
                                    </Link>

                                    <Link
                                        to="/e_commerce"
                                        onClick={closeDropdown}
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    >
                                        E-Commerce
                                    </Link>

                                    <Link
                                        to="/inventory_app"
                                        onClick={closeDropdown}
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    >
                                        Inventory App
                                    </Link>

                                    <Link
                                        to="/time_sheet"
                                        onClick={closeDropdown}
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    >
                                        Time Sheet
                                    </Link>

                                    <Link
                                        to="/moi_soft"
                                        onClick={closeDropdown}
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    >
                                        MOI Soft
                                    </Link>

                                    <Link
                                        to="/customer_management"
                                        onClick={closeDropdown}
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    >
                                        Customer Management App
                                    </Link>

                                    <Link
                                        to="/event_app"
                                        onClick={closeDropdown}
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    >
                                        Event App
                                    </Link>

                                    <Link
                                        to="/digital_marketing"
                                        onClick={closeDropdown}
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    >
                                        Digital Marketing
                                    </Link>
                                </div>
                            )}
                        </div>
                        
                        <Link to="/aboutus" className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700">About</Link>
                        <Link to="/contact" className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700">Contact</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="text-white hover:bg-gray-700 p-2 rounded-md"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu with Animation */}
            <div className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</Link>
                    <Link to="/work" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Work</Link>
                    
                    {/* Mobile Services Menu */}
                    <div className="space-y-1">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full text-left flex items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
                        >
                            Services
                            <FaChevronDown className={`ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        {isDropdownOpen && (
                            <div className="pl-3 space-y-1">
                                <Link to="/web_development" onClick={closeDropdown} className="block pl-5 pr-3 py-2 text-base font-medium hover:bg-gray-700">Web Development</Link>
                                <Link to="/mobile_app" onClick={closeDropdown} className="block pl-5 pr-3 py-2 text-base font-medium hover:bg-gray-700">Mobile App</Link>
                                <Link to="/matrimony_app" onClick={closeDropdown} className="block pl-5 pr-3 py-2 text-base font-medium hover:bg-gray-700">Matrimony App</Link>
                                <Link to="/billing" onClick={closeDropdown} className="block pl-5 pr-3 py-2 text-base font-medium hover:bg-gray-700">Billing</Link>
                                <Link to="/crm" onClick={closeDropdown} className="block pl-5 pr-3 py-2 text-base font-medium hover:bg-gray-700">CRM</Link>
                                <Link to="/e_commerce" onClick={closeDropdown} className="block pl-5 pr-3 py-2 text-base font-medium hover:bg-gray-700">E-Commerce</Link>
                                <Link to="/inventory_app" onClick={closeDropdown} className="block pl-5 pr-3 py-2 text-base font-medium hover:bg-gray-700">Inventory App</Link>
                                <Link to="/time_sheet" onClick={closeDropdown} className="block pl-5 pr-3 py-2 text-base font-medium hover:bg-gray-700">Time Sheet</Link>
                                <Link to="/moi_soft" onClick={closeDropdown} className="block pl-5 pr-3 py-2 text-base font-medium hover:bg-gray-700">MOI Soft</Link>
                                <Link to="/customer_management" onClick={closeDropdown} className="block pl-5 pr-3 py-2 text-base font-medium hover:bg-gray-700">Customer Management</Link>
                                <Link to="/event_app" onClick={closeDropdown} className="block pl-5 pr-3 py-2 text-base font-medium hover:bg-gray-700">Event App</Link>
                                <Link to="/digital_marketing" onClick={closeDropdown} className="block pl-5 pr-3 py-2 text-base font-medium hover:bg-gray-700">Digital Marketing</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/aboutus" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</Link>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

