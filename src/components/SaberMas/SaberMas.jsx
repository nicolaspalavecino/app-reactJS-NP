import './SaberMas.css'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, Tooltip } from '@chakra-ui/react'
import LogoSaber from '../../img/btnbg-saber.png'

const SaberMas = ({ name, photo, position, info }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
      <>
        <Tooltip hasArrow label='Saber Más' bg='#634f31'>
            <Button onClick={onOpen} className='btn-saber'>
                <img src={LogoSaber} />
            </Button>
        </Tooltip>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className='saber-container'>
            <ModalHeader className='saber-header'>{name}</ModalHeader>
            <ModalCloseButton className='saber-close'/>
            <ModalBody className='saber-body'>
                <div className='saber-photo'>
                    <img src={photo} />
                </div>
                <div className='saber-text'>
                    <p className='saber-subtitle'>{position}</p>
                    <p className='saber-descript'>{info}</p>
                </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default SaberMas

