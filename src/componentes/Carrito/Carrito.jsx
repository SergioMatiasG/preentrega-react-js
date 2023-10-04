import ItemListContainer from "../ItemListContainer/ItemListContainer"
import { useState } from 'react'

const Carrito = () => {
    const [carrito, setCarrito] = useState([])
    const [stock, setStock] = useState(5)
    const agregarAlCarrito = (cantidad) => {
        if (cantidad > 0 && stock >= cantidad) {
            const producto = {
                id: Date.now(),
                nombre: 'Ejemplo de producto',
                cantidad: cantidad
            }
            setCarrito([...carrito, producto])
            setStock(stock - cantidad)
            console.log(stock)
        }

    }
    return (
        <div className='contenedor-list-carrito'>
            <h1>Carrito de compras</h1>
            <ul>
                {carrito.map((producto) => (
                    <li key={producto.id}>
                        {producto.nombre} - Cantidad: {producto.cantidad}
                    </li>
                ))}
            </ul>
            <ItemListContainer stock={stock} inicio={1} onAdd={agregarAlCarrito} />
        </div>
    )
}
export default Carrito