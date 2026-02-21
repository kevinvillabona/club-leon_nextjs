import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 bg-club-dark/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8 h-24 flex items-center justify-between">
        
        {/* Logo con efecto de brillo al hacer hover */}
        <Link href="/" className="flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 bg-club-red/50 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img src="/assets/logo01.png" alt="Logo León" className="h-14 w-14 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500" />
          </div>
          <div className="hidden sm:flex flex-col justify-center">
            <h1 className="font-title text-3xl font-bold text-white leading-none tracking-widest uppercase group-hover:text-club-gold transition-colors duration-300">C.D. León</h1>
            <span className="text-club-red text-[10px] font-bold tracking-[0.3em] uppercase mt-1">Sede Oficial</span>
          </div>
        </Link>

        {/* Navegación - Enlaces con subrayado animado */}
        <nav className="hidden lg:flex items-center gap-10 font-medium text-sm">
          {['Noticias', 'El Club', 'Galeria', 'Contacto'].map((item, index) => (
            <Link key={index} href={item === 'Noticias' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} className="relative group text-gray-300 hover:text-white transition-colors duration-300 uppercase tracking-wider text-xs font-bold">
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-club-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* CTA con Glow Effect */}
        <div className="flex items-center gap-6">
          <Link href="/portalsocios" className="relative group overflow-hidden bg-club-red text-white px-8 py-3 rounded-sm font-title uppercase tracking-widest text-sm font-bold shadow-[0_0_20px_rgba(178,16,33,0.3)] hover:shadow-[0_0_30px_rgba(178,16,33,0.6)] transition-all duration-300">
            <span className="relative z-10">Portal Socios</span>
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12"></div>
          </Link>
        </div>
      </div>
    </header>
  );
}