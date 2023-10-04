import { useState, useEffect } from 'react'
import './ItemListContainer.css'

const ItemListContainer = ({ stock, inicio, onAdd }) => {
    const [contador, setContador] = useState(inicio)
    const [agregarCarrito, setAgregarCarrito] = useState (true)
    useEffect (() =>{
        stock === 0 && setContador (0)
    },[stock])
    const aumentar = () => {
        contador < stock && setContador (contador + 1)
    }
    const disminuir = () => {
        contador > inicio && setContador(contador - 1) 
    }
    const agregarAlCarrito = () => {
        if ( onAdd && agregarCarrito){
            onAdd(contador)
            stock - contador < 1 && setAgregarCarrito(false)
            console.log(`Se agrego ${contador} veces el producto al carrito`)
        }
        
    }
    return (
        <div className='contenedor-carrito'>
            <p className='stock'>Disponible: {stock}</p>
            <div className='contenedor-botones'>
                <button onClick={disminuir} disabled={!agregarCarrito}>-</button>
                <p className='parrafo'>{contador}</p>
                <button onClick={aumentar} disabled={stock <= contador}>+</button>
            </div>
            <button onClick={agregarAlCarrito} disabled={stock < contador || stock === 0 }>Agregar al Carrito</button>
        </div>

    )
}
export default ItemListContainer