import React, {useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();


 // Close the menu when the route changes
 useEffect(() => {
  setIsOpen(false); // Close the menu on route change
}, [location]);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};
  return (
    <>
      <nav className="navbar">
        {/* <div className="logo">Our Church</div> */}

        {/* Hamburger Button */}
        <div className={`burger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {/* Navbar Links */}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/news" onClick={toggleMenu}>News</Link></li>
          <li><Link to="/service" onClick={toggleMenu}>Service</Link></li>
          <li><Link to="/giving" onClick={toggleMenu}>Giving</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        </ul>
      </nav>
      {/* This pushes the content below the navbar */}
      <div className={`content ${isOpen ? 'pushed-down' : ''}`}>
        {/* Other content of the page goes here */}
      </div>
    </>
  );
}

export default Navbar;
