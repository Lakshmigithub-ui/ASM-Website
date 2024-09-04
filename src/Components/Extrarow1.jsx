import React from "react";
import Extrarow_image1 from "./Assets/extrarow_image1.avif";

const Extrarow1 = () => {
    return (
        <div className="bg-slate-800 text-white py-12 px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
                <p className="text-xl font-light mb-4">We Design Delightful Customer Experience</p>
                <h2 className="text-2xl font-semibold leading-tight">
                    We partner with brands, agencies, and start-ups to create engaging content and meaningful experiences in the digital space.
                </h2>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
                <img className="w-full h-auto rounded-lg shadow-lg" src={Extrarow_image1} alt="Design" />
            </div>
        </div>
    );
}

export default Extrarow1;
