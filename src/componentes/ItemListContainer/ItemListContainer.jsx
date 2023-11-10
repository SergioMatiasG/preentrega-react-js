import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SkeletonS from "../skeleton/Skeleton"
import ItemsList from "../Items/ItemList"
import style from './ItemListContainer.module.css'
import { db } from "../../Firebase/Client"
import { collection, getDocs, query, where} from "firebase/firestore"

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


    if (!products.length) return <SkeletonS />

    return (
        <div className={style.contenedorproductos}>
            <h1 className={style.tituloproductos}>Productos</h1>
            <div className="gap-20 grid grid-cols-2 sm:grid-cols-4 ">
                {products.map((p, index) => (<ItemsList key={index} item={p} />))}
            </div>
        </div>
    )
}
export default ItemListContainer