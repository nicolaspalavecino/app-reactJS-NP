import './CheckOut.css'
import { FormLabel,  Input, RadioGroup, Radio, Stack, InputLeftAddon, InputGroup, Tooltip } from '@chakra-ui/react'
import PackageLogo from '../../img/Package.png'
import Return from '../../img/Return.png'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItemsList from '../../components/CartItemsList/CartItemsList'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../../../db/firebase-config'

const CheckOut = () => {
	const [cart, setCart] = useContext(CartContext)
	const [inputName, setInputName] = useState('')
	const [inputPhone, setInputPhone] = useState('')
	const [inputLastName, setInputLastName] = useState('')
	const [inputIdentity, setInputIdentity] = useState('')
	const [inputAdress, setInputAdress] = useState('')
	const [inputPostalCode, setInputPostalCode] = useState('')
	const [inputEmail, setInputEmail] = useState('')
	const [inputPay, setInputPay] = useState('')

	const createOrder = async (e) => {
		if ( 
				inputName === '' ||
				inputPhone === '' || 
				inputLastName === '' ||
				inputIdentity === '' ||
				inputAdress === '' ||
				inputPostalCode === '' ||
				inputEmail === '' ||
				inputPay === ''
			) {
			e.preventDefault()
			alert('Complete los datos del formulario')
		} else {
			e.preventDefault()
			const order = {
				cart: cart,
				name: inputName,
				lastName: inputLastName,
				number: inputPhone,
				identity: inputIdentity,
				adress: inputAdress,
				CP: inputPostalCode,
				email: inputEmail,
				payment: inputPay
			}
			const ordersCollectionRef = collection(db, "orders")
			await addDoc(ordersCollectionRef, order)
			const data = await getDocs(ordersCollectionRef)
			// setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
			setInputName('')
			setInputLastName('')
			setInputPhone('')
			setInputIdentity('')
			setInputAdress('')
			setInputPostalCode('')
			setInputEmail('')
			setInputPay('')
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
								<FormLabel>Nombre/s:</FormLabel>
								<Input 
									type='name' 
									placeholder='Ingrese su nombre/s'
									value={inputName}
									onChange={(e) => setInputName(e.target.value)}/>
								<FormLabel>Apellido/s:</FormLabel>
								<Input 
									type='last-name' 
									placeholder='Ingrese su apellido/s'
									value={inputLastName}
									onChange={(e) => setInputLastName(e.target.value)}/>
								<FormLabel>Documento:</FormLabel>
								<Input 
									type='number' 
									placeholder='Ingrese su número de DNI'
									value={inputIdentity}
									onChange={(e) => setInputIdentity(e.target.value)}/>
								<FormLabel>Teléfono:</FormLabel>
								<InputGroup>
									<InputLeftAddon children='+54' />
									<Input 
										type='tel' 
										placeholder='Ingrese un número de teléfono'
										value={inputPhone}
										onChange={(e) => setInputPhone(e.target.value)}/>
								</InputGroup>
								<FormLabel>Domicilio:</FormLabel>
								<Input 
									type='adress' 
									placeholder='Ingrese la dirección del envío'
									value={inputAdress}
									onChange={(e) => setInputAdress(e.target.value)}/>
								<FormLabel>	CP:</FormLabel>
								<Input 
									type='post-code' 
									placeholder='Ingrese el código postal'
									value={inputPostalCode}
									onChange={(e) => setInputPostalCode(e.target.value)}/>
								<FormLabel>Correo electrónico:</FormLabel>
								<Input 
									type='email' 
									placeholder='Ingrese su dirección de email'
									value={inputEmail}
									onChange={(e) => setInputEmail(e.target.value)}/>
								<FormLabel>Medio de pago:</FormLabel>
								<RadioGroup defaultValue='1'>
									<Stack spacing={5} direction='row'>
										<Radio value='Credito' onChange={(e) => setInputPay(e.target.value)} >Tarjeta de Crédito</Radio>
										<Radio value='Debito' onChange={(e) => setInputPay(e.target.value)} >Tarjeta de Débito</Radio>
										<Radio value='MP' onChange={(e) => setInputPay(e.target.value)}>Mercado Pago</Radio>
									</Stack>
								</RadioGroup>
								<button type='submit'>COMPRAR</button>
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

// Las ordenes funcionan correctamente y pueden verse en Firestore
// Pendiente: 
// -	Swal.fire para modificar alerta ('completar todos los campos')
// -	Swal.fire para confirmación de compra y tratar de traer data+id para mostrar al usuario
// -	Tratar de recargar la página post confirmación y dirigirlo al main con carrito vacío