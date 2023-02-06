import './CheckOut.css'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, RadioGroup, Radio, Stack, InputLeftAddon, InputGroup, Tooltip } from '@chakra-ui/react'
import PackageLogo from '../../img/Package.png'
import Return from '../../img/Return.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CheckOut = () => {
	const [cart, setCart] = useContext(CartContext)

  return (
		<>
			{cart.length > 0
			?
				<div className='cart'>
					<div className='checkout-header'>
						<div className='cart-sup'>
							<img src={PackageLogo} />
							<div className='checkout-title'>
								<h2>CHECK OUT</h2>
								<h3>Complete el siguiente formulario para finalizar su compra:</h3>
							</div>
						</div>
						<Tooltip hasArrow label='Volver a CANASTA' bg='#634f31'>
							<Link to='/canasta' className='return'>
								<img src={Return}/>
							</Link>
        		</Tooltip>
					</div>	
					<section className='checkout-form'>
						<FormControl>
							<FormLabel>Nombre/s:</FormLabel>
							<Input type='name' placeholder='Ingrese su nombre'/>
							<FormLabel>Apellido/s:</FormLabel>
							<Input type='last-name' placeholder='Ingrese su apellido'/>
							<FormLabel>Fecha de nacimiento:</FormLabel>
							<Input type='date'/>
							<FormLabel>Teléfono:</FormLabel>
							<InputGroup>
								<InputLeftAddon children='+54' />
								<Input type='tel' placeholder='Ingrese un número de teléfono'/>
							</InputGroup>
							<FormLabel>Domicilio:</FormLabel>
							<Input type='adress' placeholder='Ingrese la dirección del envío'/>
							<FormLabel>	CP:</FormLabel>
							<Input type='code' placeholder='Ingrese el código postal'/>
							<FormLabel>Correo electrónico:</FormLabel>
							<Input type='email' placeholder='Ingrese su dirección de email'/>
							<FormLabel>Método de pago:</FormLabel>
							<RadioGroup defaultValue='1'>
								<Stack spacing={5} direction='row'>
									<Radio value='1'>Tarjeta de Crédito</Radio>
									<Radio value='2'>Tarjeta de Débito</Radio>
									<Radio value='3'>Mercado Pago</Radio>
								</Stack>
							</RadioGroup>
						</FormControl>
					</section>
				</div>
			:
				<h2>No hay artículos en su canasta. Para ver nuestros productos disponibles diríjase a <Link to='/productos' style={{ fontWeight: 'bold', color: '#A98754' }}>AQUÍ</Link>.</h2>
			}
		</>
  )
}

export default CheckOut