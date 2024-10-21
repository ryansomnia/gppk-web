import React from 'react';
import './Header.css'; // Assuming you are using a CSS file

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <img src="logogppk.png" alt="Logo" className="logo" />
        <div className="header-text">
          <h1>GPPK CBN</h1>
          <p>Christ Bless Nation</p>
        </div>
      </div>
      <div className="header-info">
      <a href='https://maps.app.goo.gl/6v6QhMr3gkjSEhHXA'>
        <div className="info-item">
      
          <span className="icon">📍</span>
         

          <div>
            <h2>Gedung TK SD Cerdas Bangsa</h2>
            <p> JL. Raya Jakarta Bogor KM50 Cimandala City, Bogor</p>
          </div>

       </div>
       </a>
        
        <div className="info-item">
          <span className="icon">📞</span>
          <div>
            <h2>Contact</h2>
            <p>021 2605 1888</p>
          </div>
        </div>
        <div className="info-item">
          <span className="icon">⏰</span>
          <div>
            <h2>Worship Service</h2>
            <p>07:00 - 16:30 WIB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
