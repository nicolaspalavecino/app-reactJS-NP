import '../styles/NavBar.css'
import { NavBarMenu } from './NavBarMenu';
import BtnMenu from './BtnMenu';
import LogoCalderoHumeante from '../img/LogoCalderoHumeante.png';


const NavBar = () => {
    return (
    <nav>
        <div className='titulo-container'>
            <img src={LogoCalderoHumeante} className='logo-caldero'/>
        </div>
        <div className='navbar-container'>
            <div className='menu-icon'>
                <BtnMenu />
            </div>
            <ul>
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