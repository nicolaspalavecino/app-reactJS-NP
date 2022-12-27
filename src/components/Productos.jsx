import '../styles/Productos.css';
import ProductCard from './ProductCard.jsx'

const Productos = () => {
    return(
        <section className='productos-page'>
            <div className='productos'>
                <h2>PRODUCTOS</h2>
            </div>
            <ProductCard />
        </section>
    )
}

export default Productos

