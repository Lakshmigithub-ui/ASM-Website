import React from "react";
import Slider from "../Components/Slider/Slider";
import ClientLogos from "../Components/ClientLogos/ClientLogos";
import Community from "../Components/Community/Community";
import Extrarow1 from "../Components/Extrarow1/Extrarow1"
import Gettouch from "../Components/Gettouch/Gettouch";
import Testimonials from "../Components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Slider/>
            <ClientLogos/>
            <Community />
            <Extrarow1 />
            <Gettouch/>
            <Testimonials/>
        </div>
    )
}

export default Home;