import React, { useState, useEffect } from 'react';

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
    <div className="giving-page p-5">
      <div className="parallax bg-cover bg-center h-96" 
        style={{ backgroundImage: `url(${images[currentImage]})` }}>
        <div className="overlay-content flex items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold text-center">MEMBERI PERSEMBAHAN <br/>KEPADA TUHAN</h1>
        </div>
      </div>
      <div className="content-wrapper flex flex-col lg:flex-row justify-between mt-10 space-y-10 lg:space-y-0 lg:space-x-10">
        
        {/* Section 1: Donation Information */}
        <section className="giving-info w-full lg:w-2/5 bg-gray-100 p-5 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Jemaat bisa memberikan persembahan :</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Persembahan Kolekte</li>
            <li>Persembahan Persepuluhan</li>
            <li>Persembahan Syukur</li>
            <li>Persembahan Diakonia dan Misi</li>
            <li>Persembahan Buah Sulung</li>
          </ul>
          <p className="mt-4">Persembahan bisa ditransferkan ke :</p>
          <div className='bg-blue-500 rounded-lg mt-2'>
            <h3 className='text-white p-3 text-center font-bold'>BCA - 2111529908</h3>
          </div>
        </section>

        {/* Section 2: Activity Gallery */}
        <section className="activity-gallery w-full lg:w-3/5 text-center">
          <h2 className="text-3xl font-bold mb-5">Our Activities</h2>
          <div className="gallery-wrapper relative inline-block">
            <img
              src={activities[current].image}
              alt={activities[current].caption}
              className="gallery-image w-full max-w-lg rounded-lg shadow-lg transition-transform transform hover:scale-105"
            />
            <div className="gallery-caption mt-2 text-xl text-gray-800">
              <p>{activities[current].caption}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Giving;