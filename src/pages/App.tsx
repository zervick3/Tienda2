import React from 'react';
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

import ProductSection from '@/components/ProductSection';

function App() {
  return ( 
    <>
    
 <header>
    <div className="container header-container">
        <div className="logo">
            <div className="logo-icon"><img className="img_logo" src="/img/22.jpg" alt="logo1" width="60px" height="60px"/></div>
            METAL<span>DRYLL</span>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#about">Nosotros</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    </div>
</header>


<div className="search-container">
    <div className="container search-wrapper">
        <div className="search-box">
            <input type="text" className="search-input" placeholder="Buscar productos..."/>
            <button className="search-btn">🔍</button>
        </div>
    </div>
</div>


<div className="category-filters">
    <div className="container filter-wrapper">
        <button className="filter-btn active">Todos</button>
        <button className="filter-btn">Placas de Yeso</button>
        <button className="filter-btn">Perfiles Metálicos</button>
        <button className="filter-btn">Tornillería</button>
        <button className="filter-btn">Masillas</button>
        <button className="filter-btn">Cintas</button>
        <button className="filter-btn">Suspenciones</button>
        <button className="filter-btn">Baldosa </button>
        <button className="filter-btn">Lana Vidrio</button>
        <button className="filter-btn">Cobertura</button>
        <button className="filter-btn">Herramientas</button>
        <button className="filter-btn">Accesorios</button>
    </div>
</div>
    
    <div>
      <ProductSection title="Placas de Yeso" data={Catalagos} />
      <ProductSection title="Perfiles Metálicos" data={Perfiles} />
      <ProductSection title="Tornillería" data={Tornilleria} />
      <ProductSection title="Masillas" data={Masillas} />
      <ProductSection title="Cintas" data={Cintas} />
      <ProductSection title="Suspenciones" data={Suspenciones} />
      <ProductSection title="Baldosas" data={Baldosas} />
      <ProductSection title="Lana Vidrio" data={LanaVidrio} />
      <ProductSection title="Coberturas" data={Coberturas} />
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
                <li><a href="#">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
        <div className="footer-col">
            <h3>Contáctanos</h3>
            <ul className="footer-links">
                <li>📍 Calle Principal #123, Ciudad</li>
                <li>📞 (123) 456-7890</li>
                <li>📧 info@drytodo.com</li>
            </ul>
        </div>
    </div>
    <div className="container footer-bottom">
        <p>&copy; 2025 Ferretería DryTodo - Todos los derechos reservados</p>
    </div>
</footer>
    
    </>
  );
}

export default App;
