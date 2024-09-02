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


import React, { useState } from "react";
import logo from '../Assets/logo.png';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
            </div>
            <button className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <li onClick={() => { setMenu("home") }}>
                    <Link to="/" className={menu === "home" ? "active" : ""}>Home</Link>
                    {menu === "home" && <hr />}
                </li>
                <li onClick={() => { setMenu("work") }}>
                    <Link to="/work" className={menu === "work" ? "active" : ""}>Work</Link>
                    {menu === "work" && <hr />}
                </li>
                <li onClick={() => { setMenu("services") }}>
                    <Link to="/services" className={menu === "services" ? "active" : ""}>Services</Link>
                    {menu === "services" && <hr />}
                </li>
                <li onClick={() => { setMenu("aboutus") }}>
                    <Link to="/aboutus" className={menu === "aboutus" ? "active" : ""}>About us</Link>
                    {menu === "aboutus" && <hr />}
                </li>
                <li onClick={() => { setMenu("contact") }}>
                    <Link to="/contact" className={menu === "contact" ? "active" : ""}>Contact</Link>
                    {menu === "contact" && <hr />}
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
