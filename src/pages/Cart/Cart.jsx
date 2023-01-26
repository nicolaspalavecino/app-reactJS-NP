import './Cart.css'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const Cart = () => {
  const [cart, setCart] = useContext(CartContext)
  const precioTotal = cart.reduce((acc, curr) => acc + curr.precio, 0)
	
  if (cart.length > 0) {
    return (
      <div className='cart'>
        <table>
          <thead>
            <tr>
							<th>Cant</th>
							<th>Productos</th>
							<th>Precio</th>
							<th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
						{cart.map((item) => {
								return (
								<tr>
										<td>-</td>
										<td className='table-product'>
											<img src={item.imagen} />
											{item.nombre}
										</td>
										<td>${item.precio}</td>
										<td>
											<button className='btn-eliminar'>X</button>
										</td>
								</tr>
								) 
						})}
          </tbody>
        </table>
				<tfoot>
					<h3>Total: $ {precioTotal}</h3>
					<button>Comprar</button>
				</tfoot>
      </div>
		)
  } else {
		return (
				<div className='cart-vacio-container'>
					Incorpore productos a su compra
				</div>
    )
  }
}


export default Cart