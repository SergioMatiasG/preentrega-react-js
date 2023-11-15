
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../Firebase/Client'
import React, { useEffect, useState } from 'react'
import Cargando from '../skeleton/Cargando'
import ItemCheckOut from '../Items/ItemCheckOut'
import style from './style.module.css'

const OrdenDeCompra = () => {
    const [ordenes, setOrdenes] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {

        const ordenRef = collection(db, "orders")

        getDocs(ordenRef)
            .then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log('No hay productos')
                }
                setOrdenes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), })))
            })
            .catch(e => console.error(e))
            .finally(() => setCargando(false))


    }, [ordenes])

    return (
        <div className={style.checkoutcontenedor}>

            <h1 className={style.titulo} >Ordenes de compra</h1>
                {
                    cargando
                        ? <Cargando />
                        : <>
                            {ordenes.map((p, index) => (<ItemCheckOut key={index} item={p} />))}
                          </>
                }
        </div>
    )
}

export default OrdenDeCompra
