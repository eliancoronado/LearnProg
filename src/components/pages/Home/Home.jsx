import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';


function Home() { 
  
    return (
        <div className="home" id="home">
          <div className="home-sec">
            <h1>Desbloquea tu potencial, programa tu futuro</h1>
            <h2>LearnProg</h2>
            <h3>"En LearnProg, transformamos curiosidad en código y pasión en proyectos. Únete a nosotros para desatar tu creatividad y construir el futuro hoy."</h3>
            <div className="btns-home-sec">
              <button type="button" ><Link to="/curso1">Comienza a estudiar ya!</Link></button>
            </div>
          </div>

          <div className="circle"></div>
          <div className="circle2"></div>
        </div>
    )
}
  
export default Home