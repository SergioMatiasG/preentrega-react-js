import './App.css'
import NavBar from './componentes/NavBar/navBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import CarruselPrincipal from './componentes/CarruselPrincipal/carruselPrincipal'
import Footer from './componentes/Footer/footer'
import { useState } from 'react'


function App() {
  const [carrito, setCarrito] = useState([])
  const [stock, setStock] = useState (5)
  const agregarAlCarrito = (cantidad) => {
    if ( cantidad > 0 && stock >= cantidad){
      const producto = {
        id: Date.now(),
        nombre: 'Ejemplo de producto',
        cantidad: cantidad
      }
      setCarrito([...carrito, producto])
      setStock (stock - cantidad)
      console.log(stock)
    }

    }
    

  return (
    <div className='pagina-contenedor'>
      <div className='contenedor-wrap'>
        <NavBar />
        <CarruselPrincipal texto="¡Bienvenidos al templo!" />
        <div className='contenedor-list-carrito'>
          <h1>Carrito de compras</h1>
          <ul>
            {carrito.map((producto) => (
              <li key={producto.id}>
                {producto.nombre} - Cantidad: {producto.cantidad}
              </li>
            ))}
          </ul>
          <ItemListContainer stock={stock} inicio={1} onAdd={agregarAlCarrito} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App