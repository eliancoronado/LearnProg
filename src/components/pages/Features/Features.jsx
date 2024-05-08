import React from "react";
import './Features.css';
import CountdownTimer from "./Counter";
import Rightimg from './html.png';

function Features() {

    const targetDate = new Date('2024-05-10T23:59:59');
  
    return (
        <div className="features" id="features">
            <div className="ftrs-page">
                <div className="ftrs-page-left">
                    <div className="box-next-course">
                        Próximo curso
                    </div>
                    <h1>Curso: HTML desde cero (2024)</h1>
                    <h4>Disponible desde el lunes 13 de mayo</h4>
                    <h3>"Domina el lenguaje sobre el que está construida toda la web y sus alrededores con este curso en español: Aprende HTML5 desde cero y lleva tus habilidades al siguiente nivel."</h3>
                    <a href="#">Más detalles</a>
                    <CountdownTimer targetDate={targetDate} />
                </div>
                <div className="ftrs-page-right">
                    <img src={Rightimg} />
                </div>
            </div>
        </div>
    )
  }
  
  export default Features