import logoTemplo from '../../assets/logo.png'
import CarWidget from '../CarWidget/carWidget'
import './NavBar.css'

const NavBar = () =>{
    return (
        <div className="contenedor-navbar">
            <div className='contenedor-logo'>
                <img className='img-logo' src= {logoTemplo} alt="logo del ecommers"/>
            </div>
            <ul className="contenedor-listas">
                <li><a className="navbar-list" href="">Home</a></li>
                <li><a className="navbar-list" href="">Productos</a></li>
                <li><a className="navbar-list" href="">Contacto</a></li>
                <li className='navbar-list'><CarWidget/></li>
            </ul>
        </div>
    )
}

export default NavBar