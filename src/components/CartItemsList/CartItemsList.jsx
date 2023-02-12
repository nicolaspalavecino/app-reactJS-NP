import './CartItemsList.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItemsList = () => {
    const [cart, setCart] = useContext(CartContext)

	const totalPrice = cart.reduce((acc, curr) => {
		return acc + curr.quantity * curr.precio
	}, 0)
    
    return (
        <div className='products-list'>
            <h3 style={{ fontFamily: 'Rye'}}>Compra:</h3>
            <div className='cart-items-list'>
                <ul>
                    {cart.map((cartItem) => {
                        return (
                            <li key={cartItem.id}>
                                {cartItem.quantity} x {cartItem.nombre}
                            </li>
                        ) 
                    })}
                </ul>
            </div>
            <span style={{ fontWeight: 'bold'}}>TOTAL a pagar: ${totalPrice}</span>
        </div>
    )
}

export default CartItemsList