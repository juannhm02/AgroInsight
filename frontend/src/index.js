// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';  //  ← IMPORTAR BOOTSTRAP PRIMERO
import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>        {/* ← ÚNICO Router */}
    <App />
  </BrowserRouter>
);
