import './WizardCard.css'
import SaberMas from '../SaberMas/SaberMas'

const WizardCard = ({ id, nombre, subtitle, descript, imagen})=> {

	return (
		<div key={id} className='wizard-card'>
			<div className='wizard-image'>
				<img src={imagen} />
			</div>
			<div className='wizard-text'>
				<div className='wizard-title'>
					<h3>{nombre}</h3>
					<p>{subtitle}</p>
				</div>
				<div className='btn-saber-container'>
					<SaberMas
						key={nombre}
						name={nombre}
						photo={imagen}
						position={subtitle}
						info={descript}
					/>
				</div>
			</div>
		</div>
	)
}

export default WizardCard