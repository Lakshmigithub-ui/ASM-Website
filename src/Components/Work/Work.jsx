import React from 'react';
import proj from "../Assets/proj.avif";

export const Work = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="py-8 px-4 max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">SHOWCASE OF OUR BEST</h2>
          <span className="block h-1 w-32 bg-teal-500 mx-auto mb-4"></span>
          <p className="text-lg">
            We create websites and mobile apps. We believe those people are more engaging and that will be beneficial for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { src: proj, title: 'Top Plus Super Market', type: 'E-commerce / Online Shopping' },
            { src: proj, title: 'Breathe Care Systems', type: 'CMS Website' },
            { src: proj, title: 'Mitra International Business Club', type: 'CMS Website' },
            { src: proj, title: 'stampa', type: 'Responsive Web Design' },
            { src: proj, title: 'senaithalaivar matrimonial', type: 'Matrimonial Portal' },
            { src: proj, title: 'thepostvfx', type: 'Responsive Web Design' },
            { src: proj, title: 'kaaviya Properties', type: 'CMS Website' },
            { src: proj, title: 'marlen cinemas', type: 'Responsive Web Design' },
            { src: proj, title: 'strike a price', type: 'CMS Website' },
            { src: proj, title: 'senaithalaivar Sangam', type: 'CMS Website' },
            { src: proj, title: 'santhosh', type: 'Responsive Web Design' },
            { src: proj, title: 'mitra times', type: 'CMS Website' },
          ].map((work, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
              <img
                src={work.src}
                alt={work.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
              <p className="text-sm">{work.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
