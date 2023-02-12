import './Cart.css'
import LogoCanasta from '../../img/LogoCanasta.png'
import LogoCanastaFull from '../../img/LogoCanastaFull.png'
import Comprar from '../../img/Comprar.png'
import { CartContext } from '../../context/CartContext'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from '@chakra-ui/react'
import HandleCartItem from '../../components/HandleCartItem/HandleCartItem'

const Cart = () => {
  const [cart, setCart] = useContext(CartContext)

	const totalPrice = cart.reduce((acc, curr) => {
		return acc + curr.quantity * curr.precio
	}, 0)

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
										<th>Cantidad</th>
										<th>Precio</th>
									</tr>
								</thead>
								<tbody>
									{cart.map((cartItem) => {
											return (
											<tr key={cartItem.id}>
												<td className='column-1'>
													<div className='table-product'>
														<img src={cartItem.imagen} />
														{cartItem.nombre}
													</div>
												</td>
												<td>
													<HandleCartItem
														key={cartItem.id}
														id={cartItem.id}
														nombre={cartItem.nombre}
														precio={cartItem.precio}
														imagen={cartItem.imagen}
													/>
												</td>
												<td>${cartItem.precio * cartItem.quantity}</td>
											</tr>
											) 
									})}
								</tbody>
							</table>
							<h3 className='total-price'>Total: $ {totalPrice}</h3>
							<div className='comprar-container'>
								<Tooltip hasArrow label='COMPRAR' bg='#634f31'>
									<Link to={'/checkout'} className='return btn-comprar'>
										<img src={Comprar} />
									</Link>
        						</Tooltip>
							</div>
						</>
					: 
						<h3>No hay artículos en su canasta. Para ver nuestros productos disponibles diríjase a <Link to='/productos' style={{ fontWeight: 'bold', color: '#A98754' }}>aquí</Link>.</h3>
				}
			</>
		</div>
	)
}

export default Cart