import './Nosotros.css';
import Nos1Banner from '../../img/Nos1.png'
import WizardCard from '../../components/WizardCard/WizardCard'
import SideInspDer from '../../img/side-insp-der.png'
import SideInspIzq from '../../img/side-insp-izq.png'
import { useEffect, useState } from 'react'
import { db } from '../../../db/firebase-config'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

const Nosotros = () => {
	const [wizard, setWizard] = useState([])
	const wizardCollectionRef = query(collection(db, "wizards"), orderBy("nombre"))

	const getWizards = async () => {
		const querySnapshot = await getDocs(wizardCollectionRef)
		const docs = querySnapshot.docs.map((doc) => doc.data())
		setWizard(docs)
	}

	useEffect(() => {
		getWizards()
	}, [])

	return(
		<>
			<div className='nosotros-page'>
				<div className='productos-titulo nosotros-titulo'>
					<img className='banner-titulo' src={Nos1Banner} />
					<div className='title'>
						<p>¿Quiénes somos?</p>
						<div className='nosotros-answer'>
							<p>Somos un grupo de magos y brujas amantes de la creación y el estudio de las pociones.</p>
							<p>Nuestro objetivo es acercarle a todo el mundo mágico y muggle las herramientas y los materiales necesarios para que todo aprendiz y aficionado pueda adentrarse en el mundo de la elaboración de pociones, conocer sus beneficios y compartirlos con la comunidad.</p>
						</div> 
					</div>
				</div>
				<section className='nosotros-magos'>
					<div className='magos-title'>
						<img src={SideInspIzq} />
						<h3>Nuestra inspiración</h3>
						<img src={SideInspDer} />
					</div>
					<div className='potioneers-container'>
						{wizard.map((wizard, index) => {
							return (
								<WizardCard 
									id={index}
									nombre={wizard.nombre}
									subtitle={wizard.subtitle}
									descript={wizard.descript}
									imagen={wizard.imagen}
								/>
							)
						})}
					</div>
				</section>
			</div>
		</>
	)
}

export default Nosotros