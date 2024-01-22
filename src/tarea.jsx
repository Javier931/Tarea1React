import './Pregunta2'
import { Pregunta2 } from './Pregunta2'

export const Tarea = () => {
  
  

   

    const tareas3 = [
        {
          id: 1,
          texto: "Estudiar HTML",
          estado: "Completado",
        },
        {
          id: 2,
          texto: "Estudiar CSS",
          estado: "Incompleto",
        },
        {
          id: 3,
          texto: "Estudiar JavaScript 1",
          estado: "Completado",
        },
        {
          id: 4,
          texto: "Estudiar React 1",
          estado: "Completado",
        },
        {
          id: 5,
          texto: "Estudiar React 2",
          estado: "Incompleto",
        },
        {
          id: 6,
          texto: "Estudiar Reac 3",
          estado: "Incompleto"
        }
        
      ] 
  
  const personaje = "Goku"

  const personaje2 = "Vegeta"
 
  
    return (

        <div className="container">
                <div key={tareas3.id} className="container">

                {
                  tareas3.map((tarea)=>(
                    <Pregunta2 {...tarea}/>

                  ))
                }
                
                

                </div>
            
          
    
      </div>


    
  )
}
