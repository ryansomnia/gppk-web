import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Service.css'; // Import CSS for styling
import DownloadSection from '../components/DownloadSection';

function Service() {
  const navigate = useNavigate(); // Hook untuk navigasi

  const services = [
    { title: 'Permohonan Doa', description: 'Wednesdays at 7:00 PM - A time of prayer and fellowship.', img: 'https://picsum.photos/id/102/300/200',link:'formDoa' },
    { title: 'Permohonan Baptisan', description: 'Submit a prayer request for your needs.', img: 'https://picsum.photos/id/108/300/200',link:'formBaptisan' },
    { title: 'Konseling', description: 'Sundays at 9:00 AM - A dedicated time for children to learn and grow in their faith.', img: 'https://picsum.photos/id/103/300/200',link:'formKonseling' },
    { title: 'Pelayan Kartu Jemaat', description: 'Assistance with church member services.', img: 'https://picsum.photos/id/104/300/200', link:'form-jemaat' },
    { title: 'Pendaftaran Pelayanan', description: 'Every Sunday at 10:00 AM - Join us for a time of worship and community.', img: 'https://picsum.photos/id/101/300/200',link:'form-pelayan' }, 
    { title: 'Pemberkatan Nikah', description: 'Schedule a wedding blessing ceremony.', img: 'https://picsum.photos/id/109/300/200',  link:'form-peneguhan-nikah' },
    { title: 'Pemberkatan Rumah', description: 'Support for new births and family ceremonies.', img: 'https://picsum.photos/id/106/300/200',link:'form-pemberkatan-rumah' },
    { title: 'Penyerahan Anak', description: 'Serahkan anak mu sekarang juga', img: 'https://picsum.photos/id/107/300/200', link:'form-penyerahan-anak'},
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
