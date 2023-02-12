import './HandleCartItem.css'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const HandleCartItem = ({ nombre, precio, imagen, id }) => {
    const [cart, setCart] = useContext(CartContext)
    const product = { nombre: nombre, precio: precio, imagen: imagen, id: id }
    
	const addCartItem = (id) => {
		setCart((curr) => {
			const itemFound = curr.find((item) => item.id === id)
			if (itemFound) {
				return curr.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity + 1 } 
					} else {
						return item
					}
				})
			} else {
				return [...curr, { ...product, quantity : 1 }]
			}
		})
	}

	const decreaseCartItem = (id) => {
		setCart((curr) => {
			if (curr.find((item) => item.id === id)?.quantity === 1) {
				return curr.filter((item) => item.id !== id)
			} else {
				return curr.map((item) => {
					if(item.id === id) {
						return {...item, quantity: item.quantity - 1}
					} else {
						return item
					}
				})
			}
		})
	}

	const removeCartItem = (id) => {
		const curr = cart.filter((item) => item.id !== id)
		setCart(curr)
	}

	const getQuantityById = (id) => {
		return cart.find((item) => item.id === id)?.quantity || 0
	}

	const quantityPerItem = getQuantityById(id)

    return (
        <div className='add-container'>
        { quantityPerItem === 0 ? (
            <button className='btn-add-product' onClick={()=> addCartItem(id)}>
                <p>+ CANASTA</p>
            </button>
        ) : (
            <div className='add-variant'>
                <div className='add-quantity'>
                    <button onClick={() => addCartItem(id)}>+</button>
                    <p style={{ color: {span} }}>{quantityPerItem} en Canasta</p>
                    <button onClick={() => decreaseCartItem(id)}>-</button>
                </div>
                <button className='remove' onClick={() => removeCartItem(id)}>Eliminar</button>
            </div>
		)}
    </div>
    )
}

export default HandleCartItem