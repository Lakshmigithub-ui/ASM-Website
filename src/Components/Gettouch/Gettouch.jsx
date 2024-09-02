
import React, { useState } from 'react';
import Modal from 'react-modal';
import "./Gettouch.css";

// Make sure to bind the modal to your app element
Modal.setAppElement('#root');

const Gettouch = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission (e.g., send to server)
    // Reset form fields
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
    <div className="contact-us-container">
      <div className="contact-us-content">
        <h2 className="contact-us-heading">Have a project in mind?</h2>
        <p className="contact-us-description">
          We&apos;d love to help you. Drop us a note using the form below. We will get back to you within 24 hours.
        </p>
        <center>
        <button className="open-form-button" onClick={openModal}>
          Get in Touch
        </button>
        </center>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Contact Form"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <button className="modal-close-button" onClick={closeModal}>×</button>
          {!submitted ? (
            <form className="contact-us-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <p className="submission-message">
              Thank you for your message! We will get back to you within 24 hours.
            </p>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Gettouch;


// import React, { useState } from 'react';

// const GetQuote = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phoneNumber: '',
//     email: '',
//     product: '',
//     skypeId: '',
//     telegramId: '',
//     comments: ''
//   });

//   const [isVisible, setIsVisible] = useState(true);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   const handleClose = () => {
//     setIsVisible(false);
//   };

//   return isVisible ? (
//     <div className="relative max-w-lg mx-auto p-4 border border-gray-300 bg-white rounded-lg shadow-lg">
//       <button
//         type="button"
//         className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl"
//         onClick={handleClose}
//       >
//         &times;
//       </button>
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700">
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </label>

//           <label className="block text-sm font-medium text-gray-700">
//             Phone Number:
//             <input
//               type="tel"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </label>

//           <label className="block text-sm font-medium text-gray-700">
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </label>

//           <label className="block text-sm font-medium text-gray-700">
//             Select a Product:
//             <select
//               name="product"
//               value={formData.product}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             >
//               <option value="">Select...</option>
//               <option value="Product1">Product 1</option>
//               <option value="Product2">Product 2</option>
//               <option value="Product3">Product 3</option>
//             </select>
//           </label>

//           <label className="block text-sm font-medium text-gray-700">
//             Please Enter Skype ID:
//             <input
//               type="text"
//               name="skypeId"
//               value={formData.skypeId}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </label>

//           <label className="block text-sm font-medium text-gray-700">
//             Please Enter Telegram ID:
//             <input
//               type="text"
//               name="telegramId"
//               value={formData.telegramId}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </label>

//           <label className="block text-sm font-medium text-gray-700">
//             Comments:
//             <textarea
//               name="comments"
//               value={formData.comments}
//               onChange={handleChange}
//               className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </label>
//         </div>

//         <button
//           type="submit"
//           className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   ) : null;
// };

// export default GetQuote;
