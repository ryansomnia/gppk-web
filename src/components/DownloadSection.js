import React, { useState, useEffect } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import moment from 'moment';

const DownloadSection = () => {
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Tetap 3 di semua ukuran layar
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: true, // Agar card lebih terpusat dan tidak bertumpuk
  centerPadding: "10px", // Tambahkan padding agar tidak terlalu mepet
  responsive: [
    {
      breakpoint: 1024, // Tablet
      settings: {
        slidesToShow: 3,
        centerPadding: "10px",
      },
    },
    {
      breakpoint: 700, // Mobile
      settings: {
        slidesToShow: 2,
        centerPadding: "10px",
      },
    },
  ],
};


  const [materi, setMateri] = useState({});
  const [allMateri, setAllMateri] = useState([]);

  useEffect(() => {
    const fetchMateri = async () => {
      try {
        const response = await fetch("https://api.gppkcbn.org/cbn/v1/artikel/newBahanKKA", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (result.code === 200) {
          setMateri(result.data);
        } else {
          console.error("Error fetching data:", result.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    const fetchAllMateri = async () => {
      try {
        
        const response = await fetch("https://api.gppkcbn.org/cbn/v1/artikel/bahanKKA", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();

        if (result.code === 200) {
          setAllMateri(result.data);
        } else {
          console.error("Error fetching data:", result.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchMateri();
    fetchAllMateri();
  }, []);
 
  const today = new Date();
  const formattedDate = today.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col items-center w-full py-20 shadow-sm rounded-lg text-center mb-10 px-6">
   
      <h1 className="text-3xl md:text-6xl font-bold text-gray-800">Bahan Sharing KKA</h1>
      <h3 className="text-gray-500 text-xl md:text-lg">
        {materi.judulMateri ? `Tema: "${materi.judulMateri}"` : "Loading..."}
      </h3>
      <p className="text-sm md:text-lg text-gray-500 mb-6">Tanggal: {formattedDate}</p>
      {materi.url ? (
        <a
          href={materi.url}
          download
          className="mt-4 no-underline inline-block text-3xl px-4 md:px-10  py-3 md:py-7 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Download Disini
        </a>
      ) : (
        <p className="text-gray-500 mt-4">File belum tersedia untuk diunduh.</p>
      )}
  
      
  <div className="w-full max-w-5xl mt-7 md:mt-10">
  <h1 className=" text-xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Bahan Sharing KKA Sebelumnya</h1>

  <Slider {...settings}>
    {allMateri.map((item, index) => (
      <div key={index} className="flex px-2 flex-col bg-blue-50 items-center text-center p-3 h-15 w-20  md:w-30 md:h-max rounded-lg shadow-md">
        {/* Bagian atas: Judul & Tanggal dibuat */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-gray-500 text-sm sm:text-base">{item.judulMateri}</h3>
          <p className="text-sm sm:text-lg text-gray-500 mt-2">Tanggal Dibuat: {moment(item.waktuPembuatan).format('DD-MM-YYYY')}</p>
        </div>

        {/* Tombol download di bagian bawah */}
        <a
          href={item.url}
          download
          className=" no-underline inline-block px-4 py-2 sm:px-6 sm:py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
        >
          Download Disini
        </a>
      </div>
    ))}
  </Slider>
</div>


    </div>
  );
};

export default DownloadSection;