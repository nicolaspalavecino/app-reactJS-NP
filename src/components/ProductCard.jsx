import '../styles/Productos.css'
import { products } from '../data/productos'
import ImagenPrueba from '../img/ingredients/Acónito.png'

const ProductCard = () => {

    return (
        <div className='productos-container'>
        {products.map((product, index) => {
            return (
            <div key={index} className='card-container'>
                <div className='card-image-container'>
                    <img src={ImagenPrueba} />
                </div>
                <h3 className='card-nombre'>{product.nombre}</h3>
                <h4 className='card-precio'>{product.precio}</h4>
                <div className='card-descript-conatiner'>
                    <p>{product.descript}</p>
                </div>
                <button>Comprar</button>
            </div>
            )
        })}
        </div>
    )
}

export default ProductCard