import React from "react";
import './Extrarow1.css'
import arrow_icon from '../Assets/arrow.png';
import Extrarow_image1 from "../Assets/extrarow_image1.avif";


const Extrarow1 = () => {
    return (
        <div className="hero">
            <div className="hero-left">
                <p>We Design Delightful Customer Experience</p>
                <h2>We partner with brands, agencies and start-ups to create engaging
                content and meaningful experiences in the digital space.</h2>
                <h3>Learn more about our services and portfolio of work</h3>

                    <div className="hero-latest-btn">
                        <div>Register</div>
                        <img src={arrow_icon} alt=""/>
                    </div>
            </div>
            <div className="hero-right">
                <img className="slider-img"src={Extrarow_image1} alt=""/>

            </div>

        </div>
    )
}

export default Extrarow1;


