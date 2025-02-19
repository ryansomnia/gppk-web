import React from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/id"; // Import locale Bahasa Indonesia



const fetchBacaAlkitabData = async () => {
  const response = await axios.post(
    "https://api.gppkcbn.org/cbn/v1/artikel/getDataByKategori",
    { kategori: "3m" },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.data.code !== 200) {
    throw new Error("Failed to load carousel data");
  }

  return response.data.data;
};

const BannerBibleStatic = () => {

  const {
    data: bacaAlkitabData = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bacaAlkitabData"],
    queryFn: fetchBacaAlkitabData,
  });
  if (isLoading) return <p>Loading user data...</p>;

  if (error) {
    // return <div className="error">Error: {error.message}</div>;
    console.log(`error: ${error.message}`);
    return null; // Don't render anything
  }

  // Handle empty data
  if (bacaAlkitabData.length === 0) {
    console.log(" data is empty");
    return null; // Don't render anything
  }


  return (
  <div className="p-4 max-w-7xl mx-auto">
  <h1 className="sm:text-6xl text-4xl font-bold mb-5 sm:mb-20 text-center  text-gray-800">
    Renungan 3M
  </h1>
<div className='flex flex-col sm:flex-row'>
  <div className=' flex  w-full sm:w-2/3 justify-center items-center  '>
  <img
      src="/images/3mm.png" // Ganti dengan path gambar Anda
      alt="Descriptive Alt Text"
      className="w-full h-auto object-cover"
    />
  </div>
  <div className="flex overflow-x-auto gap-2 p-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
    {bacaAlkitabData.map((item) => (
      <div
        key={item.idArtikel}
        className="flex-shrink-0 w-[150px] sm:w-80 bg-zinc-50 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
      >
        <img
          src={item.url}
          alt={item.title}
          className="w-full h-24 sm:h-40 object-cover"
        />
        <div className="p-2 sm:p-4 ">
          <h2 className="text-left text-[10px] sm:text-lg font-semibold  text-gray-800 line-clamp-2 mb-0">
            {item.title}
          </h2>
          <p className="text-[7px] sm:text-sm text-gray-500 mb-3">
            {moment(item.created_at)
              .locale("id")
              .format("dddd, DD MMMM YYYY")}
          </p>

          
          <Link
            to={`/membaca/${item.idArtikel}`}
            className="inline-block text-xs sm:text-sm no-underline text-white bg-blue-500 px-2 py-1 sm:px-3 sm:py-1 rounded hover:bg-blue-600 transition-colors"
          >
            Baca Selengkapnya
          </Link>
        </div>
      </div>
    ))}
  </div>
  </div>
</div>
)
}

export default BannerBibleStatic;
