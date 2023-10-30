import React from 'react'
import { Spinner } from '@nextui-org/react'
import style from './Cargando.module.css'

const Cargando = () => {
  return (
    
    <div className={style.contenedorcargando}>
        <Spinner label="Cargando" color="success" labelColor="success" size='lg'/>
    </div>
  )
}
export default Cargando