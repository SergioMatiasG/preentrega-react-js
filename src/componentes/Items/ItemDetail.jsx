import { Divider } from "@nextui-org/react"
import { useState, useEffect } from 'react'
import { useCart } from "../Context/CartProvider"
import ItemQuantitySelector from './ItemQuantitySelector'
import AddItemButton from "./addItemButton"
import style from './style.module.css'
import Desciption from "./Desciption"

const ItemDetail = ({ item }) => {
    const [contador, setContador] = useState(1)
    const { addToCart } = useCart()
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

        addToCart(item, contador)
    }
    return (
        <div>
            {!item ? (<p> El producto con id:{id} no existe</p>)
                : (
                    <div className={style.contenedordetalles}>
                        <Desciption  producto={item}/>
                        <div className={style.contenedordetallestexto}>
                            <h3>{item.title}</h3>
                            <a className={style.linkcolor} href="">Metodos de pago</a>
                            <a className={style.linkcolor} href="">Formas de entrega</a>
                            <p>Precio: $ {item.price}</p>
                            <div>
                                <Divider className="my-4" />

                                <ItemQuantitySelector citem={item} quantity={contador} sumar={aumentar} restar={disminuir} />
                                <AddItemButton agregar = {agregarAlCarrito} />
                                
                                <Divider className="my-4" />
                            </div>
                        </div>

                    </div>
                )}
        </div>

    )
}

export default ItemDetail