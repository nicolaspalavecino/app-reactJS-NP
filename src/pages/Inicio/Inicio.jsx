import './Inicio.css';

const Inicio = ({ greeting }) => {
    return(
        <>
            <div className='inicio'>
                <h2>{greeting}</h2>
            </div>
        </>
    )
}

export default Inicio