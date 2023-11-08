import { useCart } from '../Context/CartProvider'
import style from './Carrito.module.css'
import ItemCarrito from '../Items/itemCarrito'
import { Button} from '@nextui-org/react'
import { Link } from 'react-router-dom'


const Carrito = () => {
  const { cart, removeProductFromCart, updateQuantityInCart } = useCart()

  const precioTotalCompra = cart.reduce((total, producto) => {
    return total + (producto.product.price * producto.quantity)
  }, 0)

  //   const order = {
  //     buyer: { name: "sergio", phone: "12123", email: "1231@12312.com" },
  //     items: [{ title: "asdasd", price: 500 },
  //     { title: "asdasd", price: 500 }],
  //     total: {total}
  //   }
  //   const crearIrdenDeCompra = () =>{
  //     const refOrder = collection(db,"orders")
  //     addDoc(refOrder, order).then(({id}) => console.log(id))
  //   }

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
      <div className={style.ordencompra}>
        <Button className={style.botonnext} >Crear Orden</Button>
        <Link to={`/ordenes`}>
          <Button className={style.botonnext} >Ver orden</Button>
        </Link>
      </div>
    </>
  )
}
export default Carrito