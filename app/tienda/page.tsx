"use client";

import { useState } from "react";
import Link from "next/link";

export default function Tienda() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todo");

  // Array de productos simulado (ideal para luego conectar a una API o Base de Datos)
  const productos = [
    { id: 1, nombre: "Camiseta Titular 26/27", precio: "$85.000", categoria: "Equipación", tag: "Nuevo", stock: true },
    { id: 2, nombre: "Camiseta Visitante 26/27", precio: "$85.000", categoria: "Equipación", tag: "Edición Limitada", stock: true },
    { id: 3, nombre: "Buzo de Entrenamiento Técnico", precio: "$65.000", categoria: "Entrenamiento", tag: "", stock: true },
    { id: 4, nombre: "Short Oficial de Juego", precio: "$40.000", categoria: "Equipación", tag: "", stock: true },
    { id: 5, nombre: "Campera Anthem Pre-Match", precio: "$110.000", categoria: "Moda", tag: "Premium", stock: false },
    { id: 6, nombre: "Gorra Urbana CD León", precio: "$25.000", categoria: "Accesorios", tag: "", stock: true },
  ];

  const categorias = ["Todo", "Equipación", "Entrenamiento", "Moda", "Accesorios"];

  const productosFiltrados = categoriaActiva === "Todo" 
    ? productos 
    : productos.filter(p => p.categoria === categoriaActiva);

  return (
    <div className="min-h-screen bg-club-dark pb-24">
      
      {/* Hero Section de la Tienda */}
      <section className="relative h-[50vh] min-h-[500px] flex flex-col justify-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/assets/Atlanta-United-FC-cover.webp" alt="Campaña Indumentaria" className="w-full h-full object-cover opacity-30 mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-gradient-to-t from-club-dark via-club-dark/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8 flex flex-col items-center text-center mt-12">
          <span className="inline-block border border-club-gold text-club-gold text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest mb-4 backdrop-blur-sm">
            Temporada Oficial
          </span>
          <h1 className="font-title text-6xl md:text-8xl font-bold text-white uppercase tracking-tighter mb-4 leading-none">
            Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-club-red to-red-600">Piel</span>
          </h1>
          <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Vestí los colores con orgullo. Indumentaria diseñada con tecnología de alto rendimiento para los jugadores y la hinchada.
          </p>
        </div>
      </section>

      {/* Navegación de Categorías (Filtros interactivos) */}
      <section className="container mx-auto px-4 lg:px-8 relative z-20 -mt-8 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 bg-club-gray/80 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl max-w-4xl mx-auto">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-6 py-2 rounded-sm font-title uppercase tracking-widest text-xs md:text-sm transition-all duration-300 ${
                categoriaActiva === cat 
                  ? "bg-club-gold text-club-dark font-bold shadow-[0_0_15px_rgba(175,154,109,0.4)]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grilla de Productos */}
      <section className="container mx-auto px-4 lg:px-8">
        {/* Contador de resultados */}
        <div className="mb-8 text-gray-500 text-sm font-medium tracking-wide">
          Mostrando <span className="text-white font-bold">{productosFiltrados.length}</span> productos
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {productosFiltrados.map((producto) => (
            <article key={producto.id} className="group relative bg-[#121212] border border-white/5 rounded-xl overflow-hidden hover:border-club-gold/30 transition-colors duration-500">
              
              {/* Contenedor de la Imagen del Producto */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-[#1a1a1c] to-[#0f0f11] flex items-center justify-center p-8">
                
                {/* Etiquetas Superiores */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                  {producto.tag && (
                    <span className="bg-club-red text-white text-[9px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest shadow-lg">
                      {producto.tag}
                    </span>
                  )}
                  {!producto.stock && (
                    <span className="bg-gray-800 text-gray-400 border border-gray-600 text-[9px] font-bold px-2.5 py-1 rounded-sm uppercase tracking-widest ml-auto">
                      Agotado
                    </span>
                  )}
                </div>

                {/* Imagen del Producto (Como no tenemos fotos de camisetas, usamos el logo con un efecto premium tipo mockup) */}
                <img 
                  src="/assets/logo01.png" 
                  alt={producto.nombre} 
                  className={`w-3/5 h-3/5 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-700 ${producto.stock ? 'group-hover:scale-110' : 'opacity-50 grayscale'}`} 
                />

                {/* Overlay de Acción "Agregar al carrito" que sube al hacer hover */}
                {producto.stock && (
                  <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-20">
                    <button className="w-full bg-white/10 hover:bg-club-gold backdrop-blur-md border border-white/20 hover:border-club-gold text-white hover:text-club-dark py-3 rounded-sm font-title uppercase tracking-widest text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2">
                      <i className="bi bi-cart-plus text-lg"></i> Agregar
                    </button>
                  </div>
                )}
              </div>

              {/* Información del Producto */}
              <div className="p-6 relative z-10">
                <span className="text-club-gold text-[10px] font-bold tracking-widest uppercase mb-1 block">
                  {producto.categoria}
                </span>
                <h3 className="font-title text-xl text-white mb-2 leading-tight group-hover:text-club-gold transition-colors duration-300">
                  {producto.nombre}
                </h3>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-white tracking-wide">
                    {producto.precio}
                  </span>
                  {/* Botón rápido tipo corazón/favorito */}
                  <button className="text-gray-600 hover:text-club-red transition-colors">
                    <i className="bi bi-heart-fill text-xl"></i>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Carrito Flotante (Widget) */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-club-gold text-club-dark rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(175,154,109,0.4)] hover:shadow-[0_0_40px_rgba(175,154,109,0.7)] hover:-translate-y-1 transition-all duration-300 z-50">
        <div className="relative">
          <i className="bi bi-bag-fill text-2xl"></i>
          {/* Badge del carrito */}
          <span className="absolute -top-2 -right-3 bg-club-red text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-club-dark">
            0
          </span>
        </div>
      </button>

    </div>
  );
}