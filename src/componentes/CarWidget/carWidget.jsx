import { Badge } from "@nextui-org/react";
import { CartIcon } from "./CartIcon";

const CarWidget = () => {
  return (
    
      <Badge content={5} color="success">
        <CartIcon size={30} />
      </Badge>

  )
}

export default CarWidget