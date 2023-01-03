import '../styles/Productos.css'
import items from '../../items.json'

const FiltroProductos = ({ filterItem, setItem, menuItems }) => {

    return (
      <>
        <div className="filtros-container">
          {menuItems.map((val, index) => {
            return (
              <button className="btn-filtrar btn-categoria" key={index} onClick={()=> filterItem(val)}>
                {val}
              </button>
            )
          })}
          <button className="btn-filtrar btn-todos" onClick={() => setItem(items)}>
            Todos
          </button>
         </div>
      </>
    )
  }
   
  export default FiltroProductos;