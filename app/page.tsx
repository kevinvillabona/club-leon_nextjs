import Link from "next/link";

export default function Home() {
  return (
    <>
     {/* Hero Section Cinematográfico */}
      <section className="relative h-screen min-h-[800px] flex flex-col justify-center overflow-hidden -mt-24 pt-32 pb-40 lg:pb-48">
        
        {/* Marca de agua gigante de fondo */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden">
            <h1 className="font-title text-[15vw] font-bold text-white/5 leading-none whitespace-nowrap select-none">LEÓN</h1>
        </div>

        {/* Fondo con viñeta profunda */}
        <div className="absolute inset-0 z-0">
          <img src="/assets/v47wpxufhaxqijgoxbli.jpg" alt="Estadio" className="w-full h-full object-cover opacity-50 mix-blend-luminosity scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-club-dark via-club-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-club-dark via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 mt-12 flex flex-col items-start">
          <div className="inline-block border border-club-gold/50 bg-club-gold/10 backdrop-blur-sm px-4 py-1.5 rounded-sm mb-6">
            <span className="text-club-gold text-xs font-bold tracking-widest uppercase">Temporada 2026</span>
          </div>
          <h2 className="font-title text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 uppercase tracking-tighter leading-[0.9]">
            Sangre <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-club-red to-red-500 drop-shadow-[0_0_15px_rgba(178,16,33,0.5)]">y Gloria</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl font-light leading-relaxed">
            La nueva era del Club Deportivo León ha comenzado. Sé parte de la élite, asegurá tu lugar en la historia y sentí el rugido desde adentro.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/registro" className="bg-white text-club-dark hover:bg-gray-200 px-8 py-4 rounded-sm font-title uppercase tracking-widest text-sm font-bold transition-colors">
              Asociate Ahora
            </Link>
            <Link href="/portalsocios" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-sm font-title uppercase tracking-widest text-sm font-bold transition-all backdrop-blur-sm">
              Comprar Entradas
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Match Widget (Overlap Floating) */}
      <section className="container mx-auto px-4 lg:px-8 relative z-30 -mt-20 mb-24">
        <div className="bg-club-gray/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-1 overflow-hidden">
            <div className="bg-gradient-to-b from-white/5 to-transparent rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                
                <div className="text-center md:text-left flex-1">
                    <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                        <span className="w-2 h-2 rounded-full bg-club-red animate-pulse"></span>
                        <span className="text-club-red font-bold text-xs tracking-widest uppercase">Próximo Partido • Fecha 7</span>
                    </div>
                    <h3 className="font-title text-3xl md:text-4xl text-white">Torneo Primera División</h3>
                    <p className="text-gray-400 text-sm mt-2 flex items-center justify-center md:justify-start gap-2">
                        <i className="bi bi-geo-alt text-club-gold"></i> Estadio L. Messi • Dom 25/09 - 21:00hs
                    </p>
                </div>

                <div className="flex items-center justify-center gap-6 md:gap-12 flex-1">
                    <div className="flex flex-col items-center group">
                        <img src="/assets/logo01.png" className="w-20 h-20 md:w-24 md:h-24 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" alt="León" />
                        <span className="font-title text-xl text-white mt-4 tracking-wider">LEO</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-club-gold font-title text-2xl md:text-4xl">VS</span>
                    </div>
                    <div className="flex flex-col items-center group">
                        {/* Reemplazá este src con el logo real del rival si lo tenés */}
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700 group-hover:border-gray-500 transition-colors">
                            <i className="bi bi-shield-fill text-4xl text-gray-600"></i>
                        </div>
                        <span className="font-title text-xl text-gray-400 mt-4 tracking-wider">LOB</span>
                    </div>
                </div>

                <div className="flex-1 flex justify-end w-full md:w-auto mt-6 md:mt-0">
                    <Link href="/portalsocios" className="w-full md:w-auto text-center bg-transparent border border-club-gold text-club-gold hover:bg-club-gold hover:text-club-dark px-8 py-3 rounded-sm transition-all text-sm uppercase font-bold tracking-widest">
                        Match Center <i className="bi bi-arrow-right ml-2"></i>
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* Editorial Bento Grid (Noticias) */}
      <section className="container mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-white/10 pb-6">
            <div>
                <span className="text-club-gold text-xs font-bold tracking-widest uppercase block mb-2">Actualidad</span>
                <h2 className="font-title text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">Últimas Noticias</h2>
            </div>
            <Link href="#" className="text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors mt-4 md:mt-0 flex items-center gap-2 group">
                Ver todas <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </Link>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
            
            {/* Noticia Principal (Ocupa 8 columnas en Desktop, altura completa) */}
            <article className="lg:col-span-8 relative group rounded-2xl overflow-hidden cursor-pointer h-[400px] lg:h-full border border-white/5 hover:border-club-gold/50 transition-colors duration-500">
                <img src="/assets/27352200.jpeg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Noticia Principal" />
                <div className="absolute inset-0 bg-gradient-to-t from-club-dark via-club-dark/50 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                    <span className="bg-club-red text-white text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-widest mb-4 inline-block shadow-lg">Primer Equipo</span>
                    <h3 className="font-title text-3xl md:text-5xl text-white leading-tight mb-3 group-hover:text-club-gold transition-colors duration-300">
                        ¡Victoria de local ante nuestra gente que hace vibrar el estadio!
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base max-w-2xl line-clamp-2 md:line-clamp-none">
                        El equipo mostró un excelente rendimiento táctico y físico, quedándose con los tres puntos en casa y consolidándose en lo más alto de la tabla de posiciones.
                    </p>
                </div>
            </article>

            {/* Columna Derecha de Noticias Secundarias (Ocupa 4 columnas) */}
            <div className="lg:col-span-4 flex flex-col gap-6 h-[600px] lg:h-full">
                
                {/* Noticia Secundaria 1 */}
                <article className="flex-1 relative group rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-colors duration-500">
                    <img src="/assets/file71.jpg" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Noticia Institucional" />
                    <div className="absolute inset-0 bg-gradient-to-t from-club-dark via-club-dark/80 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-6">
                        <span className="text-club-gold text-[10px] font-bold uppercase tracking-widest mb-2 block">Institucional • 22 Sept</span>
                        <h3 className="font-title text-2xl text-white leading-tight group-hover:text-club-gold transition-colors duration-300">
                            Nuevas obras en el predio juvenil
                        </h3>
                    </div>
                </article>

                {/* Noticia Secundaria 2 (Pura Tipografía / Dark Card) */}
                <article className="flex-1 bg-gradient-to-br from-[#1a1a1c] to-[#0f0f11] relative group rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-club-red/50 transition-colors duration-500 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <span className="text-club-red text-[10px] font-bold uppercase tracking-widest">Tienda Oficial</span>
                        <i className="bi bi-bag text-xl text-gray-500 group-hover:text-white transition-colors"></i>
                    </div>
                    <div>
                        <h3 className="font-title text-2xl text-white leading-tight mb-2 group-hover:text-club-red transition-colors duration-300">
                            Ya disponible la nueva indumentaria visitante
                        </h3>
                        <p className="text-gray-400 text-sm">Conseguí la camiseta edición limitada en la plataforma virtual.</p>
                    </div>
                </article>

            </div>
        </div>
      </section>
    </>
  );
}