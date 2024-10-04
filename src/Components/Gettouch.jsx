// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles

// // Make sure to bind the modal to your app element
// Modal.setAppElement('#root');

// const Gettouch = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [submitted, setSubmitted] = useState(false);
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       once: true, // Animation will trigger once and won't reset on scroll up
//     });
// }, []);

//   //   AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
//   // }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process form submission (e.g., send to server)
//     // Reset form fields
//     setFormData({ name: '', email: '', message: '' });
//     setSubmitted(true);
//   };

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSubmitted(false); // Optionally reset submission state
//   };

//   return (
//     <div className="bg-white text-gray-600 py-12 px-6 lg:px-16 flex flex-col items-center">
//       <h2 className="text-xl font-semibold mb-1" data-aos="fade-up">Have a project in mind?</h2>
//       <span className="block h-1 w-10 bg-customBlue mx-auto mb-6"></span>
//       <p className="text-base font-medium mb-6" data-aos="fade-up" data-aos-delay="200">
//       We’d love to help you turn your ideas into reality! At ASM Infotech, we are committed to delivering innovative solutions tailored to your unique needs. Whether you’re looking for IT consulting, software development, or digital marketing services, our team is here to assist you every step of the way.      </p>
//       <button 
//         className="bg-customBlue text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition transform hover:scale-105"
//         onClick={openModal}
//         data-aos="fade-up" 
//         data-aos-delay="400"
//       >
//         Get in Touch
//       </button>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Contact Form"
//         className="bg-slate-50 text-gray-700 p-8 rounded-lg shadow-lg max-w-lg mx-auto relative"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
//       >
//         <button 
//           className="absolute top-4 right-4 text-gray-700 text-2xl font-bold hover:text-red-500" 
//           onClick={closeModal}
//         >
//           &times;
//         </button>
//         {!submitted ? (
//           <form className="space-y-6" onSubmit={handleSubmit} data-aos="fade-up">
//             <div>
//             <h2 className="text-lg font-bold mb-4">Get in Touch with Us</h2>

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 bg-slate-50 text-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 bg-slate-50 text-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
//               />
//             </div>
//             <div>
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 bg-slate-50 text-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
//               ></textarea>
//             </div>
//             <button 
//               type="submit" 
//               className="w-full py-2 bg-customBlue text-white rounded-lg shadow-lg hover:bg-blue-500 transition-transform duration-300 transform hover:scale-105"
//             >
//               Submit
//             </button>
//             <p className="text-sm font-semibold text-slate-600 bg-white border border-blue-200 rounded-md p-4 shadow-lg text-center transition duration-300 hover:shadow-xl hover:scale-105 transform">
//     Need Support? Give Us a Ring at <span className="text-blue-600 font-bold">+91 9043957699</span> 🚀
// </p>

//           </form>
//         ) : (
//           <p className="text-lg text-gray-700 text-center" data-aos="fade-up">
//             Thank you for your message! We will get back to you within 24 hours.
//           </p>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default Gettouch;
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import contactBg from './Assets/support4.png'; // Import your image

// Make sure to bind the modal to your app element
Modal.setAppElement('#root');

const Gettouch = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true, // Animation will trigger once and won't reset on scroll up
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission (e.g., send to server)
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSubmitted(false); // Optionally reset submission state
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white text-gray-600 py-1 px-6 lg:px-16">
      <div 
        className="lg:w-1/4 bg-cover bg-center h-80" 
        style={{ backgroundImage: `url(${contactBg})` }} // Use the imported image
      >
      </div>
      <div className="lg:w-3/4 flex flex-col mt-12 items-center">
        <h2 className="text-xl font-semibold mb-1" data-aos="fade-up">Have a project in mind?</h2>
        <span className="block h-1 w-10 bg-customBlue mx-auto mb-9"></span>
        <p className="text-base font-medium ml-5 mb-9" data-aos="fade-up" data-aos-delay="200">
          We’d love to help you turn your ideas into reality! At ASM Infotech, we are committed to delivering innovative solutions tailored to your unique needs. Whether you’re looking for IT consulting, software development, or digital marketing services, our team is here to assist you every step of the way.
        </p>
        <button 
          className="bg-customBlue text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition transform hover:scale-105"
          onClick={openModal}
          data-aos="fade-up" 
          data-aos-delay="400"
        >
          Get in Touch
        </button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Contact Form"
          className="bg-slate-50 text-gray-700 p-8 rounded-lg shadow-lg max-w-lg mx-auto relative"
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
                <h2 className="text-lg font-bold mb-4">Get in Touch with Us</h2>
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
                className="w-full py-2 bg-customBlue text-white rounded-lg shadow-lg hover:bg-blue-500 transition-transform duration-300 transform hover:scale-105"
              >
                Submit
              </button>
              <p className="text-sm font-semibold text-slate-600 bg-white border border-blue-200 rounded-md p-4 shadow-lg text-center transition duration-300 hover:shadow-xl hover:scale-105 transform">
                Need Support? Give Us a Ring at <span className="text-blue-600 font-bold">+91 9043957699</span> 🚀
              </p>
            </form>
          ) : (
            <p className="text-lg text-gray-700 text-center" data-aos="fade-up">
              Thank you for your message! We will get back to you within 24 hours.
            </p>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Gettouch;


// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// import background from "./Assets/horizontal_banner.jpg"; // Import your image

// // Make sure to bind the modal to your app element
// Modal.setAppElement('#root');

// const Gettouch = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [submitted, setSubmitted] = useState(false);
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process form submission (e.g., send to server)
//     setFormData({ name: '', email: '', message: '' });
//     setSubmitted(true);
//   };

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//     setSubmitted(false); // Optionally reset submission state
//   };

//   return (
//     <div 
//       className="bg-cover bg-center bg-no-repeat  text-zinc-700 py-12 px-6 lg:px-16 flex flex-col items-center" 
//       style={{ backgroundImage: `url(${background})` }} // Use imported image here
//     >
//       <h2 className="text-xl font-semibold mb-1" data-aos="fade-up">Have a project in mind?</h2>
//       <span className="block h-1 w-10 bg-customBlue mx-auto mb-6"></span>
//       <p className="text-base font-semibold mb-6" data-aos="fade-up" data-aos-delay="200">
//         We’d love to help you turn your ideas into reality! At ASM Infotech, we are committed to delivering innovative solutions tailored to your unique needs. Whether you’re looking for IT consulting, software development, or digital marketing services, our team is here to assist you every step of the way.
//       </p>
//       <button 
//         className="bg-customBlue text-white  py-2 px-6 rounded-lg shadow-lg hover:bg-sky-500 transition transform hover:scale-105"
//         onClick={openModal}
//         data-aos="fade-up" 
//         data-aos-delay="400"
//       >
//         Get in Touch
//       </button>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Contact Form"
//         className="bg-slate-50 text-gray-700 p-8 rounded-lg shadow-lg max-w-lg mx-auto relative"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
//       >
//         <button 
//           className="absolute top-4 right-4 text-gray-700 text-2xl font-bold hover:text-red-500" 
//           onClick={closeModal}
//         >
//           &times;
//         </button>
//         {!submitted ? (
//           <form className="space-y-6" onSubmit={handleSubmit} data-aos="fade-up">
//             <div>
//               <h2 className="text-lg font-bold mb-4">Get in Touch with Us</h2>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 bg-slate-50 text-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
//               />
//             </div>
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 bg-slate-50 text-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
//               />
//             </div>
//             <div>
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 bg-slate-50 text-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform hover:scale-105"
//               ></textarea>
//             </div>
//             <button 
//               type="submit" 
//               className="w-full py-2 bg-customBlue text-white rounded-lg shadow-lg hover:bg-blue-500 transition-transform duration-300 transform hover:scale-105"
//             >
//               Submit
//             </button>
//             <p className="text-sm font-semibold text-slate-600 bg-white border border-blue-200 rounded-md p-4 shadow-lg text-center transition duration-300 hover:shadow-xl hover:scale-105 transform">
//               Need Support? Give Us a Ring at <span className="text-blue-600 font-bold">+91 9043957699</span> 🚀
//             </p>
//           </form>
//         ) : (
//           <p className="text-lg text-gray-700 text-center" data-aos="fade-up">
//             Thank you for your message! We will get back to you within 24 hours.
//           </p>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default Gettouch;
