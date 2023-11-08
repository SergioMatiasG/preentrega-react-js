import React from 'react'
import style from './style.module.css'
import { Button } from '@nextui-org/react'

const ItemQuantitySelector = ({citem , quantity , sumar , restar}) => {

    return (
        <div className={style.contenedorbotones}>
            <p>Stock : {citem.stock}</p>
            <Button className={style.botonnextchico} onClick={restar} >-</Button>
            <p>{quantity}</p>
            <Button className={style.botonnextchico} onClick={sumar} >+</Button>
        </div>
    )
}

export default ItemQuantitySelector
