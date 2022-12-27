import '../styles/Productos.css';
import ProductCard from './ProductCard.jsx'
import Prod1Banner from '../img/Prod1-logo.png'
import Prod2Banner from '../img/Prod2-logo.png'

const Productos = () => {
    return(
        <section className='productos-page'>
            <div className='productos-titulo'>
                <img className='banner-titulo' src={Prod1Banner} />
                <div className='title'>
                    <p>Nuestros</p>
                    <p className='p-special'>PRODUCTOS</p>
                </div>
                <img className='banner-titulo' src={Prod2Banner} />
            </div>
            <ProductCard />
        </section>
    )
}

export default Productos

