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

//     return (
//         <nav className="bg-white-900 text-z p-4">
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
//                     className={`lg:flex lg:items-center lg:space-x-4 lg:space-y-0 space-y-2 lg:space-y-0 fixed lg:static top-16 left-0 w-full lg:w-auto lg:bg-transparent bg-gray-800 lg:opacity-100 opacity-0 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-x-0' : 'translate-x-full'}`}
//                 >
//                     <li className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "home" ? "bg-gray-700" : ""}`} onClick={() => setMenu("home")}>
//                         <Link to="/" className="block">Home</Link>
//                     </li>
//                     <li className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "work" ? "bg-gray-700" : ""}`} onClick={() => setMenu("work")}>
//                         <Link to="/work" className="block">Work</Link>
//                     </li>
//                     <li className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "services" ? "bg-gray-700" : ""}`} onClick={() => setMenu("services")}>
//                         <Link to="/services" className="block">Services</Link>
//                     </li>
//                     <li className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "aboutus" ? "bg-gray-700" : ""}`} onClick={() => setMenu("aboutus")}>
//                         <Link to="/aboutus" className="block">About Us</Link>
//                     </li>
//                     <li className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "contact" ? "bg-gray-700" : ""}`} onClick={() => setMenu("contact")}>
//                         <Link to="/contact" className="block">Contact</Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
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
//                     className={`lg:flex lg:items-center lg:space-x-6 fixed lg:static top-16 left-0 w-full lg:w-auto lg:bg-transparent bg-gray-800 lg:opacity-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
//                 >
//                     <li className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "home" ? "bg-gray-700" : ""}`} onClick={() => setMenu("home")}>
//                         <Link to="/" className="block">Home</Link>
//                     </li>
//                     <li className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "work" ? "bg-gray-700" : ""}`} onClick={() => setMenu("work")}>
//                         <Link to="/work" className="block">Work</Link>
//                     </li>
//                     <li className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "services" ? "bg-gray-700" : ""}`} onClick={() => setMenu("services")}>
//                         <Link to="/services" className="block">Services</Link>
//                     </li>
//                     <li className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "aboutus" ? "bg-gray-700" : ""}`} onClick={() => setMenu("aboutus")}>
//                         <Link to="/aboutus" className="block">About Us</Link>
//                     </li>
//                     <li className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "contact" ? "bg-gray-700" : ""}`} onClick={() => setMenu("contact")}>
//                         <Link to="/contact" className="block">Contact</Link>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import React, { useState } from "react";
import logo from '../Assets/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (menuName) => {
        setMenu(menuName);
        setIsMenuOpen(false);  // Close the menu after clicking
    };

    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-10" />
                </div>
                <button 
                    className="block lg:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white mb-1"></span>
                    <span className="block w-6 h-0.5 bg-white"></span>
                </button>
                <ul 
                    className={`lg:flex lg:items-center lg:space-x-0 fixed lg:static top-16 left-0 w-full lg:w-auto lg:bg-transparent bg-gray-800 lg:opacity-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
                >
                    <li 
                        className={`hover:bg-gray-700 px-2 py-2 rounded ${menu === "home" ? "bg-gray-700" : ""}`} 
                        onClick={() => handleMenuClick("home")}
                    >
                        <Link to="/" className="block">Home</Link>
                    </li>
                    <li 
                        className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "work" ? "bg-gray-700" : ""}`} 
                        onClick={() => handleMenuClick("work")}
                    >
                        <Link to="/work" className="block">Work</Link>
                    </li>
                    <li 
                        className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "services" ? "bg-gray-700" : ""}`} 
                        onClick={() => handleMenuClick("services")}
                    >
                        <Link to="/services" className="block">Services</Link>
                    </li>
                    <li 
                        className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "aboutus" ? "bg-gray-700" : ""}`} 
                        onClick={() => handleMenuClick("aboutus")}
                    >
                        <Link to="/aboutus" className="block">About Us</Link>
                    </li>
                    <li 
                        className={`hover:bg-gray-700 px-4 py-2 rounded ${menu === "contact" ? "bg-gray-700" : ""}`} 
                        onClick={() => handleMenuClick("contact")}
                    >
                        <Link to="/contact" className="block">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

