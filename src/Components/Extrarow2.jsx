import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import image1 from "./Assets/image1.avif";
import image2 from "./Assets/image2.avif";
import image3 from "./Assets/image3.avif";

const ImageBoxes = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const boxes = [
    { src: image1, text: 'Requirements Analysis: Understand and document client requirements to ensure the software meets their needs.' },
    { src: image2, text: 'Development: Write clean, maintainable, and efficient code based on the design specifications.' },
    { src: image3, text: 'Deployment: Manage the deployment process to ensure smooth and efficient delivery of the software to the end users.' }
  ];

  return (
    <div className="py-16 px-4 md:px-8 bg-slate-50 text-gray-700">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-xl md:text-2xl font-bold mb-4" data-aos="fade-up">Caring is the New Marketing</h1>
        <p className="text-sm md:text-xl mb-12" data-aos="fade-up" data-aos-delay="200">
          By fulfilling the responsibilities, a software company can deliver high-quality products, maintain strong client relationships, and achieve long-term business success.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={box.src} alt={`Box ${index + 1}`} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center text-base md:text-lg">{box.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageBoxes;

