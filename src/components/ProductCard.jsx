import '../styles/Productos.css'
import { products } from '../../public/productos'
import BtnAddCart from '../img/btnbg.png'

const ProductCard = () => {

    return (
        <div className='productos-container'>
        {products.map((product, index) => {
            return (
            <div key={index} className='card-container'>
                <h3 className='card-nombre'>{product.nombre}</h3>
                <div className='card-image-container'>
                    <img src={product.imagen} />
                </div>
                <h4 className='card-precio'>${product.precio}</h4>
                <div className='card-descript-conatiner'>
                    <p>{product.descript}</p>
                </div>
                <button className='btn-add-product'>
                    {/* <img src={BtnAddCart} /> */}
                    <p>+ CANASTA</p>
                </button>
            </div>
            )
        })}
        </div>
    )
}

export default ProductCard