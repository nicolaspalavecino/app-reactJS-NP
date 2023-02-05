import './PromoteBooks.css'

const PromoteBooks = ({ nombre, autor, imagen }) => {

  return (
    <div className='book-card'>
      <div className='book-image-container'>
        <img src={imagen} />
      </div>
      <div className='book-info-container'>
        <h3>{nombre}</h3>
        <h4>{autor}</h4>
      </div>
    </div>
  )
}

export default PromoteBooks