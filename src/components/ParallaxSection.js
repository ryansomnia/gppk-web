import React, { useEffect, useState } from 'react';

const images = [
  '/images/bg1.webp', '/images/bg2.webp', '/images/bg3.jpg',
  '/images/bg4.jpg', '/images/bg5.webp', '/images/bg6.webp',
  '/images/bg7.webp', '/images/bg8.webp', '/images/bg9.webp',
  '/images/bg10.webp', '/images/bg11.webp', '/images/bg12.webp'
];

function ParallaxSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // 5 detik agar transisi tidak terlalu cepat bagi mata
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-slate-950">
      {/* Background Images dengan Crossfade Animasi */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[2000ms] ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            backgroundImage: `url(${img})`,
            backgroundAttachment: 'fixed' // Efek Parallax
          }}
        />
      ))}

      {/* Overlay Gradient: Sangat penting untuk keterbacaan teks sesuai Screenshot 2026-05-12 at 20.22.33.jpg */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80 z-10" />

      {/* Content Area */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl space-y-6">
          
          {/* Label Kecil di Atas */}
          <span className="inline-block text-yellow-400 text-xs md:text-sm font-bold tracking-[0.3em] uppercase animate-pulse">
            CBN Church Indonesia
          </span>

          {/* Title Utama */}
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] drop-shadow-2xl">
            Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Home</span>
          </h1>

          {/* Garis Aksen */}
          <div className="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full shadow-lg shadow-yellow-500/20" />

          {/* Subtitle / Deskripsi */}
          <p className="text-gray-200 text-lg md:text-xl lg:text-2xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Alami Kasih Karunia dan Perjumpaan Pribadi Dengan Kristus Hari Ini.
          </p>

          {/* Call to Action Buttons */}
          {/* <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-950 font-bold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl shadow-yellow-500/20 w-full sm:w-auto uppercase tracking-wider text-sm">
              Gabung Bersama Kami
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-full transition-all duration-300 w-full sm:w-auto uppercase tracking-wider text-sm">
              Lihat Jadwal
            </button>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        <span className="text-[10px] text-white tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}

export default ParallaxSection;