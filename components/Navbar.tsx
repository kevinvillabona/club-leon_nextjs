"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  // Agregamos "Tienda" al array de enlaces
  const navLinks = [
    { name: 'Noticias', path: '/' },
    { name: 'El Club', path: '/elclub' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Tienda', path: '/tienda' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isOpen ? 'bg-club-dark/95' : 'bg-club-dark/60 backdrop-blur-xl border-b border-white/5'}`}>
        <div className="container mx-auto px-4 lg:px-8 h-20 md:h-24 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group" onClick={() => setIsOpen(false)}>
            <div className="relative">
              <div className="absolute inset-0 bg-club-red/50 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src="/assets/logo01.png" alt="Logo León" className="h-12 w-12 md:h-14 md:w-14 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="hidden sm:flex flex-col justify-center">
              <h1 className="font-title text-2xl md:text-3xl font-bold text-white leading-none tracking-widest uppercase group-hover:text-club-gold transition-colors duration-300">C.D. León</h1>
              <span className="text-club-red text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase mt-1">Sede Oficial</span>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 font-medium text-sm">
            {navLinks.map((item, index) => (
              <Link key={index} href={item.path} className="relative group text-gray-300 hover:text-white transition-colors duration-300 uppercase tracking-wider text-xs font-bold">
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-club-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Acciones, Redes y Menú Hamburguesa */}
          <div className="flex items-center gap-5 md:gap-8">
            
            {/* Redes Desktop */}
            <div className="hidden lg:flex items-center gap-4 text-lg text-gray-400">
              <a href="#" className="hover:text-club-gold hover:-translate-y-1 transition-all"><i className="bi bi-instagram"></i></a>
              <a href="#" className="hover:text-club-gold hover:-translate-y-1 transition-all"><i className="bi bi-twitter"></i></a>
              <a href="#" className="hover:text-club-gold hover:-translate-y-1 transition-all"><i className="bi bi-youtube"></i></a>
            </div>

            <Link href="/portalsocios" className="hidden sm:block relative group overflow-hidden bg-club-red text-white px-6 md:px-8 py-2.5 md:py-3 rounded-sm font-title uppercase tracking-widest text-xs md:text-sm font-bold shadow-[0_0_20px_rgba(178,16,33,0.3)] hover:shadow-[0_0_30px_rgba(178,16,33,0.6)] transition-all duration-300" onClick={() => setIsOpen(false)}>
              <span className="relative z-10">Portal Socios</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12"></div>
            </Link>

            {/* Botón Hamburguesa Animado (Solo Mobile) */}
            <button 
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white focus:outline-none z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col justify-between w-[22px] h-[16px] transform transition-all duration-300 origin-center overflow-hidden">
                <span className={`bg-white h-[2px] w-full transform transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                <span className={`bg-club-gold h-[2px] w-full transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 translate-x-3' : 'opacity-100'}`}></span>
                <span className={`bg-white h-[2px] w-full transform transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Overlay del Menú Mobile */}
      <div className={`fixed inset-0 z-40 bg-club-dark/95 backdrop-blur-2xl transition-all duration-500 ease-in-out lg:hidden flex flex-col pt-24 pb-12 overflow-y-auto ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        
        {/* Marca de agua de fondo */}
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
          <i className="bi bi-shield-fill text-[20rem] text-club-red/5"></i>
        </div>

        {/* Contenedor Flex para separar enlaces arriba y redes abajo */}
        <div className="flex flex-col justify-between min-h-full relative z-10 w-full px-8">
            
            {/* Enlaces y Botones */}
            <nav className="flex flex-col items-center gap-6 w-full mt-4">
            {navLinks.map((item, index) => (
                <Link 
                key={index} 
                href={item.path} 
                className="font-title text-3xl text-gray-300 hover:text-club-gold hover:scale-110 transition-all duration-300 uppercase tracking-widest"
                onClick={() => setIsOpen(false)}
                >
                {item.name}
                </Link>
            ))}
            
            <div className="w-full max-w-xs h-px bg-white/10 my-4"></div>

            <Link 
                href="/portalsocios" 
                className="w-full max-w-xs text-center bg-club-red text-white py-4 rounded-sm font-title uppercase tracking-widest text-lg font-bold shadow-[0_0_20px_rgba(178,16,33,0.3)]"
                onClick={() => setIsOpen(false)}
            >
                Portal Socios
            </Link>
            <Link 
                href="/registro" 
                className="w-full max-w-xs text-center border border-club-gold text-club-gold py-4 rounded-sm font-title uppercase tracking-widest text-lg font-bold"
                onClick={() => setIsOpen(false)}
            >
                Asociarse
            </Link>
            </nav>

            {/* Redes en el pie del menú */}
            <div className="flex justify-center gap-10 text-3xl text-gray-500 mt-12 pt-8 border-t border-white/5 w-full max-w-xs mx-auto">
            <a href="#" className="hover:text-club-gold transition-colors"><i className="bi bi-instagram"></i></a>
            <a href="#" className="hover:text-club-gold transition-colors"><i className="bi bi-twitter"></i></a>
            <a href="#" className="hover:text-club-gold transition-colors"><i className="bi bi-youtube"></i></a>
            </div>
        </div>
      </div>
    </>
  );
}