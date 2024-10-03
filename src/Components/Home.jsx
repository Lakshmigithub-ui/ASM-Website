import React from "react";
import Slider from "./Slider";
import ClientLogos from "./ClientLogos";
import Community from "./Community";
import Extrarow1 from "./Extrarow1"
import Extrarow2 from "./Extrarow2"
import Extrarow3 from "./Extrarow3";
import Gettouch from "./Gettouch";
import Testimonials from "./Testimonials";
// import {MyBlock} from "./MyBlock";

const Home = () => {
    return (
        <div>
            {/* <MyBlock /> */}
            <Slider/>
            <Extrarow1 />
            <Community />
            <Gettouch/>
            <Testimonials/>
            <ClientLogos/>
            {/* <Extrarow2 />
            <Extrarow3 />
 */}
        </div>
    )
}

export default Home;
