import './CheckOut.css'
import { FormLabel,  Input, RadioGroup, Radio, Stack, InputLeftAddon, InputGroup, Tooltip, FormControl, FormHelperText, FormErrorMessage } from '@chakra-ui/react'
import PackageLogo from '../../img/Package.png'
import Return from '../../img/Return.png'
import LogoCheck from '../../img/LogoCheck.gif'
import LogoCruz from '../../img/LogoCruz.gif'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItemsList from '../../components/CartItemsList/CartItemsList'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../../db/firebase-config'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const CheckOut = () => {
	const [cart, setCart] = useContext(CartContext)
	const [inputName, setInputName] = useState('')
	const [inputPhone, setInputPhone] = useState('')
	const [inputLastName, setInputLastName] = useState('')
	const [inputIdentity, setInputIdentity] = useState('')
	const [inputAdress, setInputAdress] = useState('')
	const [inputPostalCode, setInputPostalCode] = useState('')
	const [inputEmail, setInputEmail] = useState('')
	const [iEmailConfirm, setIEmailConfirm] = useState('')
	const [inputPay, setInputPay] = useState('')

	const emailCorrect = inputEmail === iEmailConfirm && iEmailConfirm !== ''

	let navigate = useNavigate()

	const createOrder = async (e) => {
		e.preventDefault()
		if (emailCorrect === false) {
				Swal.fire({
					imageUrl: `${LogoCruz}`,
					imageHeight: 200,
					imageWidth: 200,
					text: 'La dirección de correo electrónico ingresada no coincide. Inténtelo nuevamente.',
					showConfirmButton: true,
				})
		} else {
			const order = {
				cart: cart,
				name: inputName,
				lastName: inputLastName,
				phone: '+54 ' + inputPhone,
				identity: inputIdentity,
				adress: inputAdress,
				CP: inputPostalCode,
				email: inputEmail,
				payment: inputPay,
			}
			const ordersCollectionRef = collection(db, 'orders')
			const myOrder = await addDoc(ordersCollectionRef, order)
			Swal.fire({
				title: 'Verifique sus datos:',
				html:
					'<ul>' + 
						'<li>Nombre y Apellido: <span>' + `${order.name}` + ' ' + `${order.lastName}` + '</span></li>' +
						'<li>DNI: <span>' + `${order.identity}` + '</span></li>' + 
						'<li>Dirección: <span>' + `${order.adress}` + '</span>' + ' | CP: <span>' + `${order.CP}` + '</span></li>' + 
						'<li>Teléfono: <span>' + `${order.phone}` + '</span></li>' + 
						'<li>Email: <span>' + `${order.email}` + '</span></li>' +
					'</ul>',
				showConfirmButton: true,
				showCancelButton: true,
				cancelButtonText: 'X'
			}).then((result) => {
				if(result.isConfirmed) {
					Swal.fire({
						imageUrl: `${LogoCheck}`,
						imageHeight: 200,
						imageWidth: 200,
						title: 'Su código de orden es: ' + `${myOrder.id}`,
						html: 
							'<p>¡Muchas gracias por comprar en nuestra tienda! Estamos preparando tu pedido.</p>' +
							'<p>La información para el seguimiento ha sido enviada a su correo: </p>'+ `${order.email}`,
						showConfirmButton: false,
					}).then(() => {
						setCart([])
						navigate('/')
					})
				}
			})
		}
	}

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
					<section className='purchase-form'>
						<div className='checkout-form'>
							<form onSubmit={createOrder}>
								<FormControl isRequired>
									<FormLabel>Nombre/s:</FormLabel>
									<Input 
										type='name' 
										placeholder='Ingrese su nombre/s'
										value={inputName}
										onChange={(e) => setInputName(e.target.value)}
									/>
								</FormControl>
								<FormControl isRequired>
									<FormLabel>Apellido/s:</FormLabel>
									<Input 
										type='last-name' 
										placeholder='Ingrese su apellido/s'
										value={inputLastName}
										onChange={(e) => setInputLastName(e.target.value)}
									/>
								</FormControl>
								<FormControl isRequired>
									<FormLabel>Documento:</FormLabel>
									<Input 
										type='number' 
										placeholder='Ingrese su número de DNI'
										value={inputIdentity}
										onChange={(e) => setInputIdentity(e.target.value)}
									/>
								</FormControl>
								<FormControl isRequired>
									<FormLabel>Teléfono:</FormLabel>
									<InputGroup>
										<InputLeftAddon children='+54' />
										<Input 
											type='tel' 
											placeholder='Ingrese un número de teléfono'
											value={inputPhone}
											onChange={(e) => setInputPhone(e.target.value)}
										/>
									</InputGroup>
								</FormControl>
								<FormControl isRequired>
									<FormLabel>Domicilio:</FormLabel>
									<Input 
										type='adress' 
										placeholder='Ingrese la dirección del envío'
										value={inputAdress}
										onChange={(e) => setInputAdress(e.target.value)}
									/>
								</FormControl>
								<FormControl isRequired>
									<FormLabel>	CP:</FormLabel>
									<Input 
										type='post-code' 
										placeholder='Ingrese el código postal'
										value={inputPostalCode}
										onChange={(e) => setInputPostalCode(e.target.value)}
									/>
								</FormControl>
								<FormControl isRequired>
									<FormLabel>Correo electrónico:</FormLabel>
									<Input 
										type='email' 
										placeholder='Ingrese su dirección de email'
										value={inputEmail}
										onChange={(e) => setInputEmail(e.target.value)}
									/>
								</FormControl>
								<FormControl isRequired>
									<Input 
										type='email'
										placeholder='Confirme la dirección de email ingresada'
										value={iEmailConfirm} 
										onChange={(e) => setIEmailConfirm(e.target.value)}
									/>
									{!emailCorrect ? (
										<FormHelperText>Debe ingresar la misma dirección de correo electrónico</FormHelperText>
									) : (
										<FormHelperText>La dirección indicada es correcta.</FormHelperText>
									)}
								</FormControl>
								<FormControl isRequired>
								<FormLabel>Medio de pago:</FormLabel>
									<RadioGroup defaultValue='1'>
										<Stack spacing={5} direction='row'>
											<Radio value='Credito' onChange={(e) => setInputPay(e.target.value)} >Tarjeta de Crédito</Radio>
											<Radio value='Debito' onChange={(e) => setInputPay(e.target.value)} >Tarjeta de Débito</Radio>
											<Radio value='MP' onChange={(e) => setInputPay(e.target.value)}>Mercado Pago</Radio>
										</Stack>
									</RadioGroup>
								</FormControl>
								<button type='submit' className='buy-end'>COMPRAR</button>
							</form>
						</div>
						<CartItemsList />
					</section>
				</div>
			:
				<h2>No hay artículos en su canasta. Para ver nuestros productos disponibles diríjase a <Link to='/productos' style={{ fontWeight: 'bold', color: '#A98754' }}>AQUÍ</Link>.</h2>
			}
		</>
  )
}

export default CheckOut
