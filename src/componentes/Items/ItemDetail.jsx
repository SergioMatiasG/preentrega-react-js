import { Button, Divider } from "@nextui-org/react"
import { useState, useEffect } from 'react'
import { useCart } from "../Context/CartProvider"
import style from './style.module.css'

const ItemDetail = ({ item }) => {
    const [contador, setContador] = useState(1)
    const [agregarCarrito, setAgregarCarrito] = useState(true)
    const [stock, setStock] = useState(20)
    const {addToCart} = useCart()

    useEffect(() => {
        item.stock === 0 && setContador(0)
    }, [item.stock])
    const aumentar = () => {
        contador < item.stock && setContador(contador + 1)
    }
    const disminuir = () => {
        contador > 1 && setContador(contador - 1)
    }

    const agregarAlCarrito = () => {
        // if (agregarCarrito) {
        //     const nuevoStock = item.stock - contador
        //     setStock(nuevoStock)
        //     if (nuevoStock < 1) {
        //         setAgregarCarrito(false)
        //     }
        // }
        addToCart(item, contador)
    }
    return (
        <div>
            {!item ? (<p> El producto con id:{id} no existe</p>)
                : (
                    <div className={style.contenedordetalles}>
                        <div className={style.contenedordetallesimagen}>
                            <div className={style.imagendetails}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <p>Descripcion: {item.description}</p>
                        </div>
                        <div className={style.contenedordetallestexto}>
                            <h3>{item.title}</h3>
                            <a className={style.linkcolor} href="">Metodos de pago</a>
                            <a className={style.linkcolor} href="">Formas de entrega</a>
                            <p>Precio: $ {item.price}</p>
                            <div>
                                <Divider className="my-4" />
                                <div className={style.contenedorbotones}>
                                    <p>Stock : {item.stock}</p>
                                    <Button className={style.botonnextchico} onClick={disminuir} isDisabled={!agregarCarrito} >-</Button>
                                    <p className="parrafo">{contador}</p>
                                    <Button className={style.botonnextchico} onClick={aumentar} isDisabled={stock <= contador} >+</Button>
                                </div>
                                <div className={style.contenedorac}>
                                    <Button className={style.botonnextdetailbbc} isDisabled={stock < contador || stock === 0}>{agregarCarrito ? 'Comprar ahora' : 'Sin stock'}</Button>
                                    <Button className={style.botonnextdetail} onClick={agregarAlCarrito} isDisabled={stock < contador || stock === 0}> {agregarCarrito ? 'Agregar al carrito' : 'Sin stock'}</Button>
                                </div>
                                <Divider className="my-4" />
                            </div>
                        </div>

                    </div>
                )}
        </div>

    )
}

export default ItemDetail