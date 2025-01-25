import React from 'react';
// const images = [
//   '/images/bg1.JPG',
//   '/images/bg2.JPG',
//   '/images/sm1.JPG',
// ];
// ...
// style={{
//   backgroundImage: `url(${bgImage})`
// }}
const WorshipLayout = () => {
  return (
    <div className="flex justify-center items-center p-3 bg-gray-100">
    <img
      src="/images/ibadah.jpg" // Ganti dengan path gambar Anda
      alt="Descriptive Alt Text"
      className="w-full max-h-screen object-cover"
    />
  </div>

  );
};

export default WorshipLayout;
