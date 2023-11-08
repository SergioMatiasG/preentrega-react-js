import React from 'react'
import { Button } from '@nextui-org/react'
import style from './style.module.css'

const AddItemButton = ({agregar}) => {
    return (
        <div className={style.contenedorac}>
            <Button className={style.botonnextdetailbbc} >Comprar ahora</Button>
            <Button className={style.botonnextdetail} onClick={agregar}>Agregar al carrito</Button>
        </div>
    )
}

export default AddItemButton
