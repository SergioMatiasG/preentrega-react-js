import { useEffect, useState } from "react"
import SkeletonS from "../skeleton/Skeleton";
import { Spinner } from "@nextui-org/react";
import { Item } from "../item/Item"
import img from './pcgameralta.png'
import './ejerciciot.css'
import { Skeleton } from "antd";

const Ejerciciot = () => {

    const [products, setPorducts] = useState([])

    const promesa = new Promise((res, rej) => {
        const productos = [
            { name: "teclado", precio: 23000, id: 1, img: { img } },
            { name: "pantalla", precio: 12000, id: 2, img: "" },
            { name: "mouse", precio: 25000, id: 3, img: "" },
            { name: "auricualres", precio: 1000, id: 4, img: "" },
            { name: "grafica", precio: 204000, id: 5, img: "" },
            { name: "procesador", precio: 52000, id: 6, img: "" },
        ]
        setTimeout(() => {
            productos.length > 0 ? res(productos) : rej(`No hay productos`)
        }, 5000)
    })
    useEffect(() => {
        promesa
            .then(r => setPorducts(r))
            .catch(e => console.error(e))
    }, [])


    if(!products.length)return <SkeletonS />
    return (
        <div className="contenedor-productos">
            <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
                {products.map((p) => (<Item key={p.id} item={p} />))}
            </div>
        </div>

    )
}
export default Ejerciciot