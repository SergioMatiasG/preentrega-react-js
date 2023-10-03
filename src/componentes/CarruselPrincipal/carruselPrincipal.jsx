import React from 'react'
import { Carousel } from 'antd'
import Pcgamer1 from '../../assets/pcgamer.jpg'
import Pcgamer2 from '../../assets/pcgamer2.jpg'

const CarruselPrincipal = () => {
  return (
        <Carousel autoplay>
        <div>
            <div className='contenedor-carrusel'>
                <a  className="a-carrusel" href="">
                    <img className='img-carrusel' src={Pcgamer1} alt="imagen de arma tu pc" />
                    <div className="carrusel-texto">
                        <h4 className="carrusel-text__titulo">Arma <br /> tu PC</h4>
                        <div className='carrusel-contenedor-texto'>
                            <p className="carrusel-text__parrafo">Crea la PC que</p>
                            <p className="carrusel-text__parrafo">siempre quisiste</p>
                        </div>
                    </div>  
                </a>
                </div>
            </div>
            <div>
            <div className='contenedor-carrusel'>
                <a className='a-carrusel' href="">
                    <img className='img-carrusel' src={Pcgamer2} alt="imagen de pcs armadas" />
                    <div className="carrusel-texto">
                        <h4 className="carrusel-text__titulo">PCs <br /> Armadas</h4>
                        <div className='carrusel-contenedor-texto'>
                            <p className="carrusel-text__parrafo">Elige una de</p>
                            <p className="carrusel-text__parrafo">las nuestras</p>
                        </div>
                    </div>
                </a>
                
            </div>
        </div>
        </Carousel>
  )
}
export default CarruselPrincipal