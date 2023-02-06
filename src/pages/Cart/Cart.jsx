import './Cart.css'
import LogoCanasta from '../../img/LogoCanasta.png'
import LogoCanastaFull from '../../img/LogoCanastaFull.png'
import Comprar from '../../img/Comprar.png'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from '@chakra-ui/react'

const Cart = () => {
  const [cart, setCart] = useContext(CartContext)
  const precioTotal = cart.reduce((acc, curr) => acc + curr.precio, 0)

	const removeCartItem = (nombre) => {
		const arr = cart.filter((i) => i.nombre !== nombre)
		setCart(arr)
	}

	const cantItem = (item) => {
		const cantidad = (cart.filter((x) => x.nombre == item.nombre)).length
		return cantidad
	}

	// Utilizar una función para recorrer cart e iterar para encontrar todos los objetos que tengan el mismo nombre ???

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
										<th>Cantidad</th>
										<th>Productos</th>
										<th>Precio</th>
										<th>Eliminar</th>
									</tr>
								</thead>
								<tbody>
									{cart.map((item) => {
											return (
											<tr>
												<td>{cantItem(item)}</td>
												<td className='column-1'>
													<div className='table-product'>
														<img src={item.imagen} />
														{item.nombre}
													</div>
												</td>
												<td>${item.precio}</td>
												<td>
													<button className='btn-eliminar' onClick={()=> removeCartItem(item.nombre)}>X</button>
												</td>
											</tr>
											) 
									})}
								</tbody>
							</table>
							<h3>Total: $ {precioTotal}</h3>
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