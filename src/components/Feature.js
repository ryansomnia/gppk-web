import React from "react";
import { useNavigate } from "react-router-dom";

function Feature() {
  const navigate = useNavigate();

  const handleNavigateToFormJemaat = () => {
    navigate("/form-jemaat");
  };

  return (
    <div className="flex flex-col items-center my-10 sm:mb-20 px-4">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-10 text-center text-gray-800">
        Segera Terkoneksi!
      </h1>

      {/* Feature Items */}
      <div className="grid grid-cols-5 gap-4 sm:grid-cols-3 lg:grid-cols-5 text-center">
        {/* Daftar KJ */}
        {/* <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleNavigateToFormJemaat}
        >
          <div className="w-14 md:w-20 h-14 md:h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gray-200 flex items-center justify-center rounded-full text-2xl sm:text-3xl lg:text-4xl text-gray-800 hover:bg-gray-300">
            <i className="fas fa-book"></i>
          </div>
          <p className="mt-2 text-gray-800 text-[10px] sm:text-sm">Daftar KJ</p>
        </div> */}

        {/* YouTube */}
        <div className="flex flex-col items-center">
          <a
            href="https://www.youtube.com/@gppkcbn5941"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div className="w-14 md:w-20 h-14 md:h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-red-500 flex items-center justify-center rounded-full text-2xl sm:text-3xl lg:text-4xl text-white hover:bg-red-600">
              <i className="fab fa-youtube"></i>
            </div>
          </a>
          <p className="mt-2 text-gray-800 text-[10px] sm:text-sm">YouTube</p>
        </div>

        {/* Instagram */}
        <div className="flex flex-col items-center">
          <a
            href="https://www.instagram.com/gppkcbn"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div className="w-14 md:w-20 h-14 md:h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 flex items-center justify-center rounded-full text-2xl sm:text-3xl lg:text-4xl text-white hover:opacity-90">
              <i className="fab fa-instagram"></i>
            </div>
          </a>
          <p className="mt-2 text-gray-800 text-[10px] sm:text-sm">Instagram</p>
        </div>

        {/* Jadwal KKA */}
        <a
          href="https://gppkcbn.org/kka"
          className="flex flex-col items-center no-underline"
        >
          <div className="w-14 md:w-20 h-14 md:h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-blue-500 flex items-center justify-center rounded-full text-2xl sm:text-3xl lg:text-4xl text-white hover:bg-blue-600">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <p className="mt-2 text-gray-800 text-[10px] sm:text-sm">Jadwal KKA</p>
        </a>

        {/* Pastoral Care */}
        <a
          href="https://gppkcbn.org/service"
          className="flex flex-col items-center no-underline"
        >
        <div className="flex flex-col items-center">
          <div className="w-14 md:w-20 h-14 md:h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-green-500 flex items-center justify-center rounded-full text-2xl sm:text-3xl lg:text-4xl text-white hover:bg-green-600">
            <i className="fas fa-praying-hands"></i>
          </div>
          <p className="mt-2 text-gray-800 text-[8px] sm:text-sm">Pastoral Care</p>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Feature;
