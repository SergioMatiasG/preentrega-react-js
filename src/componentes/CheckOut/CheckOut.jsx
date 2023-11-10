import React, { useEffect, useState } from 'react'
import ItemCheckOut from '../Items/ItemCheckOut'
import Cargando from '../skeleton/Cargando'
import style from './style.module.css'
import { db } from '../../Firebase/Client'
import { getDoc, doc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const CheckOut = () => {
    const [ordenCompra, setOrdenCompra] = useState ([])
    const [cargando, setCargando] = useState(true)
    const {ordenId} = useParams()

    useEffect(() => {

        const ordenRef = doc(db, "orders", ordenId)
        getDoc(ordenRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setOrdenCompra({ id: snapshot.id, ...snapshot.data() })
                }
            })
            .catch(error => console.error(error))
            .finally(() => setCargando(false))

    }, [ordenId])


    return (
        <div className={style.checkoutcontenedor}>

            <h1 className={style.titulo} >Ordenes de compra</h1>
            {
                cargando
                    ? <Cargando />
                    : <ItemCheckOut  item={ordenCompra}/>
            }
        </div>
    )
}

export default CheckOut
