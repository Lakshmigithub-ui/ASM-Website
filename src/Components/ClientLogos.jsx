import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import client_logo1 from "./Assets/client_logo1.avif";
import client_logo2 from "./Assets/client_logo2.avif";
import client_logo3 from "./Assets/client_logo3.avif";
import client_logo4 from "./Assets/client_logo4.avif";
import client_logo5 from "./Assets/client_logo5.avif";
import client_logo6 from "./Assets/client_logo6.avif";
import client_logo7 from "./Assets/client_logo7.avif";

const ClientLogos = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const clients = [
    { src: client_logo1, alt: 'Client 1', link: 'https://client1.com' },
    { src: client_logo2, alt: 'Client 2', link: 'https://client2.com' },
    { src: client_logo3, alt: 'Client 3', link: 'https://client3.com' },
    { src: client_logo4, alt: 'Client 4', link: 'https://client4.com' },
    { src: client_logo5, alt: 'Client 5', link: 'https://client5.com' },
    { src: client_logo6, alt: 'Client 6', link: 'https://client6.com' },
    { src: client_logo7, alt: 'Client 7', link: 'https://client7.com' },
    { src: client_logo7, alt: 'Client 8', link: 'https://client8.com' }
  ];

  return (
    <section className="bg-white text-gray-600 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-xl md:text-2xl font-bold mb-4">Our Clients</h2>
        <p data-aos="fade-up" data-aos-delay="200" className="text-lg mb-12">We have been working with some Fortune 500+ clients</p>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
                data-aos="zoom-in"
                data-aos-delay={index * 100} // Staggered animation
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="w-24 h-24 object-contain hover:grayscale-0 transition-transform transform hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
