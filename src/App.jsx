import React from 'react';
import Contact from './components/Contact/Contact'; // Importar componente de contacto
import Inicio from './components/Inicio/Inicio'; // Importar componente de inicio
import Productos from './components/productos/productos';; // Importar componente de productos
import Carrito from './components/productos/Carrito'; // Importar componente de carrito
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  const [carrito, setCarrito] = useState([]);

  return (
    <Router>
    <div>
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/carrito">Carrito ({carrito.length})</Link></li>
                <li><Link to="/contact">Contáctenos</Link></li>
            </ul>
        </nav>
        
        <Header />
        <Routes> 
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos carrito={carrito} setCarrito={setCarrito} />} />
            <Route path="/carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
        <Footer />
    </div>
</Router>
  )
}

export default App
