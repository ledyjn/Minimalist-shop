// Login.jsx
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

class login extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Login</h2>
        <form style={styles.form}>
          <label style={styles.label} htmlFor="username">
            Username
          </label>
          <input type="text" id="username" style={styles.input} placeholder="Enter your username" />

          <label style={styles.label} htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            style={styles.input}
            placeholder="Enter your password"
          />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#fffaf0', // Warna latar belakang putih krem
  },
  title: {
    color: '#8b4513', // Warna coklat
    fontSize: '2em',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
  },
  label: {
    color: '#8b4513', // Warna coklat
    marginBottom: '5px',
    fontSize: '1em',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #8b4513', // Batas warna coklat
    borderRadius: '5px',
    backgroundColor: '#fff', // Warna latar belakang putih
    color: '#8b4513', // Warna teks coklat
    fontSize: '1em',
  },
  button: {
    padding: '10px',
    backgroundColor: '#8b4513', // Warna tombol coklat
    color: '#fff', // Warna teks tombol putih
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
  },
};

export default login;
