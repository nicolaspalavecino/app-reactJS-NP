import './Inicio.css'
import Carousel from '../../components/Carousel/Carousel'
import PromoteBooks from '../../components/PromoteBooks/PromoteBooks'
import BookHeader from '../../img/BookHeader.png'
import { useEffect, useState } from 'react'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../../db/firebase-config'

const Inicio = () => {

	const [books, setBooks] = useState([])
	const itemCollectionRef = query(collection(db, "books"))

	const getBooks = async () => {
			const querySnapshot = await getDocs(itemCollectionRef)
			const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			setBooks(docs)
	}

	useEffect(() => {
			getBooks()
	}, [])

  return(
		<>
			<div className='inicio'>
					<Carousel />
					<section className='book-promotion'>
						<div className='book-header'>
							<div className='book-header-container'>
								<img src={BookHeader} />
							</div>
							<div>
								<h2>PRÓXIMAMENTE</h2>
								<p>LIBROS de pociones disponibles en nuestra TIENDA</p>
							</div>
						</div>
						<div className='books-container'>
							{books.map((book) => {
								return (
									<PromoteBooks
										key={book.id}
										nombre={book.nombre}
										autor={book.autor}
										imagen={book.imagen}
									/>
								)
							})}						
						</div>
					</section>
			</div>
    </>
  )
}

export default Inicio