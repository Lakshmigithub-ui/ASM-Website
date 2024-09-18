// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// import mobile_application from "../Assets/mobile_application.jpg"
// import ios_app from "../Assets/ios_app.avif"; // Add the image for iOS app
// import android_app from "../Assets/android_app.avif"; // Add the image for Android app
// import hybrid_app from "../Assets/hybrid_app.avif"; // Add the image for Hybrid app
// import icon1 from "../Assets/icon1.avif";
// import icon2 from "../Assets/icon2.avif";
// import icon3 from "../Assets/icon3.avif";

// const MobileAppDevelopment = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS
//   }, []);

//   return (
//     <div className="bg-gray-900 text-white min-h-screen p-8">
//       <header className="text-center mb-12">
//         <h1 className="text-lg font-bold mb-4" data-aos="fade-down">Innovative Mobile App Development Services</h1>
//         <p className="text-sm" data-aos="fade-up">Transform your vision into reality with our cutting-edge mobile app solutions.</p>
//       </header>

//       <section className="mb-12">
//         <div className="flex flex-col lg:flex-row items-center">
//           <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
//             <img src={ios_app} alt="iOS App" className="w-full h-auto rounded-lg shadow-lg " />
//           </div>
//           <div className="lg:w-1/2 lg:pl-8" data-aos="fade-left">
//             <h2 className="text-lg font-semibold mb-4">iOS App Development</h2>
//             <p className="text-sm mb-4">Our iOS app development services focus on delivering high-performance apps that are compatible with the latest iOS versions and devices.</p>
//             <p className="text-sm mb-4">We ensure a seamless user experience with robust features and exceptional UI/UX design tailored for the Apple ecosystem.</p>
//           </div>
//         </div>
//       </section>

//       <section className="mb-12">
//         <div className="flex flex-col lg:flex-row items-center">
//           <div className="lg:w-1/2 lg:pl-8" data-aos="fade-left">
//             <h2 className="text-lg font-semibold mb-4">Android App Development</h2>
//             <p className="text-sm mb-4">Our Android app development services are designed to create apps that perform optimally across a wide range of Android devices and versions.</p>
//             <p className="text-sm mb-4">We emphasize user-centric design and functionality to ensure your app stands out in the crowded Android market.</p>
//           </div>
//           <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
//             <img src={android_app} alt="Android App" className="w-full h-auto rounded-lg shadow-lg" />
//           </div>

//         </div>
//       </section>

//       <section className="mb-12">
//         <div className="flex flex-col lg:flex-row items-center">
//           <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
//             <img src={hybrid_app} alt="Hybrid App" className="w-full h-auto rounded-lg shadow-lg" />
//           </div>
//           <div className="lg:w-1/2 lg:pl-8" data-aos="fade-left">
//             <h2 className="text-lg font-semibold mb-4">Hybrid App Development</h2>
//             <p className="text-sm mb-4">Our hybrid app development approach ensures you get a single codebase that runs smoothly on both iOS and Android platforms, saving time and costs.</p>
//             <p className="text-sm mb-4">We leverage cross-platform frameworks to deliver high-quality apps with a native-like experience for users on any device.</p>
//           </div>
//         </div>
//       </section>



//       <section className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12" data-aos="fade-up">
//         <p className="text-sm mb-4 text-center">Our team is dedicated to delivering high-quality mobile applications that meet your business needs and exceed user expectations.</p>
//         <div className="flex flex-col lg:flex-row justify-around">
//           <div className="lg:w-1/3 mb-8 lg:mb-0 text-center">
//             <img src={icon1} alt="Icon 1" className="w-16 h-16 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold">Innovative Solutions</h3>
//             <p>We bring creativity and cutting-edge technology to every project.</p>
//           </div>
//           <div className="lg:w-1/3 mb-8 lg:mb-0 text-center">
//             <img src={icon2} alt="Icon 2" className="w-16 h-16 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold">User-Centric Design</h3>
//             <p>Our designs are crafted to provide an intuitive and engaging user experience.</p>
//           </div>
//           <div className="lg:w-1/3 text-center">
//             <img src={icon3} alt="Icon 3" className="w-16 h-16 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold">Dedicated Support</h3>
//             <p>We offer ongoing support and maintenance to ensure your app runs smoothly.</p>
//           </div>
//         </div>
//       </section>
//       <section className="mb-12">
//         <div className="flex flex-col lg:flex-row items-center">
//           <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
//             <img src={mobile_application} alt="Mobile App" className="w-full h-auto rounded-lg shadow-lg" />
//           </div>
//           <div className="lg:w-1/2 lg:pl-8" data-aos="fade-left">
//             <h2 className="text-lg font-semibold mb-4">Our Expertise</h2>
//             <p className="text-sm mb-4">We specialize in developing innovative mobile applications that provide exceptional user experiences and drive business growth.</p>
//             <ul className=" text-sm list-disc list-inside mb-4">
//               <li>Custom Mobile App Development</li>
//               <li>UI/UX Design for Mobile</li>
//               <li>Cross-Platform Solutions</li>
//               <li>App Maintenance and Support</li>
//             </ul>
//           </div>
//         </div>
//       </section>


//       <footer className="text-center">
//         <h2 className="text-lg font-semibold mb-4" data-aos="fade-up">Ready to Start Your Project?</h2>
//         <p className="text-sm mb-4">Contact us today to discuss your mobile app development needs and get a customized plan.</p>
//         <button className=" text-sm bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition" data-aos="fade-up">Get in Touch</button>
//       </footer>
//     </div>
//   );
// }

// export default MobileAppDevelopment;

{/* Mobile App Development Component */}
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import mobile_application from "../Assets/mobile_application.jpg";
import ios_app from "../Assets/ios_app.avif"; // Add the image for iOS app
import android_app from "../Assets/android_app.avif"; // Add the image for Android app
import hybrid_app from "../Assets/hybrid_app.avif"; // Add the image for Hybrid app
import icon1 from "../Assets/icon1.avif";
import icon2 from "../Assets/icon2.avif";
import icon3 from "../Assets/icon3.avif";

const MobileAppDevelopment = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <header className="text-center mb-12">
        <h1 className="text-lg font-bold mb-4" data-aos="fade-down">Innovative Mobile App Development Services</h1>
        <p className="text-sm" data-aos="fade-up">"At ASM Infotech, we specialize in creating innovative mobile applications that are tailored to meet the unique needs of your business. Whether you're looking to build a high-performance iOS app, a versatile Android solution, or a cross-platform hybrid app, our expert team is equipped with the latest tools and technologies to deliver exceptional results. We focus on creating intuitive user interfaces, robust functionalities, and seamless performance to ensure your app not only meets industry standards but exceeds user expectations. From ideation to launch, we work closely with you to bring your vision to life, offering continued support and maintenance to keep your app running smoothly as your business grows."</p>
      </header>

      <section className="mb-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
            <img src={ios_app} alt="iOS App" className="w-full h-auto max-w-lg rounded-lg shadow-lg" /> {/* Added max-w-xs */}
          </div>
          <div className="lg:w-1/2 lg:pl-8" data-aos="fade-left">
            <h2 className="text-lg font-semibold mb-4">iOS App Development</h2>
            <p className="text-sm mb-4">Our iOS app development services focus on delivering high-performance apps that are compatible with the latest iOS versions and devices.</p>
            <p className="text-sm mb-4">We ensure a seamless user experience with robust features and exceptional UI/UX design tailored for the Apple ecosystem.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pl-8" data-aos="fade-left">
            <h2 className="text-lg font-semibold mb-4">Android App Development</h2>
            <p className="text-sm mb-4">Our Android app development services are designed to create apps that perform optimally across a wide range of Android devices and versions.</p>
            <p className="text-sm mb-4">We emphasize user-centric design and functionality to ensure your app stands out in the crowded Android market.</p>
          </div>
          <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
            <img src={android_app} alt="Android App" className="w-full h-auto max-w-lg rounded-lg shadow-lg" /> {/* Added max-w-xs */}
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
            <img src={hybrid_app} alt="Hybrid App" className="w-full h-auto max-w-lg rounded-lg shadow-lg" /> {/* Added max-w-xs */}
          </div>
          <div className="lg:w-1/2 lg:pl-8" data-aos="fade-left">
            <h2 className="text-lg font-semibold mb-4">Hybrid App Development</h2>
            <p className="text-sm mb-4">Our hybrid app development approach ensures you get a single codebase that runs smoothly on both iOS and Android platforms, saving time and costs.</p>
            <p className="text-sm mb-4">We leverage cross-platform frameworks to deliver high-quality apps with a native-like experience for users on any device.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12" data-aos="fade-up">
        <p className="text-sm mb-4 text-center">Our team is dedicated to delivering high-quality mobile applications that meet your business needs and exceed user expectations.</p>
        <div className="flex flex-col lg:flex-row justify-around">
          <div className="lg:w-1/3 mb-8 lg:mb-0 text-center">
            <img src={icon1} alt="Icon 1" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Innovative Solutions</h3>
            <p>We bring creativity and cutting-edge technology to every project.</p>
          </div>
          <div className="lg:w-1/3 mb-8 lg:mb-0 text-center">
            <img src={icon2} alt="Icon 2" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">User-Centric Design</h3>
            <p>Our designs are crafted to provide an intuitive and engaging user experience.</p>
          </div>
          <div className="lg:w-1/3 text-center">
            <img src={icon3} alt="Icon 3" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">Dedicated Support</h3>
            <p>We offer ongoing support and maintenance to ensure your app runs smoothly.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
            <img src={mobile_application} alt="Mobile App" className="w-full h-auto max-w-lg rounded-lg shadow-lg" /> {/* Added max-w-xs */}
          </div>
          <div className="lg:w-1/2 lg:pl-8" data-aos="fade-left">
            <h2 className="text-lg font-semibold mb-4">Our Expertise</h2>
            <p className="text-sm mb-4">We specialize in developing innovative mobile applications that provide exceptional user experiences and drive business growth.</p>
            <ul className="text-sm list-disc list-inside mb-4">
              <li>Custom Mobile App Development</li>
              <li>UI/UX Design for Mobile</li>
              <li>Cross-Platform Solutions</li>
              <li>App Maintenance and Support</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="text-center">
        <h2 className="text-lg font-semibold mb-4" data-aos="fade-up">Ready to Start Your Project?</h2>
        <p className="text-sm mb-4">Contact us today to discuss your mobile app development needs and get a customized plan.</p>
        <button className="text-sm bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition" data-aos="fade-up">Get in Touch</button>
      </footer>
    </div>
  );
};

export default MobileAppDevelopment;
