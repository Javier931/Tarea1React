import './estilos.css'


export const Cuadradocolor = () => {
  
  const cuadroColor = true

    return (
    <div>
      
        <div> {cuadroColor === true ? <div className='cuadradoAzul'></div> : <div className="cuadradoRojo"></div>}
            
        </div>

      
    </div>
  )
}
