import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";

const StickyHeader = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const sticky = document.querySelector(".sticky-header");
    const stickyTop = sticky.offsetTop;

    const handleScroll = () => {
      window.scrollY >= stickyTop ? setIsFixed(true) : setIsFixed(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="text-center bg-blue-500 text-white py-4">asm logo        fb    insta     x</div>
      
      <div
        className={`sticky-header ${
          isFixed
            ? "fixed text-base h-5 transition-all duration-200 ease-in-out"
            : "sticky text-2xl h-24 transition-all duration-300 ease-in-out"
        } w-full top-0 bg-gray-800 text-white flex items-center justify-center`}
      >
        <Navbar />
      </div>

      {/* Content Sections */}
      <div className="py-20 bg-blue-500 text-white text-center"><Home /></div>
      <div className="py-20 bg-blue-500 text-white text-center"><Footer /></div>
      <div className="py-20 bg-blue-500 text-white text-center">By: Felipe Martinin</div>
    </div>
  );
};

export default StickyHeader;
