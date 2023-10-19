import React, { useEffect, useState } from 'react'
import ItemDetail from '../Items/ItemDetail'
import Cargando from '../skeleton/Cargando'
import'./ItemDetailContainer.css'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {
    const [item, setItem] = useState()
    const {id} = useParams ()
    useEffect(() => {

            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(r => r.json())
                .then(data => setItem(data))
                .catch(error => console.error(error))

    }, [id])
    
    if (!item) return <Cargando />

    return (

        <div className='itemdetail-contenedor'>
            <>{
                item ?( <ItemDetail item={item} />) : ( <p> El producto con id:{id} no existe</p>)
            }
            </>
        </div>
    )
}

export default ItemDetailContainer