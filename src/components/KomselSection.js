import React, { useState } from 'react';

const dummyData = [
  { id: 1, name: 'Debora', category: 'Umum', day: 'Senin', time: '18:00', leader: 'Bpk. Anton S', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Cikaret' },
  { id: 2, name: 'I P K', category: 'Umum', day: 'Jumat', time: '16:00', leader: 'Ibu Sondang L', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Ciparengga' },
  { id: 3, name: 'Imanuel', category: 'Umum', day: 'Rabu', time: '19:00', leader: 'Ibu Tiarma', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Ciluar' },
  { id: 4, name: 'Sion', category: 'Umum', day: 'Rabu', time: '19:00', leader: 'Bpk. Bines', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Karadenan' },
  { id: 5, name: 'Rajawali', category: 'Umum', day: 'Selasa', time: '19:00', leader: 'Bpk. Janson S', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Kandang Roda' },
  { id: 6, name: 'Hermon', category: 'Umum', day: 'Senin', time: '19:00', leader: 'Bpk. Rudolfo Pardede', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'BTN Ciluar' },
  { id: 7, name: 'Yobel', category: 'Umum', day: 'Kamis', time: '18:00', leader: 'Ibu Elfrida', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Bogor Asri' },
  { id: 8, name: 'Filadelfia', category: 'Umum', day: 'Senin', time: '19:00', leader: 'Bpk. Anggiat', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Cimandala' },
  { id: 9, name: 'Kanaan', category: 'Umum', day: 'Kamis', time: '19:00', leader: 'Bpk. Endah', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Ciluar' },
  { id: 10, name: 'Pniel', category: 'Umum', day: 'Selasa', time: '19:00', leader: 'Bpk. Iwan G', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Bintang Mas' },
  { id: 11, name: 'Grace', category: 'Umum', day: 'Senin', time: '19:00', leader: 'Bpk. S Hutapea', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Cimandala' },
  { id: 12, name: 'Agape', category: 'Umum', day: 'Kamis', time: '18:00', leader: 'Bpk. Tedy', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Tatya Asri' },
  { id: 13, name: 'Nazaret', category: 'Umum', day: 'Minggu', time: '19:00', leader: 'Bpk. Parjo', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'BTN CMDLA' },
  { id: 14, name: 'Kairos', category: 'Umum', day: 'Senin', time: '19:00', leader: 'Bpk. Dody', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Perum CI' },
  { id: 15, name: 'Bersinar', category: 'Umum', day: 'Minggu', time: '19:00', leader: 'Ibu Yulia', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Perum Cimandala' },
  { id: 16, name: 'Lidia', category: 'Umum', day: 'Selasa', time: '18:00', leader: 'Ibu Tike', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Nirwana Estate Cikaret' },
  { id: 17, name: 'Glory', category: 'Umum', day: 'Kamis', time: '16:00', leader: 'Ibu Rita Pasaribu', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'JemPari—Progo' },
  { id: 18, name: 'Jehova Jireh', category: 'Umum', day: 'Jumat', time: '19:00', leader: 'Ibu Dessy Lestari', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Cibinong' },
  { id: 19, name: 'Daniel', category: 'Umum', day: 'Senin', time: '19:00', leader: 'Ibu Liner S', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Kp. Serempet' },
  { id: 20, name: 'Menarah KSH', category: 'Umum', day: 'Senin', time: '19:00', leader: 'Bpk. Mikhael Seno W', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Kopem' },
  { id: 21, name: 'Elshadai', category: 'Umum', day: 'Senin', time: '19:00', leader: 'Ibu Rosalina Sihombing', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'Cibinong' },
  { id: 22, name: 'Israel', category: 'Lewi', day: 'Minggu', time: '13:00', leader: 'Bpk.Sabar P', contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'gereja' },
  { id: 1, name: 'DEVOUT', category: 'Youth', leader: 'Sdr Mikhael Antonio', day: 'Sabtu', time: '18:30',contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'gereja' },
  { id: 2, name: 'Movement', category: 'Youth', leader: 'Sdr. Roigen S', day: 'Kamis', time: '18:30',contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'gereja' },
  { id: 3, name: 'Kanaan', category: 'Youth', leader: 'Sdri. Novita', day: 'Selasa', time: '19:00',contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'gereja' },
  { id: 4, name: 'Eben Heazer', category: 'Youth', leader: 'Sdr. Heriyanto', day: 'Rabu', time: '19:00',contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'gereja' },
  { id: 5, name: 'BLESSING ICare', category: 'Youth', leader: 'Sdri. Priskilla', day: 'Sabtu', time: '17:00',contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'gereja' },
  { id: 6, name: 'BBB', category: 'Youth', leader: 'Sdri Adira', day: 'Sabtu', time: '16:00',contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'gereja' },
  { id: 7, name: 'C O G', category: 'Youth', leader: 'Sdr Renhard C', day: 'Minggu', time: '18:00',contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'gereja' },
  { id: 8, name: 'Victory', category: 'Youth', leader: 'Sdr. Bella', day: 'Jumat', time: '17:00',contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'gereja' },
  { id: 9, name: 'Connect', category: 'Youth', leader: 'Sdr. Gabriel', day: 'Jumat', time: '16:00',contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'gereja' },
  { id: 10, name: 'God`s Teens', category: 'Youth', leader: 'Sdri. Neisha L', day: 'Sabtu', time: '14:00',contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'gereja' },
  { id: 11, name: 'GIFT', category: 'Youth', leader: 'Sdr. Gayus L', day: 'Sabtu', time: '16:00',contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'gereja' },
  { id: 12, name: 'LOL', category: 'Youth', leader: 'Sdr. Glen', day: 'Sabtu', time: '19:00',contact: '08123456789', image: '/images/komsel ilu.jpeg', area: 'gereja' },
  { id: 1, name: 'Naftali Kids', category: 'Kids', day: '0', time: '0', leader: 'Vera', contact: '0000', image: '/images/komsel ilu.jpeg', area: 'Gereja' },
  { id: 2, name: 'Sheima Kids', category: 'Kids', day: '0', time: '0', leader: 'Fanilisa', contact: '0000', image: '/images/komsel ilu.jpeg', area: 'Gereja' },
  { id: 3, name: 'Pniel Kids', category: 'Kids', day: '0', time: '0', leader: 'Ibu Selvi', contact: '0000', image: '/images/komsel ilu.jpeg', area: 'Gereja' },
  { id: 4, name: 'Merciful Kids', category: 'Kids', day: '0', time: '0', leader: 'Ibu Yosephine', contact: '0000', image: '/images/komsel ilu.jpeg', area: 'Gereja' },
  { id: 5, name: 'Harmonia Kids', category: 'Kids', day: '0', time: '0', leader: 'Ibu Alfi', contact: '0000', image: '/images/komsel ilu.jpeg', area: 'Gereja' },
  { id: 6, name: 'Sion Kids', category: 'Kids', day: '0', time: '0', leader: 'Ibu Rotua', contact: '0000', image: '/images/komsel ilu.jpeg', area: 'Gereja' },
  { id: 7, name: 'Glory Kids', category: 'Kids', day: '0', time: '0', leader: 'Ibu Deliana', contact: '0000', image: '/images/komsel ilu.jpeg', area: 'Gereja' },
  { id: 8, name: 'Galilea Kids', category: 'Kids', day: '0', time: '0', leader: 'Ibu Nurhasni', contact: '0000', image: '/images/komsel ilu.jpeg', area: 'Gereja' },
  { id: 9, name: 'Menara Kasih Kids', category: 'Kids', day: '0', time: '0', leader: 'Ibu Diary', contact: '0000', image: '/images/komsel ilu.jpeg', area: 'Gereja' },
  { id: 10, name: 'COL Kids', category: 'Kids', day: '0', time: '0', leader: 'Vera', contact: '0000', image: '/images/komsel ilu.jpeg', area: 'Gereja' }

];

const KomselSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredData = dummyData.filter((item) =>
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
    <div className="p-4 sm:p-6  min-h-screen">
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
    placeholder="Cari nama, area, atau kaladddngan (umum, youth, kids)"
    className=" w-full p-4 pl-12 border border-yellow-300 rounded-lg shadow-md bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition duration-200"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  
  
</div>


        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedData.map((komsel) => (
            <div key={komsel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={komsel.image} alt={komsel.name} className="w-full h-32 lg:h-51 object-cover" />
              <div className="p-3 lg:p-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{komsel.name}</h2>
                <p className="text-gray-600 text-[9px] lg:text-sm mb-1"><strong>Kalangan:</strong> {komsel.category}</p>
                <p className="text-gray-600 text-[9px] lg:text-sm mb-1"><strong>Hari:</strong> {komsel.day}</p>
                <p className="text-gray-600 text-[9px] lg:text-sm mb-1"><strong>Jam:</strong> {komsel.time}</p>
                <p className="text-gray-600 text-[9px] lg:text-sm mb-2"><strong>Leader:</strong> {komsel.leader}</p>
                <p className="text-gray-600 text-[9px] lg:text-sm mb-3"><strong>Wilayah:</strong> {komsel.area}</p>
                <button className="w-full bg-blue-500 text-white py-1 lg:py-2 rounded-lg">Lihat Detail</button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <button onClick={handlePreviousPage} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg" disabled={currentPage === 1}>
            Previous
          </button>
          <span className="text-sm">Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg" disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default KomselSection;