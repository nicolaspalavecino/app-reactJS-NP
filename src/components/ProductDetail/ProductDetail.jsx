import './ProductDetail.css'
import { useParams } from "react-router-dom"

const ProductDetail = ({ data }) => {
	const { nombre } = useParams()
	const items = data 
	const item = items.find((item) => item.nombre === nombre)

	return (
		<div className='detail-product-container'>
			<div className='detail-image-container'>
				<img src={item.imagen} />
			</div>
			<div className='detail-info-container'>
				<h2>{item.nombre}</h2>
				<h3>${item.precio}</h3>
				<p>{item.descript}</p>
			</div>
		</div>
	)
}

export default ProductDetail