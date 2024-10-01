import React from 'react';
import './Header.css'; // Importa el CSS
import { useState } from 'react'

const Header = () => {

    const [carrito, setCarrito] = useState([]);

    return (
        <header className="header">
            
            <div className="header-content">
                <a href="tel:+123456789" className="call-button">Llámanos</a>
            </div>
        </header>
    );
};

export default Header;