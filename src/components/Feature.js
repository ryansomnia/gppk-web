import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Feature.css";



function Feature() {
  const navigate = useNavigate(); // Dipanggil di dalam komponen
  const handleNavigateToFormJemaat = () => {
    navigate('/form-jemaat'); // Arahkan ke halaman Form Jemaat
  };
  return (
    <div className="feature-area">
      <div className="feature-item" onClick={handleNavigateToFormJemaat}>
        <div className="button-feature">
          <i className="fas fa-book"></i>
        </div>
        <p>Daftar KJ</p>
      </div>
      <div className="feature-item">
      <a href="https://www.youtube.com/@gppkcbn5941" target="_blank" rel="noopener noreferrer">
          <div className="button-feature">
            <i className="fab fa-youtube"></i>
          </div>
        </a>
        <p>Youtube</p>
      </div>
      <div className="feature-item">
      <a href="https://www.instagram.com/gppkcbn" target="_blank" rel="noopener noreferrer">
          <div className="button-feature">
            <i className="fab fa-youtube"></i>
          </div>
        </a>
        <p>Instagram</p>
      </div>
      <div className="feature-item">
        <div className="button-feature">
          <i className="fas fa-calendar-alt"></i>
        </div>
        <p>Jadwal Ibadah</p>
      </div>
      <div className="feature-item">
        <div className="button-feature">
          <i className="fas fa-praying-hands"></i>
        </div>
        <p>Pastoral Care</p>
      </div>
    </div>
  );
}

export default Feature;
