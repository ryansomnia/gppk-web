// import React from 'react';

// const BannerBibleStatic = () => {
//   return (
//     <div className="flex items-center justify-center h-[90vh] text-[#f7f9fc] bg-cover bg-center relative text-left overflow-hidden p-5" 
//     style={{ backgroundImage: "url('/images/bg1.JPG')" }}>
//       <div className="absolute top-0 left-0 w-full h-full bg-[rgba(16,55,92,0.8)]"></div>
//       <div className="relative z-10 p-8 max-w-[600px] text-left ">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-[#FFCC00] tracking-wide ">3M CBN</h1>
//           <div className="text-[#FFCC00]">
//             <h5>Membaca Merenungkan Melakukan</h5>
//           </div>
//           <p className="text-lg font-normal text-[#e6e9f0] my-2 leading-6 max-w-[500px]">
//             Sebagai Pelayan TUHAN yang diurapi, Luangkan waktu untuk Firman Tuhan dan renungi apa yang TUHAN taruhkan di hari ini.
//           </p>
//         </div>
//       </div>
//       <div className="relative p-8 max-w-[600px] text-left bg-red-200">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-[#FFCC00] tracking-wide ">3M CBN</h1>
//           <div className="text-[#FFCC00]">
//             <h5>Membaca Merenungkan Melakukan</h5>
//           </div>
//           <p className="text-lg font-normal text-[#e6e9f0] my-2 leading-6 max-w-[500px]">
//             Sebagai Pelayan TUHAN yang diurapi, Luangkan waktu untuk Firman Tuhan dan renungi apa yang TUHAN taruhkan di hari ini.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerBibleStatic;
import React, { useState } from "react";

const BannerBibleStatic = () => {
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className=" mx-auto flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
      <div className="flex flex-1 items-center justify-center  ">
        <img
          className="w-max "
          src="/images/3m.jpeg" // Ganti dengan URL gambar Anda
          alt="Jeremy Thompson"
        />
      </div>

      <div className="flex-1 bg-[#F9D949] p-6">
        <h2 className="text-5xl font-bold mb-2">3M CBN</h2>
        <p className="text-black mb-2text-base italic">Mari alami terobosan dengan melakukan 3M – Membaca, Merenungkan dan Melakukan Firman Tuhan</p>
        <p className="text-gray-800 mb-2">
        Temukan kebenaran firman Tuhan dengan menjawab pertanyaan – pertanyaan di bawah ini :</p>
        <p className=" font-semibold mb-0">Langkah 1 : <span className="font-normal">Membaca Yohanes 3:1-21</span> </p>
        <p className=" font-semibold mb-0">Langkah 2 : <span className="font-normal">Merenungkan</span> </p>
        <p className=" font-semibold mb-4">Langkah 3 : <span className="font-normal">Melakukan</span> </p>

         <button className="px-4 py-2 bg-[#3C486B] text-white rounded hover:bg-[#1e2438]">
          Klik disini untuk lebih lanjut 
        </button>
      </div>
    </div>
  );
};

export default BannerBibleStatic;
