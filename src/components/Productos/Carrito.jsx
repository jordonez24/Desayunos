import React from 'react';

const Carrito = ({ carrito, setCarrito }) => {
    // Función para eliminar un producto del carrito
    const eliminarDelCarrito = (productoAEliminar) => {
        setCarrito(carrito.filter((producto) => producto.id !== productoAEliminar.id));
    };

    return (
        <div className="carrito-container">
        <h2>Carrito de Compras</h2>
        {Array.isArray(carrito) && carrito.length === 0 ? (
            <p>El carrito está vacío.</p>
        ) : (
            <ul>
                {Array.isArray(carrito) && carrito.map((producto) => (
                    <li key={producto.id}>
                        <p>{producto.nombre} - ${producto.precio}</p>
                        <button onClick={() => eliminarDelCarrito(producto)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        )}
    </div>
    );
};

export default Carrito;