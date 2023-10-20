import { Button, Divider } from "@nextui-org/react"
import { useState, useEffect } from 'react'
import './ItemDetail.css'

const ItemDetail = ({ item}) => {
    const [contador, setContador] = useState(1)
    const [agregarCarrito, setAgregarCarrito] = useState(true)
    const [stock, setStock] = useState (20)

    useEffect(() => {
        stock === 0 && setContador(0)
    }, [stock])
    const aumentar = () => {
        contador < stock && setContador(contador + 1)
    }
    const disminuir = () => {
        contador > 1 && setContador(contador - 1)
    }
   
    const agregarAlCarrito = () => {
        if ( agregarCarrito) {
            const nuevoStock = stock - contador
            setStock(nuevoStock)
            if (nuevoStock < 1) {
                setAgregarCarrito(false)
            }
            onAdd(contador)
        }
    }
    return (

        <div className="contenedor-detalles">
            <div className="contenedor-detalles-imagen">
                <div className="imagen-details">
                    <img src={item.image} alt={item.title} />
                </div>
                <p>Descripcion: {item.description}</p>
            </div>
            <div className="contenedor-detalles-texto">
                <h3>{item.title}</h3>
                <a className = "linkcolor"href="">Metodos de pago</a>
                <a className = "linkcolor"href="">Formas de entrega</a>
                <p>Precio: $ {item.price}</p>
                <div>
                <Divider className="my-4" />
                    <div className="contenedor-botones">
                        <p>Stock : {stock}</p>
                        <Button className="boton-next-chico" onClick={disminuir} isDisabled ={!agregarCarrito} >-</Button>
                        <p className="parrafo">{contador}</p>
                        <Button className="boton-next-chico" onClick={aumentar} isDisabled ={stock <= contador} >+</Button>
                    </div>
                    <div className="contenedorac">
                        <Button className="boton-next-detail my-3 bbc" isDisabled={stock < contador || stock === 0 }>{agregarCarrito ? 'Comprar ahora' : 'Sin stock'}</Button>
                        <Button className="boton-next-detail my-3 " onClick={agregarAlCarrito}isDisabled={stock < contador || stock === 0 }> {agregarCarrito ? 'Agregar al carrito' : 'Sin stock'}</Button>
                    </div>
                    <div>
                        <Divider className="my-4" />
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ItemDetail