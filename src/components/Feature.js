import React from "react";
import { useNavigate } from "react-router-dom";

function Feature() {
  const navigate = useNavigate();

  const handleNavigateToFormJemaat = () => {
    navigate("/form-jemaat");
  };

  return (
    <div className="flex flex-col items-center my-10 sm:mb-20">
      {/* Heading */}
      <h1 className="text-4xl sm:text-6xl font-bold mb-10 sm:mb-20 text-center text-gray-800">
        Segera Terkoneksi !
      </h1>

      {/* Feature Items */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* Daftar KJ */}
        <div
          className="flex flex-col items-center cursor-pointer px-4" // Menambahkan jarak samping
          onClick={handleNavigateToFormJemaat}
        >
          <div className="w-32 h-32 bg-gray-200 flex items-center justify-center rounded-full text-3xl text-gray-800 hover:bg-gray-300">
            <i className="fas fa-book text-5xl"></i>
          </div>
          <p className="mt-2 text-gray-800 text-sm">Daftar KJ</p>
        </div>

        {/* Youtube */}
        <div className="flex flex-col items-center px-4"> {/* Menambahkan jarak samping */}
          <a
            href="https://www.youtube.com/@gppkcbn5941"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div className="w-32 h-32 bg-red-500 flex items-center justify-center rounded-full text-3xl text-white hover:bg-red-600">
              <i className="fab fa-youtube text-5xl"></i>
            </div>
          </a>
          <p className="mt-2 text-gray-800 text-sm">Youtube</p>
        </div>

        {/* Instagram */}
        <div className="flex flex-col items-center px-4"> {/* Menambahkan jarak samping */}
          <a
            href="https://www.instagram.com/gppkcbn"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 flex items-center justify-center rounded-full text-3xl text-white hover:opacity-90">
              <i className="fab fa-instagram text-5xl"></i>
            </div>
          </a>
          <p className="mt-2 text-gray-800 text-sm">Instagram</p>
        </div>

        {/* Jadwal KKA */}
        <a href="http://localhost:3000/ministry" className="flex flex-col items-center px-4"> {/* Menambahkan jarak samping */}
  <div className="w-32 h-32 bg-blue-500 flex items-center justify-center rounded-full text-3xl text-white hover:bg-blue-600">
    <i className="fas fa-calendar-alt text-5xl"></i>
  </div>
  <p className="mt-2 text-gray-800 text-sm">Jadwal KKA</p>
</a>

        {/* Pastoral Care */}
        <div className="flex flex-col items-center px-4"> {/* Menambahkan jarak samping */}
          <div className="w-32 h-32 bg-green-500 flex items-center justify-center rounded-full text-3xl text-white hover:bg-green-600">
            <i className="fas fa-praying-hands text-5xl"></i>
          </div>
          <p className="mt-2 text-gray-800 text-sm">Pastoral Care</p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
