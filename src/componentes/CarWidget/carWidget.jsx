import { Badge } from "@nextui-org/react";
import { CartIcon } from "./CartIcon";
const CarWidget = () => {
  return (
    <div className='carrito' href="#">
      <Badge content="9" color="success">
        <CartIcon size={30} />
      </Badge>
    </div>
  )
}

export default CarWidget