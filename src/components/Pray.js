import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Pray.css';

function Pray() {
  const navigate = useNavigate();

  const navigateToForm = () => {
    navigate('/formDoa'); // Function to navigate to the Prayer Form
  };

  return (
    <div className="pray-section">
      <div className="overlay"></div>
      <div className="pray-content">
        <h1>Permohonan Doa</h1>
        <p>Jika Anda memiliki permohonan doa, kami di sini untuk mendukung Anda.</p>
        <button onClick={navigateToForm}>Ajukan Permohonan Doa</button>
      </div>
    </div>
  );
}

export default Pray;
