import React from 'react'
import ReactDOM from 'react-dom/client'
import { Cuadradocolor } from './Cuadradocolor.jsx'
import {Tarea} from './tarea.jsx'






//import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
        <h1>Ejercicios para practicar</h1>

        <h2 className="titulo2">Pregunta 1: </h2>
        
        
        <Cuadradocolor />

        <h2 className="titulo2">Pregunta 2: </h2>

        <Tarea />
       
       
        
      

        
        
    </div>
    
   
  
   
   
     
  </React.StrictMode>,
)
