import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBarNext from './componentes/NavBarNext/NavBarNext'
import Home from './componentes/Home/home'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import Carrito from './componentes/Carrito/Carrito'
import NotFound from './componentes/NotFound/NotFound'
import Footer from './componentes/Footer/footer'
import CartProvider from './componentes/Context/CartProvider'
import Formulario from './componentes/Formulario/Formulario'
import CheckOut from './componentes/CheckOut/CheckOut'
import OrdenDecompra from './componentes/OrdenDeCompra/OrdenDecompra'

function App() {
  return (
    <div className='pagina-contenedor'>
      <div className='contenedor-wrap'>
        <CartProvider>
          <BrowserRouter>
            <NavBarNext />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/productos' element={<ItemListContainer />} />
              <Route path='/productos/:nombreCategoria' element={<ItemListContainer />} />
              <Route path='/formulario' element={<Formulario />} />
              <Route path='/ordenes' element={<OrdenDecompra />} />
              <Route path='/ordenes/:ordenId' element={<CheckOut />} />
              <Route path='/carrito' element={<Carrito />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </div>
      <Footer />
    </div>
  )
}

export default App