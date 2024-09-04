import React from "react";
import Slider from "./Slider";
import ClientLogos from "./ClientLogos";
import Community from "./Community";
import Extrarow1 from "./Extrarow1"
import Extrarow2 from "./Extrarow2"
import Extrarow3 from "./Extrarow3";
import Gettouch from "./Gettouch";
import Testimonials from "./Testimonials";

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