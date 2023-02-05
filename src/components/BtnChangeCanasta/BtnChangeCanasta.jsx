import './BtnChangeCanasta.css'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const BtnChangeCanasta = ({ nombre, precio, imagen, id }) => {
    const [cart, setCart] = useContext(CartContext)
    const product = { nombre: nombre, precio: precio, imagen: imagen, id: id }
    
    const addCartItem = () => {
        setCart(curr => [...curr, product])
    }

    return (
        <div className='add-container'>
        {(cart.filter((x) => x.nombre == nombre)).length == 0 ? (
            <button className='btn-add-product' onClick={addCartItem}>
                <p>+ CANASTA</p>
            </button>
        ) : 
            <div className='add-variant'>
                <div className='add-quantity'>
                    <button onClick={addCartItem}>+</button>
                    <p><span>{(cart.filter((x) => x.nombre == nombre)).length}</span> en Canasta</p>
                    <button>-</button>
                </div>
                <button className='remove' onClick={()=> removeCartItem(id)}>Eliminar</button>
            </div> 
        }
    </div>
    )
}

export default BtnChangeCanasta