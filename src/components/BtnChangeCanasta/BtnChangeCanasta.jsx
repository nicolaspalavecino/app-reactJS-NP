import './BtnChangeCanasta.css'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const BtnChangeCanasta = ({ nombre, precio, imagen }) => {
    const [cart, setCart] = useContext(CartContext)
    const product = { nombre: nombre, precio: precio, imagen: imagen }
    
    const addCart = () => {
        setCart(curr => [...curr, product])
    }
    const quantity = 0

    return (
        <div className='add-container'>
        {quantity === 0 ? (
            <button className='btn-add-product' onClick={addCart}>
                <p>+ CANASTA</p>
            </button>
        ) : 
            <div className='add-variant'>
                <div className='add-quantity'>
                    <button onClick={addCart}>+</button>
                    <p><span>{quantity}</span> en Canasta</p>
                    <button>-</button>
                </div>
                <button className='remove' onClick={()=> removeCartItem(id)}>Eliminar</button>
            </div> 
        }
    </div>
    )
}

export default BtnChangeCanasta