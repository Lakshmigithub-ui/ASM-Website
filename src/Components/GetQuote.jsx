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
//     <div className="form-container bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
//       <form className="quote-form space-y-4" onSubmit={handleSubmit}>
//         <button
//           type="button"
//           className="close-btn text-gray-300 hover:text-white focus:outline-none absolute top-4 right-4 text-xl"
//           onClick={handleClose}
//         >
//           &times;
//         </button>
//         <div>
//           <label className="block text-sm font-medium">
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </label>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">
//             Phone Number:
//             <input
//               type="tel"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//               className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </label>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </label>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">
//             Select a Product:
//             <select
//               name="product"
//               value={formData.product}
//               onChange={handleChange}
//               required
//               className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select...</option>
//               <option value="Product1">Product 1</option>
//               <option value="Product2">Product 2</option>
//               <option value="Product3">Product 3</option>
//             </select>
//           </label>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">
//             Please Enter Skype ID:
//             <input
//               type="text"
//               name="skypeId"
//               value={formData.skypeId}
//               onChange={handleChange}
//               className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </label>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">
//             Please Enter Telegram ID:
//             <input
//               type="text"
//               name="telegramId"
//               value={formData.telegramId}
//               onChange={handleChange}
//               className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </label>
//         </div>

//         <div>
//           <label className="block text-sm font-medium">
//             Comments:
//             <textarea
//               name="comments"
//               value={formData.comments}
//               onChange={handleChange}
//               className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </label>
//         </div>

//         <div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   ) : null;
// };

// export default GetQuote;


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
//       <div className="relative z-10 bg-gray-900 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-lg w-full mx-4">
//         {submitted ? (
//           <div className="text-center text-white">
//             <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
//             <p className="text-lg">Our person will contact you soon.</p>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-4 text-white">
//             <h2 className="text-2xl font-bold mb-6 text-center">Leave a Message</h2>
            
//             {/* Name Field */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
//               <input 
//                 type="text" 
//                 id="name" 
//                 className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
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
//                 className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
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
//                 className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                 placeholder="Enter your email" 
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

import React, { useState } from 'react';

const LeaveMessageForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Form Container */}
      <div className="relative z-10 bg-gray-900 bg-opacity-75 p-8 rounded-lg shadow-lg max-w-lg w-full mx-4">
        {submitted ? (
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
            <p className="text-lg">Our person will contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">Leave a Message</h2>
            
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your name" 
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your phone number" 
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your email" 
                required
              />
            </div>

            {/* Comments Field */}
            <div>
              <label htmlFor="comments" className="block text-sm font-medium mb-1">Comments</label>
              <textarea 
                id="comments" 
                rows="4" 
                className="w-full p-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter additional details or comments" 
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default LeaveMessageForm;
