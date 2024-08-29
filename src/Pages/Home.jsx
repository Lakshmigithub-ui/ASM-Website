import React from "react";
import Slider from "../Components/Slider/Slider";
import ClientLogos from "../Components/ClientLogos/ClientLogos";
import Community from "../Components/Community/Community";
import Gettouch from "../Components/Gettouch/Gettouch";
import Testimonials from "../Components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Slider/>
            <ClientLogos/>
            <Community />
            <Gettouch/>
            <Testimonials/>
        </div>
    )
}

export default Home;