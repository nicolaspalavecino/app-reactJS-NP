import './Cart.css'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const Cart = () => {
  const [cart, setCart] = useContext(CartContext)
  const precioTotal = cart.reduce((acc, curr) => acc + curr.precio, 0)

  if (cart.length > 0) {
    return (
      <div className='cart'>
				<h2>CANASTA DE COMPRAS</h2>
        <table>
          <thead>
            <tr>
							<th>Productos</th>
							<th>Precio</th>
							<th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
						{cart.map((item) => {
								return (
								<tr>
									<td className='column-1'>
										<div className='table-product'>
											<img src={item.imagen} />
											{item.nombre}
										</div>
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
				<div className='cart'>
					<h2>CANASTA DE COMPRAS</h2>
					<h3>Incorpore productos a su compra</h3>
				</div>
    )
  }
}


export default Cart