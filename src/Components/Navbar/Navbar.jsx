import React, {useContext} from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import {useState} from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [menu,setMenu] = useState("home");

    return (
        <div className='navbar'>
            <div className="'nav-logo"> 
                <img src={logo}alt=""/>
                
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration:'none'}} to ='/'>Home</Link>{menu === "home"? <hr/>:<></>} </li>
                <li onClick={()=>{setMenu("work")}}><Link style={{ textDecoration:'none'}}to='/work'>Work</Link>{menu === "work"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("services")}}><Link style={{ textDecoration:'none'}}to = '/services'>Services</Link> {menu === "services" ? <hr/>: <></>}</li>
                <li onClick={()=>{setMenu("aboutus")}}><Link style={{ textDecoration:'none'}}to = '/aboutus'>About us</Link> {menu === "aboutus" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("contact")}}><Link style={{ textDecoration:'none'}}to = '/contact'>Contact</Link> {menu === "contact" ? <hr/> : <></>}</li>
                <li onClick={()=>{setMenu("login")}}><Link style={{ textDecoration:'none'}}to = '/login'><button>Sign in</button></Link> {menu === "sign in" ? <hr/> : <></>}</li>

            </ul>
            {/* <div className="nav-login">
                <Link to='/login'><button>Sign in</button></Link>
            </div> */}
            
        </div>
    )
}
export default Navbar;