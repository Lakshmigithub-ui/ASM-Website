
import React from 'react';
import './Community.css'; 
import web_development from "../Assets/web_development.avif";
import digital_marketing from "../Assets/digital_marketing.jpg";
import billing_solutions from "../Assets/billing-solutions.avif";

const Community = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Manage your entire community  </h1>
      <h1 className="services-title">in a single system</h1>
      <p>Who is Nextcent suitable for?</p>
      <div className="services-boxes">
        <div className="service-box">
          <img src={web_development} alt="Web Development" className="service-logo" />
          <h2>Web Development</h2>
          <p>We create responsive and high-performance websites tailored to your business needs. From design to deployment, our team ensures your web presence stands out.</p>
        </div>
        <div className="service-box">
          <img src={digital_marketing} alt="Digital Marketing" className="service-logo" />
          <h2>Digital Marketing</h2>
          <p>Boost your online presence with our comprehensive digital marketing services. We offer SEO, social media management, and targeted advertising to grow your audience.</p>
        </div>
        <div className="service-box">
          <img src={billing_solutions} alt="Billing Solutions" className="service-logo" />
          <h2>Billing Solutions</h2>
          <p>Streamline your billing process with our innovative solutions. We provide easy-to-use billing systems that simplify invoicing, payments, and financial reporting.</p>
        </div>
      </div>
    </div>
  );
};

export default Community;
