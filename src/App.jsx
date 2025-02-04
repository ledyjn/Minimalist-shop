import React, { useState } from 'react';
import LoginCard from './LoginCard';
import HomePage from './HomePage';
import ProductDetail from './ProductDetail';

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fungsi navigasi antar halaman
  const handleNavigate = (page, product = null) => {
    setSelectedProduct(product); // Simpan produk yang dipilih
    setCurrentPage(page); // Ganti halaman
  };

  return (
    <div>
      {currentPage === 'login' && <LoginCard onLogin={() => handleNavigate('main')} />}
      {currentPage === 'main' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'productDetail' && selectedProduct && (
        <ProductDetail product={selectedProduct} onBack={() => handleNavigate('main')} />
      )}
      {currentPage === 'productDetail' && !selectedProduct && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2>Product not found!</h2>
          <button onClick={() => handleNavigate('main')}>Go Back to Home</button>
        </div>
      )}
    </div>
  );
};

export default App;
