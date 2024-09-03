
// import React, { useState } from 'react';
// import './GetQuote.css'; 

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

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form s  ubmission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <form className="quote-form" onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </label>

//       <label>
//         Phone Number:
//         <input
//           type="tel"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           required
//         />
//       </label>

//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </label>

//       <label>
//         Select a Product:
//         <select
//           name="product"
//           value={formData.product}
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select...</option>
//           <option value="Product1">Product 1</option>
//           <option value="Product2">Product 2</option>
//           <option value="Product3">Product 3</option>
//         </select>
//       </label>

//       <label>
//         Please Enter Skype ID:
//         <input
//           type="text"
//           name="skypeId"
//           value={formData.skypeId}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         Please Enter Telegram ID:
//         <input
//           type="text"
//           name="telegramId"
//           value={formData.telegramId}
//           onChange={handleChange}
//         />
//       </label>

//       <label>
//         Comments:
//         <textarea
//           name="comments"
//           value={formData.comments}
//           onChange={handleChange}
//         />
//       </label>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default GetQuote;



import React, { useState } from 'react';

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    product: '',
    skypeId: '',
    telegramId: '',
    comments: ''
  });

  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="form-container bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <form className="quote-form space-y-4" onSubmit={handleSubmit}>
        <button
          type="button"
          className="close-btn text-gray-300 hover:text-white focus:outline-none absolute top-4 right-4 text-xl"
          onClick={handleClose}
        >
          &times;
        </button>
        <div>
          <label className="block text-sm font-medium">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium">
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium">
            Select a Product:
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
              className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select...</option>
              <option value="Product1">Product 1</option>
              <option value="Product2">Product 2</option>
              <option value="Product3">Product 3</option>
            </select>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium">
            Please Enter Skype ID:
            <input
              type="text"
              name="skypeId"
              value={formData.skypeId}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium">
            Please Enter Telegram ID:
            <input
              type="text"
              name="telegramId"
              value={formData.telegramId}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium">
            Comments:
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="mt-1 p-2 bg-gray-700 border border-gray-600 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  ) : null;
};

export default GetQuote;
