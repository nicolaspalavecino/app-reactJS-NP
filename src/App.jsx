import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import Inicio from './components/Inicio/Inicio.jsx'
import Nosotros from './components/Nosotros/Nosotros.jsx'
import Productos from './components/Productos/Productos.jsx'
import Contacto from './components/Contacto/Contacto.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
        <NavBar />
        <div className='body'>
          <Routes>
            <Route path='/' element={<Inicio greeting={"Bienvenidos al Caldero Humeante"}/>} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/contacto' element={<Contacto />} />
          </Routes>
        </div>
    </div>
  )
}

export default App

