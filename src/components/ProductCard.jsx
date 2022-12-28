import '../styles/Productos.css'
import { useState } from 'react'
import items from '../../items.json'

const ProductCard = () => {

    const [item, setItem] = useState([])
    
    return (
        <div className='productos-container'>
        {items.map((item, index) => {
            return (
            <div key={index} className='card-container'>
                <h3 className='card-nombre'>{item.nombre}</h3>
                <div className='card-image-container'>
                    <img src={item.imagen} />
                </div>
                <h4 className='card-precio'>${item.precio}</h4>
                <div className='card-descript-conatiner'>
                    <p>{item.descript}</p>
                </div>
                <button className='btn-add-product'>
                    <p>+ CANASTA</p>
                </button>
            </div>
            )
        })}
        </div>
    )
}

export default ProductCard