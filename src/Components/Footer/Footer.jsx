// import React from 'react';
// import './Footer.css'; // Import the CSS file for styling

// const Footer = () => {
//   return (
//     <footer id="footer">
//       <div className="container">
//         <div className="row text-center">
//           <p>&copy; {new Date().getFullYear()} Copyright <span>ASM Projects.</span> All Rights Reserved.</p>
//           <div className="credits">
//             Designed by <a href="https://asminfotech.in/">ASM Infotech</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Copyright <span className="font-semibold">ASM Projects.</span> All Rights Reserved.
        </p>
        <div className="text-sm">
          Designed by <a href="https://asminfotech.in/" className="text-blue-400 hover:underline">ASM Infotech</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
