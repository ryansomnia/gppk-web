import React from 'react';
import './Footer.css'; // External CSS file for better organization

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>GPPK CBN © {new Date().getFullYear()}. All Rights Reserved.</p>
        <p className="footer-creator">
          Website created by <a href="https://www.linkedin.com/in/heriyanto-sitorus-7018a3111/" target="_blank" rel="noopener noreferrer">ryansomnia</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
