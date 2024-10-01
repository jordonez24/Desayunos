import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Asegúrate de tener este archivo para los estilos
import daviplata from '../../assets/daviplata.png'
import nequi from '../../assets/nequi.png'
import wompi from '../../assets/wompi.png'
import pse from '../../assets/pse.png'





const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-social">
                <h3>¡Síguenos!</h3>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} />
                    </a>
                </div>
            </div>
            <div className="footer-payment">
                <h3>Medios de Pago</h3>
                <div className="payment-icons">
                    <img src={daviplata} alt="Daviplata" />
                    <img src={nequi} alt="Nequi" />
                    <img src={wompi} alt="Wompi" />
                    <img src={pse} alt="PSE" />
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;