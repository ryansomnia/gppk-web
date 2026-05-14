import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Quote, ChevronRight, MessageSquareQuote } from 'lucide-react';

const fetchKesaksianData = async () => {
  const response = await axios.get("https://api.gppkcbn.org/cbn/v1/artikel/kesaksian/getAllData");
  return response.data.data;
};

const Kesaksian = () => {
  const { data: kesaksianData = [], isLoading, error } = useQuery({
    queryKey: ["kesaksianData"],
    queryFn: fetchKesaksianData,
  });

  if (error || kesaksianData.length === 0) return null;

  const settings = {
    dots: true,
    infinite: kesaksianData.length > 1,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true, // Efek transisi halus
    arrows: false,
    customPaging: (i) => (
      <div className="w-3 h-3 mx-1 bg-slate-300 rounded-full hover:bg-blue-500 transition-colors mt-8" />
    ),
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Dekorasi Latar Belakang */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center">
        <MessageSquareQuote size={600} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Quote size={14} /> Living Testimonies
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Kesaksian <span className="text-blue-600">Jemaat</span>
          </h2>
        </div>

        <div className="relative">
          <Slider {...settings} className="kesaksian-slider">
            {kesaksianData.map((testimony) => (
              <div key={testimony.id} className="outline-none">
                <div className="grid md:grid-cols-12 gap-0 md:gap-12 items-center bg-slate-50 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100">
                  
                  {/* Bagian Visual */}
                  <div className="md:col-span-5 h-[350px] md:h-[550px] relative">
                    <img
                      src={testimony.url}
                      alt={testimony.nama}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent md:hidden" />
                    <div className="absolute bottom-6 left-6 text-white md:hidden">
                      <h3 className="text-2xl font-bold">{testimony.nama}</h3>
                    </div>
                  </div>

                  {/* Bagian Konten */}
                  <div className="md:col-span-7 p-10 md:p-16 relative">
                    <Quote size={80} className="absolute top-10 right-10 text-slate-200/50 -z-10" />
                    
                    <div className="hidden md:block mb-6">
                      <h3 className="text-3xl font-black text-slate-800">{testimony.nama}</h3>
                      <div className="w-12 h-1.5 bg-blue-500 mt-2 rounded-full" />
                    </div>

                    <p className="text-xl md:text-2xl text-slate-600 font-light italic leading-relaxed mb-10">
                      "{testimony.highlight}"
                    </p>

                    <Link
                      to={`/kesaksian/${testimony.id}`}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all group shadow-xl shadow-slate-900/20"
                    >
                      Baca Kisah Lengkap
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Style Tambahan untuk Dot Pagination Slick */}
      <style jsx>{`
        .kesaksian-slider .slick-dots {
          bottom: -50px;
        }
        .kesaksian-slider .slick-dots li.slick-active div {
          background-color: #3b82f6;
          width: 2rem;
        }
      `}</style>
    </section>
  );
};

export default Kesaksian;