import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"


const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="logo"><h1 className="logo">Fit Market</h1></Link>

            <ul className="menu">
                
                <li><Link className="menu-link" to="/Productos">Productos</Link></li>
                <li><Link className="menu-link" to="/Productos/Parva">Parva</Link></li>
                <li><Link className="menu-link" to="/Productos/Snacks">Snacks</Link></li>
                <li><Link className="menu-link" to="/Productos/Refrigerados">Refrigerados</Link></li>
                <li><Link className="menu-link" to="/Contacto">Contacto</Link></li>
                <li><CartWidget/></li>
            
            </ul>
            
        </nav>
    )
}


export default NavBar