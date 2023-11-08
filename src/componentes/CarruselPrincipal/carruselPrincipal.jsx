import React from 'react'
import { Carousel } from 'antd'
import Pcgamer1 from '../../assets/pcgamer.jpg'
import Pcgamer2 from '../../assets/pcgamer2.jpg'
import style from './CarruselPrincipal.module.css'

const CarruselPrincipal = ({ texto }) => {

    return (
        <div className={style.cajacarrusel}>
            <h1 className={style.textoejemplo}>{texto}</h1>
            <Carousel className={style.antcarousel} autoplay>
                <div>
                    <div className={style.contenedorcarrusel}>
                        <a className={style.acarrusel} href="">
                            <img className={style.imgcarrusel} src={Pcgamer1} alt="imagen de arma tu pc" />
                            <div className={style.carruseltexto}>
                                <h4 className={style.carruseltexttitulo}>Arma <br /> tu PC</h4>
                                <div className={style.carruselcontenedortexto}>
                                    <p className={style.carruseltextparrafo}>Crea la PC que</p>
                                    <p className={style.carruseltextparrafo}>siempre quisiste</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div>
                    <div className={style.contenedorcarrusel}>
                        <a className={style.acarrusel} href="">
                            <img className={style.imgcarrusel} src={Pcgamer2} alt="imagen de pcs armadas" />
                            <div className={style.carruseltexto}>
                                <h4 className={style.carruseltexttitulo}>PCs <br /> Armadas</h4>
                                <div className={style.carruselcontenedortexto}>
                                    <p className={style.carruseltextparrafo}>Elige una de</p>
                                    <p className={style.carruseltextparrafo}>las nuestras</p>
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