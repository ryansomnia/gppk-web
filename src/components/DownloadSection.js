import React, { useState, useEffect } from "react";

const DownloadSection = () => {
  const [materi, setMateri] = useState(null);

  useEffect(() => {
    const fetchMateri = async () => {
      try {
        const response = await fetch("http://localhost:3013/cbn/v1/artikel/bahanKKA", {
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

    fetchMateri();
  }, []);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-full py-20 bg-white shadow-sm rounded-lg text-center mb-10">
      <h1 className="text-6xl font-bold text-gray-800">Bahan Sharing KKA</h1>
      <h3 className="text-gray-500">
        {materi?.judulMateri ? `Thema: "${materi.judulMateri}"` : "Loading..."}
      </h3>
      <p className="text-lg text-gray-500">Tanggal: {formattedDate}</p>
      {materi?.url ? (
        <a
          href={materi.url}
          download
          className="no-underline mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Download Disini
        </a>
      ) : (
        <p className="text-gray-500 mt-6">File belum tersedia untuk diunduh.</p>
      )}
    </div>
  );
};

export default DownloadSection;
