import './WizardCard.css'
import wizards from '../../../wizards.json'
import SaberMas from '../SaberMas/SaberMas'

const WizardCard = ()=> {

    return (
        <>
        {wizards.map((wizard, index) => {
            return (
                <div key={index} className='wizard-card'>
            <div className='wizard-image'>
                <img src={wizard.imagen} />
            </div>
            <div className='wizard-text'>
                <div className='wizard-title'>
                    <h3>{wizard.nombre}</h3>
                    <p>{wizard.subtitle}</p>
                </div>
                <div className='btn-saber-container'>
                    <SaberMas
                        name={wizard.nombre}
                        photo={wizard.imagen}
                        position={wizard.subtitle}
                        info={wizard.descript}
                    />
                </div>
            </div>
        </div>
            )
        })}
        </>
    )
}

export default WizardCard