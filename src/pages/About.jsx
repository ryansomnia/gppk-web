import React from "react";
import VisiMisi from "../components/VisiMisi";
import StrukturOrganisasi from "../components/StrukturOrganisasi";
import { useQuery } from "@tanstack/react-query";
import { MapPin, User, History, ShieldCheck, Landmark } from "lucide-react";
import axios from "axios";

const fetchCabangData = async () => {
  const response = await axios.get("https://api.gppkcbn.org/cbn/v1/cabang/getAllData");
  return response.data.data;
};

function About() {
  const { data: cabangData = [], isLoading } = useQuery({
    queryKey: ["cabangData"],
    queryFn: fetchCabangData,
  });

  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-yellow-200">
      
      {/* 1. HERO SECTION - Clean & Cinematic */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover scale-105"
          style={{ backgroundImage: `url('/images/pw.JPG')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white"></div>
        
        <div className="relative z-10 text-center px-6">
          <span className="inline-block text-yellow-500 font-bold tracking-[0.3em] uppercase text-xs mb-4">
            Established Since 1999
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6">
            Christ Bless <span className="text-yellow-400">Nation</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-lg md:text-xl font-light leading-relaxed">
            Membawa jiwa kepada pengenalan akan Kristus melalui gaya hidup yang transformatif dan pimpinan Roh Kudus.
          </p>
        </div>
      </section>

      {/* 2. HISTORY SECTION - Elegant Storytelling */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center gap-2 text-yellow-600 font-bold text-sm tracking-widest uppercase">
                <History size={18} /> Our Legacy
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
                Perjalanan Iman Yang <span className="text-slate-400">Mengubahkan.</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Dimulai dari sebuah persekutuan kecil berjumlah 12 orang pada tahun 1999, 
                  Ps. Hendrawan melangkah dalam ketaatan atas tuntunan Tuhan untuk melayani di Cibinong.
                </p>
                <p className="border-l-4 border-yellow-500 pl-6 italic font-medium text-slate-800">
                  "Malam itu juga, nubuatan tentang berdirinya gereja baru dilepaskan di tengah lawatan Roh Kudus."
                </p>
                <p>
                  Kini, visi 5.000 jiwa bukan sekadar angka, melainkan komitmen kami untuk terus memperluas 
                  kerajaan Allah hingga ke pelosok nusantara.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-7 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl" />
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/gereja mula.jpg" alt="History" className="rounded-2xl shadow-2xl mt-12 object-cover h-full" />
                <img src="/images/jemaat.JPG" alt="Current" className="rounded-2xl shadow-2xl object-cover h-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION - Integrated Component */}
      <div className="bg-slate-50 py-10  ">
        <VisiMisi />
      </div>

      {/* 4. THE 7 PILLARS - Luxury Cards */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-slate-900">7 Pilar Gereja</h2>
            <p className="text-slate-500 tracking-widest uppercase text-xs font-bold">The Core Values of CBN Church</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Pastoral Leadership", desc: "Kepemimpinan pastoral yang handal & profesional." },
              { title: "Inspiring Worship", desc: "Ibadah yang membawa pewahyuan ilahi." },
              { title: "Prayer Network", desc: "Jaringan doa yang menyebar luas & konsisten." },
              { title: "Humble Members", desc: "Jemaat yang rendah hati & siap diperlengkapi." },
              { title: "Small Group (KKA)", desc: "Kelompok kecil yang mengubah gaya hidup." },
              { title: "Congregational Care", desc: "Kepedulian antar jemaat yang efisien." },
              { title: "Honest Admin", desc: "Administrasi yang bersih, jujur & akuntabel." }
            ].map((pilar, i) => (
              <div key={i} className={`group p-10 rounded-[2.5rem] transition-all duration-500 border border-slate-100 hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/10 ${i === 6 ? 'lg:col-span-3 lg:max-w-md lg:mx-auto' : ''}`}>
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-4xl font-black text-slate-100 group-hover:text-yellow-500/20 transition-colors">0{i+1}</span>
                  <ShieldCheck className="text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight text-slate-800">{pilar.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{pilar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRANCHES - Professional Catalog */}
      <section className="py-24 bg-slate-950 text-white rounded-[3rem] mx-4 md:mx-10 mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-yellow-600 text-4xl md:text-6xl font-black tracking-tighter">Cabang Kami</h2>
              <p className="text-gray-400 mt-4">Tersebar untuk menjadi berkat bagi bangsa-bangsa.</p>
            </div>
            <Landmark size={80} className="text-white/5 absolute right-0 top-0 md:relative md:opacity-100" />
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-pulse">
              {[1,2,3,4].map(n => <div key={n} className="h-64 bg-white/5 rounded-3xl" />)}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cabangData.map((item) => (
                <div key={item.id} className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all">
                  <div className="h-48 overflow-hidden">
                    <img src={item.img} alt={item.namaCabang} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-yellow-400">{item.namaCabang}</h3>
                    <div className="space-y-2 text-xs text-gray-400">
                      <p className="flex items-center gap-2"><User size={14} className="text-yellow-500"/> {item.pastor}</p>
                      <p className="flex items-start gap-2"><MapPin size={14} className="text-yellow-500 shrink-0"/> {item.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 6. LEADERSHIP & LOCATION */}
      <StrukturOrganisasi />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
            <div className="p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 text-slate-900">Temukan Kami</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d5956.655602009466!2d106.82825609474942!3d-6.526747577776205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e2!4m0!4m5!1s0x2e69c142e89de6bb%3A0xe730a05cd678e01b!2sGPPK%20Christ%20Blessed%20Nation%2C%20Cimandala%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!3m2!1d-6.5261588999999995!2d106.83132169999999!5e0!3m2!1sid!2sid!4v1736020477965!5m2!1sid!2sid"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
                className="grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;