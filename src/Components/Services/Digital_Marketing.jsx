// src/components/DigitalMarketing.js

import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Example images
import digitalMarketingHeroImage from '../Assets/digitalMarketingHeroImage.avif';
import seoImage from '../Assets/seoImage.avif';
import socialMediaImage from '../Assets/socialMediaImage.avif';
import contentMarketingImage from '../Assets/contentMarketingImage.avif';

const Digital_Marketing = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="bg-slate-100 text-gray-700">
      {/* Hero Section */}
      <section className="relative bg-slate-100 overflow-hidden py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20 justify-between">
          {/* Text Content */}
          <div className="md:w-1/2" data-aos="fade-up">
            <h1 className="text-lg md:text-lg font-bold mb-4">
            Grow Your Business with ASM Infotech's Expert Digital Marketing Solutions
            </h1>
            <p className="text-base text-justify mb-8">
            At ASM Infotech, we offer a full suite of digital marketing services designed to help your business reach its potential. Whether you want to increase brand awareness, generate more leads, or drive sales, our team is equipped with the tools and expertise to deliver impactful results.            </p>
          </div>
          {/* Main Image */}
          <div className="md:w-1/2 mt-12 md:mt-0" data-aos="fade-down">
            <img src={digitalMarketingHeroImage} alt="Digital Marketing" className="gray-image w-3/4 h-auto rounded-lg gap-8 shadow-lg"/>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-lg  md:text-lg font-bold mb-12" data-aos="fade-up">
            Our Digital Marketing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Service 1: SEO */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <img src={seoImage} alt="SEO" className="gray-image w-24 h-24 mx-auto mb-4"/>
              <h3 className="text-base font-semibold mb-2">Search Engine Optimization (SEO)</h3>
              <p className="text-gray-700 text-sm">
                Improve your website's visibility on search engines and attract more organic traffic with our expert SEO strategies.
              </p>
            </div>
            {/* Service 2: Social Media Marketing */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <img src={socialMediaImage} alt="Social Media Marketing" className="gray-image w-24 h-24 mx-auto mb-4"/>
              <h3 className="text-base font-semibold mb-2">Social Media Marketing</h3>
              <p className="text-gray-700 text-sm">
                Engage your audience on social media platforms with targeted campaigns and content designed to boost brand awareness and loyalty.
              </p>
            </div>
            {/* Service 3: Content Marketing */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="600">
              <img src={contentMarketingImage} alt="Content Marketing" className="gray-image w-24 h-24 mx-auto mb-4"/>
              <h3 className="text-base font-semibold mb-2">Content Marketing</h3>
              <p className="text-gray-700 text-sm">
                Create compelling content that resonates with your audience and drives engagement. Our content marketing strategies are tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-lg md:text-lg font-bold mb-12" data-aos="fade-up">
            Success Stories
          </h2>
          <div className="flex flex-col lg:flex-row justify-center gap-12">
            {/* Case Study 1 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-base font-semibold mb-2">Increased Organic Traffic</h3>
              <p className="text-gray-700 text-sm">
                By implementing our SEO strategies, our client saw a 50% increase in organic traffic within three months, leading to higher engagement and conversions.
              </p>
            </div>
            {/* Case Study 2 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-lg" data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-base font-semibold mb-2">Social Media Growth</h3>
              <p className="text-gray-700 text-sm">
                Our targeted social media campaigns helped our client grow their following by 70% and significantly increase their brand visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-base md:text-lg font-semibold mb-6" data-aos="fade-up">
            Ready to Boost Your Digital Presence?
          </h2>
          <p className="text-sm md:text-base mb-8" data-aos="fade-up" data-aos-delay="200">
            Get in touch with us to discover how our digital marketing solutions can drive growth for your business. We look forward to working with you!
          </p>
          <Link to="/contact">
            <button className="bg-blue-500 text-sm text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300" data-aos="fade-up" data-aos-delay="400">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Digital_Marketing;
