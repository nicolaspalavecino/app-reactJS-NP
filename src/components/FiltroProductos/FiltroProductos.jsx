import './FiltroProductos.css'
import { Link } from 'react-router-dom'
// import items from '../../../items.json'

import { db } from '../../../db/firebase-config'
import { collection, getDocs } from 'firebase/firestore'

const FiltroProductos = ({ filterItem, allItems, menuItems }) => {

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
            <button className="btn-filtrar btn-todos" onClick={() => allItems()}>
              Todos
            </button>
          </Link>
         </div>
      </>
    )
  }
   
  export default FiltroProductos;