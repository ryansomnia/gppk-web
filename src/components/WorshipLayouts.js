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
    <div className="flex flex-col md:flex-row my-14 ">
    {/* Left Block */}
    <div
      className="text-white flex items-center justify-center bg-center h-96 md:h-[70vh] md:w-[60%] shadow-xl"
      style={{
        backgroundImage: " linear-gradient(rgba(0, 251, 255, 0.6), rgba(0, 251, 255, 0.6)), url('/images/usher1.JPG')", // Transparansi lebih rendah
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
      }}
    >
  
  <div className="text-center mt-28 px-6 md:px-12">
    <h1 className=" text-white text-4xl md:text-6xl font-extrabold leading-tight mb-4">
      Ibadah CBN
    </h1>
    <p className=" text-white text-lg md:text-2xl max-w-lg mx-auto">
      Rasakan dan alami kasih Kristus di setiap ibadah
    </p>
  </div>
</div>


      {/* Right Block */}
      <div className="flex flex-wrap md:w-[40%]">
        {/* First Block */}
        <div className="flex items-end justify-center w-1/2 h-48 md:h-1/2" style={{
            backgroundImage: "url('/images/bg1.JPG')",
            backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'background-image 1s ease-in-out',
}}>
   <div className=" text-center bg-yellow-600 py-1 px-2 m-1 rounded-lg">
  <h3 className="text-[10px] sm:text-xl font-semibold text-white">Ibadah Raya Umum</h3>
  <p className="text-[8px] sm:text-xs font-normal text-white leading-tight">Ibadah Umum setiap Minggu, Jam 09:00 WIB</p>
</div>
</div>

        {/* Second Block */}
        <div className=" flex items-end justify-center w-1/2 h-48 md:h-1/2"
         style={{
          backgroundImage: "url(/images/bg2.JPG)",
  
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
        }}>
          
          <div className=" text-center bg-yellow-600 py-1 px-2 m-1 rounded-lg">
  <h3 className="text-[10px] sm:text-xl font-semibold text-white">Ibadah Youth</h3>
  <p className="text-[8px] sm:text-xs font-normal text-white leading-tight">Ibadah Anak Muda setiap Minggu, Jam 16:00 WIB</p>
</div>
        </div>

        {/* Third Block */}
        <div className=" text-white flex items-end justify-center w-1/2 h-48 md:h-1/2" style={{
          backgroundImage: "url(/images/sm1.JPG)", // Transparansi lebih rendah
  
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
        }}>
          <div className=" text-center bg-yellow-600 py-1 px-2 m-1 rounded-lg">
  <h3 className="text-[10px] sm:text-xl font-semibold text-white">Ibadah Sekolah Minggu</h3>
  <p className="text-[8px] sm:text-xs font-normal text-white leading-tight">Ibadah Anak di tiap kelas jam 09:00 WIB</p>
</div>
        </div>

        {/* Fourth Block */}
        <div className="bg-gray-900 text-white flex items-center justify-center w-1/2 h-48 md:h-1/2">
          <div className="text-center">
            <h3 className="text-lg font-semibold">Ibadah KKA</h3>
            <p className="text-sm">dari senin sampai Minggu</p>
         
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorshipLayout;
