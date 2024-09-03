// import React from "react";
// import './Navbar.css'
// import logo from '../Assets/logo.png'
// import {useState} from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {

//     const [menu,setMenu] = useState("home");

//     return (
//         <div className='navbar'>
//             <div className="'nav-logo"> 
//                 <img src={logo}alt=""/>
                
//             </div>
//             <ul className="nav-menu">
//                 <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration:'none', color:'rgb(85, 82, 82)'}} to ='/'>Home</Link>{menu === "home"? <hr/>:<></>} </li>
//                 <li onClick={()=>{setMenu("work")}}><Link style={{ textDecoration:'none', color:'rgb(85, 82, 82)'}}to='/work'>Work</Link>{menu === "work"? <hr/>:<></>}</li>
//                 <li onClick={()=>{setMenu("services")}}><Link style={{ textDecoration:'none', color:'rgb(85, 82, 82)'}}to = '/services'>Services</Link> {menu === "services" ? <hr/>: <></>}</li>
//                 <li onClick={()=>{setMenu("aboutus")}}><Link style={{ textDecoration:'none', color:'rgb(85, 82, 82)'}}to = '/aboutus'>About us</Link> {menu === "aboutus" ? <hr/> : <></>}</li>
//                 <li onClick={()=>{setMenu("contact")}}><Link style={{ textDecoration:'none', color:'rgb(85, 82, 82)'}}to = '/contact'>Contact</Link> {menu === "contact" ? <hr/> : <></>}</li>
//             </ul>            
//         </div>
//     )
// }
// export default Navbar;


// import React, { useState } from "react";
// import logo from '../Assets/logo.png';
// import { Link } from "react-router-dom";
// import './Navbar.css';

// const Navbar = () => {
//     const [menu, setMenu] = useState("home");
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <div className="navbar">
//             <div className="nav-logo">
//                 <img src={logo} alt="Logo" />
//             </div>
//             <button className="menu-toggle" onClick={toggleMenu}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </button>
//             <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
//                 <li onClick={() => { setMenu("home") }}>
//                     <Link to="/" className={menu === "home" ? "active" : ""}>Home</Link>
//                     {menu === "home" && <hr />}
//                 </li>
//                 <li onClick={() => { setMenu("work") }}>
//                     <Link to="/work" className={menu === "work" ? "active" : ""}>Work</Link>
//                     {menu === "work" && <hr />}
//                 </li>
//                 <li onClick={() => { setMenu("services") }}>
//                     <Link to="/services" className={menu === "services" ? "active" : ""}>Services</Link>
//                     {menu === "services" && <hr />}
//                 </li>
//                 <li onClick={() => { setMenu("aboutus") }}>
//                     <Link to="/aboutus" className={menu === "aboutus" ? "active" : ""}>About us</Link>
//                     {menu === "aboutus" && <hr />}
//                 </li>
//                 <li onClick={() => { setMenu("contact") }}>
//                     <Link to="/contact" className={menu === "contact" ? "active" : ""}>Contact</Link>
//                     {menu === "contact" && <hr />}
//                 </li>
//             </ul>
//         </div>
//     );
// }

// export default Navbar;




// import React, { useState } from "react";
// import logo from '../Assets/logo.png';
// import { Link } from "react-router-dom";

// const Navbar = () => {
//     const [menu, setMenu] = useState("home");
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const handleMenuClick = (menuName) => {
//         setMenu(menuName);
//         setIsMenuOpen(false);  // Close the menu after clicking
//     };

//     return (
//         <nav className="bg-gray-900 text-white p-4">
//             <div className="container mx-auto flex justify-between items-center">
//                 <div className="flex items-center">
//                     <img src={logo} alt="Logo" className="h-10" />
//                 </div>
//                 <button 
//                     className="block lg:hidden text-white focus:outline-none"
//                     onClick={toggleMenu}
//                 >
//                     <span className="block w-6 h-0.5 bg-white mb-1"></span>
//                     <span className="block w-6 h-0.5 bg-white mb-1"></span>
//                     <span className="block w-6 h-0.5 bg-white"></span>
//                 </button>
//                 <ul 
//                     className={`lg:flex lg:items-center lg:space-x-0 fixed lg:static top-16 left-0 w-full lg:w-auto lg:bg-transparent bg-gray-800 lg:opacity-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
//                 >
//                     <li 
//                         className={`hover:bg-gray-700 px-2 py-2 rounded ${menu === "home" ? "bg-gray-700" : ""}`} 
//                         onClick={() => handleMenuClick("home")}
//                     >
//                         <Link to="/" className="block">Home</Link>
//                     </li>
//                     <li 
//                         className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "work" ? "bg-gray-700" : ""}`} 
//                         onClick={() => handleMenuClick("work")}
//                     >
//                         <Link to="/work" className="block">Work</Link>
//                     </li>
//                     <li 
//                         className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "services" ? "bg-gray-700" : ""}`} 
//                         onClick={() => handleMenuClick("services")}
//                     >
//                         <Link to="/services" className="block">Services</Link>
//                     </li>
//                     <li 
//                         className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "aboutus" ? "bg-gray-700" : ""}`} 
//                         onClick={() => handleMenuClick("aboutus")}
//                     >
//                         <Link to="/aboutus" className="block">About Us</Link>
//                     </li>
//                     <li 
//                         className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "contact" ? "bg-gray-700" : ""}`} 
//                         onClick={() => handleMenuClick("contact")}
//                     >
//                         <Link to="/contact" className="block">Contact</Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../Assets/logo.png'; // Replace with your actual logo path

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     return (
//         <nav className="bg-gray-900 text-white shadow-md">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     {/* Logo */}
//                     <div className="flex-shrink-0">
//                         <Link to="/">
//                             <img className="h-8 w-auto" src={logo} alt="Logo" />
//                         </Link>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:block">
//                         <div className="ml-10 flex items-baseline space-x-4">
//                             <Link to="/" className="px-3 py-2 rounded-md text-lg font-medium  hover:bg-gray-700">Home</Link>
//                             <Link to="/work" className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700">Work</Link>
//                             <Link to="/services" className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700">Services</Link>
//                             <Link to="/aboutus" className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700">About</Link>
//                             <Link to="/contact" className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700">Contact</Link>
//                         </div>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className="md:hidden">
//                         <button 
//                             onClick={() => setIsMenuOpen(!isMenuOpen)} 
//                             className="text-white hover:bg-gray-700 p-2 rounded-md"
//                         >
//                             ☰
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isMenuOpen && (
//                 <div className="md:hidden bg-gray-800">
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                         <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</Link>
//                         <Link to="/work" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Work</Link>
//                         <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Services</Link>
//                         <Link to="/aboutus" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">About</Link>
//                         <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</Link>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../Assets/logo.png'; // Replace with your actual logo path

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     return (
//         <nav className="bg-gray-900 text-white shadow-md">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     {/* Logo */}
//                     <div className="flex-shrink-0">
//                         <Link to="/">
//                             <img className="h-8 w-auto" src={logo} alt="Logo" />
//                         </Link>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:block">
//                         <div className="ml-10 flex items-baseline space-x-4">
//                             <Link to="/" className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700">Home</Link>
//                             <Link to="/work" className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700">Work</Link>
//                             <Link to="/services" className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700">Services</Link>
//                             <Link to="/aboutus" className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700">About</Link>
//                             <Link to="/contact" className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700">Contact</Link>
//                         </div>
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className="md:hidden">
//                         <button 
//                             onClick={() => setIsMenuOpen(!isMenuOpen)} 
//                             className="text-white hover:bg-gray-700 p-2 rounded-md"
//                         >
//                             ☰
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu with Animation */}
//             <div className={`md:hidden bg-gray-800 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
//                 <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                     <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</Link>
//                     <Link to="/work" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Work</Link>
//                     <Link to="/services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Services</Link>
//                     <Link to="/aboutus" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Portfolio</Link>
//                     <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'; // Replace with your actual logo path
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img className="h-8 w-auto" src={logo} alt="Logo" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/" className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700">Home</Link>
                        <Link to="/work" className="px-3 py-2 rounded-md text-lg font-medium hover:bg-gray-700">Work</Link>
                        
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="px-4 py-2 flex items-center rounded-md text-lg font-medium bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Services
                                <FaChevronDown className={`ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute z-10 mt-2 w-48 rounded-lg shadow-lg bg-gray-800 animate-fade-in">
                                    <Link
                                        to="/design"
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors duration-200 rounded-t-lg"
                                    >
                                        Design
                                    </Link>
                                    <Link
                                        to="/development"
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        Development
                                    </Link>
                                    <Link
                                        to="/marketing"
                                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700 transition-colors duration-200 rounded-b-lg"
                                    >
                                        Marketing
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
                            className="w-full text-left flex items-center justify-between px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 focus:outline-none"
                        >
                            Services
                            <FaChevronDown className={`ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                        {isDropdownOpen && (
                            <div className="pl-3 space-y-1">
                                <Link to="/services/design" onClick={() => setIsMenuOpen(false)} className="block pl-5 pr-3 py-2 text-base font-medium hover:bg-gray-700">Design</Link>
                                <Link to="/services/development" onClick={() => setIsMenuOpen(false)} className="block pl-5 pr-3 py-2 text-base font-medium hover:bg-gray-700">Development</Link>
                                <Link to="/services/marketing" onClick={() => setIsMenuOpen(false)} className="block pl-5 pr-3 py-2 text-base font-medium hover:bg-gray-700">Marketing</Link>
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
