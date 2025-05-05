import React, { useState } from 'react';
import '@/styles/global.css';

type Product = {
  categoria: string;
  image: string;
  name: string;
  descripcion: string;
  codigo: string;
  ficha: string;
};

type Props = {
  title: string;
  data: Product[];
};

const ProductSection: React.FC<Props> = ({ title, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
        </div>

        <div className="product-grid">
          {paginatedData.map((item, index) => (
            <div className="product-card" key={index}>
              <div className="product-img">
                <div className="category-label">{item.categoria}</div>
                <img src={item.image} alt={item.name} width="300" height="200" />
              </div>
              <div className="product-content">
                <h3 className="product-title">{item.name}</h3>
                <p className="product-description">{item.descripcion}</p>
                <div className="product-footer">
                  <span className="product-code">{item.codigo}</span>
                  <a className="product-btn" href={item.ficha} target="_blank">
                    Ficha Técnica
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)}>←</button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`page-btn ${i + 1 === currentPage ? 'active' : ''}`}
            >
              {i + 1}
            </button>
          ))}
          <button className="page-btn next-btn" onClick={() => handlePageChange(currentPage + 1)}>→</button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
