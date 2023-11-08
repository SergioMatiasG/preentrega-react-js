import React from 'react'
import style from './formulario.module.css'

const Formulario = () => {
  return (
    <div className={style.contenedorcentrado}>
        <h1 className={style.titulo}>Formulario de contacto</h1>
     <form action="" className={style.contenedorformulario}>
        <label htmlFor="name">Nombre completo:</label>
        <input type="text" name='name' id='name' placeholder='Ej: Sergio Matias Guaymas' />
        <label htmlFor="email">Corre Electronico:</label>
        <input type="text" name='email' id='email' placeholder='Ej: sergio@gmail.com' />
        <label htmlFor="phone"> Telefono:</label>
        <input type="numb"name='phone' id='phone' placeholder='Ej:+54 223 5648976'/>
     </form>
      
    </div>
  )
}

export default Formulario
