import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import "./Carousel.css";
import { Link } from 'react-router-dom';



const fetchRenunganData = async () => {
  const response = await axios.post(
    "http://localhost:3001/cbn/v1/artikel/getDataByKategori",
    { kategori: 'renungan' },
    {
      headers: {
        "Content-Type": "application/json"      },
    }
  );

  if (response.data.code !== 200) {
    throw new Error('Failed to load carousel data');
  }

  return response.data.data;
};

function RenunganInterval() {
  // React Query for data fetching
  const { data: renunganData = [], isLoading, error } = useQuery({
    queryKey: ['renunganData'],
    queryFn: fetchRenunganData,
  });

  // Handle loading state
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }


return (
<div className="p-4 max-w-7xl mx-auto">
  <h1 className="sm:text-6xl text-4xl font-bold mb-16 sm:mb-20  text-center text-gray-800">
    Bahan Renungan 
  </h1>
  <div className="flex overflow-x-auto gap-4 p-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
    {renunganData.map((item) => (
      <div
        key={item.idArtikel}
        className="flex-shrink-0 w-64 sm:w-80 bg-zinc-50  rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
      >
        <img
          src={item.url}
          alt={item.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2">
            {item.title}
          </h2>
          <p className="text-sm text-gray-500 mb-1">{item.created_at}</p>
          <div className="text-sm text-gray-600 mb-3 line-clamp-3">
      <span
        dangerouslySetInnerHTML={{
          __html: item.content,
        }}
      ></span>
    </div>
          <Link
            to={`/article/${item.idArtikel}`}
            className="inline-block text-sm no-underline text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition-colors"
          >
            Baca Selengkapnya
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>


);
   

}

export default RenunganInterval;
