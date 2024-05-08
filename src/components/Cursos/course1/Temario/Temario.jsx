import './Temario.css'
import { Link } from 'react-router-dom';

function Temario() {

  return(
    <div className="temario-page">
        <h3>Temario del curso</h3>
        <div className="bar">
            <input type="range" name="" id="" value={0} />
            <h4>0% Completado</h4>
        </div>
        <div className="tema-list">
            <h5>1. Lógica de programación (Gratis)</h5>
            <h6>Exploraremos detalladamente cada concepto sin enfocarnos en un lenguaje de programación específico, a través de ejemplos y simulaciones entenderás cómo aplicar estos conceptos en situaciones prácticas y en tus propios proyectos.</h6>
            <div className="list">
                <Link to='/curso1-tema1'>
                    <div className="item">
                        1. Introducción a la programación y conceptos básicos
                    </div>
                </Link>
                <div className="item">
                    2. Estructuras de control de flujo
                </div>
                <div className="item">
                    3. Estructuras de datos básicas
                </div>
                <div className="item">
                    4. Funciones y procedimientos
                </div>
                <div className="item">
                    5. Recursividad
                </div>
                <div className="item">
                    6. Estructuras de datos avanzadas
                </div>
                <div className="item">
                    7. Algoritmos de búsqueda y ordenamiento
                </div>
            </div>
        </div>
    </div>
  )
}

export default Temario