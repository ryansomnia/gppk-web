import React from "react";
import { Youtube, Instagram, Calendar, HeartHandshake, ArrowUpRight } from "lucide-react";

function Feature() {
  const socialLinks = [
    {
      label: "YouTube",
      icon: <Youtube size={32} />,
      href: "https://www.youtube.com/@gppkcbn5941",
      color: "bg-[#FF0000]",
      hover: "hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]",
    },
    {
      label: "Instagram",
      icon: <Instagram size={32} />,
      href: "https://www.instagram.com/gppkcbn",
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      hover: "hover:shadow-[0_0_20px_rgba(238,42,123,0.4)]",
    },
    {
      label: "Jadwal KKA",
      icon: <Calendar size={32} />,
      href: "https://gppkcbn.org/kka",
      color: "bg-blue-600",
      hover: "hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]",
    },
    {
      label: "Pastoral Care",
      icon: <HeartHandshake size={32} />,
      href: "https://gppkcbn.org/service",
      color: "bg-emerald-600",
      hover: "hover:shadow-[0_0_20px_rgba(5,150,105,0.4)]",
    },
  ];

  return (
    <section className="bg-slate-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <h3 className="text-yellow-500 font-bold tracking-[0.3em] uppercase text-xs">
              Stay Connected
            </h3>
            <h1 className="text-white text-4xl md:text-6xl font-black tracking-tighter">
              Segera <span className="text-gray-500">Terkoneksi</span>
            </h1>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Temukan informasi terbaru, jadwal ibadah, dan layanan pastoral kami 
            melalui platform digital CBN Church.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-slate-900 border border-white/5 transition-all duration-500 overflow-hidden hover:-translate-y-2 ${item.hover}`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${item.color}`} />
              
              <div className={`relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl ${item.color} flex items-center justify-center text-white mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                {item.icon}
              </div>

              <div className="relative z-10 flex items-center gap-2">
                <span className="text-white font-bold text-sm md:text-base tracking-wide uppercase">
                  {item.label}
                </span>
                <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/10 group-hover:bg-white/40 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;