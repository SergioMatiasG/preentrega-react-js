import { useEffect, useState } from "react"
import SkeletonS from "../skeleton/Skeleton"
import Items2 from "../Items/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"
import { data } from "autoprefixer"

const ItemListContainer = () => {
    const [products, setPorducts] = useState([])
    const { nombreCategoria } = useParams()

   

    useEffect(() => {
        let url = nombreCategoria
        ? `https://fakestoreapi.com/products/category/${nombreCategoria}`
        : `https://fakestoreapi.com/products`
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPorducts(data))
        console.log(data)
    }, [nombreCategoria])

    if (!products.length) return <SkeletonS />

    return (
        <div className="contenedor-productos">
            <h1 className="titulo-productos">Productos</h1>
            <div className="gap-20 grid grid-cols-2 sm:grid-cols-4 ">
                {products.map((p) => (<Items2 key={p.id} item={p} />))}
            </div>
        </div>
    )
}
export default ItemListContainer