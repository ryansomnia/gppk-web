import React, { useState, useEffect } from 'react';

const KomselItem = ({ komsel }) => {
  const handleContactLeader = () => {
    const phoneNumber = komsel.contact.startsWith('0') ? `62${komsel.contact.substring(1)}` : komsel.contact;
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={komsel.image}
        alt={`${komsel.name} - ${komsel.category} - ${komsel.area}`}
        className="w-full h-32 lg:h-51 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/images/placeholder.png'; // Ganti dengan gambar placeholder Anda
        }}
      />
      <div className="p-3 lg:p-4">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">{komsel.name}</h2>
        <p className="text-gray-600 text-[9px] lg:text-sm mb-1">
          <strong>Kalangan:</strong> {komsel.category}
        </p>
        <p className="text-gray-600 text-[9px] lg:text-sm mb-1">
          <strong>Hari:</strong> {komsel.day}
        </p>
        <p className="text-gray-600 text-[9px] lg:text-sm mb-1">
          <strong>Jam:</strong> {komsel.time}
        </p>
        <p className="text-gray-600 text-[9px] lg:text-sm mb-2">
          <strong>Leader:</strong> {komsel.leader}
        </p>
        <p className="text-gray-600 text-[9px] lg:text-sm mb-3">
          <strong>Wilayah:</strong> {komsel.area}
        </p>
        <button
          className="w-full bg-blue-500 text-white py-1 lg:py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          onClick={handleContactLeader}
        >
          Hubungi Leader
        </button>
      </div>
    </div>
  );
};

const KomselSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [komselData, setKomselData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.gppkcbn.org/cbn/v1/kka/getAll');
        const result = await response.json();
        if (result.code === 200) {
          setKomselData(result.data);
        } else {
          console.error('Failed to fetch data:', result.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredData = komselData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4 sm:p-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold">KKA - Keluarga Kerajaan Allah</h1>
          <p className="text-gray-700 mt-2 text-sm sm:text-base">
            Adalah Komunitas Terkecil dari CBN Church Dimana jemaat belajar dan mempraktekkan firman serta melatih diri untuk melayani Tuhan dan sesama.
          </p>
        </div>

        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Cari nama, area, atau kalangan (umum, youth, kids)"
            className="w-full p-4 pl-12 border border-yellow-300 rounded-lg shadow-md bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedData.map((komsel) => (
            <KomselItem key={komsel.id} komsel={komsel} />
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePreviousPage}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default KomselSection;