// 

import React from 'react';
import './ClientLogos.css'; // Import the CSS file
import client_logo1 from "../Assets/client_logo1.avif"
import client_logo2 from "../Assets/client_logo2.avif"
import client_logo3 from "../Assets/client_logo3.avif"
import client_logo4 from "../Assets/client_logo4.avif"
import client_logo5 from "../Assets/client_logo5.avif"


const ClientLogos = () => {
  // Array of client logos with alt text and link
  const clients = [
    { src: client_logo1, alt: 'Client 1', link: 'https://client1.com' },
    { src: client_logo2, alt: 'Client 2', link: 'https://client2.com' },
    { src: client_logo3, alt: 'Client 3', link: 'https://client3.com' },
    { src: client_logo4, alt: 'Client 4', link: 'https://client4.com' },
    { src: client_logo5, alt: 'Client 4', link: 'https://client5.com' }
  ];

  return (
    <section className="client-logos">
      <h2>Our Clients</h2>
      <div className="logo-grid">
        {clients.map((client, index) => (
          <a key={index} href={client.link} target="_blank" rel="noopener noreferrer">
            <img src={client.src} alt={client.alt} className="logo" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
