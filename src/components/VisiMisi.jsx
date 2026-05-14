import React, { useState, useEffect } from 'react';
import { Target, Rocket } from 'lucide-react';

function VisiMisi() {
  const [showVisi, setShowVisi] = useState(true);
  const [fadeState, setFadeState] = useState('opacity-100 translate-y-0');

  useEffect(() => {
    const cycleContent = () => {
      // Mulai Fade Out
      setTimeout(() => {
        setFadeState('opacity-0 translate-y-4');
      }, 5000); // Tampil selama 5 detik

      // Ganti Konten dan Fade In
      setTimeout(() => {
        setShowVisi((prev) => !prev);
        setFadeState('opacity-100 translate-y-0');
      }, 5600); // Jeda sedikit untuk transisi halus
    };

    const interval = setInterval(cycleContent, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-slate-900 rounded-[3rem] mx-4 md:mx-10 my-10">
      {/* Background dengan Overlay Gelap */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-[10s] scale-110 hover:scale-100"
        style={{ backgroundImage: `url('/images/jemaat.JPG')` }} 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-950" />

      {/* Konten Utama */}
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <div className={`transition-all duration-700 ease-out ${fadeState}`}>
          
          {/* Icon Indikator */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-yellow-500 rounded-2xl shadow-xl shadow-yellow-500/20 text-slate-950">
              {showVisi ? <Target size={32} /> : <Rocket size={32} />}
            </div>
          </div>

          {/* Label Kecil */}
          <span className="text-yellow-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
            Our {showVisi ? 'Vision' : 'Mission'}
          </span>

          {/* Judul Besar */}
          <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter mb-8 italic uppercase">
            {showVisi ? 'Visi Kami' : 'Misi Kami'}
          </h2>

          {/* Deskripsi */}
          <p className="text-gray-200 text-lg md:text-2xl font-light leading-relaxed tracking-wide">
            {showVisi
              ? '“MEMBAWA 5.000 JIWA KEPADA PENGENALAN AKAN KRISTUS, SEHINGGA MEREKA MENERAPKAN GAYA HIDUP YANG SEMAKIN SAMA SEPERTI KRISTUS DAN MASUK DALAM KELUARGA KERAJAAN ALLAH.”'
              : '“GEREJA BARU RASULI MELALUI KELUARGA KERAJAAN ALLAH.”'}
          </p>
        </div>

        {/* Progress Bar Indikator (Opsional) */}
        <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex gap-3">
          <div className={`h-1.5 transition-all duration-500 rounded-full ${showVisi ? 'w-8 bg-yellow-500' : 'w-4 bg-white/20'}`} />
          <div className={`h-1.5 transition-all duration-500 rounded-full ${!showVisi ? 'w-8 bg-yellow-500' : 'w-4 bg-white/20'}`} />
        </div>
      </div>
    </section>
  );
}

export default VisiMisi;