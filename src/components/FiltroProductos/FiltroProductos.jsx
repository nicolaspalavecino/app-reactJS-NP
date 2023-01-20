import './FiltroProductos.css'
import { Link } from 'react-router-dom'
import items from '../../../items.json'

const FiltroProductos = ({ filterItem, setItem, menuItems }) => {

    return (
      <>
        <div className="filtros-container">
          {menuItems.map((val, index) => {
            return (
            <Link to={`/productos/${val}`}>
              <button className="btn-filtrar btn-categoria" key={index} onClick={()=> filterItem(val)}>
                {val}
              </button>
             </Link> 
            )
          })}
          <Link to="/productos">
            <button className="btn-filtrar btn-todos" onClick={() => setItem(items)}>
              Todos
            </button>
          </Link>
         </div>
      </>
    )
  }
   
  export default FiltroProductos;