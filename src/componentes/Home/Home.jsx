import React from 'react'
import CarruselPrincipal from '../CarruselPrincipal/carruselPrincipal'
import Swiper from '../CarruselSecundarios/Swiper'

const Home = () => {
  return (
    <>
    <CarruselPrincipal texto="¡Bienvenidos al templo!" />
    <Swiper titulo="Perifericos" categoria="perifericos" />
    <Swiper titulo="Motherboards" categoria="motherboards" />
    <Swiper titulo="Procesadores" categoria="procesadores" />
    <Swiper titulo="Placas de video" categoria="placas de video" />
    </>
    
  )
}

export default Home