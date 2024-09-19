import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import office from "./Assets/office.avif"

const Extrarow3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="smart_solutions bg-white text-gray-700 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="smat_content text-center mb-8">
              <h1
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-easing="ease"
                className="text-2xl font-bold aos-init aos-animate"
              >
                "Sustainable Innovations for Global Impact"
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="110"
                data-aos-easing="ease"
                className="mt-4 text-lsm aos-init aos-animate"
              >

"ASM Infotech empowers businesses with cutting-edge billing software, innovative digital marketing, and top-tier web and mobile app development. We streamline financial management, amplify brand visibility, and create robust, responsive solutions that drive success in a digital-first world."              </p>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <div className="smat_content">
              <img
                className="img-fluid w-full rounded-lg aos-init aos-animate"
                data-aos="fade-down"
                data-aos-delay="115"
                data-aos-easing="ease"
                src={office}
                alt="Smart Solution"
              />
            </div>
          </div>
          <div className="w-full md:w-7/12 mt-8 md:mt-0">
            <div className="samt_content1 grid grid-cols-2 gap-6">
              {[
                { icon: "/images/home_icon1.svg", number: 6, label: "Countries" },
                { icon: "/images/home_icon2.svg", number: 34, label: "Plants & Offices" },
                { icon: "/images/home_icon3.svg", number: 16000, label: "Workforce", suffix: '+' },
                { icon: "/images/home_icon4.svg", number: 610, label: "Million Group", prefix: 'US $' },
                { icon: "/images/home_icon5.svg", number: 600, label: "Engineers", suffix: '+' },
                { icon: "/images/home_icon6.svg", number: 9, label: "Partnerships" },
              ].map((item, index) => (
                <div className="flex items-center space-x-4" key={index}>
                  <img
                    data-aos="fade-down"
                    data-aos-delay="100"
                    data-aos-easing="ease"
                    src={item.icon}
                    alt={item.label}
                    className="aos-init aos-animate"
                  />
                  <div>
                    <h3
                      data-aos="fade-up"
                      data-aos-delay="130"
                      data-aos-easing="ease"
                      className="text-xl font-semibold aos-init aos-animate"
                    >
                      <CountUp start={0} end={item.number} duration={3} prefix={item.prefix || ''} suffix={item.suffix || ''} />
                    </h3>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="150"
                      data-aos-easing="ease"
                      className="text-sm aos-init aos-animate"
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extrarow3;
