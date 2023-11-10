// import { collection, getDocs, where, query } from 'firebase/firestore'
// import { db } from '../../Firebase/Client'
// import React, { useEffect, useState } from 'react'
// import { Button, Input , } from '@nextui-org/react'
// import Cargando from '../skeleton/Cargando'
// import style from './style.module.css'

// const OrdenDecompra = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [cargando, setCargando] = useState(true)
//     const [ordenes, setOrdenes] = useState([])

// useEffect(() => {
//       const ordernesRef = 
//       query(
//         collection(db, 'orders'),
//         where("email", "==", "guada@gmail.com")
//       )
//       getDocs(ordernesRef)
//         .then((snapshot) => {
//           if (snapshot.length > 0) {
//             setOrdenes(snapshot.docs.map((doc) => ({id: doc.id,...doc.data()})))
//           }
//         })
//         .catch((error) => {
//           console.error('Error al buscar órdenes:', error)
//         })
//         .finally(() => {
//           setCargando(false)
//         })
//   }, [searchTerm])
//     return (
//         <div className={style.contenedor}>
            
//             <form onSubmit={ev =>
//                 {ev.preventDefault()
//                     setSearchTerm(ev.target.search.value)  
//                 }}>
//                 <input className={style.input} type="text" name='search' autoComplete='off' />
//                 <button className={style.boton} type='submit'>Buscar</button>
//             </form>
//             {cargando ? (
//                 <Cargando />
//             ) : (
//                 <ul>
//                     {ordenes.map((orden) => (
//                         <li key={orden.id}>{/* Renderizar la información de la orden aquí */}</li>
//                     ))}
//                 </ul>
//             )}

//         </div>
//     )
// }

// export default OrdenDecompra

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../Firebase/Client'
import React, { useEffect, useState } from 'react'
import Cargando from '../skeleton/Cargando'
import ItemCheckOut from '../Items/ItemCheckOut'
import style from './style.module.css'

const CheckOut = () => {
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

export default CheckOut
