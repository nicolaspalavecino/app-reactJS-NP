import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import Footer from './components/Footer/Footer'
import Inicio from './pages/Inicio/Inicio.jsx'
import Nosotros from './pages/Nosotros/Nosotros.jsx'
import Productos from './pages/Productos/Productos.jsx'
import ProductDetail from './components/ProductDetail/ProductDetail.jsx'
import Contacto from './pages/Contacto/Contacto.jsx'
import Cart from './pages/Cart/Cart'
import { Route, Routes, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { useEffect, useState } from 'react'
import { db } from '../db/firebase-config'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

function App() {

  const [item, setItem] = useState([])
  const itemCollectionRef = collection(db, "items")

  const getItems = async () => {
      const querySnapshot = await getDocs(itemCollectionRef)
      const docs = querySnapshot.docs.map((doc) => doc.data())
      setItem(docs)
  }

  useEffect(() => {
      getItems()
  }, [])

  return (
    <CartProvider>
      <div className='App'>
          <NavBar />
          <div className='body'>
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/productos' element={<Productos />} />
              <Route path='/productos/:categoria' element={<Productos />} />
              <Route path='/productos/:categoria/:nombre' element={<ProductDetail data={item} />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/canasta' element={<Cart />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </div>
          {/* <Footer /> */}
      </div>
    </CartProvider>
  )
}

export default App
