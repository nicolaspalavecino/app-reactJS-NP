import '../NavBar/NavBar.css'
import './CartWidget.css'
import { Button, Tooltip, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import LogoCanasta from '../../img/LogoCanasta.png'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [cart, setCart] = useContext(CartContext)
    const precioTotal = cart.reduce((acc, curr) => acc + curr.precio, 0)

    const TablaCarrito = () => {
      if (cart.length > 0) {
        return (
          <div>
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
                    <tr className='row-cart-widget'>
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
              <h3>Total: $ {precioTotal}</h3>
          </div>
        )
    } else {
      return (
        <div className='carrito-vacio-container'>
          Incorpore productos a su compra
        </div>
      )
      }
    }

    return (
      <>
        <Tooltip hasArrow label='Canasta de Compras' bg='#634f31'>
          <Button onClick={onOpen} className='btn-canasta'>
              <img src={LogoCanasta} />
              <span className='item-cart-count'>{cart.length}</span>
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