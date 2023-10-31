import { Badge } from "@nextui-org/react";
import { CartIcon } from "./CartIcon";
import { useCart } from "../Context/CartProvider";

const CarWidget = () => {
  const {cart} = useCart()

  const totalDeProductos = cart.reduce((acc, productos) => acc + productos.quantity, 0)
  return (
    
      <Badge content={totalDeProductos} color="success">
        <CartIcon size={30} />
      </Badge>

  )
}

export default CarWidget