import '../NavBar/NavBar.css'
import './Canasta.css'
import { Button, Tooltip, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import LogoCanasta from '../../img/LogoCanasta.png'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const Canasta = () => {
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
                              <th>Cant</th>
                              <th>Productos</th>
                              <th>Precio</th>
                          </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => {
                            return (
                            <tr>
                                <td>???</td>
                                <td className='table-product'>
                                  <img src={item.imagen} />
                                  {item.nombre}
                                </td>
                                <td>${item.precio}</td>
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
              <div className='carrito_vacio-container'>
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
              <Button className='brn-comprar'>
                Comprar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }


export default Canasta