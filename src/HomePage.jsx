import React from 'react';
import gambar2 from './assets/images/gambar2.png';
import produk1 from './assets/images/produk1.png';
import logo from './assets/images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './LoginCard.css';

const HomePage = ({ onNavigate }) => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$29.99',
      img: produk1,
      description: 'High-quality furniture for your living room.',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$39.99',
      img: produk1,
      description: 'Elegant dining table for modern homes.',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$19.99',
      img: produk1,
      description: 'Comfortable office chair with ergonomic design.',
    },
  ];

  return (
    <div className="homepage">
      <header className="header">
        <a href="#banner" className="logo">
          <img src={logo} alt="E-Commerce Logo" />
        </a>
        <nav className="nav">
          <a href="#banner">Home</a>
          <a href="#sale">Sale</a>
          <a href="#products">Products</a>
          <button onClick={() => onNavigate('login')}>Logout</button>
        </nav>
      </header>

      <div id="banner" className="banner">
        <img src={gambar2} alt="Banner" />
        <div className="text-overlay">
          <h1>The Elegance Furniture</h1>
          <p>Find the best furniture for your home at unbeatable prices!</p>
          <a href="#products">
            <button className="tombolBeli">More info</button>
          </a>
        </div>
      </div>

      <div id="sale" className="sectionCar">
        <h2 className="judulc">
          "Transform Your Home with Unbeatable Prices! Up to 70% Off Furniture!"
        </h2>
        <p className="deskc">"Don't Wait! Get the Best Furniture Deals Now!"</p>
        <div className="carousel">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={produk1} className="d-block w-100" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img src={produk1} className="d-block w-100" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img src={produk1} className="d-block w-100" alt="Third slide" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <p className="deskb">
          Enjoy unbeatable comfort with this stylish chair, now at an incredible discount! Made with
          high-quality materials, it offers excellent support for relaxation after a long day.
        </p>
      </div>

      <div id="products" className="content">
        <h2 className="judul">Our Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.img}
                alt={product.name}
                onClick={() => onNavigate('productDetail', product)}
                style={{ cursor: 'pointer' }}
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={() => onNavigate('productDetail', product)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 E-Commerce. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
