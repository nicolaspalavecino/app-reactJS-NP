import './App.css'
import './components/NavBar.jsx'
import NavBar from './components/NavBar.jsx'
import Inicio from './components/Inicio.jsx'
import Nosotros from './components/Nosotros.jsx'
import Productos from './components/Productos.jsx'
import Contacto from './components/Contacto.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
        <NavBar />
        <div className='body'>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='/contacto' element={<Contacto />} />
          </Routes>
        </div>
    </div>
  )
}

export default App

