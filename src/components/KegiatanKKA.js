import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const KegiatanKKA = () => {
  // Pengaturan carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Data galeri
  const kegiatan = [
    {
      title: 'Pujian & Penyembahan',
      image: '/images/IMG_2040.JPG', // Pastikan gambar tersedia di folder public
      description: 'Mengangkat hati dalam pujian dan penyembahan kepada Tuhan.',
    },
    {
      title: 'Kesaksian',
      image: '/images/IMG_5078.JPG',
      description: 'Mendengar dan membagikan pengalaman iman yang menguatkan.',
    },
    {
      title: 'Saling Mendoakan',
      image: '/images/IMG_2081.JPG',
      description: 'Bersama-sama saling mendukung dalam doa untuk setiap pergumulan.',
    },
    {
      title: 'Penutup & Ajakan Bergabung',
      image: '/images/IMG_2055.JPG',
      description:
        'Kami mengundang Anda untuk menjadi bagian dari keluarga besar KKA kami!',
    },
  ];

  return (
    <div className=" py-10 px-4 md:px-20">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-10">
        Kegiatan KKA
      </h2>
      <Slider {...settings}>
        {kegiatan.map((item, index) => (
          <div key={index} className="bg-gray-100 flex flex-col items-center text-center">
            <img
              src={item.image}
              alt={item.title}
              className="w-full max-h-96 object-cover rounded-lg shadow-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-base px-4 md:px-10">
              {item.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default KegiatanKKA;
