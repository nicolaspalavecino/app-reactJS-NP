import '../NavBar/NavBar.css'
import './CartWidget.css'
import { Button, Tooltip, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import LogoCanasta from '../../img/LogoCanasta.png'
import LogoCanastaFull from '../../img/LogoCanastaFull.png'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [cart, setCart] = useContext(CartContext)
    const precioTotal = cart.reduce((acc, curr) => acc + curr.precio, 0)

    const quantity = cart.reduce((acc, curr) => {
      return acc + curr.quantity
    }, 0)

    const totalPrice = cart.reduce((acc, curr) => {
      return acc + curr.quantity * curr.precio
    }, 0)

    const removeCartItem = (id) => {
      const curr = cart.filter((item) => item.id !== id)
      setCart(curr)
    }

    const TablaCarrito = () => {
      if (cart.length > 0) {
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Productos</th>
                  <th>Precio</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  return (
                    <tr className='row-cart-widget' key={item.id}>
                      <td className='column-1'>
                        <div className='table-product'>
                          <img src={item.imagen} />
                          <p>{item.nombre} ({item.quantity})</p>
                        </div>
                      </td>
                      <td>${item.precio * item.quantity}</td>
                      <td>
                        <button className='btn-eliminar' onClick={() => removeCartItem
                        (item.id)}>X</button>
                      </td>
                    </tr>
                  ) 
                })}
              </tbody>
            </table>
              <h3 className='total-price'>Total: ${totalPrice}</h3>
          </div>
        )
    } else {
      return (
        <div className='carrito-vacio-container'>
          No hay productos en su canasta.
        </div>
      )
      }
    }

    return (
      <>
        <Tooltip hasArrow label='Canasta de Compras' bg='#634f31'>
          <Button onClick={onOpen} className='btn-canasta'>
              <img src={cart.length > 0 ? LogoCanastaFull : LogoCanasta} />
              <span className='item-cart-count'>{quantity}</span>
          </Button>
        </Tooltip>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>CANASTA</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {TablaCarrito()}
            </ModalBody>
            <ModalFooter>
              <Link to={'/canasta'}>
                <Button onClick={onClose}>
                  Ver compra
                </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }


export default CartWidget