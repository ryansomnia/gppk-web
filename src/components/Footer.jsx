import React from 'react';
import {
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#020617] text-white">
      
      {/* TOP GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* CTA */}
        <div className="relative -top-14">
          <div
            className="
              bg-gradient-to-r from-yellow-500 to-amber-400
              rounded-3xl
              px-8 py-10
              lg:px-14
              flex flex-col lg:flex-row
              items-center justify-between
              gap-8
              shadow-2xl
            "
          >
            <div className="max-w-2xl text-center lg:text-left">
              <p className="uppercase tracking-[4px] text-black/70 text-xs font-bold mb-3">
                Welcome Home
              </p>

              <h2 className="text-3xl lg:text-5xl font-black text-slate-950 leading-tight">
                Bertumbuh Bersama
                <br />
                Dalam Kasih Kristus
              </h2>
            </div>

            <a
              href="https://wa.me/6281384757288"
              target="_blank"
              rel="noopener noreferrer"
              className="
                shrink-0
                bg-slate-950 hover:bg-black
                transition-all duration-300
                text-white
                px-7 py-4
                rounded-2xl
                font-semibold
                flex items-center gap-2
                hover:scale-105
              "
            >
              Hubungi Kami
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 pb-16">
          
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div
                className="
                  w-16 h-16
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  backdrop-blur-md
                "
              >
                <img
                  src="/logogppk.png"
                  alt="CBN Church"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div>
                <h3 className="text-2xl font-black">
                  CBN Church
                </h3>

                <p className="text-yellow-400 text-xs tracking-[4px] uppercase mt-1">
                  Christ Bless Nation
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm">
              Menjadi gereja yang membawa kasih Kristus,
              membangun keluarga, dan memberkati bangsa-bangsa
              melalui pelayanan yang berdampak.
            </p>
          </div>

       

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-bold mb-6">
              Kontak
            </h4>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div
                  className="
                    w-10 h-10 rounded-xl
                    bg-white/5
                    flex items-center justify-center
                    border border-white/10
                  "
                >
                  <MapPin size={18} className="text-yellow-400" />
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  Jl. Raya Jakarta Bogor KM.50
                  <br />
                  Cimandala, Sukaraja,
                  <br />
                  Kabupaten Bogor
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="
                    w-10 h-10 rounded-xl
                    bg-white/5
                    flex items-center justify-center
                    border border-white/10
                  "
                >
                  <Phone size={18} className="text-yellow-400" />
                </div>

                <p className="text-sm text-slate-400">
                  +62 813-8475-7288
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="
                    w-10 h-10 rounded-xl
                    bg-white/5
                    flex items-center justify-center
                    border border-white/10
                  "
                >
                  <Mail size={18} className="text-yellow-400" />
                </div>

                <p className="text-sm text-slate-400">
                  admin@gppkcbn.org
                </p>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-lg font-bold mb-6">
              Ikuti Kami
            </h4>

            <div className="flex gap-4 mb-8">
              <a
                href="https://www.instagram.com/gppkcbn/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-14 h-14 rounded-2xl
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  hover:bg-pink-500
                  transition-all duration-300
                  hover:scale-110
                "
              >
                <Instagram size={22} />
              </a>

              <a
                href="https://www.youtube.com/@gppkcbn5941"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-14 h-14 rounded-2xl
                  bg-white/5
                  border border-white/10
                  flex items-center justify-center
                  hover:bg-red-600
                  transition-all duration-300
                  hover:scale-110
                "
              >
                <Youtube size={22} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="
                bg-white/5
                hover:bg-white/10
                border border-white/10
                transition-all duration-300
                px-5 py-3 rounded-2xl
                text-sm font-semibold
                flex items-center gap-2
              "
            >
              Kembali Ke Atas
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            border-t border-white/10
            py-7
            flex flex-col lg:flex-row
            items-center justify-between
            gap-5
          "
        >
          <p className="text-sm text-slate-500 text-center lg:text-left">
            © {currentYear} GPPK Christ Bless Nation.
            All rights reserved.
          </p>

          <a
            href="https://heriyantositorus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
            no-underline
              text-sm text-slate-500
              hover:text-yellow-400
              transition-all duration-300
            "
          >
            Crafted by ryansomnia DEV
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;