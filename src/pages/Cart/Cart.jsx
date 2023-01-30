import './Cart.css'
import LogoCanasta from '../../img/LogoCanasta.png'
import LogoCanastaFull from '../../img/LogoCanastaFull.png'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const Cart = () => {
  const [cart, setCart] = useContext(CartContext)
  const precioTotal = cart.reduce((acc, curr) => acc + curr.precio, 0)

	return (
		<div className='cart'>
			<div className='cart-sup'>
				<img src={cart.length > 0 ? LogoCanastaFull : LogoCanasta} />
				<h2>CANASTA DE COMPRAS</h2>
			</div>
			<>
				{cart.length > 0 
					? 
						<>
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
						</>
					: 
						<h3>Incorpore productos a su compra</h3>
				}
			</>
		</div>
	)
}

export default Cart