import '../NavBar/NavBar.css'
import './Canasta.css'
import { Button, Tooltip, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import LogoCanasta from '../../img/LogoCanasta.png'

const Canasta = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
      <>
        <Tooltip hasArrow label='Canasta de Compras' bg='#634f31'>
          <Button onClick={onOpen} className='btn-canasta'>
              <img src={LogoCanasta} />
              <span className='item-cart-count'>1</span>
          </Button>
        </Tooltip>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>CANASTA</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Aquí se verán productos...
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