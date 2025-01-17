import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Kesaksian = () => {
  // Data kesaksian
  const testimonies = [
    {
      image: '/images/bg.jpg', // Pastikan gambar tersedia di folder public
      name: 'Maria Simanjuntak',
      highlight:
        'Ketika saya mengalami masa sulit dalam hidup, saya menemukan kekuatan baru melalui kelompok doa.',
      fullTestimony: 'Bergabung dengan kelompok doa memberikan saya komunitas yang mendukung. Tuhan bekerja luar biasa dalam hidup saya.',
    },
    {
      image: '/images/bg1.jpg',
      name: 'Johan Sitorus',
      highlight:
        'Doa bersama keluarga gereja telah mengubah cara pandang saya terhadap tantangan hidup.',
      fullTestimony: 'Dengan doa bersama, saya merasakan damai dan kekuatan yang luar biasa setiap hari.',
    },
    {
      image: '/images/bg2.jpg',
      name: 'Debora Manurung',
      highlight:
        'Mendengar kesaksian orang lain menguatkan iman saya dan membawa saya lebih dekat kepada Tuhan.',
      fullTestimony: 'Kini saya merasa lebih percaya diri menghadapi hidup karena saya tahu Tuhan selalu menyertai.',
    },
  ];

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

  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Kesaksian Jemaat
      </h2>
      <Slider {...settings}>
        {testimonies.map((testimony, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Foto persegi panjang */}
            <img
              src={testimony.image}
              alt={testimony.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {testimony.name}
              </h3>
              <p className="text-gray-600 mb-4">"{testimony.highlight}"</p>
              <button
                onClick={() => alert(testimony.fullTestimony)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300"
              >
                Baca Selengkapnya
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Kesaksian;
