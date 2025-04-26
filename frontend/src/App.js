import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Sobre from "./pages/Sobre";
// import Contacto from "./pages/Contacto";
// import Perfil from "./pages/Perfil";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*
        <Route path="/servicios" element={<Services />} />
        <Route path="/sobre"     element={<Sobre />} />
        <Route path="/contacto"  element={<Contacto />} />
        <Route path="/perfil"    element={<Perfil />} />
        */}
      </Routes>
    </Layout>
  );
}

export default App;
