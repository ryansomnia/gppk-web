import React, { useState, useEffect } from 'react';
import './Giving.css';
const images = [
  '/images/giving.JPG',
  '/images/bg1.JPG',
  '/images/bg2.JPG'
];


function Giving() {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  // Sample data for rotating gallery
  const activities = [
    {
      image: 'https://picsum.photos/id/1011/600/400',
      caption: 'Community Outreach Program',
    },
    {
      image: 'https://picsum.photos/id/1012/600/400',
      caption: 'Children’s Ministry Event',
    },
    {
      image: 'https://picsum.photos/id/1016/600/400',
      caption: 'Sunday Worship Service',
    },
    {
      image: 'https://picsum.photos/id/1014/600/400',
      caption: 'Church Fundraising Dinner',
    },
    {
      image: 'https://picsum.photos/id/1015/600/400',
      caption: 'Christmas Celebration',
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % activities.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [activities.length]);

  return (
    <div className="giving-page">
       <div className="parallax" 
      style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <div className="overlay-content">
        <h1>MEMBERI PERSEMBAHAN <br/>KEPADA TUHAN</h1>
        {/* <p>Bagi Jemaat yang tergerak untuk memberi dukungan dana pelayanan kami</p> */}
      </div>
    </div>
      <div className="content-wrapper">
        
        {/* Section 1: Donation Information */}
        <section className="giving-info">
          <h3>Jemaat bisa memberikan persembahan :</h3>
          {/* <p>Your donations help us continue our mission and reach more people with the love of Christ.</p> */}
          <div className="bank-info">
            {/* <h2>Bank Transfer Information:</h2> */}
            <ul>
              <li>Persembahan Kolekte</li>
              <li>Persembahan Persepuluhan</li>
              <li>Persembahan Syukur</li>
              <li>Persembahan Diakonia dan Misi</li>
              <li>Persembahan Buah Sulung</li>

            </ul>
            <p>Persembahan bisa ditransferkan ke :</p>
            <div className='bg-blue-500 rounded-lg'>
              <h3 className='text-white p-3 text-center font-bold'>BCA - 2111529908</h3>
            </div>
          </div>
        </section>

        {/* Section 2: Activity Gallery */}
        <section className="activity-gallery">
          <h2>Our Activities</h2>
          <div className="gallery-wrapper">
            <img
              src={activities[current].image}
              alt={activities[current].caption}
              className="gallery-image"
            />
            <div className="gallery-caption">
              <p>{activities[current].caption}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Giving;
