import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='centrado-notfaound'>
            <h1 className='titulo-notfound'>Caracteristicas no encontradas</h1>
            <p>Puede volver a {<Link className='link-notfound' to={`/`}>Home</Link>} o {<Link className='link-notfound' to={'/productos'}>Productos</Link>}</p>
        </div>
    )
}
export default NotFound