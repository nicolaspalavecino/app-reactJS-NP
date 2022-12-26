import '../styles/NavBar.css'
import LogoCalderoHumeante from '../img/LogoCalderoHumeante.png'
import { useState } from 'react'
import { ImCross, ImMenu } from 'react-icons/im'
import Canasta from './Canasta'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar = () => {
    const [menu, setMenu] = useState(false)
    const handleClick = () => { setMenu(!menu) }

    return (
    <nav>
        <Link to='/'>
            <div className='titulo-container'>
                <img src={LogoCalderoHumeante} className='logo-caldero'/>
            </div>
        </Link>
        <div className='navbar-container'>
            <div className='carrito-container'>
                <Canasta />
            </div>
            <div className='menu-icon'>
                <button className='hamburger-menu' onClick={handleClick}>
                    {menu ? <ImCross className='icono-menu'/> : <ImMenu className='icono-menu'/>}
                </button>
            </div>
            <ul className={menu ? "nav-menu active" : "nav-menu"}>
                <CustomLink to='/nosotros'>NOSOTROS</CustomLink>
                <CustomLink to='/productos'>PRODUCTOS</CustomLink>
                <CustomLink to='/contacto'>CONTACTO</CustomLink>
            </ul>
        </div>
    </nav>
    )
}

const CustomLink = ({ to, children, ...props}) => {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li>
            <Link to={to} className={isActive ? 'nav-link active' : 'nav-link'}>{children}</Link>
        </li>
    )
}

export default NavBar

