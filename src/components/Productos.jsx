import '../styles/Productos.css';
import ProductCard from './ProductCard.jsx'
import Prod1Banner from '../img/Prod1-logo.png'
import Prod2Banner from '../img/Prod2-logo.png'
import SideIzq from '../img/side-productos-izq.png'
import SideDer from '../img/side-productos-der.png'

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
            <div className='sup-prod-content'>
                <div className='side-productos side-izq'>
                    {/* <img src={SideIzq} /> */}
                </div>
                <ProductCard />
                <div className='side-productos side-der'>
                    {/* <img src={SideDer} /> */}
                </div>
            </div>
        </section>
    )
}

export default Productos

