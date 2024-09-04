import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  { title: 'Web Development', description: 'Crafting responsive and visually stunning websites that drive engagement and growth.' },
  { title: 'Mobile App Development', description: 'Building intuitive and high-performance mobile applications for iOS and Android platforms.' },
  { title: 'Matrimony App', description: 'Creating customized matrimonial platforms tailored to connect people meaningfully.' },
  { title: 'Billing Software', description: 'Streamlining your financial processes with efficient and user-friendly billing solutions.' },
  { title: 'CRM', description: 'Enhancing customer relationships with our robust and scalable CRM systems.' },
  { title: 'E-Commerce Solutions', description: 'Developing powerful online stores that elevate your business to new heights.' },
  { title: 'Inventory Management App', description: 'Simplifying inventory control with our smart and easy-to-use applications.' },
  { title: 'Timesheet Software', description: 'Tracking employee time and productivity with precision and ease.' },
  { title: 'MOI Soft', description: 'Providing specialized software solutions tailored to meet specific industry requirements.' },
  { title: 'Customer Management App', description: 'Empowering businesses with tools to manage and nurture customer relationships.' },
  { title: 'Event Management App', description: 'Organizing events seamlessly with our comprehensive event planning applications.' },
  { title: 'Digital Marketing Services', description: 'Driving your brand’s online presence with strategic and results-driven digital marketing campaigns.' }
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-8" data-aos="fade-down">What We Offer</h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-700"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

