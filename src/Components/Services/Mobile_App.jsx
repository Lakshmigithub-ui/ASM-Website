import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; 
import mobile_application from "../Assets/mobile_application.jpg";
import ios_app from "../Assets/apple.png";
import ios from "../Assets/ios.png";
import android_app from "../Assets/android.png";
import hybrid_app from "../Assets/hybrid.png";
import icon1 from "../Assets/icon1.avif";
import icon2 from "../Assets/icon2.avif";
import icon3 from "../Assets/icon3.avif";
import contact from "../Assets/contact2.png";

const MobileAppDevelopment = () => {
  useEffect(() => {
    AOS.init({
      disable: () => window.innerWidth < 768,
    });
  }, []);

  return (
    <div className="bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 text-gray-700 min-h-screen p-8">
      <header className="text-center mb-10">
        <h1 className="text-3xl text-gray-600 font-bold mb-4" data-aos="fade-down">
          Innovative Mobile App Development Services
        </h1>
        <p className="text-base text-justify" data-aos="fade-up">
          "At ASM Infotech, we specialize in creating innovative mobile
          applications that are tailored to meet the unique needs of your
          business. Whether you're looking to build a high-performance iOS app,
          a versatile Android solution, or a cross-platform hybrid app, our
          expert team is equipped with the latest tools and technologies to
          deliver exceptional results."
        </p>
      </header>

      <section className="mb-12">
        <div className="flex flex-col gap-0.5 lg:flex-row items-center justify-between bg-slate-50 shadow-lg rounded-lg p-6">
          <div className="lg:w-1/3 flex" data-aos="fade-up">
            <img
              src={ios_app}
              alt="iOS App"
              className="gray-image w-1/2 h-auto rounded-lg"
            />

          </div>
          <div className="lg:w-5/6" data-aos="fade-down">
            <h2 className="text-xl font-semibold mb-4">iOS App Development</h2>
            <p className="text-base text-justify mb-2">
              Our iOS app development services focus on delivering
              high-performance apps compatible with the latest iOS versions.
            </p>
            <p className="text-base text-justify">
              We ensure seamless user experience with robust features and
              exceptional UI/UX design tailored for the Apple ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6">
          <div className="lg:w-5/6 lg:pr-8" data-aos="fade-up">
            <h2 className="text-xl font-semibold mb-4">Android App Development</h2>
            <p className="text-base mb-2">
              Our Android app development services create apps optimized across
              Android devices, focusing on user-centric design.
            </p>
            <p className="text-base">
              We emphasize intuitive functionality to ensure your app stands out
              in the crowded Android market.
            </p>
          </div>
          <div className="lg:w-1/3" data-aos="fade-down">
            <img
              src={android_app}
              alt="Android App"
              className=" gray-image w-3/5  rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6">
          <div className="lg:w-1/3" data-aos="fade-up">
            <img
              src={hybrid_app}
              alt="Hybrid App"
              className="gray-image w-full h-auto rounded-lg"
            />
            
          </div>
          <div className="lg:w-5/6 lg:pl-8" data-aos="fade-down">
            <h2 className="text-xl font-semibold mb-4">Hybrid App Development</h2>
            <p className="text-base text-justify mb-2">
              Our hybrid app development ensures a single codebase for both iOS
              and Android platforms, saving time and costs.
            </p>
            <p className="text-base text-justify">
              We use cross-platform frameworks to deliver high-quality apps with
              a native-like experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-lg mb-12" data-aos="fade-up">
        <p className="text-base mb-4 text-center">
          Our team is dedicated to delivering high-quality mobile applications
          that meet your business needs and exceed user expectations.
        </p>
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="lg:w-1/3 mb-8 lg:mb-0 text-center">
            <img
              src={icon1}
              alt="Icon 1"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Innovative Solutions</h3>
            <p className="text-sm">
              We bring creativity and cutting-edge technology to every project.
            </p>
          </div>
          <div className="lg:w-1/3 mb-8 lg:mb-0 text-center">
            <img
              src={icon2}
              alt="Icon 2"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">User-Centric Design</h3>
            <p className="text-sm">
              Our designs are crafted to provide an intuitive and engaging user
              experience.
            </p>
          </div>
          <div className="lg:w-1/3 text-center">
            <img
              src={icon3}
              alt="Icon 3"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Dedicated Support</h3>
            <p className="text-sm">
              We offer ongoing support and maintenance to ensure your app runs
              smoothly.
            </p>
          </div>
        </div>
      </section>

      <footer className="flex items-center justify-center p-8 bg-white rounded-lg shadow-lg mb-12">
        <img
          src={contact}
          alt="Call to Action"
          className=" gray-image w-32 h-32 mr-4"
          data-aos="fade-right"
        />
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2" data-aos="fade-up">
            Ready to Start Your Project?
          </h2>
          <p className="text-base mb-4">
            Contact us today to discuss your mobile app development needs and
            receive a tailored solution. Our team will deliver a secure,
            high-performance app that perfectly fits your business goals.
          </p>
          <Link to="/contact">
            <button
              className="text-sm bg-customBlue text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Contact Us
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default MobileAppDevelopment;
