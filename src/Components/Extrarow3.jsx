// import React, { useState, useEffect } from 'react';

// const BusinessDashboard = () => {
//   const [members, setMembers] = useState(0);
//   const [clubs, setClubs] = useState(0);
//   const [eventBookings, setEventBookings] = useState(0);
//   const [payments, setPayments] = useState(0);

//   useEffect(() => {
//     // Simulate dynamic updates with random increments
//     const interval = setInterval(() => {
//       setMembers((prev) => prev + Math.floor(Math.random() * 10 + 1));
//       setClubs((prev) => prev + Math.floor(Math.random() * 3 + 1));
//       setEventBookings((prev) => prev + Math.floor(Math.random() * 5 + 1));
//       setPayments((prev) => prev + Math.floor(Math.random() * 100 + 50));
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-black text-white min-h-screen flex items-center justify-center">
//       <div className="text-center space-y-6">
//         <h1 className="text-4xl font-bold">Business Dashboard</h1>
//         <div className="grid grid-cols-2 gap-6">
//           <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold">Members</h2>
//             <p className="text-3xl font-bold mt-2">{members}</p>
//           </div>
//           <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold">Clubs</h2>
//             <p className="text-3xl font-bold mt-2">{clubs}</p>
//           </div>
//           <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold">Event Bookings</h2>
//             <p className="text-3xl font-bold mt-2">{eventBookings}</p>
//           </div>
//           <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-semibold">Payments</h2>
//             <p className="text-3xl font-bold mt-2">${payments}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessDashboard;

// import React from 'react';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import { useEffect } from 'react';

// const Extrarow3 = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <section className="smart_solutions bg-black text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap">
//           <div className="w-full">
//             <div className="smat_content text-center mb-8">
//               <h1
//                 data-aos="fade-down"
//                 data-aos-delay="100"
//                 data-aos-easing="ease"
//                 className="text-4xl font-bold aos-init aos-animate"
//               >
//                 Smarter Solutions for people and planet
//               </h1>
//               <p
//                 data-aos="fade-up"
//                 data-aos-delay="110"
//                 data-aos-easing="ease"
//                 className="mt-4 text-lg aos-init aos-animate"
//               >
//                 Spark Minda has been a significant player in the global automotive industry for over six decades. We are one of the prominent manufacturers of automotive components for the OEMs and Tier-I suppliers.
//               </p>
//               <a
//                 data-aos="fade-up"
//                 data-aos-delay="112"
//                 data-aos-easing="ease"
//                 href="/about-us/our-story"
//                 className="inline-block mt-6 text-blue-500 font-semibold aos-init aos-animate"
//               >
//                 READ MORE <img src="/images/read_black.svg" alt="Read more" className="inline-block ml-2" />
//               </a>
//             </div>
//           </div>
//           <div className="w-full md:w-5/12">
//             <div className="smat_content">
//               <img
//                 className="img-fluid w-full rounded-lg aos-init aos-animate"
//                 data-aos="fade-down"
//                 data-aos-delay="115"
//                 data-aos-easing="ease"
//                 src="/images/smart-solution.jpg"
//                 alt="Smart Solution"
//               />
//             </div>
//           </div>
//           <div className="w-full md:w-7/12 mt-8 md:mt-0">
//             <div className="samt_content1 grid grid-cols-2 gap-6">
//               {[
//                 { icon: "/images/home_icon1.svg", number: "06", label: "Countries" },
//                 { icon: "/images/home_icon2.svg", number: "34", label: "Plants & Offices" },
//                 { icon: "/images/home_icon3.svg", number: "16k+", label: "Workforce" },
//                 { icon: "/images/home_icon4.svg", number: "US $610", label: "Million Group" },
//                 { icon: "/images/home_icon5.svg", number: "600+", label: "Engineers" },
//                 { icon: "/images/home_icon6.svg", number: "09", label: "Partnerships" },
//               ].map((item, index) => (
//                 <div className="flex items-center space-x-4" key={index}>
//                   <img
//                     data-aos="fade-down"
//                     data-aos-delay="100"
//                     data-aos-easing="ease"
//                     src={item.icon}
//                     alt={item.label}
//                     className="aos-init aos-animate"
//                   />
//                   <div>
//                     <h3
//                       data-aos="fade-up"
//                       data-aos-delay="130"
//                       data-aos-easing="ease"
//                       className="text-3xl font-semibold aos-init aos-animate"
//                     >
//                       {item.number}
//                     </h3>
//                     <p
//                       data-aos="fade-up"
//                       data-aos-delay="150"
//                       data-aos-easing="ease"
//                       className="text-lg aos-init aos-animate"
//                     >
//                       {item.label}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Extrarow3;


import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import office from "./Assets/office.avif"

const Extrarow3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="smart_solutions bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="smat_content text-center mb-8">
              <h1
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-easing="ease"
                className="text-4xl font-bold aos-init aos-animate"
              >
                "Sustainable Innovations for Global Impact"
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="110"
                data-aos-easing="ease"
                className="mt-4 text-lg aos-init aos-animate"
              >

"ASM Infotech empowers businesses with cutting-edge billing software, innovative digital marketing, and top-tier web and mobile app development. We streamline financial management, amplify brand visibility, and create robust, responsive solutions that drive success in a digital-first world."              </p>
            </div>
          </div>
          <div className="w-full md:w-5/12">
            <div className="smat_content">
              <img
                className="img-fluid w-full rounded-lg aos-init aos-animate"
                data-aos="fade-down"
                data-aos-delay="115"
                data-aos-easing="ease"
                src={office}
                alt="Smart Solution"
              />
            </div>
          </div>
          <div className="w-full md:w-7/12 mt-8 md:mt-0">
            <div className="samt_content1 grid grid-cols-2 gap-6">
              {[
                { icon: "/images/home_icon1.svg", number: 6, label: "Countries" },
                { icon: "/images/home_icon2.svg", number: 34, label: "Plants & Offices" },
                { icon: "/images/home_icon3.svg", number: 16000, label: "Workforce", suffix: '+' },
                { icon: "/images/home_icon4.svg", number: 610, label: "Million Group", prefix: 'US $' },
                { icon: "/images/home_icon5.svg", number: 600, label: "Engineers", suffix: '+' },
                { icon: "/images/home_icon6.svg", number: 9, label: "Partnerships" },
              ].map((item, index) => (
                <div className="flex items-center space-x-4" key={index}>
                  <img
                    data-aos="fade-down"
                    data-aos-delay="100"
                    data-aos-easing="ease"
                    src={item.icon}
                    alt={item.label}
                    className="aos-init aos-animate"
                  />
                  <div>
                    <h3
                      data-aos="fade-up"
                      data-aos-delay="130"
                      data-aos-easing="ease"
                      className="text-3xl font-semibold aos-init aos-animate"
                    >
                      <CountUp start={0} end={item.number} duration={3} prefix={item.prefix || ''} suffix={item.suffix || ''} />
                    </h3>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="150"
                      data-aos-easing="ease"
                      className="text-lg aos-init aos-animate"
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Extrarow3;
