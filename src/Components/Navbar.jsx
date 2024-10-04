// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "./Assets/logo.png";
// import { FaChevronDown } from "react-icons/fa";
// import "./Navbar.css"; 

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   return (
//       <nav className="bg-slate-50  text-gray-600 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <Link to="/">
//                 <img
//                   className="h-12 w-auto px-4 py-1"
//                   src={logo}
//                   alt="Logo"
//                 />
//               </Link>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-4">
//               <Link
//                 to="/"
//                 className="px-3 py-2 rounded-md text-base text- base font-semibold hover:text-customBlue"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/work"
//                 className="px-3 py-2 rounded-md text-base font-semibold hover:text-customBlue"
//               >
//                 Work
//               </Link>

//             {/* Services Dropdown */}
//             <div
//               className="relative group"
//               onMouseEnter={() => setIsServicesOpen(true)}
//               onMouseLeave={() => setIsServicesOpen(false)}
//             >
//               <button className="px-4 py-2 flex items-center rounded-md text-base font-semibold hover:text-customBlue">
//                 Services
//                 <FaChevronDown className="ml-6 transition-transform duration-200" />
//               </button>

//               {/* Dropdown Content */}
//               {isServicesOpen && (
//                 <div className="absolute left-1/2 transform -translate-x-1/2 w-max max-w-3xl bg-white shadow-lg border rounded-lg grid grid-cols-3 gap-4 p-6 ">
//                   <Link
//                     to="/web_development"
//                     className="flex flex-col py-2 text-xs font-semibold hover:bg-slate-200"
//                   >
//                     <span >🌐 &nbsp; Web Development</span> 
//                   </Link>
//                   <Link
//                     to="/mobile_app"
//                     className="flex flex-col py-2 text-xs font-semibold hover:bg-slate-200"
//                   >
//                     <span >📱 &nbsp; Mobile App</span> 
//                   </Link>
//                   <Link
//                     to="/matrimony_app"
//                     className="flex flex-col py-2 text-xs font-semibold hover:bg-slate-200"
//                   >
//                     <span>💍 &nbsp; Matrimony App</span> 
//                   </Link>
//                   <Link
//                     to="/billing"
//                     className="flex flex-col py-2 text-xs font-semibold hover:bg-slate-200"
//                   >
//                     <span>📰 &nbsp; Billing</span> 
//                   </Link>
//                   <Link
//                     to="/crm"
//                     className="flex flex-col py-2 text-xs font-semibold hover:bg-slate-200"
//                   >
//                     <span >📉 &nbsp;CRM</span> 
//                   </Link>
//                   <Link
//                     to="/e_commerce"
//                     className="flex flex-col py-2 text-xs font-semibold hover:bg-slate-200"
//                   >
//                     <span>💎 &nbsp; E-Commerce</span> 
//                   </Link>
//                   <Link
//                     to="/moi_soft"
//                     className="flex flex-col py-2 text-xs font-semibold hover:bg-slate-200"
//                   >
//                     <div className="flex"> <span className="customBlue">💷 &nbsp;</span> <p> MOI Soft</p></div>
//                   </Link>
//                   <Link
//                     to="/customer_management"
//                     className="flex flex-col py-2 text-xs font-semibold hover:bg-slate-200"
//                   >
//                     <span>🔄 &nbsp; Customer Management</span> 
//                   </Link>
//                   <Link
//                     to="/digital_marketing"
//                     className="flex flex-col py-2 text-xs font-semibold hover:bg-slate-200"
//                   >
//                     <span>🎫 &nbsp; Digital Marketing</span> 
//                   </Link>
//                 </div>
//               )}
//             </div>

//               <Link
//                 to="/aboutus"
//                 className="px-3 py-2 rounded-md text-base font-semibold hover:text-customBlue"
//               >
//                 About
//               </Link>
//               <Link
//                 to="/contact"
//                 className="px-3 py-2 rounded-md text-base font-semibold hover:text-customBlue"
//               >
//                 Contact
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-black hover:bg-gray-400 p-2 rounded-md"
//               >
//                 ☰
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden bg-slate-50 overflow-hidden transition-all duration-500 ease-in-out ${
//             isMenuOpen ? "max-h-screen" : "max-h-0"
//           }`}
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               to="/"
//               onClick={() => setIsMenuOpen(false)}
//               className="block px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
//             >
//               Home
//             </Link>
//             <Link
//               to="/work"
//               onClick={() => setIsMenuOpen(false)}
//               className="block px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
//             >
//               Work
//             </Link>

//             {/* Services Dropdown for Mobile */}
//             <div>
//               <button
//                 onClick={() => setIsServicesOpen(!isServicesOpen)}
//                 className="w-full flex items-center justify-between px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
//               >
//                 Services
//                 <FaChevronDown
//                   className={`ml-2 transition-transform duration-200 ${
//                     isServicesOpen ? "rotate-180" : "rotate-0"
//                   }`}
//                 />
//               </button>
//               {isServicesOpen && (
//                 <div className="pl-3 space-y-1">
//                   <Link
//                     to="/web_development"
//                     onClick={() => {
//                       setIsMenuOpen(false);
//                       setIsServicesOpen(false);
//                     }}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     Web Development
//                   </Link>
//                   <Link
//                     to="/mobile_app"
//                     onClick={() => {
//                       setIsMenuOpen(false);
//                       setIsServicesOpen(false);
//                     }}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     Mobile App
//                   </Link>
//                   <Link
//                     to="/matrimony_app"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     Matrimony App
//                   </Link>
//                   <Link
//                     to="/billing"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     Billing
//                   </Link>
//                   <Link
//                     to="/crm"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     CRM
//                   </Link>
//                   <Link
//                     to="/e_commerce"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     E-Commerce
//                   </Link>
//                   <Link
//                     to="/moi_soft"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     MOI Soft
//                   </Link>
//                   <Link
//                     to="/customer_management"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     Customer Management
//                   </Link>
//                   <Link
//                     to="/digital_marketing"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     Digital Marketing
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link
//               to="/aboutus"
//               onClick={() => setIsMenuOpen(false)}
//               className="block px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
//             >
//               About
//             </Link>
//             <Link
//               to="/contact"
//               onClick={() => setIsMenuOpen(false)}
//               className="block px-3 py-2 border-b border-slate-400  rounded-md text-base font-medium hover:bg-slate-300"
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </nav>
//   );
// };

// export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "./Assets/logo.png";
// import { FaChevronDown, FaGlobe, FaMobileAlt, FaRing, FaFileInvoice, FaChartLine, FaShoppingCart, FaMoneyBill, FaSyncAlt, FaTicketAlt } from "react-icons/fa";
// import "./Navbar.css"; 

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   return (
//       <nav className="bg-slate-50  text-gray-600 sticky top-0 z-50">
//         <div className="navbar_video max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <Link to="/">
//                 <img
//                   className="h-12 w-auto px-4 py-1"
//                   src={logo}
//                   alt="Logo"
//                 />
//               </Link>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-4">
//               <Link
//                 to="/"
//                 className="px-3 py-2 rounded-md text-base font-semibold hover:text-customBlue hover:font-extrabold transition-transform duration-500 ease-in-out hover:scale-125 "
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/work"
//                 className="px-3 py-2 rounded-md text-base font-semibold hover:text-customBlue hover:font-extrabold transition-transform duration-500 ease-in-out hover:scale-125"
//               >
//                 Work
//               </Link>

//               {/* Services Dropdown */}
//               <div
//                 className="relative group"
//                 onMouseEnter={() => setIsServicesOpen(true)}
//                 onMouseLeave={() => setIsServicesOpen(false)}
//               >
//                 <button className="px-4 py-2 flex items-center rounded-md text-base font-semibold hover:text-customBlue hover:font-extrabold transition duration-700">
//                   Services
//                   <FaChevronDown className="ml-1 transition-transform duration-200" />
//                 </button>

//                 {/* Dropdown Content */}
//                 {isServicesOpen && (
//                   <div className="absolute left-1/2 transform -translate-x-1/2 w-max max-w-3xl bg-white shadow-lg border rounded-lg grid grid-cols-3 gap-4 p-6" >
//                     <Link
//                       to="/web_development"
//                       className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
//                     >
//                       <div className="flex"><FaGlobe className=" mr-2 text-base customBlue inline-block" /> Web Development</div>
//                     </Link>
//                     <Link
//                       to="/mobile_app"
//                       className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
//                     >
//                       <div className="flex"><FaMobileAlt className="mr-2 text-base customBlue inline-block" /> Mobile App</div>
//                     </Link>
//                     <Link
//                       to="/matrimony_app"
//                       className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
//                     >
//                       <div className="flex"><FaRing className="mr-2 text-base customBlue inline-block " /> Matrimony App</div>
//                     </Link>
//                     <Link
//                       to="/billing"
//                       className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
//                     >
//                       <div className="flex"><FaFileInvoice className="mr-2 text-base customBlue inline-block" /> Billing</div>
//                     </Link>
//                     <Link
//                       to="/crm"
//                       className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
//                     >
//                       <div className="flex"><FaChartLine className="mr-2 text-base customBlue inline-block" /> CRM</div>
//                     </Link>
//                     <Link
//                       to="/e_commerce"
//                       className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
//                     >
//                       <div className="flex"><FaShoppingCart className="mr-2 text-base customBlue inline-block" /> E-Commerce</div>
//                     </Link>
//                     <Link
//                       to="/moi_soft"
//                       className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
//                     >
//                       <div className="flex"><FaMoneyBill className="mr-2 text-lg customBlue inline-block" /> MOI Soft</div>
//                     </Link>
//                     <Link
//                       to="/customer_management"
//                       className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
//                     >
//                       <div className="flex"><FaSyncAlt className="mr-2 text-base customBlue inline-block" /> Customer Management</div>
//                     </Link>
//                     <Link
//                       to="/digital_marketing"
//                       className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
//                     >
//                       <div className="flex"><FaTicketAlt className="mr-2 text-base customBlue inline-block" /> Digital Marketing</div>
//                     </Link>
//                   </div>
//                 )}
//               </div>

//               <Link
//                 to="/aboutus"
//                 className="px-3 py-2 rounded-md text-base font-semibold hover:text-customBlue hover:font-extrabold transition-transform duration-500 ease-in-out hover:scale-105"
//               >
//                 About
//               </Link>
//               <Link
//                 to="/contact"
//                 className="px-3 py-2 rounded-md text-base font-semibold hover:text-customBlue hover:font-extrabold transition-transform duration-500 ease-in-out hover:scale-105"
//               >
//                 Contact
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-black hover:bg-gray-400 p-2 rounded-md"
//               >
//                 ☰
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Mobile Menu */}
//         <div
//           className={`md:hidden bg-slate-50 overflow-hidden transition-all duration-500 ease-in-out ${
//             isMenuOpen ? "max-h-screen" : "max-h-0"
//           }`}
//         >
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             <Link
//               to="/"
//               onClick={() => setIsMenuOpen(false)}
//               className="block px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
//             >
//               Home
//             </Link>
//             <Link
//               to="/work"
//               onClick={() => setIsMenuOpen(false)}
//               className="block px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
//             >
//               Work
//             </Link>

//             {/* Services Dropdown for Mobile */}
//             <div>
//               <button
//                 onClick={() => setIsServicesOpen(!isServicesOpen)}
//                 className="w-full flex items-center justify-between px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300" 
//               >
//                 Services
//                 <FaChevronDown
//                   className={`ml-2 transition-transform duration-200  ${
//                     isServicesOpen ? "rotate-180" : "rotate-0"
//                   }`} 
                  
//                 />
//               </button>
//               {isServicesOpen && (
//                 <div className="pl-3 space-y-1">
//                   <Link
//                     to="/web_development"
//                     onClick={() => {
//                       setIsMenuOpen(false);
//                       setIsServicesOpen(false);
//                     }}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     Web Development
//                   </Link>
//                   <Link
//                     to="/mobile_app"
//                     onClick={() => {
//                       setIsMenuOpen(false);
//                       setIsServicesOpen(false);
//                     }}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     Mobile App
//                   </Link>
//                   <Link
//                     to="/matrimony_app"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     Matrimony App
//                   </Link>
//                   <Link
//                     to="/billing"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     Billing
//                   </Link>
//                   <Link
//                     to="/crm"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     CRM
//                   </Link>
//                   <Link
//                     to="/e_commerce"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     E-Commerce
//                   </Link>
//                   <Link
//                     to="/moi_soft"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     MOI Soft
//                   </Link>
//                   <Link
//                     to="/customer_management"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     Customer Management
//                   </Link>
//                   <Link
//                     to="/digital_marketing"
//                     onClick={() => setIsMenuOpen(false)}
//                     className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                   >
//                     Digital Marketing
//                   </Link>
//                 </div>
//               )}
//             </div>
//             <Link
//               to="/aboutus"
//               onClick={() => setIsMenuOpen(false)}
//               className="block px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
//             >
//               About
//             </Link>
//             <Link
//               to="/contact"
//               onClick={() => setIsMenuOpen(false)}
//               className="block px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Assets/logo.png";
import {
  FaChevronDown,
  FaGlobe,
  FaMobileAlt,
  FaRing,
  FaFileInvoice,
  FaChartLine,
  FaShoppingCart,
  FaMoneyBill,
  FaSyncAlt,
  FaTicketAlt,
} from "react-icons/fa";
import "./Navbar.css"; // We will add our custom animations here

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-slate-50 text-gray-600 sticky top-0 z-50">
      <div className="navbar_video max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-12 w-auto px-4 py-1" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-base tracking-wider font-semibold hover:text-sky-500 hover:font-extrabold transform hover:scale-105 transition-all duration-500 ease-in-out"
              >
              Home
            </Link>
            <Link
              to="/work"
              className="px-3 py-2 rounded-md text-base tracking-wider font-semibold hover:text-sky-500 hover:font-extrabold transform hover:scale-105 transition-all duration-500 ease-in-out"
            >
              Work
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="px-4 py-2 flex items-center tracking-wider rounded-md text-base font-semibold hover:text-sky-500 hover:font-extrabold transition duration-700">
                Services
                <FaChevronDown className="ml-1 transition-transform duration-200" />
              </button>

              {/* Dropdown Content */}
              {isServicesOpen && (
                <div className="absolute left-[-265%] top-full mt-0 w-max max-w-3xl  bg-slate-50 shadow-lg border rounded-lg grid grid-cols-3 gap-4 p-6 animate-slide-up ">
                {/* Arrow at the top */}
                <div className="absolute top-[-8px] left-[350px] transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-b-white"></div>
                </div>
             
                  {/* Services Links */}
                  <Link
                    to="/web_development"
                    className="flex flex-col py-2 text-sm  font-medium hover:text-customBlue"
                  >
                    <div className="flex !font-sans tracking-wider font-semibold">
                      <FaGlobe className="mr-2 text-large customBlue inline-block" /> Web Development
                    </div>
                  </Link>
                  <Link
                    to="/mobile_app"
                    className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
                  >
                    <div className="flex !font-sans tracking-wider font-semibold">
                      <FaMobileAlt className="mr-2 text-base customBlue inline-block" /> Mobile App
                    </div>
                  </Link>
                  <Link
                    to="/matrimony_app"
                    className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
                  >
                    <div className="flex !font-sans tracking-wider font-semibold">
                      <FaRing className="mr-2 text-base customBlue inline-block" /> Matrimony App
                    </div>
                  </Link>
                  <Link
                    to="/billing"
                    className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
                  >
                    <div className="flex !font-sans tracking-wider font-semibold">
                      <FaFileInvoice className="mr-2 text-base customBlue inline-block" /> Billing
                    </div>
                  </Link>
                  <Link
                    to="/crm"
                    className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
                  >
                    <div className="flex !font-sans tracking-wider font-semibold">
                      <FaChartLine className="mr-2 text-base customBlue inline-block" /> CRM
                    </div>
                  </Link>
                  <Link
                    to="/e_commerce"
                    className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
                  >
                    <div className="flex !font-sans tracking-wider font-semibold">
                      <FaShoppingCart className="mr-2 text-base customBlue inline-block" /> E-Commerce
                    </div>
                  </Link>
                  <Link
                    to="/moi_soft"
                    className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
                  >
                    <div className="flex !font-sans tracking-wider font-semibold">
                      <FaMoneyBill className="mr-2 text-lg customBlue inline-block" /> MOI Soft
                    </div>
                  </Link>
                  <Link
                    to="/customer_management"
                    className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
                  >
                    <div className="flex !font-sans  tracking-wider font-semibold">
                      <FaSyncAlt className="mr-2 text-base customBlue inline-block" /> Customer Management
                    </div>
                  </Link>
                  <Link
                    to="/digital_marketing"
                    className="flex flex-col py-2 text-sm font-medium hover:text-customBlue"
                  >
                    <div className="flex !font-sans  tracking-wider font-semibold">
                      <FaTicketAlt className="mr-2 text-base customBlue inline-block" /> Digital Marketing
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/aboutus"
              className="px-3 py-2 rounded-md tracking-wider text-base font-semibold hover:text-sky-500 hover:font-extrabold transform hover:scale-105 transition-all duration-500 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-md tracking-wider text-base font-semibold hover:text-sky-500 hover:font-extrabold transform hover:scale-105 transition-all duration-500 ease-in-out"
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
                    to="/digital_marketing"
                    onClick={() => setIsMenuOpen(false)}
                    className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
                  >
                    Digital Marketing
                  </Link>              </div>
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
            className="block px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

