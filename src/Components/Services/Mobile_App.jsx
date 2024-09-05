// import React from 'react';
// import { FaApple, FaAndroid, FaReact, FaGooglePlay } from 'react-icons/fa';
// import 'aos/dist/aos.css'; // Animate On Scroll library for smooth animations
// import AOS from 'aos'; // Initialize AOS

// AOS.init();

// const MobileAppDevelopment = () => {
//   return (
//     <div className="bg-black text-white min-h-screen py-12">
//       <div className="container mx-auto px-6 md:px-12">
//         <h1 className="text-4xl font-bold mb-8 text-center">Mobile App Development</h1>

//         {/* iOS App Development */}
//         <div className="mb-12" data-aos="fade-up">
//           <div className="flex flex-col bg-gray-800 p-6 rounded-lg transition transform hover:-translate-y-2 hover:shadow-lg duration-500 ease-in-out">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold mb-4">iOS App Development</h2>
//               <FaApple size={40} className="text-gray-400 transition-transform transform hover:scale-110 duration-300 ease-in-out" />
//             </div>
//             <ul className="list-disc pl-5">
//               <li className="mb-2">
//                 <span className="font-semibold">Customized Solutions:</span> We understand that every business is unique. Our iOS app development services cater to your specific requirements, ensuring that your app stands out.
//               </li>
//               <li className="mb-2">
//                 <span className="font-semibold">Experienced Team:</span> Proficient in Swift, Objective-C, and the latest iOS frameworks, our developers bring deep technical knowledge and best practices.
//               </li>
//               <li className="mb-2">
//                 <span className="font-semibold">Cutting-Edge Technology:</span> We utilize Xcode and Apple's guidelines to create innovative and engaging apps.
//               </li>
//               <li className="mb-2">
//                 <span className="font-semibold">User-Centric Design:</span> Our design philosophy ensures seamless user experience with intuitive interfaces.
//               </li>
//               <li className="mb-2">
//                 <span className="font-semibold">End-to-End Development:</span> From concept to deployment, we handle all aspects of app development.
//               </li>
//               <li className="mb-2">
//                 <span className="font-semibold">Quality Assurance:</span> Our rigorous testing ensures flawless performance across all iOS devices.
//               </li>
//               <li>
//                 <span className="font-semibold">Support and Maintenance:</span> Continuous support post-launch to keep your app updated and functioning optimally.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Android App Development */}
//         <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
//           <div className="flex flex-col bg-gray-800 p-6 rounded-lg transition transform hover:-translate-y-2 hover:shadow-lg duration-500 ease-in-out">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold mb-4">Android App Development</h2>
//               <FaAndroid size={40} className="text-green-400 transition-transform transform hover:scale-110 duration-300 ease-in-out" />
//             </div>
//             <ul className="list-disc pl-5">
//               <li className="mb-2">
//                 <span className="font-semibold">Tailored Solutions:</span> Our Android app development services deliver customized solutions for your business needs.
//               </li>
//               <li className="mb-2">
//                 <span className="font-semibold">Expert Team:</span> Adept in Kotlin, Java, and Android SDKs, we offer innovative solutions for every project.
//               </li>
//               <li className="mb-2">
//                 <span className="font-semibold">Modern Technology:</span> We leverage Android Studio, Jetpack, and other cutting-edge tools to build advanced, reliable apps.
//               </li>
//               <li className="mb-2">
//                 <span className="font-semibold">User-Focused Design:</span> Our design team ensures visually appealing, easy-to-navigate interfaces.
//               </li>
//               <li className="mb-2">
//                 <span className="font-semibold">Comprehensive Services:</span> We provide end-to-end services, including development, testing, and maintenance.
//               </li>
//               <li>
//                 <span className="font-semibold">Continuous Support:</span> Post-launch support ensures your app stays updated with the latest features.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Hybrid App Development */}
//         <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
//           <div className="flex flex-col bg-gray-800 p-6 rounded-lg transition transform hover:-translate-y-2 hover:shadow-lg duration-500 ease-in-out">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold mb-4">Hybrid App Development</h2>
//               <FaReact size={40} className="text-blue-400 transition-transform transform hover:scale-110 duration-300 ease-in-out" />
//             </div>
//             <ul className="list-disc pl-5">
//               <li className="mb-2">
//                 <span className="font-semibold">Cross-Platform Efficiency:</span> Hybrid apps enable you to reach both iOS and Android users with a single codebase.
//               </li>
//               <li className="mb-2">
//                 <span className="font-semibold">Skilled Team:</span> Proficient in React Native, Flutter, and Ionic, we deliver high-quality apps across platforms.
//               </li>
//               <li className="mb-2">
//                 <span className="font-semibold">Native-Like Performance:</span> Our hybrid apps provide native-like performance with responsive interfaces.
//               </li>
//               <li>
//                 <span className="font-semibold">Cost-Effective Solutions:</span> Save on development and maintenance costs by using a single codebase for both iOS and Android.
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Flutter App Development */}
//         <div className="mb-12" data-aos="fade-up" data-aos-delay="300">
//           <div className="flex flex-col bg-gray-800 p-6 rounded-lg transition transform hover:-translate-y-2 hover:shadow-lg duration-500 ease-in-out">
//             <div className="flex items-center justify-between">
//               <h2 className="text-2xl font-semibold mb-4">Flutter App Development</h2>
//               <FaGooglePlay size={40} className="text-yellow-400 transition-transform transform hover:scale-110 duration-300 ease-in-out" />
//             </div>
//             <ul className="list-disc pl-5">
//               <li className="mb-2">
//                 <span className="font-semibold">Cross-Platform Efficiency:</span> Write once and deploy across iOS and Android with Flutter.
//               </li>
//               <li className="mb-2">
//                 <span className="font-semibold">Rich, Responsive UIs:</span> Leverage Flutter's extensive widget library to create highly interactive, responsive apps.
//               </li>
//               <li className="mb-2">
//                 <span className="font-semibold">High Performance:</span> Flutter apps are optimized for smooth performance and seamless animations.
//               </li>
//               <li>
//                 <span className="font-semibold">Cost-Effective Development:</span> Save on development costs by using Flutter’s cross-platform capabilities.
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MobileAppDevelopment;


import React from 'react';
import { FaApple, FaAndroid, FaReact, FaMobileAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';

const services = [
  {
    id: 1,
    title: 'iOS App Development',
    icon: <FaApple className="text-4xl text-white" />,
    content: `We specialize in creating customized iOS applications using Swift and Objective-C with a focus on user-centric design and seamless performance.`,
  },
  {
    id: 2,
    title: 'Android App Development',
    icon: <FaAndroid className="text-4xl text-white" />,
    content: `Our Android development services leverage Kotlin and Java to create high-performance apps with intuitive designs for the Play Store.`,
  },
  {
    id: 3,
    title: 'Hybrid App Development',
    icon: <FaReact className="text-4xl text-white" />,
    content: `Hybrid apps combine the best of both iOS and Android platforms. We use frameworks like React Native and Flutter to create powerful cross-platform apps.`,
  },
  {
    id: 4,
    title: 'Flutter Development',
    icon: <FaMobileAlt className="text-4xl text-white" />,
    content: `Flutter allows us to create high-performance apps with a rich UI for both iOS and Android from a single codebase, saving time and costs.`,
  },
];

const ServiceSlide = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-10">Our App Development Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            data-aos="fade-up"
            className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300"
          >
            <div className="flex justify-center mb-6">
              {service.icon}
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">{service.title}</h2>
            <p className="text-center">{service.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSlide;
