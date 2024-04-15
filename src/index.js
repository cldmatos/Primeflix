import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { defineConfig } from './pages/Home/index.js';
// import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/primeflix/',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
