import { useCart } from '../Context/CartProvider'
import style from './Carrito.module.css'
import ItemCarrito from '../Items/itemCarrito'
const Carrito = () => {
const {cart} = useCart()

    return (
      <>
      <div className={style.centrado}>
        <h2 className={style.titulo}> Carrito de compras </h2>
      </div>
      <ItemCarrito producto={cart} />
      </>
    )
}
export default Carrito