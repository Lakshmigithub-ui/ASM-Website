// import React from 'react';
// import './ClientLogos.css'; 
// import client_logo1 from "../Assets/client_logo1.avif"
// import client_logo2 from "../Assets/client_logo2.avif"
// import client_logo3 from "../Assets/client_logo3.avif"
// import client_logo4 from "../Assets/client_logo4.avif"
// import client_logo5 from "../Assets/client_logo5.avif"
// import client_logo6 from "../Assets/client_logo6.avif"
// import client_logo7 from "../Assets/client_logo7.avif"



// const ClientLogos = () => {
//   // Array of client logos with alt text and link
//   const clients = [
//     { src: client_logo1, alt: 'Client 1', link: 'https://client1.com' },
//     { src: client_logo2, alt: 'Client 2', link: 'https://client2.com' },
//     { src: client_logo3, alt: 'Client 3', link: 'https://client3.com' },
//     { src: client_logo4, alt: 'Client 4', link: 'https://client4.com' },
//     { src: client_logo5, alt: 'Client 5', link: 'https://client5.com' },
//     { src: client_logo6, alt: 'Client 6', link: 'https://client6.com' },
//     { src: client_logo7, alt: 'Client 7', link: 'https://client7.com' }

//   ];

//   return (
//     <section className="client-logos">
//       <h2>Our Clients</h2>
//       <p>We have been working with some Fortune 500+ clients</p>
//       <div className="logo-grid">
//         {clients.map((client, index) => (
//           <a key={index} href={client.link} target="_blank" rel="noopener noreferrer">
//             <img src={client.src} alt={client.alt} className="logo" />
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ClientLogos;



import React from 'react';
import client_logo1 from "../Assets/client_logo1.avif";
import client_logo2 from "../Assets/client_logo2.avif";
import client_logo3 from "../Assets/client_logo3.avif";
import client_logo4 from "../Assets/client_logo4.avif";
import client_logo5 from "../Assets/client_logo5.avif";
import client_logo6 from "../Assets/client_logo6.avif";
import client_logo7 from "../Assets/client_logo7.avif";

const ClientLogos = () => {
  // Array of client logos with alt text and link
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
    <section className="bg-gray-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Clients</h2>
        <p className="text-lg mb-12">We have been working with some Fortune 500+ clients</p>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <a key={index} href={client.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <img src={client.src} alt={client.alt} className="w-24 h-24 object-contain hover:grayscale-0 transition-transform transform hover:scale-105" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
