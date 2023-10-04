import './App.css'
import NavBar from './componentes/NavBar/navBar'
import CarruselPrincipal from './componentes/CarruselPrincipal/carruselPrincipal'
import Footer from './componentes/Footer/footer'
import Carrito from './componentes/Carrito/Carrito'

function App() {
  return (
    <div className='pagina-contenedor'>
      <div className='contenedor-wrap'>
        <NavBar />
        <CarruselPrincipal texto="¡Bienvenidos al templo!" />
        <Carrito />
      </div>
      <Footer />
    </div>
  )
}

export default App