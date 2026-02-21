import Link from "next/link";

export default function Registro() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row -mt-20 pt-20 bg-club-dark">
      
      {/* Mitad Izquierda: Imagen Épica */}
      <div className="w-full lg:w-1/2 relative min-h-[40vh] lg:min-h-screen flex items-center justify-center overflow-hidden border-r border-white/5">
        <div className="absolute inset-0">
          <img src="/assets/Atlanta-United-FC-cover.webp" alt="Hinchada" className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-club-dark via-transparent to-club-dark lg:bg-gradient-to-r lg:from-club-dark/80 lg:to-transparent"></div>
        </div>
        
        <div className="relative z-10 p-8 lg:p-16 text-center lg:text-left w-full max-w-xl mx-auto">
          <span className="inline-block border border-club-red bg-club-red/20 text-club-red text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest mb-6 backdrop-blur-sm">
            Campaña de Socios 2026
          </span>
          <h1 className="font-title text-5xl lg:text-7xl font-bold text-white uppercase tracking-tighter mb-6 leading-[0.9]">
            Unite a <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-club-gold to-yellow-600">la Manada</span>
          </h1>
          <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed hidden md:block">
            Formá parte de la institución más pasional. Accedé a preventas exclusivas de indumentaria, descuentos en el abono anual y viví los partidos desde adentro.
          </p>
          <div className="hidden lg:flex items-center gap-4 text-gray-500 text-sm font-bold tracking-widest uppercase">
            <i className="bi bi-shield-check text-club-gold text-xl"></i> Portal Seguro
          </div>
        </div>
      </div>

      {/* Mitad Derecha: Formulario de Registro */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative z-20">
        <div className="w-full max-w-md bg-club-gray/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <h2 className="font-title text-2xl text-white uppercase mb-6 flex items-center gap-3">
            Crear Usuario
          </h2>
          
          <form className="space-y-5">
            <div className="group">
              <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 group-focus-within:text-club-gold transition-colors">Nombre y Apellido</label>
              <div className="relative">
                <i className="bi bi-person absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-club-gold transition-colors"></i>
                <input type="text" className="w-full bg-club-dark border border-white/5 text-white pl-11 pr-4 py-3 rounded-sm focus:outline-none focus:border-club-gold focus:ring-1 focus:ring-club-gold transition-all text-sm" placeholder="Ej: Juan Pérez" />
              </div>
            </div>

            <div className="group">
              <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 group-focus-within:text-club-gold transition-colors">Domicilio Completo</label>
              <div className="relative">
                <i className="bi bi-house absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-club-gold transition-colors"></i>
                <input type="text" className="w-full bg-club-dark border border-white/5 text-white pl-11 pr-4 py-3 rounded-sm focus:outline-none focus:border-club-gold focus:ring-1 focus:ring-club-gold transition-all text-sm" placeholder="Calle, Número, Localidad" />
              </div>
            </div>

            <div className="group">
              <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 group-focus-within:text-club-gold transition-colors">Teléfono / Celular</label>
              <div className="relative">
                <i className="bi bi-phone absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-club-gold transition-colors"></i>
                <input type="tel" className="w-full bg-club-dark border border-white/5 text-white pl-11 pr-4 py-3 rounded-sm focus:outline-none focus:border-club-gold focus:ring-1 focus:ring-club-gold transition-all text-sm" placeholder="+54 9 11 0000-0000" />
              </div>
            </div>

            <div className="group">
              <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 group-focus-within:text-club-gold transition-colors">Correo Electrónico</label>
              <div className="relative">
                <i className="bi bi-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-club-gold transition-colors"></i>
                <input type="email" className="w-full bg-club-dark border border-white/5 text-white pl-11 pr-4 py-3 rounded-sm focus:outline-none focus:border-club-gold focus:ring-1 focus:ring-club-gold transition-all text-sm" placeholder="tu@email.com" />
              </div>
            </div>

            <div className="group">
              <label className="block text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 group-focus-within:text-club-gold transition-colors">Contraseña Segura</label>
              <div className="relative">
                <i className="bi bi-lock absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-club-gold transition-colors"></i>
                <input type="password" className="w-full bg-club-dark border border-white/5 text-white pl-11 pr-4 py-3 rounded-sm focus:outline-none focus:border-club-gold focus:ring-1 focus:ring-club-gold transition-all text-sm" placeholder="••••••••" />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input type="checkbox" id="socioAntiguo" className="w-4 h-4 rounded-sm border-white/10 bg-club-dark text-club-red focus:ring-club-red focus:ring-offset-club-dark transition-colors cursor-pointer" />
              <label htmlFor="socioAntiguo" className="text-xs text-gray-400 cursor-pointer hover:text-white transition-colors">
                Fui socio anteriormente y quiero recuperar mi número
              </label>
            </div>

            <button type="button" className="w-full mt-6 bg-club-red hover:bg-red-800 text-white font-bold py-4 rounded-sm font-title uppercase tracking-widest transition-all shadow-[0_0_15px_rgba(178,16,33,0.3)] hover:shadow-[0_0_25px_rgba(178,16,33,0.6)]">
              Procesar Alta
            </button>
            
            <p className="text-center text-[11px] text-gray-500 mt-6">
              ¿Ya estás registrado? <Link href="/portalsocios" className="text-club-gold hover:text-white transition-colors">Ingresá al Portal</Link>
            </p>
          </form>
        </div>
      </div>
      
    </div>
  );
}