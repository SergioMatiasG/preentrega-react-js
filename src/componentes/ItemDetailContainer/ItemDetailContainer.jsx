import React, { useEffect, useState } from 'react'
import ItemDetail from '../Items/ItemDetail'
import Cargando from '../skeleton/Cargando'
import style from './ItemDetailContainer.module.css'
import { useParams } from 'react-router-dom'




const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()
    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(r => r.json())
            .then(data => setItem(data))
            .catch(error => console.error(error))
            .finally(() => setCargando(false))

    }, [id])
    return (

        <div className={style.itemdetailcontenedor}>
            <>
                {
                    cargando
                        ? <Cargando />
                        : <ItemDetail item={item} />
                }

            </>
        </div>
    )
}

export default ItemDetailContainer