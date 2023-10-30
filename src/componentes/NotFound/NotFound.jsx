import React from 'react'
import { Link } from 'react-router-dom'
import style from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={style.centradonotfaound}>
            <h1 className={style.titulonotfound}>Caracteristicas no encontradas</h1>
            <p>Puede volver a {<Link className={style.linknotfound} to={`/`}>Home</Link>} o {<Link className={style.linknotfound} to={'/productos'}>Productos</Link>}</p>
        </div>
    )
}
export default NotFound