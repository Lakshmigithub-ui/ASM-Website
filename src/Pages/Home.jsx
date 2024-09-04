import React from "react";
import Slider from "../Components/Slider/Slider";
import ClientLogos from "../Components/ClientLogos/ClientLogos";
import Community from "../Components/Community/Community";
import Services_offer from "../Components/Services_offer";
import Extrarow1 from "../Components/Extrarow1/Extrarow1"
import Extrarow2 from "../Components/Extrarow2/Extrarow2"
import Extrarow3 from "../Components/Extrarow3";
import Gettouch from "../Components/Gettouch/Gettouch";
import Testimonials from "../Components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Slider/>
            <ClientLogos/>
            <Community />
            <Extrarow1 />
            <Extrarow2 />
            <Extrarow3 />
            <Gettouch/>
            <Testimonials/>
        </div>
    )
}

export default Home;