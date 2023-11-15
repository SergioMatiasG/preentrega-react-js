import React from 'react'
import style from './style.module.css'

const Desciption = ({producto}) => {
    return (
        <div className={style.contenedordetallesimagen}>
            <div className={style.imagendetails}>
                <img src={producto.image} alt={producto.title} />
            </div>
            <p>Descripcion: {producto.description}</p>
        </div>
    )
}

export default Desciption
