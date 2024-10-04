import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import mobile_application from "../Assets/mobile_application.jpg";
import ios_app from "../Assets/ios_app.avif"; // Add the image for iOS app
import android_app from "../Assets/android_app.avif"; // Add the image for Android app
import hybrid_app from "../Assets/hybrid_app.avif"; // Add the image for Hybrid app
import icon1 from "../Assets/icon1.avif";
import icon2 from "../Assets/icon2.avif";
import icon3 from "../Assets/icon3.avif";

const MobileAppDevelopment = () => {
  useEffect(() => {
    AOS.init({
      disable: () => window.innerWidth < 768, // Disable AOS on screens smaller than 768px
    });
  }, []);

  return (
    <div className="bg-slate-100 text-gray-700 min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-xl font-bold mb-4" data-aos="fade-down">
          Innovative Mobile App Development Services
        </h1>
        <p className="text-base text-justify" data-aos="fade-up">
          "At ASM Infotech, we specialize in creating innovative mobile
          applications that are tailored to meet the unique needs of your
          business. Whether you're looking to build a high-performance iOS app,
          a versatile Android solution, or a cross-platform hybrid app, our
          expert team is equipped with the latest tools and technologies to
          deliver exceptional results. We focus on creating intuitive user
          interfaces, robust functionalities, and seamless performance to ensure
          your app not only meets industry standards but exceeds user
          expectations. From ideation to launch, we work closely with you to
          bring your vision to life, offering continued support and maintenance
          to keep your app running smoothly as your business grows."
        </p>
      </header>

      <section className="mb-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-up">
            <img
              src={ios_app}
              alt="iOS App"
              className="gray-image w-3/4 h-auto max-w-lg rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8" data-aos="fade-down">
            <h2 className="text-lg font-semibold mb-4">iOS App Development</h2>
            <p className="text-base mb-4 text-justify">
              Our iOS app development services focus on delivering
              high-performance apps that are compatible with the latest iOS
              versions and devices.
            </p>
            <p className="text-base mb-4 text-justify">
              We ensure a seamless user experience with robust features and
              exceptional UI/UX design tailored for the Apple ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pl-8" data-aos="fade-up">
            <h2 className="text-lg font-semibold mb-4">Android App Development</h2>
            <p className="text-base mb-4">
              Our Android app development services are designed to create apps
              that perform optimally across a wide range of Android devices and
              versions.
            </p>
            <p className="text-base mb-4">
              We emphasize user-centric design and functionality to ensure your
              app stands out in the crowded Android market.
            </p>
          </div>
          <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-down">
            <img
              src={android_app}
              alt="Android App"
              className="gray-image w-3/4 h-auto max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-up">
            <img
              src={hybrid_app}
              alt="Hybrid App"
              className="gray-image w-3/4 h-auto max-w-lg rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8" data-aos="fade-down">
            <h2 className="text-lg font-semibold mb-4">Hybrid App Development</h2>
            <p className="text-base mb-4 text-justify">
              Our hybrid app development approach ensures you get a single
              codebase that runs smoothly on both iOS and Android platforms,
              saving time and costs.
            </p>
            <p className="text-base mb-4 text-justify">
              We leverage cross-platform frameworks to deliver high-quality apps
              with a native-like experience for users on any device.
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-slate-50 p-8 rounded-lg shadow-lg mb-12"
        data-aos="fade-up"
      >
        <p className="text-base mb-4 text-center">
          Our team is dedicated to delivering high-quality mobile applications
          that meet your business needs and exceed user expectations.
        </p>
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="lg:w-1/3 mb-8 lg:mb-0 text-center">
            <img
              src={icon1}
              alt="Icon 1"
              className="gray-image w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-base font-semibold">Innovative Solutions</h3>
            <p className="text-sm">
              We bring creativity and cutting-edge technology to every project.
            </p>
          </div>
          <div className="lg:w-1/3 mb-8 lg:mb-0 text-center">
            <img
              src={icon2}
              alt="Icon 2"
              className="gray-image w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-base font-semibold">User-Centric Design</h3>
            <p className="text-sm">
              Our designs are crafted to provide an intuitive and engaging user
              experience.
            </p>
          </div>
          <div className="lg:w-1/3 text-center">
            <img
              src={icon3}
              alt="Icon 3"
              className="gray-image w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-base font-semibold">Dedicated Support</h3>
            <p className="text-sm">
              We offer ongoing support and maintenance to ensure your app runs
              smoothly.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-up">
            <img
              src={mobile_application}
              alt="Mobile App"
              className="gray-image w-full h-auto max-w-lg rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8" data-aos="fade-">
            <h2 className="text-lg font-semibold mb-4">Our Expertise</h2>
            <p className="text-base mb-4">
              We specialize in developing innovative mobile applications that
              provide exceptional user experiences and drive business growth.
            </p>
            <ul className="text-base list-disc list-inside mb-4">
              <li>Custom Mobile App Development</li>
              <li>UI/UX Design for Mobile</li>
              <li>Cross-Platform Solutions</li>
              <li>App Maintenance and Support</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center">
        <h2 className="text-lg font-semibold mb-4" data-aos="fade-up">
          Ready to Start Your Project?
        </h2>
        <p className="text-base mb-4">
          Contact us today to discuss your mobile app development needs and get
          a customized plan.
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
      </footer>
    </div>
  );
};

export default MobileAppDevelopment;
