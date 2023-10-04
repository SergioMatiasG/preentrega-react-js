import React from 'react'
import { Carousel } from 'antd'
import Pcgamer1 from '../../assets/pcgamer.jpg'
import Pcgamer2 from '../../assets/pcgamer2.jpg'
import './CarruselPrincipal.css'

const CarruselPrincipal = ({ texto }) => {

    return (
        <div className='caja-carrusel'>
            <h1 className="texto-ejemplo">{texto}</h1>
            <Carousel autoplay>
                <div>
                    <div className='contenedor-carrusel'>
                        <a className="a-carrusel" href="">
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
        </div>

    )
}
export default CarruselPrincipal