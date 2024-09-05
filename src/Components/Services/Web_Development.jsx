import React from 'react';
import { FaApple, FaAndroid, FaReact, FaGooglePlay } from 'react-icons/fa';
import 'aos/dist/aos.css'; // Make sure to install AOS and import it

const  Web_Development = () => {
  return (
    <div className="bg-black text-white min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Mobile App Development</h1>

        {/* iOS App Development */}
        <div className="mb-12" data-aos="fade-up">
          <div className="flex items-center justify-between bg-gray-800 p-6 rounded-lg transition transform hover:-translate-y-2 hover:shadow-lg duration-500 ease-in-out">
            <div className="text-left">
              <h2 className="text-2xl font-semibold mb-2">iOS App Development</h2>
              <p>Tailored solutions for businesses with a focus on cutting-edge technology and user-centric design.</p>
            </div>
            <FaApple size={50} className="text-gray-400 transition-transform transform hover:scale-110 duration-300 ease-in-out" />
          </div>
        </div>

        {/* Android App Development */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="flex items-center justify-between bg-gray-800 p-6 rounded-lg transition transform hover:-translate-y-2 hover:shadow-lg duration-500 ease-in-out">
            <div className="text-left">
              <h2 className="text-2xl font-semibold mb-2">Android App Development</h2>
              <p>Expert Android solutions, leveraging Kotlin, Java, and the latest Android SDKs.</p>
            </div>
            <FaAndroid size={50} className="text-green-400 transition-transform transform hover:scale-110 duration-300 ease-in-out" />
          </div>
        </div>

        {/* Hybrid App Development */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center justify-between bg-gray-800 p-6 rounded-lg transition transform hover:-translate-y-2 hover:shadow-lg duration-500 ease-in-out">
            <div className="text-left">
              <h2 className="text-2xl font-semibold mb-2">Hybrid App Development</h2>
              <p>Cross-platform efficiency with native-like performance and cost-effective solutions.</p>
            </div>
            <FaReact size={50} className="text-blue-400 transition-transform transform hover:scale-110 duration-300 ease-in-out" />
          </div>
        </div>

        {/* Flutter Development */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="300">
          <div className="flex items-center justify-between bg-gray-800 p-6 rounded-lg transition transform hover:-translate-y-2 hover:shadow-lg duration-500 ease-in-out">
            <div className="text-left">
              <h2 className="text-2xl font-semibold mb-2">Flutter Development</h2>
              <p>Unlock the full potential of mobile apps with Flutter, delivering rich, responsive UIs.</p>
            </div>
            <FaGooglePlay size={50} className="text-yellow-400 transition-transform transform hover:scale-110 duration-300 ease-in-out" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web_Development;
