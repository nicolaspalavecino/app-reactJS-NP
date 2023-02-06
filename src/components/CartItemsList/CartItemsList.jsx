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
            {cart.map((cartItem) => {
                return (
                    <>
                        <span>
                            - {cartItem.quantity} x {cartItem.nombre}
                        </span>
                    </>
                ) 
            })}
            </div>
            <span style={{ fontWeight: 'bold'}}>Total a Pagar: ${totalPrice}</span>
        </div>
    )
}

export default CartItemsList