// import React, { useState } from 'react';
// import './CSS/Contact.css'; 
// import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; 

// const Contact = () => {
//   const [messageSent, setMessageSent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate form submission
//     setMessageSent(true);
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <div className="contact-container">
//         <div className="contact-header">
//           <h2>Get in Touch with Us</h2>
//           <p>
//             Have a question or need more information about ASM Infotech? Use the form below or email us at{' '}
//             <a href="mailto:asminfoindia@gmail.com">asminfoindia@gmail.com</a>. We'll get back to you as soon as possible.
//           </p>
//         </div>
//         <div className="contact-content">
//           <div className="contact-info">
//             <div className="info-item">
//               <FaMapMarkerAlt className="info-icon" />
//               <p>NO. 23, FIRST FLOOR, 8th Cross Street, Kamarajar Colony, Kodambakkam, Chennai, Tamil Nadu 600019.</p>
//             </div>
//             <div className="info-item">
//               <FaEnvelope className="info-icon" />
//               <p><a href="mailto:asminfoindia@gmail.com">asminfoindia@gmail.com</a></p>
//             </div>
//             <div className="info-item">
//               <FaPhone className="info-icon" />
//               <p>(044) 42129400</p>
//             </div>
//           </div>
//           <div className="contact-form">
//             {messageSent && <div className="message-success">Your message has been sent. Thank you!</div>}
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <input type="text" name="name" placeholder="Your Name" required />
//               </div>
//               <div className="form-group">
//                 <input type="email" name="email" placeholder="Your Email" required />
//               </div>
//               <div className="form-group">
//                 <input type="text" name="subject" placeholder="Subject" required />
//               </div>
//               <div className="form-group">
//                 <textarea name="message" rows="5" placeholder="Message" required></textarea>
//               </div>
//               <button type="submit" className="submit-btn">Send Message</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; 

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setMessageSent(true);
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch with Us</h2>
          <p className="text-lg">
            Have a question or need more information about ASM Infotech? Use the form below or email us at{' '}
            <a href="mailto:asminfoindia@gmail.com" className="text-blue-400 hover:underline">asminfoindia@gmail.com</a>. 
            We'll get back to you as soon as possible.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="text-blue-400 text-2xl mr-4" />
                <p className="text-lg">NO. 23, FIRST FLOOR, 8th Cross Street, Kamarajar Colony, Kodambakkam, Chennai, Tamil Nadu 600019.</p>
              </div>
              <div className="flex items-start mb-4">
                <FaEnvelope className="text-blue-400 text-2xl mr-4" />
                <p className="text-lg"><a href="mailto:asminfoindia@gmail.com" className="text-blue-400 hover:underline">asminfoindia@gmail.com</a></p>
              </div>
              <div className="flex items-start">
                <FaPhone className="text-blue-400 text-2xl mr-4" />
                <p className="text-lg">(044) 42129400</p>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            {messageSent && <div className="bg-green-600 text-white p-4 rounded mb-6">Your message has been sent. Thank you!</div>}
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                  className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Message" 
                  required 
                  className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
