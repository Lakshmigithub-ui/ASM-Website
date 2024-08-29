import React from "react";
import './Extrarow1.css'
import arrow_icon from '../Assets/arrow.png';
import Extrarow_image1 from "../Assets/extrarow_image1.avif";


const Extrarow1 = () => {
    return (
        <div className="extra">
            <div className="extra-left">
                <p>We Design Delightful Customer Experience</p>
                <h2>We partner with brands, agencies and start-ups to create engaging
                content and meaningful experiences in the digital space.</h2>
            </div>
            <div className="extra-right">
                <img className="slider-img"src={Extrarow_image1} alt=""/>

            </div>

        </div>
    )
}

export default Extrarow1;


