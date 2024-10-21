import React, { useState, useEffect } from 'react';
import './VisiMisi.css';

function VisiMisi() {
  const [showVisi, setShowVisi] = useState(true);
  const [fadeState, setFadeState] = useState('fade-in'); // To control fade-in and fade-out

  useEffect(() => {
    const cycleDuration = 12000; // Total cycle duration: 10s (Visi) + 5s (Misi) + fade times
    const fadeDuration = 1000; // Duration for fade-in and fade-out

    const transitionCycle = () => {
      // Fade out after 10s (for "Visi") or 5s (for "Misi")
      setTimeout(() => {
        setFadeState('fade-out');
      }, 7000); // 10s for "Visi", adjust to 5s for "Misi" during the second phase

      // Transition to next content after fade-out
      setTimeout(() => {
        setShowVisi((prev) => !prev); // Toggle between Visi and Misi
        setFadeState('fade-in');
      }, 7000 + fadeDuration); // 10s for "Visi" + fade-out time
    };

    const interval = setInterval(() => {
      transitionCycle();
    }, cycleDuration); // 10s (Visi) + 5s (Misi) + fade times

    transitionCycle(); // Initial call to start the cycle immediately

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="visimisi-container">
      {/* Background image with parallax */}
      <div className="parallax-background"></div>
      <div className="overlay"></div>
      {/* Content for Visi and Misi */}
      <div className="visimisi-content">
        <div className={`fade-text ${fadeState}`}>
          <h1 className="title">{showVisi ? 'Visi' : 'Misi'}</h1>
          <p className="description">
            {showVisi
              ? 'MEMBAWA 5000 JIWA KEPADA PENGENALAN AKAN KRISTUS, SEHINGGA MEREKA MENERAPKAN GAYA HIDUP YANG SEMAKIN SAMA SEPERTI KRISTUS DAN MASUK DALAM KELUARGA KERAJAAN ALLAH.'
              : 'GEREJA BARU RASULI MELALUI KELUARGA KERAJAAN ALLAH.'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VisiMisi;
