import '../styles/NavBar.css'
import '../styles/Canasta.css'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import LogoCanasta from '../img/LogoCanasta.png'

const Canasta = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
      <>
        <Button onClick={onOpen} className='btn-canasta'>
            <img src={LogoCanasta} />
        </Button>
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