import './Contacto.css';
import shopLocation from '../../img/shopLocation.png'

const Contacto = () => {
  return(
    <>
      <div className='contact-page'>
        <div className='shop-picture'>
          <img src={shopLocation} />
        </div>
        <div className='contact'>
          <div className='contact-header'>
            <h2>¿Donde nos encontrás?</h2>
          </div>
          <div className='contact-content'>
            <ul>
              <li>Dirección: <span>Av. 25 de Mayo 702, Lanús, Buenos Aires.</span></li>
              <li>Teléfono: 5741-1472</li>
              <li>Email: <span>calderohumeante@gmail.com</span></li>
              <p><span>¿Te interesaría saber más sobre pociones?</span> Hace un tiempo iniciamos un curso dado por profesores especializados en el arte de crear pociones para acercar los conocimientos tanto a muggles como a magos y brujas. Si estás interesado/a escribinos a la siguiente dirección para enviarte la información correspondiente:</p>
              <li>Cursos: <span>pocionhumeante@gmail.com</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacto