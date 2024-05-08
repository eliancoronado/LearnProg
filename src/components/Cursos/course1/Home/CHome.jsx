import './CHome.css'
import Right from './90315420-a800-492c-8a82-a72f49d6588f.png'
import { Link } from 'react-router-dom';

function CHome() {

  return(
    <div className="Chome-page">
        <div className="Chome-page-left">
            <ul>
                <li><Link to='/'>Cursos</Link></li>
                <li>{'>'}</li>
                <li>Lógica de programación</li>
                <li>{'>'}</li>
            </ul>
            <h2>Curso: Lógica de programación (Gratis)</h2>
            <p>Domina los fundamentos de uno de los paradigmas de programación más usados del mundo y fortalece tus conocimientos como programador.</p>
            <div className="qaprenderas">
                <h4>¿Qué aprenderás?</h4>
                <ul>
                    <li>Algoritmos y Estructuras de Datos</li>
                    <li>Pensamiento lógico y resolución de problemas</li>
                    <li>Programación estructurada y modularidad</li>
                </ul>
            </div>
            <h3>Continúa estudiando donde te quedaste</h3>
            <Link to='/curso1-tema1'> <button type="button">1.1 Bienvenida</button></Link>
        </div>
        <div className="Chome-page-right">
            <img src={Right} alt="" />
        </div>

    </div>
  )
}

export default CHome