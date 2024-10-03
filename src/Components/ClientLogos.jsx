// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

// import client_logo1 from "./Assets/pm_logo.PNG";
// import client_logo2 from "./Assets/im1_logo.PNG";
// import client_logo3 from "./Assets/um_logo.PNG";
// import client_logo4 from "./Assets/tp_logo.PNG";
// import client_logo5 from "./Assets/bc_logo.PNG";
// import client_logo6 from "./Assets/mi_logo.PNG";
// import client_logo7 from "./Assets/s_logo.PNG";
// import client_logo8 from "./Assets/st_logo.PNG";
// import client_logo9 from "./Assets/kp_logo.PNG";


// const ClientLogos = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
//   }, []);

//   const clients = [
//     { src: client_logo1, alt: 'Client 1', link: 'https://client1.com' },
//     { src: client_logo2, alt: 'Client 2', link: 'https://client2.com' },
//     { src: client_logo3, alt: 'Client 3', link: 'https://client3.com' },
//     { src: client_logo4, alt: 'Client 4', link: 'https://client4.com' },
//     { src: client_logo5, alt: 'Client 5', link: 'https://client5.com' },
//     { src: client_logo6, alt: 'Client 6', link: 'https://client6.com' },
//     { src: client_logo7, alt: 'Client 7', link: 'https://client7.com' },
//     { src: client_logo8, alt: 'Client 8', link: 'https://client8.com' },
//     { src: client_logo9, alt: 'Client 9', link: 'https://client9.com' }
//   ];

//   return (
//     <section className="bg-white text-gray-600 py-16 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 data-aos="fade-up" className="text-xl md:text-xl font-bold mb-1">Our Clients</h2>
//         <span className="block h-1 w-10 bg-customBlue mx-auto mb-6"></span>
//         <p data-aos="fade-up" data-aos-delay="200" className="text-lg mb-12">We have been working with some Fortune 500+ clients</p>
//         <div className="flex flex-col items-center">
//           <div className="flex flex-wrap justify-center gap-8">
//             {clients.map((client, index) => (
//               <a
//                 key={index}
//                 href={client.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center justify-center"
//                 data-aos="zoom-in"
//                 data-aos-delay={index * 100} // Staggered animation
//               >
//                 <img
//                   src={client.src}
//                   alt={client.alt}
//                   className="gray-image w-24 h-24 object-contain hover:grayscale-0 transition-transform transform hover:scale-105"
//                 />
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientLogos;

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

// import client_logo1 from "./Assets/pm_logo.PNG";
// import client_logo2 from "./Assets/im1_logo.PNG";
// import client_logo3 from "./Assets/um_logo.PNG";
// import client_logo4 from "./Assets/tp_logo.PNG";
// import client_logo5 from "./Assets/bc_logo.PNG";
// import client_logo6 from "./Assets/mi_logo.PNG";
// import client_logo7 from "./Assets/s_logo.PNG";
// import client_logo8 from "./Assets/st_logo.PNG";
// import client_logo9 from "./Assets/kp_logo.PNG";
// import client_logo10 from "./Assets/mt_logo.PNG";
// import client_logo11 from "./Assets/stike_logo.PNG";
// import client_logo12 from "./Assets/marlin_logo.PNG";


// const ClientLogos = () => {
//   useEffect(() => {
//     AOS.init({
//       once: true, // Animation will trigger once and won't reset on scroll up
//     });
// }, []);

//   //   AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
//   // }, []);

//   const clients = [
//     { src: client_logo1, alt: 'Client 1', link: 'https://client1.com', name: 'PriyaMehan Novels' },
//     { src: client_logo2, alt: 'Client 2', link: 'https://client2.com', name: 'Inspire Media' },
//     { src: client_logo3, alt: 'Client 3', link: 'https://client3.com', name: 'Uyirmei' },
//     { src: client_logo4, alt: 'Client 4', link: 'https://client4.com', name: 'Top Plus Super Market' },
//     { src: client_logo5, alt: 'Client 5', link: 'https://client5.com', name: 'Breath Care System' },
//     { src: client_logo6, alt: 'Client 6', link: 'https://client6.com', name: 'Mitra International Business Club' },
//     { src: client_logo7, alt: 'Client 7', link: 'https://client7.com', name: 'Stampa' },
//     { src: client_logo8, alt: 'Client 8', link: 'https://client8.com', name: 'Senaithalaivar Matrimonial' },
//     { src: client_logo9, alt: 'Client 9', link: 'https://client9.com', name: 'Kaaviya Properties' },
//     { src: client_logo6, alt: 'Client 10', link: 'https://client10.com', name: 'Mithra Times' },
//     { src: client_logo11, alt: 'Client 11', link: 'https://client11.com', name: 'Strike a price' },
//     { src: client_logo12, alt: 'Client 12', link: 'https://client12.com', name: 'Marlen Cinemas' },

//   ];

//   return (
//     <section className="bg-white text-gray-600 py-16 px-4 md:px-8">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 data-aos="fade-up" className="text-xl md:text-xl font-bold mb-1">Our Clients</h2>
//         <span className="block h-1 w-10 bg-customBlue mx-auto mb-6"></span>
//         <p data-aos="fade-up" data-aos-delay="200" className="text-lg mb-12">We have been working with some Fortune 500+ clients</p>
//         <div className="flex flex-col items-center">
//           <div className="flex flex-wrap justify-center gap-8">
//             {clients.map((client, index) => (
//               <a
//                 key={index}
//                 href={client.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex flex-col items-center justify-center p-1 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-125"
//                 data-aos="zoom-in"
//                 data-aos-delay={index * 100} // Staggered animation
//               >
//                 <img
//                   src={client.src}
//                   alt={client.alt}
//                   className="w-24 h-24 object-contain mb-2 hover:grayscale-0 transition hover:scale-105"
//                 />
//                 <span className="text-sm font-medium mt-2">{client.name}</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClientLogos;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import client_logo1 from "./Assets/pm_logo.PNG";
import client_logo2 from "./Assets/im1_logo.PNG";
import client_logo3 from "./Assets/um_logo.PNG";
import client_logo4 from "./Assets/tp_logo.PNG";
import client_logo5 from "./Assets/bc_logo.PNG";
import client_logo6 from "./Assets/mi_logo.PNG";
import client_logo7 from "./Assets/s_logo.PNG";
import client_logo8 from "./Assets/st_logo.PNG";
import client_logo9 from "./Assets/kp_logo.PNG";
import client_logo10 from "./Assets/mt_logo.PNG";
import client_logo11 from "./Assets/stike_logo.PNG";
import client_logo12 from "./Assets/marlin_logo.PNG";
import client_logo14 from "./Assets/asm.PNG";
import client_logo15 from "./Assets/santhosh_logo.PNG";
import client_logo16 from "./Assets/post_logo.PNG";

const ClientLogos = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Animation will trigger once and won't reset on scroll up
    });
  }, []);

  const clients = [
    { src: client_logo1, alt: 'Client 1', link: 'https://priyamehannovels.com/', name: 'PriyaMehan Novels' },
    { src: client_logo2, alt: 'Client 2', link: 'https://www.inspiremedia.in/', name: 'Inspire Media' },
    { src: client_logo14, alt: 'Client 14', link: 'https://asmbilling.com', name: 'ASM Billing' },
    { src: client_logo3, alt: 'Client 3', link: 'https://client3.com', name: 'Uyirmei' },
    { src: client_logo4, alt: 'Client 4', link: 'https://client4.com', name: 'Top Plus Super Market' },
    { src: client_logo5, alt: 'Client 5', link: 'https://client5.com', name: 'Breath Care System' },
    { src: client_logo6, alt: 'Client 6', link: 'https://mitrainternationalbusinessclub.com/ ', name: 'Mitra International Business Club' },
    { src: client_logo7, alt: 'Client 7', link: 'https://client7.com', name: 'Stampa' },
    { src: client_logo8, alt: 'Client 8', link: 'https://client8.com', name: 'Senaithalaivar Matrimonial' },
    { src: client_logo9, alt: 'Client 9', link: 'https://kaaviyaproperties.com/', name: 'Kaaviya Properties' },
    { src: client_logo6, alt: 'Client 10', link: 'https://client10.com', name: 'Mithra Times' },
    { src: client_logo11, alt: 'Client 11', link: 'https://client11.com', name: 'Strike a price' },
    { src: client_logo12, alt: 'Client 12', link: 'https://www.marlencinemas.com/', name: 'Marlen Cinemas' },
    { src: client_logo15, alt: 'Client 15', link: 'https://www.santhoshfinance.com/', name: 'Santhosh Finance' },
    { src: client_logo16, alt: 'Client 16', link: 'https://www.thepostvfx.com/', name: 'Thepostvfx' },
    { src: client_logo8, alt: 'Client 13', link: 'https://www.senaithalaivarsangam.com/', name: 'Senaithalaivar Sangam' },



  ];

  return (
    <section className="bg-white text-gray-600 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 data-aos="fade-up" className="text-xl md:text-xl font-bold mb-1">Our Clients</h2>
        <span className="block h-1 w-10 bg-customBlue mx-auto mb-6"></span>
        <p data-aos="fade-up" data-aos-delay="200" className="text-lg mb-12">We have been working with some Fortune 500+ clients</p>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, index) => (
              <a
                key={index}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-40 h-40 p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-125 "
                data-aos="zoom-in"
                data-aos-delay={index * 100} // Staggered animation
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="w-24 h-24 object-contain mb-2 hover:grayscale-0 transition-transform duration-500 ease-in-out hover:scale-125 "
                />
                <span className="text-sm font-medium mt-2 text-center break-words">{client.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
