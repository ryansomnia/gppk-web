import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Service.css'; // Import CSS for styling
import DownloadSection from '../components/DownloadSection';

function Service() {
  const navigate = useNavigate(); // Hook untuk navigasi

  const services = [
    { title: 'Permohonan Doa', description: 'Silahkan isi permohonan doa anda agar Tim Doa kami bisa doakan', img: 'https://picsum.photos/id/102/300/200',link:'formDoa' },
    { title: 'Permohonan Baptisan', description: 'Segera isi form Baptisan agar komitmen anda di Baptis dapat kami layani', img: 'https://picsum.photos/id/108/300/200',link:'formBaptisan' },
    { title: 'Konseling', description: 'Ceritakan masalah anda pada Tim Konseling kami, kami siap mendengarkan', img: 'https://picsum.photos/id/103/300/200',link:'formKonseling' },
    { title: 'Pelayan Kartu Jemaat', description: 'Daftarkan dirimu segera untuk mendapat pelayanan yang lebih baik lagi sebagai jemaat CBN', img: 'https://picsum.photos/id/104/300/200', link:'form-jemaat' },
    { title: 'Pendaftaran Pelayanan', description: 'Jangan sembunyikan Talentamu! Segera daftar dan mari melayani TUHAN bersama kami', img: 'https://picsum.photos/id/101/300/200',link:'form-pelayan' }, 
    { title: 'Pemberkatan Nikah', description: 'Atur perencanaan pernikahan anda dengan mengisi Form Pemberkatan Nikah', img: 'https://picsum.photos/id/109/300/200',  link:'form-nikah' },
    { title: 'Pemberkatan Rumah', description: 'Kami siap membantu pelayanan pemberkatan Rumah anda', img: 'https://picsum.photos/id/106/300/200',link:'form-pemberkatan-rumah' },
    { title: 'Penyerahan Anak', description: 'Silahkan mengisi form Penyerahan Anak untuk anak anda', img: 'https://picsum.photos/id/107/300/200', link:'form-penyerahan-anak'},
  ];
  const handleNavigation = (link) => {
    navigate(`/${link}`); // Navigasi ke halaman berdasarkan link
  };
  return (
    <div className="service-page">
      <h1>Our Services</h1>
      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" 
          key={index}
          onClick={() => service.link && handleNavigation(service.link)} // Tambahkan navigasi pada klik
          >
            <img src={service.img} alt={service.title} className="service-image" />
            <div className="service-info">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
