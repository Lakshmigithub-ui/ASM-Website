
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
import './GetQuote.css'; 

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
    <div className="form-container">
      <form className="quote-form" onSubmit={handleSubmit}>
        <button type="button" className="close-btn" onClick={handleClose}>
          &times;
        </button>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Select a Product:
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="Product1">Product 1</option>
            <option value="Product2">Product 2</option>
            <option value="Product3">Product 3</option>
          </select>
        </label>

        <label>
          Please Enter Skype ID:
          <input
            type="text"
            name="skypeId"
            value={formData.skypeId}
            onChange={handleChange}
          />
        </label>

        <label>
          Please Enter Telegram ID:
          <input
            type="text"
            name="telegramId"
            value={formData.telegramId}
            onChange={handleChange}
          />
        </label>

        <label>
          Comments:
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  ) : null;
};

export default GetQuote;
