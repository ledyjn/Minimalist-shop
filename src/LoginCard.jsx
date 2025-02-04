import React from 'react';
import './LoginCard.css';

const LoginCard = ({ onLogin }) => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login berhasil');
    onLogin(); // Navigasi ke halaman utama
  };

  return (
    <div className="login-card">
      <h2 className="login-title">Welcome Minimalist</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="login-footer">
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </div>
  );
};

export default LoginCard;
