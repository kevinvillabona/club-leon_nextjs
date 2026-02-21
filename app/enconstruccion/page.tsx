import Link from "next/link";

export default function EnConstruccion() {
  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center relative overflow-hidden -mt-20 pt-20">
      
      {/* Fondo inmersivo */}
      <div className="absolute inset-0 z-0">
        <img src="/assets/v47wpxufhaxqijgoxbli.jpg" alt="Fondo Estadio" className="w-full h-full object-cover opacity-10 mix-blend-luminosity grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-club-dark via-club-dark/90 to-club-dark/80"></div>
      </div>

      {/* Contenido principal (Glass Card) */}
      <div className="relative z-10 w-full max-w-2xl px-4 flex flex-col items-center text-center">
        
        {/* Ícono animado */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-club-gold/30 blur-2xl rounded-full animate-pulse"></div>
          <div className="w-24 h-24 rounded-full bg-club-gray/50 border border-white/10 backdrop-blur-md flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(175,154,109,0.2)]">
            <i className="bi bi-cone-striped text-4xl text-club-gold"></i>
          </div>
        </div>

        <span className="text-club-gold text-xs font-bold tracking-widest uppercase mb-4 block">Actualización de Infraestructura</span>
        <h1 className="font-title text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter mb-6">
          Sección en <span className="text-club-red">Obras</span>
        </h1>
        
        <p className="text-gray-400 font-light text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Nuestros ingenieros digitales están trabajando para traerte una experiencia superadora. Esta sección estará disponible muy pronto para todos los socios.
        </p>

        {/* Botones de redirección rápida */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <Link href="/" className="w-full sm:w-auto px-8 py-3 bg-white text-club-dark hover:bg-gray-200 rounded-sm font-title uppercase tracking-widest text-sm font-bold transition-colors">
            Volver al Inicio
          </Link>
          <Link href="/portalsocios" className="w-full sm:w-auto px-8 py-3 border border-white/20 text-white hover:bg-white/10 rounded-sm font-title uppercase tracking-widest text-sm font-bold transition-colors backdrop-blur-sm">
            Ir al Portal
          </Link>
        </div>
      </div>
    </div>
  );
}