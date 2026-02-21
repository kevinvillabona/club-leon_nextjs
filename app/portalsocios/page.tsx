import Link from "next/link";

export default function PortalSocios() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-20 max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="font-title text-4xl font-bold text-white uppercase tracking-wide">Portal Socios</h2>
        <p className="text-gray-400 mt-2">Sede Virtual: Gestiones, pagos y canje de entradas.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-stretch">
        {/* Login Card */}
        <div className="w-full md:w-3/5 bg-club-gray border border-gray-800 rounded-xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-club-red"></div>
          <h3 className="font-title text-2xl text-white mb-6">Ingresar a mi cuenta</h3>
          
          <form className="space-y-5 relative z-10">
            <div>
              <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Matrícula de Socio</label>
              <div className="relative">
                <i className="bi bi-person-fill absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                <input type="text" className="w-full bg-club-dark border border-gray-700 text-white pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-club-gold focus:ring-1 focus:ring-club-gold transition-all" placeholder="Ej: 15042" />
              </div>
            </div>
            <div>
              <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Contraseña</label>
              <div className="relative">
                <i className="bi bi-key-fill absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                <input type="password" className="w-full bg-club-dark border border-gray-700 text-white pl-10 pr-4 py-3 rounded-sm focus:outline-none focus:border-club-gold focus:ring-1 focus:ring-club-gold transition-all" placeholder="••••••••" />
              </div>
            </div>
            <button type="submit" className="w-full bg-club-red hover:bg-red-800 text-white font-bold py-3 rounded-sm font-title uppercase tracking-wider transition-colors mt-4">
              Acceder al Portal
            </button>
          </form>
        </div>

        {/* CTA Registro Card */}
        <div className="w-full md:w-2/5 group relative overflow-hidden rounded-xl">
          <img src="/assets/Atlanta-United-FC-cover.webp" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Hinchada" />
          <div className="absolute inset-0 bg-gradient-to-t from-club-dark via-club-dark/80 to-transparent"></div>
          
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center border border-gray-800 rounded-xl">
            <h4 className="font-title text-2xl text-club-gold uppercase mb-2">Asociate</h4>
            <p className="text-sm text-gray-300 mb-6">¿Todavía no sos parte de la manada? Completá el formulario y obtené tus beneficios al instante.</p>
            <Link href="/registro" className="border border-club-gold text-club-gold hover:bg-club-gold hover:text-club-dark px-6 py-2 rounded-sm font-title uppercase tracking-wide transition-all">
              Crear Usuario
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}