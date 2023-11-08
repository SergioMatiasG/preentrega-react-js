import React, { useState } from 'react'
import style from './style.module.css'
import { Button, Divider } from '@nextui-org/react'

const ItemCarrito = ({ producto, borrarProductoCarrito, cantidad }) => {

    const aumentar = () => {
        const nuevaCantidad = producto.quantity + 1
        cantidad(producto.product.id, nuevaCantidad)
    }

    const disminuir = () => {
        if (producto.quantity > 1) {
            const nuevaCantidad = producto.quantity - 1
            cantidad(producto.product.id, nuevaCantidad)
        }
    }
    const borrarProducto = () => {
        borrarProductoCarrito(producto.product.id);
    }

    const precioTotalPorPoruducto = producto.product.price * producto.quantity

    
    return (
        <div key={producto.product.id}>
            <Divider className="my-4" />
            <div className={style.contenedoritemcarrito}>
                <div className={style.cotenedorgrandeimg}>
                    <div className={style.cotenedorimgcarrito}>
                        <img src={producto.product.image} alt={producto.product.tittle} />
                    </div>
                </div>
                <div className={style.comtenedortextocarrito}>
                    <h3 className={style.titulocarrito}>{producto.product.title}</h3>
                    <div className={style.centradotextocarrito}>
                        <p>Precio: $ {precioTotalPorPoruducto}</p>
                        <div className={style.contenedorcantidad}>
                            <p>Catandidad : {producto.quantity}</p>
                            <Button className={style.botoncantidad} onClick={aumentar}>+</Button>
                            <Button className={style.botoncantidadmenos} onClick={disminuir}>-</Button>
                        </div>
                    </div>
                    <div className={style.contenedorbotoncarrito}>
                        <Button className={style.botoncarrito}>Comprar Ahora</Button>
                        <Button className={style.botoncarritoborrar} onClick={borrarProducto}>Borrar del carrito</Button>
                    </div>
                </div>
            </div>
            <Divider className="my-4" />
        </div>

    )
}

export default ItemCarrito
