import React from "react";

const DownloadSection = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
      <div className="w-full py-20 bg-white shadow-sm rounded-lg text-center
      mb-10">
        <h1 className="text-6xl font-bold text-gray-800">Bahan Sharing KKA</h1>
        <h3 className="text-gray-500">Thema: "Menjadi Manusia Sehat"</h3>
        <p className=" text-lg text-gray-500">Tanggal: {formattedDate}</p>
        <a
          href="file_path_here"
          download 
          className=" no-underline mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Download Disini
        </a>
    </div>
  );
};

export default DownloadSection;
