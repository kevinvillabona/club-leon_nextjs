import Link from "next/link";

export default function Contacto() {
  return (
    <>
      {/* Mini Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex flex-col justify-center overflow-hidden -mt-24 pt-32">
        <div className="absolute inset-0 z-0">
          <img src="/assets/v47wpxufhaxqijgoxbli.jpg" alt="Fondo Contacto" className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-club-dark via-club-dark/80 to-club-dark/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <span className="text-club-gold text-xs font-bold tracking-widest uppercase mb-4 block">Atención al Socio</span>
          <h1 className="font-title text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter mb-4">
            Línea <span className="text-club-red">Directa</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-club-red to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Main Content - Contact Split Card */}
      <section className="container mx-auto px-4 lg:px-8 pb-24 -mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row bg-club-gray/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-6xl mx-auto">
          
          {/* Panel Izquierdo: Formulario */}
          <div className="w-full lg:w-3/5 p-8 md:p-12">
            <h2 className="font-title text-3xl font-bold text-white uppercase mb-2">Envianos tu consulta</h2>
            <p className="text-gray-400 mb-8 font-light">Completá el formulario y nuestro equipo administrativo se pondrá en contacto a la brevedad.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-club-gold transition-colors">Nombre y Apellido</label>
                  <input type="text" className="w-full bg-club-dark/50 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-club-gold focus:ring-1 focus:ring-club-gold transition-all" />
                </div>
                <div className="group">
                  <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-club-gold transition-colors">Correo Electrónico</label>
                  <input type="email" className="w-full bg-club-dark/50 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-club-gold focus:ring-1 focus:ring-club-gold transition-all" />
                </div>
              </div>
              <div className="group">
                <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-club-gold transition-colors">Asunto</label>
                <input type="text" className="w-full bg-club-dark/50 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-club-gold focus:ring-1 focus:ring-club-gold transition-all" />
              </div>
              <div className="group">
                <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-2 group-focus-within:text-club-gold transition-colors">Mensaje</label>
                <textarea rows={4} className="w-full bg-club-dark/50 border border-white/10 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-club-gold focus:ring-1 focus:ring-club-gold transition-all resize-none"></textarea>
              </div>
              
              <button type="button" className="bg-club-gold hover:bg-yellow-600 text-club-dark font-bold py-4 px-8 rounded-sm font-title uppercase tracking-widest transition-colors w-full md:w-auto shadow-[0_0_15px_rgba(175,154,109,0.3)] hover:shadow-[0_0_25px_rgba(175,154,109,0.6)]">
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Panel Derecho: Info de Contacto con Glow */}
          <div className="w-full lg:w-2/5 bg-gradient-to-br from-club-dark to-[#150204] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden border-l border-white/5">
            {/* Ícono gigante de fondo */}
            <div className="absolute -bottom-10 -right-10 text-[15rem] text-club-red/5 rotate-12 pointer-events-none">
              <i className="bi bi-shield-fill"></i>
            </div>
            
            <h4 className="font-title text-2xl text-white uppercase mb-8 relative z-10 flex items-center gap-3">
              <span className="w-8 h-1 bg-club-red inline-block"></span> Datos Oficiales
            </h4>
            
            <ul className="space-y-8 relative z-10">
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-club-red/10 border border-club-red/30 flex items-center justify-center group-hover:bg-club-red group-hover:shadow-[0_0_15px_rgba(178,16,33,0.5)] transition-all">
                  <i className="bi bi-geo-alt text-lg text-club-red group-hover:text-white transition-colors"></i>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Sede Central</span>
                  <p className="text-gray-300 font-light text-sm">Av. Siempre Viva 123<br/>Ciudad Deportiva, La Plata, Buenos Aires</p>
                </div>
              </li>
              
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-club-red/10 border border-club-red/30 flex items-center justify-center group-hover:bg-club-red group-hover:shadow-[0_0_15px_rgba(178,16,33,0.5)] transition-all">
                  <i className="bi bi-telephone text-lg text-club-red group-hover:text-white transition-colors"></i>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Teléfono / WhatsApp</span>
                  <p className="text-gray-300 font-light text-sm">(777) 777-7770</p>
                </div>
              </li>
              
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-full bg-club-red/10 border border-club-red/30 flex items-center justify-center group-hover:bg-club-red group-hover:shadow-[0_0_15px_rgba(178,16,33,0.5)] transition-all">
                  <i className="bi bi-envelope text-lg text-club-red group-hover:text-white transition-colors"></i>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Mail Administrativo</span>
                  <a href="mailto:info@clubleon.com" className="text-gray-300 font-light text-sm hover:text-club-gold transition-colors">info@clubleon.com</a>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}