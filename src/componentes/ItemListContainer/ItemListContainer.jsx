import { useState, useEffect } from 'react'
import { Button } from "@nextui-org/react";
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
        }
        
    }
    return (
        <div className='contenedor-carrito'>
            <p className='stock'>Disponible: {stock}</p>
            <div className='contenedor-botones'>
                <Button className='boton-next-chico' onClick={disminuir} isDisabled ={!agregarCarrito}>-</Button>
                <p className='parrafo'>{contador}</p>
                <Button className='boton-next-chico' onClick={aumentar} isDisabled ={stock <= contador}>+</Button>
            </div>
            <Button className='boton-next' onClick={agregarAlCarrito} isDisabled={stock < contador || stock === 0 }>{agregarCarrito ? 'Agregar al carrito' : 'Sin stock'}</Button>
            
        </div>

    )
}
export default ItemListContainer