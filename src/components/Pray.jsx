import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, MessageCircle, ChevronRight } from 'lucide-react';

function Pray() {
  const navigate = useNavigate();

  const navigateToForm = () => {
    navigate('/formDoa');
  };

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Dekorasi Cahaya Halus (Ambient Light) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Sisi Kiri: Visual & Icon */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-yellow-200 opacity-20 blur-2xl group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-slate-900 border border-white/10 p-8 rounded-[2.5rem] shadow-2xl">
              <div className="flex gap-4 mb-6">
                <div className="p-3 bg-yellow-500/10 rounded-2xl">
                  <Heart className="text-yellow-500" size={28} />
                </div>
                <div className="p-3 bg-blue-500/10 rounded-2xl">
                  <MessageCircle className="text-blue-400" size={28} />
                </div>
              </div>
              <h2 className="text-white text-3xl font-black mb-4 tracking-tight">
                "Doa orang yang benar, bila dengan yakin didoakan, sangat besar kuasanya."
              </h2>
              <p className="text-gray-400 text-sm font-medium italic">Yakobus 5:16b</p>
            </div>
          </div>

          {/* Sisi Kanan: Konten & CTA */}
          <div className="flex flex-col items-start space-y-8">
            <div className="space-y-4">
              <h3 className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-sm">
                Prayer Request
              </h3>
              <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                Permohonan <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                  Doa Kami
                </span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-md">
                Jangan menanggung beban Anda sendirian. Tim doa kami siap mendukung dan berdiri bersama Anda dalam iman.
              </p>
            </div>

            <button
              onClick={navigateToForm}
              className="group flex items-center gap-4 px-8 py-2 bg-yellow-500 hover:bg-white text-slate-950 font-black rounded-2xl transition-all duration-500 shadow-xl shadow-yellow-500/10 active:scale-95"
            >
              AJUKAN PERMOHONAN DOA
              <div className="bg-slate-950 text-white p-1 rounded-full group-hover:bg-yellow-500 group-hover:text-slate-950 transition-colors duration-500">
                <ChevronRight size={18} />
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pray;