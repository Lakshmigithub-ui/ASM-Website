import React from 'react';
import './Extrarow2.css'; 
import image1 from "../Assets/image1.avif";
import image2 from "../Assets/image2.avif";
import image3 from "../Assets/image3.avif";

const ImageBoxes = () => {
  const boxes = [
    { src: image1, text: 'Requirements Analysis: Understand and document client requirements to ensure the software meets their needs.' },
    { src: image2, text: 'Development: Write clean, maintainable, and efficient code based on the design specifications.' },
    { src: image3, text: 'Deployment: Manage the deployment process to ensure smooth and efficient delivery of the software to the end users.' }
  ];

  return (
    <div className="image-boxes-wrapper">
      <h1 className="main-heading">Caring is the New Marketing</h1>
      <p className="main-description">
        By fulfilling the responsibilities, a software company can deliver high-quality products, maintain strong client relationships, and achieve long-term business success.
      </p>
      <div className="image-box-container">
        {boxes.map((box, index) => (
          <div key={index} className="image-box">
            <div className="image-container">
              <img src={box.src} alt={`Box ${index + 1}`} className="image" />
              <div className="text-overlay">
                <p className="overlay-text">{box.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageBoxes;
