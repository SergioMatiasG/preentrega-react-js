import './App.css'
import NavBar from './componentes/NavBar/navBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Footer  from './componentes/Footer/footer'
import CarruselPrincipal from './componentes/CarruselPrincipal/carruselPrincipal'

function App() {

  return (
    <div className='pagina-contenedor'>
      <div className='contenedor-wrap'>
        <NavBar />
        <ItemListContainer texto= "!Bienvenidos al Templo!"/>
        <CarruselPrincipal />
      </div>
      <Footer />
    </div>
  )
}

export default App