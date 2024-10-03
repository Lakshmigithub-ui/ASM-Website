// import React from 'react'


// export const MyBlock = () => {
//     const [readMore, setReadMore] = React.useState(false);
  
//     const toggleReadMore = () => {
//       setReadMore(!readMore);
//     };
//     return (
//       <div className="containerNFT">
//         <div className={`card${readMore ? ' active' : ''}`}>
//           <div className="content">
//             <h3>Read More or Less</h3>
//             <p>
//               Text Text Text Text Text Text Text Text Text Text Text Text Text
//               Text Text Text Text Text Text Text Text Text Text Text Text Text
//               Text Text Text Text Text Text Text Text Text Text Text Text Text
//               Text Text Text Text Text Text Text Text Text Text Text Text Text
//               Text Text Text Text Text Text Text Text Text Text Text Text Text
//               Text Text Text Text Text Text Text
//               extra extra extra extraextra extraextra extraextra extraextra extravextra 
//               extra extra extra extraextra extraextra extraextra extraextra extravextra 
//               extra extra extra extraextra extraextra extraextra extraextra extravextra 
//               extra extra extra extraextra extraextra extraextra extraextra extravextra 
//               extra extra extra extraextra extraextra extraextra extraextra extravextra 
//               extra extra extra extraextra extraextra extraextra extraextra extravextra 
//               extra extra extra extraextra extraextra extraextra extraextra extravextra 
//               extra extra extra extraextra extraextra extraextra extraextra extravextra 
//               extra extra extra extraextra extraextra extraextra extraextra extravextra 
//             </p>
//           </div>
//           <button
//             type="button"
//             onClick={toggleReadMore}
//             className="more"
//             title="Read"
//           >
//             {readMore ? 'Read Less' : 'Read More'}
//           </button>
//         </div>
//       </div>
//     );
//   };


// import React from 'react';

// export const MyBlock = () => {
//   const [readMore, setReadMore] = React.useState(false);

//   const toggleReadMore = () => {
//     setReadMore(!readMore);
//   };

//   return (
//     <div className="container">
//       {/* Card container */}
//       <div className="card bg-gray-800 p-4 rounded-md">
//         <div className="content">
//           <h3 className="text-white text-xl font-bold mb-2">Read More or Less</h3>
          
//           {/* Conditionally show only two lines or full content */}
//           <p className="text-gray-300">
//             Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper.
//           </p>
//         </div>

//         {/* Read More/Less Button */}
//         <button
//           type="button"
//           onClick={toggleReadMore}
//           className="more text-blue-500 hover:text-blue-300 mt-4"
//           title={readMore ? 'Read Less' : 'Read More'}
//           aria-expanded={readMore}
//         >
//           {readMore ? 'Read Less' : 'Read More'}
//         </button>
//       </div>
//     </div>
//   );
// };


// import React from 'react';

// export const MyBlock = () => {
//   const [readMore, setReadMore] = React.useState(false);

//   const toggleReadMore = () => {
//     setReadMore(!readMore);
//   };

//   return (
//     <div className="container">
//       {/* Card container */}
//       <div className="card bg-gray-800 p-4 rounded-md">
//         <div className="content">
//           <h3 className="text-white text-xl font-bold mb-2">Read More or Less</h3>
          
//           {/* Conditionally show only two lines or full content */}
//           <p
//             className={`text-gray-300 overflow-hidden transition-all duration-300 ${
//               readMore ? 'line-clamp-none' : 'line-clamp-2'
//             }`}
//           >
//             Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper.
//           </p>
//         </div>

//         {/* Read More/Less Button */}
//         <button
//           type="button"
//           onClick={toggleReadMore}
//           className=" text-blue-500 hover:text-blue-300 mt-2"
//           title={readMore ? 'Read Less' : 'Read More'}
//           aria-expanded={readMore}
//         >
//           {readMore ? 'Read Less' : 'Read More'}
//         </button>
//       </div>
      
//     </div>
//   );
// };

import React from 'react';
import './MyBlock.css'; 
export const MyBlock = () => {
  const [readMore, setReadMore] = React.useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="container">
      {/* Card container */}
      <div className="card">
        <div className="content">
          <h3 className="title">Read More or Less</h3>
          
          {/* Conditionally show only two lines or full content */}
          <p
            className={`text ${readMore ? 'expanded' : 'collapsed'}`}
          >
            Before you can begin to determine what the composition of a particular paragraph will be, you must first decide on an argument and a working thesis statement for your paper. What is the most important idea that you are trying to convey to your reader? The information in each paragraph must be related to that idea. In other words, your paragraphs should remind your reader that there is a recurrent relationship between your thesis and the information in each paragraph. A working thesis functions like a seed from which your paper, and your ideas, will grow. The whole process is an organic one—a natural progression from a seed to a full-blown paper where there are direct, familial relationships between all of the ideas in the paper.
          </p>
        </div>

        {/* Read More/Less Button */}
        <button
          type="button"
          onClick={toggleReadMore}
          className="read-more-button"
          title={readMore ? 'Read Less' : 'Read More'}
          aria-expanded={readMore}
        >
          {readMore ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};
