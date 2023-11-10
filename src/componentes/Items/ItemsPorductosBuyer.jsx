import React from 'react'
import style from './style.module.css'
import { Divider } from '@nextui-org/react'

const ItemsPorductosBuyer = ({ productos }) => {
  return (
    <>
      <Divider />
      <div className={style.contenedorproducto}>
        <p className={style.casitablas}><b className={style.negrita}>Producto : </b> {productos.title}</p>
        <p className={style.casitablas}><b className={style.negrita}>Cantidad : </b> {productos.quantity}</p>
        <p className={style.casitablas}><b className={style.negrita}>Precio c/u : </b>$ {productos.price}</p>
      </div>
      <Divider />
    </>
  )
}

export default ItemsPorductosBuyer
