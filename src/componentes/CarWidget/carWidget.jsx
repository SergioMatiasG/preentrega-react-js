import {Badge} from 'antd';
import carrito from '../../assets/carrito.png'
const CarWidget = () =>{
    return(
      <a className='carrito' href="#">
        <Badge count={5} color = '#17FD03'>
          <img src={carrito} alt="carrito de compras" />
        </Badge>
      </a>
    )
}

export default CarWidget