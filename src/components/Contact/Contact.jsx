import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado:', formData);
        setSubmitted(true);
        setFormData({ nombre: '', email: '', mensaje: '' }); // Limpiar formulario
    };

    return (
        <div className="contact-container">
            <h2>Contáctenos</h2>
            {submitted ? (
                <p>Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            value={formData.mensaje}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            )}
        </div>
    );
};

export default Contact;
<Contact> Enlazar css</Contact>
