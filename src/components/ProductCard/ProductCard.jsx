import './ProductCard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({ id, nombre, precio, imagen }) => {

    const quantity = 0
    return (
        <div key={id} className='card-container'>
            <Link to={`${nombre}`}>
                <h3 className='card-nombre'>{nombre}</h3>
            </Link>
            <div className='card-image-container'>
                <img src={imagen} />
            </div>
            <h4 className='card-precio'>$ {precio}</h4>
            <div className='add-container'>
                {quantity === 0 ? (
                    <button className='btn-add-product'>
                        <p>+ CANASTA</p>
                    </button>
                ) : 
                    <div className='add-variant'>
                        <div className='add-quantity'>
                            <button>+</button>
                            <p><span>{quantity}</span> en Canasta</p>
                            <button>-</button>
                        </div>
                        <button className='remove' onClick={()=> removeCartItem(id)}>Eliminar</button>
                    </div> 
                }
            </div>
        </div>
        )
}

export default ProductCard