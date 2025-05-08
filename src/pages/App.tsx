import '@/styles/global.css';

import Catalagos from '@/Data/Catalados.json';
import Perfiles from '@/Data/Perfiles.json';
import Tornilleria from '@/Data/Tornilleria.json';
import Masillas from '@/Data/Masilla.json';
import Cintas from '@/Data/Citas.json';
import Suspenciones from '@/Data/suspenciones.json';
import Baldosas from '@/Data/Baldosas.json';
import LanaVidrio from '@/Data/Lanas.json';
import Coberturas from '@/Data/Cobertura.json';
import SuperBound from '@/Data/Superboard.json';
import ProductSection from '@/components/ProductSection';
import React, { useState } from 'react';
function App() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
    const [busqueda, setBusqueda] = useState('');

    
    const categorias = [
        { nombre: "Placas de yeso", datos: Catalagos },
        { nombre: "Superboard", datos: SuperBound },
        { nombre: "Perfiles Metálicos", datos: Perfiles },
        { nombre: "Tornillería", datos: Tornilleria },
        { nombre: "Masillas", datos: Masillas },
        { nombre: "Cintas", datos: Cintas },
        { nombre: "Suspenciones", datos: Suspenciones },
        { nombre: "Baldosa", datos: Baldosas },
        { nombre: "Lana Vidrio", datos: LanaVidrio },
        { nombre: "Cobertura", datos: Coberturas },
      ];
      const filtrarPorBusqueda = (productos: any[]) => {
        const palabrasClave = busqueda.toLowerCase().split(" ").filter(p => p.trim() !== "");
      
        return productos.filter((producto) => {
          const nombreProducto = producto.name.toLowerCase();
          return palabrasClave.every(palabra => nombreProducto.includes(palabra));
        });
      };


      const seccionesFiltradas = categorias
      .filter(c => categoriaSeleccionada === "Todos" || categoriaSeleccionada === c.nombre)
      .map(c => {
        const productosFiltrados = filtrarPorBusqueda(c.datos);
        return productosFiltrados.length > 0
          ? <ProductSection key={c.nombre} title={c.nombre} data={productosFiltrados} />
          : null;
      });

  return ( 
    <>
    
    
 <header>
    <div className="container header-container">
        <div className="logo">
            <div className="logo-icon"><img className="img_logo" src="/22.jpg" alt="logo1" width="60px" height="60px"/></div>
            METAL<span>DRYLL</span>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="/">Productos</a></li>
                <li><a href="#about">Nosotros</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    </div>
</header>


<div className="search-container">
    <div className="container search-wrapper">
        <div className="search-box">

            <input type="text"
                   className="search-input"
                   placeholder="Buscar productos..."
                   value={busqueda}
                   onChange={(e) => setBusqueda(e.target.value)}
            />

            <button className="search-btn">🔍</button>
        </div>
    </div>
</div>


<div className="category-filters">
  <div className="container filter-wrapper">
    {[
      "Todos",
      "Placas de yeso",
      "Superboard",
      "Perfiles Metálicos",
      "Tornillería",
      "Masillas",
      "Cintas",
      "Suspenciones",
      "Baldosa",
      "Lana Vidrio",
      "Cobertura",
      "Herramientas",
      "Accesorios",
    ].map((categoria) => (
      <button
        key={categoria}
        className={`filter-btn ${categoriaSeleccionada === categoria ? "active" : ""}`}
        onClick={() => setCategoriaSeleccionada(categoria)}
      >
        {categoria}
      </button>
    ))}
  </div>
</div>
    
<div>
{seccionesFiltradas.every(section => section === null) ? (
    <p style={{ textAlign: 'center', padding: '2rem' }}>No se encontraron productos que coincidan con tu búsqueda.</p>
  ) : (
    seccionesFiltradas
  )}
</div>
    
<footer>
    <div className="container footer-container">
        <div className='footer-col'>
            <h3>MetalDryll </h3>
            <p>Tu ferretería especializada en sistemas de construcción en seco. Ofrecemos productos de calidad, asesoramiento técnico y los mejores precios del mercado.</p>
        </div>
        <div className="footer-col">
            <h3>Enlaces Rápidos</h3>
            <ul className="footer-links">
                <li><a href="#">Inicio</a></li>
                <li><a href="/">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
        <div className="footer-col">
            <h3>Contáctanos</h3>
            <ul className="footer-links">
                <li>📍 19 Marzo Mz K Lote 10, Nuevo Chimbote</li>
                <li>📞 918 968 939</li>
                <li>📞 963 019 545</li>
                <li>📍 Av. Buenos Aires 646, Chimbote</li>
                <li>📞 918 968 939</li>
                <li>📞 933 406 590</li>
                <li>📧 administracion@metaldryll.com</li>
            </ul>
        </div>
    </div>
    <div className="container footer-bottom">
        <p>&copy; 2025 Ferretería METALDRYLL - Todos los derechos reservados &copy; <a href='https://ervic-linares.vercel.app/' target='_blank' rel='noreferrer' title='Visitar Miportfolio :)'>Ervic Linares</a></p>
    </div>
</footer>
    
    </>
  );
}

export default App;