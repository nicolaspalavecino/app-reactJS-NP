import '../styles/NavBar.css'
import { NavBarMenu } from './NavBarMenu';
import LogoCalderoHumeante from '../img/LogoCalderoHumeante.png';
import { useState } from 'react';
import { ImCross } from 'react-icons/im';
import { ImMenu } from 'react-icons/im';
// import LogoCanasta from '../img/LogoCanasta.png'
import Canasta from './Canasta';

const NavBar = () => {

    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }

    return (
    <nav>
        <div className='titulo-container'>
            <img src={LogoCalderoHumeante} className='logo-caldero'/>
        </div>
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
                {NavBarMenu.map((item, index)=> {
                    return (
                        <li key={index}>
                            <a href={item.url} className={item.cName}>{item.titulo}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    </nav>
    )
};

export default NavBar

