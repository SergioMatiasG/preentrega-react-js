import React, { useEffect, useState } from 'react'
import ItemDetail from '../Items/ItemDetail'
import Cargando from '../skeleton/Cargando'
import style from './ItemDetailContainer.module.css'
import { useParams } from 'react-router-dom'
import { db } from "../../Firebase/Client"
import { doc, getDoc} from "firebase/firestore"




const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const [cargando, setCargando] = useState(true)
    const { id } = useParams()
    useEffect(() => {

        const productRef = doc(db, "productos", id)
        getDoc(productRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setItem({ id: snapshot.id, ...snapshot.data() })
                }
            })
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