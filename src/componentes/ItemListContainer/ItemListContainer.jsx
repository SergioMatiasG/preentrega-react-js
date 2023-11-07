import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SkeletonS from "../skeleton/Skeleton"
import ItemsList from "../Items/ItemList"
import style from './ItemListContainer.module.css'
import { db } from "../../Firebase/Client"
import { collection, getDocs, query, where, limit, addDoc } from "firebase/firestore"
import { Button } from "@nextui-org/react"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { nombreCategoria } = useParams()

    useEffect(() => {

        const productsRef = nombreCategoria
            ? query(collection(db, "productos"),
                where("categoryId", "==", nombreCategoria)
            ) 
            : collection(db, "productos")

        getDocs(productsRef)
            .then((snapshot) => {
                if (snapshot.size === 0) {
                    console.log("No hay producto")
                }
                setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), })))
            })
            .catch(e => console.error(e))
    }, [nombreCategoria])
    
//   const order = {
//     buyer: { name: "sergio", phone: "12123", email: "1231@12312.com" },
//     items: [{ title: "asdasd", price: 500 },
//     { title: "asdasd", price: 500 }],
//     total: {total}
//   }
//   const crearIrdenDeCompra = () =>{
//     const refOrder = collection(db,"orders")
//     addDoc(refOrder, order).then(({id}) => console.log(id))
//   }
    if (!products.length) return <SkeletonS />

    return (
        <div className={style.contenedorproductos}>
            <h1 className={style.tituloproductos}>Productos</h1>
            <div className="gap-20 grid grid-cols-2 sm:grid-cols-4 ">
                {products.map((p) => (<ItemsList key={p.id} item={p} />))}
            </div>
            {/* <div>
                <Button onClick={crearIrdenDeCompra}>Crear Orden</Button>
            </div> */}
        </div>
    )
}
export default ItemListContainer


// useEffect(() => {
//     let url = nombreCategoria
//     ? `https://fakestoreapi.com/products/category/${nombreCategoria}`
//     : `https://fakestoreapi.com/products`
//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => setPorducts(data))
// }, [nombreCategoria])






// const productRef = doc(db, "productos","Fc33jXrVbK3WdqSwvcXb")
// getDoc(productRef)
// .then((snapshot) =>{
//     if(snapshot.exists()){
//         console.log({id: snapshot.id, ...snapshot.data()})
//     }
// })

// const productsRef = collection(db, "productos")
// getDocs(productsRef)
// .then(snapshot =>{
//     setPorducts(snapshot.docs.map(doc =>({id: doc.id, ...doc.data()})))
// })
// .catch(e => console.error(e))