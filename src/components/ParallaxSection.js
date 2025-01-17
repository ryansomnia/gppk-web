import React, { useEffect, useState } from 'react';
import './ParallaxSection.css';
const images = [
  '/images/bg.jpg',
  '/images/bg1.JPG',
  '/images/bg2.JPG'
];

function ParallaxSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="parallax" 
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      <div className="overlay-content">
        <h1>Welcome Home</h1>
        <p>Rasakan dan Alami Kasih Karunia dan Perjumpaan pribadi dengan Kristus hari ini.</p>
      </div>
    </div>
  );
}

export default ParallaxSection;
