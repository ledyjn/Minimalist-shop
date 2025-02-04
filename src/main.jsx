import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Mengimpor App.js yang sudah memiliki routing
import './style.css';

const root = createRoot(document.getElementById('root')); // createRoot
root.render(
  <StrictMode>
    <App /> {/* App sudah mencakup routing */}
  </StrictMode>
);
