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

const fetchOneMembacaAlkitab = async () => {
  const response = await axios.get(
    
    "https://api.gppkcbn.org/cbn/v1/artikel/getOneMembacaAlkitab"
  );

  if (response.data.code !== 200) {
    throw new Error("Failed to load image data");
  }

  return response.data.data[0].url;
};

const BannerBibleStatic = () => {
  const {
    data: bacaAlkitabData = [],
    isLoading: isLoadingBacaAlkitab,
    error: errorBacaAlkitab,
  } = useQuery({
    queryKey: ["bacaAlkitabData"],
    queryFn: fetchBacaAlkitabData,
  });

  const {
    data: imageUrl,
    isLoading: isLoadingImage,
    error: errorImage,
  } = useQuery({
    queryKey: ["oneMembacaAlkitab"],
    queryFn: fetchOneMembacaAlkitab,
  });

  if (isLoadingBacaAlkitab || isLoadingImage) return <p>Loading data...</p>;

  if (errorBacaAlkitab || errorImage) {
    console.log(`error: ${errorBacaAlkitab?.message || errorImage?.message}`);
    return null; // Don't render anything
  }

  // Handle empty data
  if (bacaAlkitabData.length === 0) {
    console.log("Data is empty");
    return null; // Don't render anything
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="sm:text-6xl text-4xl font-bold mb-5 sm:mb-20 text-center text-gray-800">
        Renungan 3M
      </h1>
      <div className="flex flex-col sm:flex-row">
        <div className="flex w-full sm:w-2/3 justify-center items-center">
          <img
            src={imageUrl || "/images/3m.jpg"} // Menggunakan URL dari API jika tersedia
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
              <div className="p-2 sm:p-4">
                <h2 className="text-left text-[10px] sm:text-lg font-semibold text-gray-800 line-clamp-2 mb-0">
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
  );
};

export default BannerBibleStatic;
