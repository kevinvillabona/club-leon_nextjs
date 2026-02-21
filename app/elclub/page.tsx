import Link from "next/link";

export default function Historia() {
  const hitos = [
    {
      id: "1",
      year: "2022",
      title: "El Nacimiento",
      desc: "Forjado por un grupo de visionarios en el corazón de la ciudad. El Club Deportivo León nació con una premisa inquebrantable: ser el orgullo de nuestra gente y competir al más alto nivel desde el día uno.",
      img: "/assets/1009ffab41568ec883cdb3517e6d0da9--retro-football-vintage-football.jpg",
      reverse: false
    },
    {
      id: "2",
      year: "2024",
      title: "Primeros Rugidos",
      desc: "La consolidación institucional. Se inauguraron las obras principales del predio juvenil y el primer equipo logró el histórico ascenso, cimentando una identidad de juego agresiva y vistosa.",
      img: "/assets/AC_Milan_-_Gre-No-Li.jpg",
      reverse: true
    },
    {
      id: "3",
      year: "2026",
      title: "La Nueva Era",
      desc: "Con la modernización del estadio y una plantilla de élite, el club entra en su etapa más ambiciosa. No solo buscamos participar, buscamos dominar el continente y escribir la página más dorada de nuestra historia.",
      img: "/assets/27352200.jpeg",
      reverse: false
    }
  ];

  return (
    <>
      {/* Mini Hero Section */}
      <section className="relative h-[45vh] min-h-[450px] flex flex-col justify-center overflow-hidden -mt-24 pt-32">
        <div className="absolute inset-0 z-0">
          <img src="/assets/v47wpxufhaxqijgoxbli.jpg" alt="Historia del Club" className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-club-dark via-club-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-club-dark/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <span className="text-club-red text-xs font-bold tracking-widest uppercase mb-4 block animate-pulse">Nuestro Legado</span>
          <h1 className="font-title text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase tracking-tighter mb-6 leading-none">
            Forjados en <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-club-gold to-yellow-600">la Gloria</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Conocé el camino que nos trajo hasta acá. Un recorrido marcado por el sacrificio, la pasión y el rugido inconfundible de nuestra hinchada.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 lg:px-8 py-24 relative z-20 overflow-x-clip">
        
        {/* Línea central (En mobile se pega a la izquierda, en desktop va al centro) */}
        <div className="absolute left-8 md:left-1/2 top-24 bottom-24 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 z-0"></div>

        <div className="space-y-32 md:space-y-40 relative z-10">
          {hitos.map((hito, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 group ${hito.reverse ? 'md:flex-row-reverse' : ''} pl-12 md:pl-0`}>
              
              {/* Punto de la línea de tiempo (Nodo) - top-36 lo centra perfecto en la foto en mobile */}
              <div className="absolute left-8 md:left-1/2 top-36 md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center z-20">
                <div className="w-4 h-4 rounded-full bg-club-dark border-2 border-club-gold group-hover:bg-club-gold group-hover:shadow-[0_0_15px_rgba(175,154,109,0.8)] transition-all duration-500"></div>
              </div>

              {/* Bloque de Imagen */}
              <div className="w-full md:w-1/2 relative">
                {/* Número Gigante de Fondo (Watermark adaptado para mobile) */}
                <span className={`absolute top-1/2 -translate-y-1/2 ${hito.reverse ? '-left-6 md:-left-24' : '-right-6 md:-right-24'} font-title text-[6rem] md:text-[12rem] font-bold text-club-gold opacity-5 select-none transition-transform duration-700 group-hover:scale-110 group-hover:opacity-10 z-0`}>
                  {hito.id}
                </span>

                <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-club-gray shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 bg-club-red/20 mix-blend-overlay z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-700"></div>
                  <img src={hito.img} alt={hito.title} className="w-full h-72 md:h-96 object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                </div>
              </div>

              {/* Bloque de Texto (Glass Card) */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className={`bg-club-gray/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 md:p-10 w-full max-w-lg shadow-2xl relative overflow-hidden group-hover:border-club-gold/30 transition-colors duration-500 ${hito.reverse ? 'md:text-right' : 'md:text-left'}`}>
                  
                  {/* Detalle decorativo de la tarjeta */}
                  <div className={`absolute top-0 ${hito.reverse ? 'right-0' : 'left-0'} w-2 h-full bg-gradient-to-b from-club-gold to-transparent opacity-50`}></div>

                  <span className="inline-block border border-club-gold text-club-gold text-[10px] md:text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-widest mb-4">
                    Año {hito.year}
                  </span>
                  <h3 className="font-title text-3xl md:text-4xl text-white mb-4">
                    {hito.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {hito.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-32 text-center relative z-10">
            <h4 className="font-title text-3xl text-white uppercase mb-6">La historia se sigue escribiendo</h4>
            <Link href="/registro" className="inline-block bg-club-red hover:bg-red-800 text-white px-10 py-4 rounded-sm font-title uppercase tracking-widest text-sm font-bold shadow-[0_0_20px_rgba(178,16,33,0.3)] hover:shadow-[0_0_30px_rgba(178,16,33,0.6)] transition-all duration-300">
              Asociate y sé parte
            </Link>
        </div>
      </section>
    </>
  );
}