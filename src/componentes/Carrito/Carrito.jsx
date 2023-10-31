import { useCart } from '../Context/CartProvider'
import style from './Carrito.module.css'
import ItemCarrito from '../Items/itemCarrito'
const Carrito = () => {
  const { cart, removeProductFromCart, updateQuantityInCart } = useCart()

  const precioTotalCompra = cart.reduce((total, producto) => {
    return total + (producto.product.price * producto.quantity)
  }, 0)


  return (
    <>
      <div className={style.centrado}>
        <h2 className={style.titulo}> Carrito de compras </h2>
      </div>
      <div>
        {cart.map((p, index) => (<ItemCarrito key={index} producto={p} borrarProductoCarrito={removeProductFromCart} cantidad={updateQuantityInCart} />))}
        <div className={style.preciototal}>
          <p>Precio total de la compra : $ {precioTotalCompra}</p>
        </div>
      </div>

    </>
  )
}
export default Carrito