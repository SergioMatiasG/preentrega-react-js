import './App.css'
import CarruselPrincipal from './componentes/CarruselPrincipal/carruselPrincipal'
import Footer from './componentes/Footer/footer'
import Carrito from './componentes/Carrito/Carrito'
import Ejerciciot from './componentes/ejerciciopreentrega/ejerciciot'
import NavBarNext from './componentes/NavBarNext/NavBarNext'
import Swiper from './componentes/swiper/Swiper'
function App() {
  return (
    <div className='pagina-contenedor'>
      <div className='contenedor-wrap'>
        <NavBarNext />
        <CarruselPrincipal texto="¡Bienvenidos al templo!" />
        <Swiper />
        <Carrito />
        <Ejerciciot />
      </div>
      <Footer />
    </div>
  )
}

export default App