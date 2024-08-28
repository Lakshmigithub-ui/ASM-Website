import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row text-center">
          <p>&copy; {new Date().getFullYear()} Copyright <span>ASM Projects.</span> All Rights Reserved.</p>
          <div className="credits">
            Designed by <a href="https://asminfotech.in/">ASM Infotech</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
