import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import Inicio from './pages/Inicio/Inicio.jsx'
import Nosotros from './pages/Nosotros/Nosotros.jsx'
import Productos from './pages/Productos/Productos.jsx'
import ProductDetail from './components/ProductDetail/ProductDetail.jsx'
import Contacto from './pages/Contacto/Contacto.jsx'
import Cart from './pages/Cart/Cart'
import { Route, Routes, Navigate } from 'react-router-dom'
import items from '../items.json'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <div className='App'>
          <NavBar />
          <div className='body'>
            <Routes>
              <Route path='/' element={<Inicio greeting={"Bienvenidos al Caldero Humeante"}/>} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='/productos' element={<Productos />} />
              <Route path='/productos/:categoria' element={<Productos />} />
              <Route path='/productos/:categoria/:nombre' element={<ProductDetail data={items} />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/canasta' element={<Cart />} />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </div>
      </div>
    </CartProvider>
  )
}

export default App
