import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ваши глобальные стили
import App from './App';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);