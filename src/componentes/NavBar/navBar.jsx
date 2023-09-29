import logoTemplo from '../../assets/logo.png'
import CarWidget from '../CarWidget/carWidget'

const NavBar = () =>{
    return (
        <div className="contenedor-navbar">
            <img src= {logoTemplo} alt="logo del ecommers"/>
            <div className="contenedor-listas">
                <li><a className="ancors" href="">Home</a></li>
                <li><a className="ancors" href="">Productos</a></li>
                <li><a className="ancors" href="">Contacto</a></li>
                <li><CarWidget/></li>
            </div>
        </div>
    )
}

export default NavBar