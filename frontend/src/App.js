// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import AdministracionGanadera from './pages/services/ganadera'; // Ejemplo de ruta interna
import AdministracionCinegetica from './pages/services/cinegetica'; // Ejemplo de ruta interna
import ControlSaneamientos from './pages/services/saneamientos'; // Ejemplo de ruta interna
import ModuloFinanciero from './pages/services/financiero'; // Ejemplo de ruta interna

function App() {
  return (
    <Routes>
      {/* RUTAS PÚBLICAS */}
      <Route path="/login"      element={<Login />} />
      <Route path="/register"   element={<Register />} />
      <Route path="/forgot"     element={<ForgotPassword />} />

      {/* RUTAS PRIVADAS envueltas en Layout */}
      <Route element={<Layout />}>
        <Route path="/"         element={<Home />} /> 
        <Route path="/servicios/ganadera" element={<AdministracionGanadera />} />
        <Route path="/servicios/cinegetica" element={<AdministracionCinegetica />} />
        <Route path="/servicios/saneamientos" element={<ControlSaneamientos />} />
        <Route path="/servicios/financiero" element={<ModuloFinanciero />} />
        {/* <Route path="/servicios" element={<Servicios />} /> */}
        {/* ... resto de rutas internas */}
      </Route>
    </Routes>
  );
}

export default App;
