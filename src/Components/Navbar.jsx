import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./Assets/logo.png";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return (
      <nav className="bg-slate-50  text-gray-600 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  className="h-12 w-auto px-4 py-1"
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
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="px-4 py-2 flex items-center rounded-md text-base font-semibold hover:bg-slate-200">
                Services
                <FaChevronDown className="ml-6 transition-transform duration-200" />
              </button>

              {/* Dropdown Content */}
              {isServicesOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 w-96 max-w-3xl bg-white shadow-lg border rounded-lg grid grid-cols-3 gap-4 p-6">
                  <Link
                    to="/web_development"
                    className="flex flex-col place-items-start justify-items-start  py-2 text-xs font-semibold hover:bg-slate-200"
                  >
                    <span className="gray-image">🌐 Web Development</span> 
                  </Link>
                  <Link
                    to="/mobile_app"
                    className="flex flex-col place-items-start justify-items-start py-2 text-xs font-semibold hover:bg-slate-200"
                  >
                    <span className="gray-image">📱 Mobile App</span> 
                  </Link>
                  <Link
                    to="/matrimony_app"
                    className="flex flex-col place-items-start justify-items-start py-2 text-xs font-semibold hover:bg-slate-200"
                  >
                    <span className="gray-image">💍 Matrimony App</span> 
                  </Link>
                  <Link
                    to="/billing"
                    className="flex flex-col py-2 text-xs font-semibold hover:bg-slate-200"
                  >
                    <span className="gray-image">💸 Billing</span> 
                  </Link>
                  <Link
                    to="/crm"
                    className="flex flex-col py-2 text-xs font-semibold hover:bg-slate-200"
                  >
                    <span className="gray-image">📊 CRM</span> 
                  </Link>
                  <Link
                    to="/e_commerce"
                    className="flex flex-col py-2 text-xs font-semibold hover:bg-slate-200"
                  >
                    <span className="gray-image">🛒 E-Commerce</span> 
                  </Link>
                  <Link
                    to="/moi_soft"
                    className="flex flex-col py-2 text-xs font-semibold hover:bg-slate-200"
                  >
                    <span>🖥 MOI Soft</span> 
                  </Link>
                  <Link
                    to="/customer_management"
                    className="flex flex-col place-items-start justify-self-stretch   text-xs font-semibold hover:bg-slate-200"
                  >
                    <span>👥 Customer Management</span> 
                  </Link>
                  <Link
                    to="/digital_marketing"
                    className="flex flex-col place-items-start justify-items-start py-2 text-xs font-semibold hover:bg-slate-200"
                  >
                    <span>💻 Digital Marketing</span> 
                  </Link>
                </div>
              )}
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

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "./Assets/logo.png";
// import { FaChevronDown, FaLaptopCode, FaMobileAlt, FaStore, FaFileInvoice, FaProjectDiagram, FaUserCircle } from "react-icons/fa";
// import "./Navbar.css"; 

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
  
//   return (
//     <nav className="bg-slate-50 text-gray-600 sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/">
//               <img className="h-12 w-auto px-4 py-1" src={logo} alt="Logo" />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link to="/" className="px-3 py-2 rounded-md text-base font-semibold hover:bg-slate-200">
//               Home
//             </Link>
//             <Link to="/work" className="px-3 py-2 rounded-md text-base font-semibold hover:bg-slate-200">
//               Work
//             </Link>

//             {/* Services Mega Menu */}
//             <div className="relative">
//               <button
//                 className="px-4 py-2 flex items-center rounded-md text-base ml-1 font-semibold hover:bg-slate-200"
//                 onClick={() => setIsServicesOpen(!isServicesOpen)}
//               >
//                 Services
//                 <FaChevronDown className="ml-2 transition-transform duration-200" />
//               </button>

//               {isServicesOpen && (
//                 <div className="absolute left-0 mt-2 w-[700px] bg-white shadow-lg rounded-md">
//                   <div className="grid grid-cols-3 gap-6 p-6">
//                     {/* Column 1 */}
//                     <div>
//                       <Link
//                         to="/web_development"
//                         className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
//                       >
//                         <FaLaptopCode className="text-gray-500" />
//                         <span>Web Development</span>
//                       </Link>
//                       <Link
//                         to="/mobile_app"
//                         className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
//                       >
//                         <FaMobileAlt className="text-gray-500" />
//                         <span>Mobile App</span>
//                       </Link>
//                       <Link
//                         to="/matrimony_app"
//                         className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
//                       >
//                         <FaUserCircle className="text-gray-500" />
//                         <span>Matrimony App</span>
//                       </Link>
//                     </div>

//                     {/* Column 2 */}
//                     <div>
//                       <Link
//                         to="/billing"
//                         className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
//                       >
//                         <FaFileInvoice className="text-gray-500" />
//                         <span>Billing</span>
//                       </Link>
//                       <Link
//                         to="/crm"
//                         className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
//                       >
//                         <FaProjectDiagram className="text-gray-500" />
//                         <span>CRM</span>
//                       </Link>
//                       <Link
//                         to="/e_commerce"
//                         className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
//                       >
//                         <FaStore className="text-gray-500" />
//                         <span>E-Commerce</span>
//                       </Link>
//                     </div>

//                     {/* Column 3 */}
//                     <div>
//                       <Link
//                         to="/moi_soft"
//                         className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
//                       >
//                         <FaLaptopCode className="text-gray-500" />
//                         <span>MOI Soft</span>
//                       </Link>
//                       <Link
//                         to="/customer_management"
//                         className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
//                       >
//                         <FaUserCircle className="text-gray-500" />
//                         <span>Customer Management</span>
//                       </Link>
//                       <Link
//                         to="/digital_marketing"
//                         className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-slate-200"
//                       >
//                         <FaStore className="text-gray-500" />
//                         <span>Digital Marketing</span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <Link to="/aboutus" className="px-3 py-2 rounded-md text-base font-semibold hover:bg-slate-200">
//               About
//             </Link>
//             <Link to="/contact" className="px-3 py-2 rounded-md text-base font-semibold hover:bg-slate-200">
//               Contact
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black hover:bg-gray-400 p-2 rounded-md">
//               ☰
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-slate-50 overflow-hidden transition-all duration-500 ease-in-out ${
//           isMenuOpen ? "max-h-screen" : "max-h-0"
//         }`}
//       >
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link
//             to="/"
//             onClick={() => setIsMenuOpen(false)}
//             className="block px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
//           >
//             Home
//           </Link>
//           <Link
//             to="/work"
//             onClick={() => setIsMenuOpen(false)}
//             className="block px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
//           >
//             Work
//           </Link>

//           {/* Services Dropdown for Mobile */}
//           <div>
//             <button
//               onClick={() => setIsServicesOpen(!isServicesOpen)}
//               className="w-full flex items-center justify-between px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
//             >
//               Services
//               <FaChevronDown className={`ml-2 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : "rotate-0"}`} />
//             </button>
//             {isServicesOpen && (
//               <div className="pl-3 space-y-1">
//                 <Link
//                   to="/web_development"
//                   onClick={() => {
//                     setIsMenuOpen(false);
//                     setIsServicesOpen(false);
//                   }}
//                   className="block pl-5 pr-3 py-2 border-b text-base font-medium hover:bg-slate-200"
//                 >
//                   Web Development
//                 </Link>
//                 {/* Other services as in the original code */}
//               </div>
//             )}
//           </div>

//           <Link
//             to="/aboutus"
//             onClick={() => setIsMenuOpen(false)}
//             className="block px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
//           >
//             About
//           </Link>
//           <Link
//             to="/contact"
//             onClick={() => setIsMenuOpen(false)}
//             className="block px-3 py-2 border-b border-slate-400 rounded-md text-base font-medium hover:bg-slate-300"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "./Assets/logo.png";
// import { FaChevronDown } from "react-icons/fa";
// import "./Navbar.css"; 

// const Navbar = () => {
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   return (
//     <nav className="bg-slate-50 text-gray-600 sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/">
//               <img className="h-12 w-auto px-4 py-1" src={logo} alt="Logo" />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-4">
//             <Link to="/" className="px-3 py-2 rounded-md text-base font-semibold hover:bg-slate-200">
//               Home
//             </Link>
//             <Link to="/work" className="px-3 py-2 rounded-md text-base font-semibold hover:bg-slate-200">
//               Work
//             </Link>

//             {/* Services Dropdown */}
//             <div
//               className="relative group"
//               onMouseEnter={() => setIsServicesOpen(true)}
//               onMouseLeave={() => setIsServicesOpen(false)}
//             >
//               <button className="px-4 py-2 flex items-center rounded-md text-base font-semibold hover:bg-slate-200">
//                 Services
//                 <FaChevronDown className="ml-6 transition-transform duration-200" />
//               </button>

//               {/* Dropdown Content */}
//               {isServicesOpen && (
//                 <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-96 max-w-3xl bg-white shadow-lg border rounded-lg grid grid-cols-3 gap-4 p-6">
//                   <Link
//                     to="/web_development"
//                     className="flex flex-col items-center justify-center px-4 py-2 text-sm font-semibold hover:bg-slate-200"
//                   >
//                     <span>🌐</span> Web Development
//                   </Link>
//                   <Link
//                     to="/mobile_app"
//                     className="flex flex-col items-center justify-center px-4 py-2 text-sm font-semibold hover:bg-slate-200"
//                   >
//                     <span>📱</span> Mobile App
//                   </Link>
//                   <Link
//                     to="/matrimony_app"
//                     className="flex flex-col items-center justify-center px-4 py-2 text-sm font-semibold hover:bg-slate-200"
//                   >
//                     <span>💍</span> Matrimony App
//                   </Link>
//                   <Link
//                     to="/billing"
//                     className="flex flex-col items-center justify-center px-4 py-2 text-sm font-semibold hover:bg-slate-200"
//                   >
//                     <span>💸</span> Billing
//                   </Link>
//                   <Link
//                     to="/crm"
//                     className="flex flex-col items-center justify-center px-4 py-2 text-sm font-semibold hover:bg-slate-200"
//                   >
//                     <span>📊</span> CRM
//                   </Link>
//                   <Link
//                     to="/e_commerce"
//                     className="flex flex-col items-center justify-center px-4 py-2 text-sm font-semibold hover:bg-slate-200"
//                   >
//                     <span>🛒</span> E-Commerce
//                   </Link>
//                   <Link
//                     to="/moi_soft"
//                     className="flex flex-col items-center justify-center px-4 py-2 text-sm font-semibold hover:bg-slate-200"
//                   >
//                     <span>🖥</span> MOI Soft
//                   </Link>
//                   <Link
//                     to="/customer_management"
//                     className="flex flex-col items-center justify-center px-4 py-2 text-sm font-semibold hover:bg-slate-200"
//                   >
//                     <span>👥</span> Customer Management
//                   </Link>
//                   <Link
//                     to="/digital_marketing"
//                     className="flex flex-col items-center justify-center px-4 py-2 text-sm font-semibold hover:bg-slate-200"
//                   >
//                     <span>💻</span> Digital Marketing
//                   </Link>
//                 </div>
//               )}
//             </div>

//             <Link to="/aboutus" className="px-3 py-2 rounded-md text-base font-semibold hover:bg-slate-200">
//               About
//             </Link>
//             <Link to="/contact" className="px-3 py-2 rounded-md text-base font-semibold hover:bg-slate-200">
//               Contact
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               className="text-black hover:bg-gray-400 p-2 rounded-md"
//             >
//               ☰
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
