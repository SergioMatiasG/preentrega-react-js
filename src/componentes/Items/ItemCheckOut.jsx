import React from 'react'
import style from './style.module.css'
import ItemsPorductosBuyer from './ItemsPorductosBuyer'
import { Divider } from '@nextui-org/react'

const ItemCheckOut = ({ item }) => {

  return (
    <div className={style.contenedorordencompra}>
      <Divider />
      <div>
        <p><b className={style.negrita}>Id de la compra :</b> {item.id}</p>
      </div>
      <Divider />
      <div className={style.contenedorbuyerinfo}>
        <div className={style.titulocentrado}>
          <h2>Datos del Comprador</h2>
        </div>
        <div className={style.datoscomprador}>
          <p><b className={style.negrita}>Nombre  :</b> {item.comprador.name}</p>
          <p><b className={style.negrita}>Correo  :</b> {item.comprador.email}</p>
          <p><b className={style.negrita}>Numero  :</b> {item.comprador.phone}</p>
        </div>
      </div>
      <div>
        {item.productos.map((p, index) => (<ItemsPorductosBuyer key={index} productos={p} />))}
      </div>
      <div className={style.preciototal}>
        <p><b className={style.negrita}>El total de la compra es </b>: $ {item.total}</p>
      </div>
      <Divider />
    </div>
  )
}

export default ItemCheckOut
