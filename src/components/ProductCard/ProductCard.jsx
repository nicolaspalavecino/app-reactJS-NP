import './ProductCard.css'

const ProductCard = ({ productos }) => {

    return (
        <div className='productos-container'>
        {productos.map((producto, index) => {
            return (
            <div key={index} className='card-container'>
                <h3 className='card-nombre'>{producto.nombre}</h3>
                <div className='card-image-container'>
                    <img src={producto.imagen} />
                </div>
                <h4 className='card-precio'>$ {producto.precio}</h4>
                <div className='card-descript-conatiner'>
                    <p>{producto.descript}</p>
                </div>
                <button className='btn-add-product'>
                    <p>+ CANASTA</p>
                </button>
            </div>
            )
        })}
        </div>
    )
}

export default ProductCard