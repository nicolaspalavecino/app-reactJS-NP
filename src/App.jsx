import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import Inicio from './pages/Inicio/Inicio.jsx'
import Nosotros from './pages/Nosotros/Nosotros.jsx'
import Productos from './pages/Productos/Productos.jsx'
import ProductDetail from './components/ProductDetail/ProductDetail.jsx'
import Contacto from './pages/Contacto/Contacto.jsx'
import { Route, Routes, Navigate } from 'react-router-dom'
import items from '../items.json'

function App() {
  return (
    <div className='App'>
        <NavBar />
        <div className='body'>
          <Routes>
            <Route path='/' element={<Inicio greeting={"Bienvenidos al Caldero Humeante"}/>} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/productos/:nombre' element={<ProductDetail data={items} />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </div>
    </div>
  )
}

export default App
