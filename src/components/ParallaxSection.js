import React, { useEffect, useState } from 'react';
import './ParallaxSection.css';
const images = [
  '/images/bg1.webp',
  '/images/bg2.webp',
  '/images/bg3.jpg',
  '/images/bg4.jpg',
  '/images/bg5.webp',
'/images/bg6.webp',
'/images/bg7.webp',
'/images/bg8.webp',
'/images/bg9.webp',
'/images/bg10.webp',
'/images/bg11.webp',
'/images/bg12.webp'

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
        <p>Alami Kasih Karunia dan Perjumpaan Pribadi Dengan Kristus Hari Ini.</p>
      </div>
    </div>
  );
}

export default ParallaxSection;
