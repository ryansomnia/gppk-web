import React from 'react';

const BannerBibleStatic = () => {
  return (
    <div className="flex items-center justify-center h-[90vh] text-[#f7f9fc] bg-cover bg-center relative text-left overflow-hidden p-5" 
    style={{ backgroundImage: "url('/images/bg1.JPG')" }}>
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(16,55,92,0.8)]"></div>
      <div className="relative z-10 p-8 max-w-[600px] text-left">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#FFCC00] tracking-wide shadow-md">3M CBN</h1>
          <div className="text-[#FFCC00]">
            <h5>Membaca Merenungkan Melakukan</h5>
          </div>
          <p className="text-lg font-normal text-[#e6e9f0] my-2 leading-6 max-w-[500px]">
            Sebagai Pelayan TUHAN yang diurapi, Luangkan waktu untuk Firman Tuhan dan renungi apa yang TUHAN taruhkan di hari ini.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerBibleStatic;