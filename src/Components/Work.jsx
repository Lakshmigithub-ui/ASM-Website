import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import proj1 from "./Assets/proj1.jpg";
import proj2 from "./Assets/proj2.jpg";
import proj3 from "./Assets/proj3.jpg";
import proj4 from "./Assets/proj4.jpg";
import proj5 from "./Assets/proj5.jpg";
import proj6 from "./Assets/proj6.jpg";
import proj7 from "./Assets/proj7.jpg";
import proj8 from "./Assets/proj8.jpg";
import proj9 from "./Assets/proj9.jpg";
import proj10 from "./Assets/proj10.jpg";
import proj11 from "./Assets/proj11.jpg";
import proj12 from "./Assets/proj12.jpg";
import proj13 from "./Assets/inspire_works.PNG";
import proj14 from "./Assets/priya.PNG";
import proj15 from "./Assets/uyirmei.PNG";
import proj16 from "./Assets/smkbilling.png";


export const Work = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Animation will trigger once and won't reset on scroll up
    });
}, []);

  //   AOS.init({ duration: 1200 }); // Initialize AOS for animations
  // }, []);

  return (
    <div className="bg-slate-100 text-gray-900">
      <div className="py-8 px-4 max-w-screen-xl mx-auto">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-lg font-bold mb-2">SHOWCASE OF OUR BEST</h2>
          <span className="block h-1 w-32 bg-customBlue mx-auto mb-4"></span>
          <p className="text-base">
            We create websites and mobile apps. We believe those people are more engaging and that will be beneficial for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[

            {src: proj13, title: 'Inspire Media.in', type: 'Responsive Web Design'},
            {src: proj14, title: 'PriyaMehan Novels', type: 'Web Development'},
            {src: proj15, title: 'Uyirmei Seithigal', type: 'Web Development'},
            {src: proj16, title: 'ASM Billing', type: 'Billing App'},
            { src: proj1, title: 'Top Plus Super Market', type: 'E-commerce / Online Shopping' },
            { src: proj2, title: 'Breathe Care Systems', type: 'CMS Website' },
            { src: proj3, title: 'Mitra International Business Club', type: 'CMS Website' },
            { src: proj4, title: 'Stampa', type: 'Responsive Web Design' },
            { src: proj5, title: 'Senaithalaivar Matrimonial', type: 'Matrimonial Portal' },
            { src: proj6, title: 'Thepostvfx', type: 'Responsive Web Design' },
            { src: proj7, title: 'Kaaviya Properties', type: 'CMS Website' },
            { src: proj8, title: 'Marlen Cinemas', type: 'Responsive Web Design' },
            { src: proj9, title: 'Strike a price', type: 'CMS Website' },
            { src: proj10, title: 'Senaithalaivar Sangam', type: 'CMS Website' },
            { src: proj11, title: 'Santhosh', type: 'Responsive Web Design' },
            { src: proj12, title: 'Mitra Times', type: 'CMS Website' }

          ].map((work, index) => (
            <div
              key={index}
              className="bg-slate-100 p-4 rounded-lg text-center"
              data-aos="fade-up"
            >
              <img
                src={work.src}
                alt={work.title}
                // className="w-full h-48 object-contain mb-4 rounded-md hover:scale-125"
                className="w-full h-48 object-contain mb-4 rounded-md transition-transform duration-500 ease-in-out hover:scale-125 sm:hover:scale-110 md:hover:scale-115 lg:hover:scale-125"

              />
              <h3 className="text-lg font-semibold mb-2" data-aos="fade-down">{work.title}</h3>
              <p className="text-sm">{work.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
