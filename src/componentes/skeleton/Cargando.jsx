import React from 'react'
import { Spinner } from '@nextui-org/react'
import './Cargando.css'

const Cargando = () => {
  return (
    <div className='contenedor-cargando'>
        <Spinner label="Cargando" color="success" labelColor="success" size='lg'/>
    </div>
  )
}
export default Cargando