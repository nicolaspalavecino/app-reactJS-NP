import './App.css'
import './components/NavBar.jsx'
import NavBar from './components/NavBar.jsx'
import Inicio from './components/Inicio.jsx'

function App() {
  return (
    <div className='App'>
        <NavBar />
        <div className='body'>
          <Inicio />
        </div>
    </div>
  )
}

export default App

