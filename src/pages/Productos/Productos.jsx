import './Productos.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Prod1Banner from '../../img/Prod1-logo.png'
import Prod2Banner from '../../img/Prod2-logo.png'
import FiltroProductos from '../../components/FiltroProductos/FiltroProductos'
import { useEffect, useState } from 'react'
// import items from '../../../items.json'
import { db } from '../../../db/firebase-config'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

const Productos = () => {

    const [item, setItem] = useState([])
    const itemCollectionRef = query(collection(db, "items"), orderBy("nombre"))

    const getItems = async () => {
        const querySnapshot = await getDocs(itemCollectionRef)
        const docs = querySnapshot.docs.map((doc) => doc.data())
        setItem(docs)
    }

    useEffect(() => {
        getItems()
    }, [])

    const menuItems = [...new Set(item.map((val) => val.categoria))]

    const filterItem = (categoriaActual) => {
        const newItem = item.filter((newVal) => {
            return newVal.categoria === categoriaActual
        })
        setItem(newItem)
    }

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
                <div className='side-productos side-izq'></div>
                <div className='central-productos'>
                    <FiltroProductos 
                        filterItem={filterItem}
                        allItems={getItems}
                        menuItems={menuItems}
                    />
                    <div className='productos-container'>
                        {item.map((item, index) => {
                            return (
                                <ProductCard 
                                key={index}
                                nombre={item.nombre}
                                categoria={item.categoria}
                                precio={item.precio}
                                imagen={item.imagen}
                            />
                            )
                        })}
                    </div>
                </div>
                <div className='side-productos side-der'></div>
            </div>
        </section>
    )
}

export default Productos

