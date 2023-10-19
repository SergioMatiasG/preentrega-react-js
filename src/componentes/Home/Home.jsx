import React from 'react'
import CarruselPrincipal from '../CarruselPrincipal/carruselPrincipal'
import Swiper from '../CarruselSecundarios/Swiper'

const Home = () => {
  return (
    <>
    <CarruselPrincipal texto="¡Bienvenidos al templo!" />
    <Swiper titulo="Destacado" categoria="electronics" />
    <Swiper titulo="Componentes" categoria="jewelery" />
    <Swiper titulo="Marcas" categoria="men's clothing" />
    </>
    
  )
}

export default Home