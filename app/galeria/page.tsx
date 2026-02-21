"use client"; // Necesario para manejar eventos onClick y el estado del modal

import { useState } from "react";

export default function Galeria() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/assets/27352200.jpeg", span: "md:col-span-2 md:row-span-2", title: "Noche de Copa", tag: "Primer Equipo" },
    { src: "/assets/18885908.jpg", span: "md:col-span-1 md:row-span-1", title: "Entrenamiento", tag: "Predio" },
    { src: "/assets/27352199.jpeg", span: "md:col-span-1 md:row-span-2", title: "Festejo", tag: "Fútbol" },
    { src: "/assets/27352205.jpeg", span: "md:col-span-1 md:row-span-1", title: "La Hinchada", tag: "Tribuna" },
    { src: "/assets/27352206.jpeg", span: "md:col-span-2 md:row-span-1", title: "Pretemporada", tag: "Institucional" },
    { src: "/assets/27352207.jpeg", span: "md:col-span-1 md:row-span-1", title: "Vestuario", tag: "Íntimo" },
    { src: "/assets/27352209.jpeg", span: "md:col-span-1 md:row-span-1", title: "Inferiores", tag: "Cantera" },
    { src: "/assets/27352210.jpeg", span: "md:col-span-2 md:row-span-2", title: "Gol Agónico", tag: "Primer Equipo" },
    { src: "/assets/27352212.jpeg", span: "md:col-span-2 md:row-span-1", title: "Concentración", tag: "Predio" },
  ];

  return (
    <>
      {/* Mini Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex flex-col justify-center overflow-hidden -mt-24 pt-32">
        <div className="absolute inset-0 z-0">
          <img src="/assets/v47wpxufhaxqijgoxbli.jpg" alt="Fondo Galería" className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-club-dark via-club-dark/80 to-club-dark/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <span className="text-club-gold text-xs font-bold tracking-widest uppercase mb-4 block">Contenido Audiovisual</span>
          <h1 className="font-title text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter mb-4">
            Galería <span className="text-club-red">Oficial</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-club-red to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Grid Asimétrico */}
      <section className="container mx-auto px-4 lg:px-8 pb-24 -mt-10 relative z-20">
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-lg font-light leading-relaxed">
          Viví los momentos más intensos del club. Desde la preparación en el predio hasta la euforia en las tribunas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative group overflow-hidden rounded-xl border border-white/5 bg-club-gray cursor-pointer ${img.span}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Overlay inferior para los textos */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Textos inferiores */}
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 mb-2 text-[9px] font-bold tracking-widest uppercase rounded-sm border border-club-gold/50 text-club-gold backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {img.tag}
                </span>
                <h3 className="font-title text-2xl text-white uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                  {img.title}
                </h3>
              </div>

              {/* Ícono Sutil de Ampliar en la esquina superior derecha */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <i className="bi bi-arrows-angle-expand text-white text-sm"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox / Modal de Imagen a Pantalla Completa */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          {/* Botón de cerrar */}
          <button 
            className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation(); // Evita que el click cierre por el contenedor padre, aunque hagan lo mismo
              setSelectedImage(null);
            }}
          >
            <i className="bi bi-x-lg text-xl"></i>
          </button>

          {/* Imagen ampliada */}
          <img 
            src={selectedImage} 
            alt="Ampliación" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-default select-none"
            onClick={(e) => e.stopPropagation()} // Permite hacer click en la foto sin que se cierre
          />
        </div>
      )}
    </>
  );
}