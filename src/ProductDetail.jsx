import React from 'react';
import './ProductDetail.css';
import produk1 from './assets/images/produk1.png';
import styles from './ProductDetail.module.css';

const ProductDetail = ({ product, onBack }) => {
  // Jika produk tidak ditemukan, tampilkan pesan error
  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Product not found!</h2>
        <button onClick={onBack}>Back to Home</button>
      </div>
    );
  }

  const inlineStyles = {
    productInfo: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '20px',
    },
    productPrice: {
      fontSize: '1.5rem',
      color: '#FF5722',
      margin: '10px 0',
    },
    addToCartButton: {
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    orderNowButton: {
      backgroundColor: '#FF5722',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div>
      <header className="header">
        <button onClick={onBack} style={{ margin: '10px' }}>
          Back to Home
        </button>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <div className="product-detail">
        <div className="product-image">
          <img src={produk1} alt="Product" />
          <div className="product-variation">
            <img src={produk1} alt="Variation 1" />
            <img src={produk1} alt="Variation 2" />
            <img src={produk1} alt="Variation 3" />
          </div>
        </div>

        <div className="inform">
          {/* Informasi produk */}
          <div className={styles.productInfo}>
            <h1 className="product-title">Kursi Lipat</h1>
            <p style={inlineStyles.productPrice}>Rp. 1.050.790</p>
            <div className="product-rating">
              <span>
                Rating: <span className="star">★★★★☆</span>{' '}
              </span>
            </div>

            {/* Pilihan ukuran produk */}
            <div className="product-size">
              <label>Color : </label>
              <select>
                <option value="brown">brown</option>
                <option value="black">black</option>
                <option value="broken white">broken white</option>
                <option value="green">green</option>
              </select>
            </div>

            {/* Pilihan jumlah produk */}
            <div className="product-quantity">
              <label>Jumlah : </label>
              <input type="number" min="1" defaultValue="1" />
            </div>

            {/* Tombol aksi */}
            <div className="product-buttons">
              <button className="add-to-cart">Tambah ke Keranjang</button>
              <button className="order-now">Pesan</button>
            </div>

            {/* Deskripsi produk */}
            <div className="product-description">
              <h2>The Elegance Furniture</h2>
              <p>
                Enjoy unbeatable comfort with this stylish chair, now at an incredible discount!
                Made with high-quality materials, it offers excellent support for relaxation after a
                long day.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer halaman */}
      <footer className="footer">
        <p>&copy; 2024 E-Commerce. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductDetail;
