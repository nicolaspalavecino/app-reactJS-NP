import './ProductCard.css'
import { Link } from 'react-router-dom'
import HandleCartItem from '../HandleCartItem/HandleCartItem'

const ProductCard = ({ id, nombre, categoria, precio, imagen }) => {

    return (
        <div key={id} className='card-container'>
            <Link to={`/productos/${categoria}/${nombre}`}>
                <h3 className='card-nombre'>{nombre}</h3>
            </Link>
            <div className='card-image-container'>
                <img src={imagen} />
            </div>
            <h4 className='card-precio'>$ {precio}</h4>
            <HandleCartItem 
                key={id}
                id={id}
                nombre={nombre}
                precio={precio}
                imagen={imagen}
            />
        </div>
        )
}

export default ProductCard