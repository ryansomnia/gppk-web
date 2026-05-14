import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Navbar berubah warna saat scroll lebih dari 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/about', label: 'Tentang Kami' },
    { path: '/kka', label: 'KKA' },
    { path: '/service', label: 'Layanan Pastoral' },
    { path: '/giving', label: 'Persembahan' },
    { path: '/cerdasbangsa', label: 'Sekolah Cerdas Bangsa' },
  ];


  return (
    // Gunakan fixed agar melayang di atas gambar hero
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-black py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <Link to="/" className=" no-underline flex items-center gap-3 shrink-0">
          {/* <img src="/logogppk.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain" /> */}
          <div className="flex flex-col">
            <span className={`font-black text-lg leading-none tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white shadow-sm'}`}>
              CBN <span className={isScrolled ? 'text-yellow-600' : 'text-yellow-400'}>CHURCH</span>
            </span>
            <span className={`text-[9px] tracking-[0.2em] uppercase font-bold ${isScrolled ? 'text-slate-500' : 'text-white/80'}`}>
              Christ Bless Nation
            </span>
          </div>
        </Link>

        {/* NAV MENU - Desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`  no-underline text-[12px] font-bold tracking-widest transition-all duration-300 hover:text-yellow-500 ${
                  isScrolled 
                    ? (isActive ? 'text-yellow-600' : 'text-slate-700') 
                    : (isActive ? 'text-yellow-400' : 'text-white drop-shadow-md')
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* BUTTONS */}
        <div className="hidden lg:flex items-center gap-5">
          {/* <button className={`text-sm font-bold transition-colors ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white hover:text-yellow-400'}`}>
            Login
          </button> */}
          <a
            href="https://wa.me/6281384757288"
            className={`  no-underline  px-6 py-2.5 rounded-full text-sm font-black transition-all duration-300 transform hover:scale-105 active:scale-95 ${
              isScrolled 
                ? 'bg-slate-900 text-white shadow-lg' 
                : 'bg-white text-slate-900 shadow-xl'
            }`}
          >
            HUBUNGI KAMI
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? (
            <X size={28} className={isScrolled ? 'text-slate-900' : 'text-white'} />
          ) : (
            <Menu size={28} className={isScrolled ? 'text-slate-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[500px] border-t' : 'max-h-0'}`}>
        <div className="p-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className="text-sm font-bold text-slate-800 hover:text-yellow-600 transition-colors">
              {item.label}
            </Link>
          ))}
          <div className="h-[1px] bg-slate-100 my-2" />
          <a href="#" className="w-full py-4 bg-yellow-500 text-black text-center rounded-xl font-bold">HUBUNGI KAMI</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;