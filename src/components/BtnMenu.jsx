import '../styles/NavBar.css';
import { useState } from 'react';
import Ham from '../img/ham.png';
import Cross from '../img/cross.png';

const BtnMenu = () => {
    
    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }

    return (
        <button className='hamburger-menu' onClick={handleClick}>
            <img src={menu ? Cross : Ham} />
        </button> 
    )
}

export default BtnMenu