// import React, { useState } from 'react';

// const LeaveMessageForm = () => {
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   return (
//     <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         autoPlay
//         loop
//         muted
//       >
//         <source src="/path/to/your/video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Form Container */}
//       <div className="relative z-10 bg-slate-50 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-lg w-full mx-4">
//         {submitted ? (
//           <div className="text-center text-gray-900">
//             <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
//             <p className="text-lg">Our person will contact you soon.</p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-4 text-gray-900">
//             <h2 className="text-2xl font-bold mb-6 text-center">Leave a Message</h2>
            
//             {/* Name Field */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
//               <input 
//                 type="text" 
//                 id="name" 
//                 className="w-full p-2 bg-slate-50 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                 placeholder="Enter your name" 
//                 required
//               />
//             </div>

//             {/* Phone Number Field */}
//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
//               <input 
//                 type="tel" 
//                 id="phone" 
//                 className="w-full p-2 bg-slate-50 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                 placeholder="Enter your phone number" 
//                 required
//               />
//             </div>

//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
//               <input 
//                 type="email" 
//                 id="email" 
//                 className="w-full p-2 bg-slate-50 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                 placeholder="Enter your email" 
//                 required
//               />
//             </div>

//             {/* Comments Field */}
//             <div>
//               <label htmlFor="comments" className="block text-sm font-medium mb-1">Comments</label>
//               <textarea 
//                 id="comments" 
//                 rows="4" 
//                 className="w-full p-2 bg-slate-50 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                 placeholder="Enter additional details or comments" 
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="text-center">
//               <button 
//                 type="submit" 
//                 className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 Submit
//               </button>
//             </div>
//           </form>
//         )}
//       </div>

//       {/* Optional Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
//     </div>
//   );
// };

// export default LeaveMessageForm;

// import React, { useState } from 'react';

// const LeaveMessageForm = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [isOpen, setIsOpen] = useState(true);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   if (!isOpen) return null; // Close the form if not open

//   return (
//     <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         autoPlay
//         loop
//         muted
//       >
//         <source src="/path/to/your/video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Form Container */}
//       <div className="relative z-10 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg max-w-lg w-full mx-4">
//         {/* Close Button */}
//         <button
//           onClick={handleClose}
//           className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 font-bold"
//         >
//           X
//         </button>

//         {submitted ? (
//           <div className="text-center text-gray-900">
//             <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
//             <p className="text-lg">Our person will contact you soon.</p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-4 text-gray-900">
//             <h2 className="text-2xl font-bold mb-6 text-center">Leave a Message</h2>
            
//             {/* Name Field */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
//               <input 
//                 type="text" 
//                 id="name" 
//                 className="w-full p-2 bg-gray-50 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                 placeholder="Enter your name" 
//                 required
//               />
//             </div>

//             {/* Phone Number Field */}
//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
//               <input 
//                 type="tel" 
//                 id="phone" 
//                 className="w-full p-2 bg-gray-50 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                 placeholder="Enter your phone number" 
//                 required
//               />
//             </div>

//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
//               <input 
//                 type="email" 
//                 id="email" 
//                 className="w-full p-2 bg-gray-50 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                 placeholder="Enter your email" 
//                 required
//               />
//             </div>

//             {/* Comments Field */}
//             <div>
//               <label htmlFor="comments" className="block text-sm font-medium mb-1">Comments</label>
//               <textarea 
//                 id="comments" 
//                 rows="4" 
//                 className="w-full p-2 bg-gray-50 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                 placeholder="Enter additional details or comments" 
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="text-center">
//               <button 
//                 type="submit" 
//                 className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
//                 Submit
//               </button>
//             </div>
//           </form>
//         )}
//       </div>

//       {/* Optional Overlay */}
//       <div className="absolute inset-0 bg-white opacity-75 z-0"></div>
//     </div>
//   );
// };

// export default LeaveMessageForm;

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Bind modal to the root element
Modal.setAppElement('#root');

const GetQuoteModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS for animations
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission and reset the form
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSubmitted(false); // Reset submission state
  };

  return (
    <div className="container mx-auto py-12">
      {/* Get Quote Button (Click to open modal) */}
      <button
        className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
        onClick={openModal}
        data-aos="fade-up"
      >
        Get Quote
      </button>

      {/* Modal Window */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Contact Form"
        className="bg-slate-50 text-white p-8 rounded-lg shadow-lg max-w-lg mx-auto relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <button
          className="absolute top-4 right-4 text-gray-700 text-2xl font-bold hover:text-red-500"
          onClick={closeModal}
        >
          &times;
        </button>

        {!submitted ? (
          <form className="space-y-6" onSubmit={handleSubmit} data-aos="fade-up">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-50 text-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-50 text-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-50 text-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        ) : (
          <p className="text-lg text-gray-700 text-center" data-aos="fade-up">
            Thank you for your message! We will get back to you within 24 hours.
          </p>
        )}
      </Modal>
    </div>
  );
};

export default GetQuoteModal;
