// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import AOS styles
// import matlogo1 from "../Assets/matlogo1.jpg";
// import matlogo2 from "../Assets/matlogo2.jpg";
// import matlogo3 from "../Assets/matlogo3.avif";

// const MatrimonyApp = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1200 }); // Initialize AOS with smooth animations
//   }, []);

//   return (
//     <div className="bg-gray-900 text-white min-h-screen p-8">
//       {/* Hero Section */}
//       <section className="relative bg-gray-900 p-12 rounded-lg shadow-lg mb-12">
//         <img src={matlogo1} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-30 z-[-1]" />
//         <div className="text-center relative z-10">
//           <h1 className="text-lg font-medium mb-6" data-aos="fade-up">Discover Your Soulmate with Our Matrimony App</h1>
//           <p className="text-sm mb-6 font-medium" data-aos="fade-up" data-aos-delay="200">Join now and access exclusive features designed to enhance your matchmaking journey.</p>
//           <button className=" text-sm bg-gray-800 text-white px-8 py-3 rounded-full shadow-lg hover:bg-purple-700 transition" data-aos="fade-up" data-aos-delay="400">Get Started</button>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="mb-12">
//         <h2 className="text-lg font-medium text-center mb-8" data-aos="fade-up">Our Features</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105" data-aos="fade-right">
//             <img src={matlogo1} alt="Feature 1" className="w-16 h-16 mx-auto mb-4" />
//             <h3 className="text-lg font-medium mb-2">Advanced Search</h3>
//             <p className='font-light text-sm'>Find potential matches with highly customizable search filters.</p>
//           </div>
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105" data-aos="fade-up">
//             <img src={matlogo2} alt="Feature 2" className="w-16 h-16 mx-auto mb-4" />
//             <h3 className="text-lg font-medium mb-2">Verified Profiles</h3>
//             <p className='font-light text-sm'>Browse through genuine and verified user profiles for authenticity.</p>
//           </div>
//           <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105" data-aos="fade-left">
//             <img src={matlogo3} alt="Feature 3" className="w-16 h-16 mx-auto mb-4" />
//             <h3 className="text-lg font-medium mb-2">Private Messaging</h3>
//             <p className='font-light text-sm'>Communicate securely with potential matches through our chat system.</p>
//           </div>
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="relative bg-gray-800 p-12 rounded-lg shadow-lg mb-12">
//         <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-[-1]" style={{ backgroundImage: "url('/Assets/matrimony_app.avif')" }} > </div>
//         <div className="relative z-10 text-center">
//           <h2 className=" font-medium text-lg  mb-6" data-aos="fade-up">How It Works</h2>
//           <div className="flex flex-col lg:flex-row justify-center">
//             <div className="lg:w-1/3 p-6" data-aos="fade-right">
//               <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
//                 <h3 className="text-lg font-medium mb-2">Step 1: Sign Up</h3>
//                 <p className='font-light text-sm'>Create your profile and set your preferences to start the matchmaking process.</p>
//               </div>
//             </div>
//             <div className="lg:w-1/3 p-6" data-aos="fade-up">
//               <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
//                 <h3 className="text-lg font-medium mb-2">Step 2: Search & Match</h3>
//                 <p className='font-light text-sm'>Use advanced filters to find matches and connect with them directly.</p>
//               </div>
//             </div>
//             <div className="lg:w-1/3 p-6" data-aos="fade-left">
//               <div className="bg-gray-900 p-6 rounded-lg shadow-lg mb-6">
//                 <h3 className="text-lg font-medium mb-2">Step 3: Connect</h3>
//                 <p className='font-light text-sm'>Start conversations and build connections with your potential match.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }

// export default MatrimonyApp;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import matlogo1 from "../Assets/matlogo1.jpg";
import matlogo2 from "../Assets/matlogo2.jpg";
import matlogo3 from "../Assets/matlogo3.avif";

const MatrimonyApp = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with smooth animations
  }, []);

  return (
    <div className="bg-slate-50 text-gray-700 min-h-screen p-8">
            {/* Hero Section */}
            <section className="relative bg-slate-50 p-12 rounded-lg shadow-lg mb-12">
        <img src={matlogo1} alt="Hero" className="absolute inset-0 w-full h-full object-cover opacity-30 z-[-1]" />
        <div className="text-center relative z-10">
          <h1 className="text-lg font-medium mb-6" data-aos="fade-up">Discover Your Soulmate with Our Matrimony App</h1>
          <p className="text-sm mb-6 font-medium" data-aos="fade-up" data-aos-delay="200">Join now and access exclusive features designed to enhance your matchmaking journey.</p>
          <button className=" text-sm text-white px-8 py-3 rounded-full shadow-lg  bg-blue-500 hover:bg-blue-700 transition" data-aos="fade-up" data-aos-delay="400">Get Started</button>
        </div>
      </section>

      {/* Image on the Left, Paragraph on the Right Section at the Top */}
      <section className="flex flex-col lg:flex-row items-center justify-between mb-12">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 p-6" data-aos="fade-right">
          <img src={matlogo2} alt="Left Image" className="rounded-lg shadow-lg w-full h-auto" />
        </div>

        {/* Right Side: Paragraph */}
        <div className="lg:w-1/2 px-6" data-aos="fade-left">
          <h2 className="text-lg font-medium mb-4">Why Choose Our Matrimony App?</h2>
          <p className="text-sm leading-relaxed">
            Our Matrimony app is designed to provide a seamless and personalized matchmaking experience. 
            With advanced search features, verified profiles, and private messaging options, we make it 
            easy for you to find your perfect match. Our secure platform ensures privacy and reliability, 
            allowing you to communicate with potential matches confidently.
          </p>
          <p className="text-sm leading-relaxed mt-4">
            Join thousands of users who have successfully found their soulmates through our app. 
            Whether you're looking for someone with similar values, interests, or cultural background, 
            our app offers a range of filters to help you find the right person for you.
          </p>
        </div>
      </section>


      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-lg font-medium text-center mb-8" data-aos="fade-up">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105" data-aos="fade-right">
            <img src={matlogo1} alt="Feature 1" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Advanced Search</h3>
            <p className='font-light text-sm'>Find potential matches with highly customizable search filters.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105" data-aos="fade-up">
            <img src={matlogo2} alt="Feature 2" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Verified Profiles</h3>
            <p className='font-light text-sm'>Browse through genuine and verified user profiles for authenticity.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105" data-aos="fade-left">
            <img src={matlogo3} alt="Feature 3" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Private Messaging</h3>
            <p className='font-light text-sm'>Communicate securely with potential matches through our chat system.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative bg-slate-50 p-12 rounded-lg shadow-lg mb-12">
        <div className="absolute inset-0 w-full h-full object-cover opacity-30 z-[-1]" style={{ backgroundImage: "url('/Assets/matrimony_app.avif')" }}></div>
        <div className="relative z-10 text-center">
          <h2 className=" font-medium text-lg  mb-6" data-aos="fade-up">How It Works</h2>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="lg:w-1/3 p-6" data-aos="fade-right">
              <div className="bg-slate-50 p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-lg font-medium mb-2">Step 1: Sign Up</h3>
                <p className='font-light text-sm'>Create your profile and set your preferences to start the matchmaking process.</p>
              </div>
            </div>
            <div className="lg:w-1/3 p-6" data-aos="fade-up">
              <div className="bg-slate-50 p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-lg font-medium mb-2">Step 2: Search & Match</h3>
                <p className='font-light text-sm'>Use advanced filters to find matches and connect with them directly.</p>
              </div>
            </div>
            <div className="lg:w-1/3 p-6" data-aos="fade-left">
              <div className="bg-slate-50 p-6 rounded-lg shadow-lg mb-6">
                <h3 className="text-lg font-medium mb-2">Step 3: Connect</h3>
                <p className='font-light text-sm'>Start conversations and build connections with your potential match.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MatrimonyApp;
