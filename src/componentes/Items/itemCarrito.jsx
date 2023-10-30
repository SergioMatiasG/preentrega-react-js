import React from 'react'
import style from './style.module.css'
import { Button, Divider } from '@nextui-org/react'

const ItemCarrito = ({ producto }) => {
    return (
        <div>
            {producto.map((p) => (
                <div key={p.product.id}>
                    <Divider className="my-4" />
                    <div className={style.contenedoritemcarrito}>
                        <div className={style.cotenedorimgcarrito}>
                            <img src={p.product.image} alt={p.product.tittle} />
                        </div>
                        <div className={style.comtenedortextocarrito}>
                            <h3 className={style.titulocarrito}>{p.product.title}</h3>
                            <div className={style.centradotextocarrito}>
                                <p>Precio: ${p.product.price}</p>
                                <p>Catandidad : {p.quantity}</p>
                            </div>
                            <div className={style.contenedorbotoncarrito}>
                                <Button className={style.botoncarrito}>Comprar Ahora</Button>
                            </div>
                        </div>
                    </div>
                    <Divider className="my-4" />
                </div>

            ))}

        </div>
    )
}

export default ItemCarrito
