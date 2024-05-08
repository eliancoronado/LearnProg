import React from "react";
import './Blog.css';
import { FaBookBookmark, FaUserGraduate, FaUserTie  } from "react-icons/fa6";

function Blog() {
  
    return (
        <div className="blog" id="blog">
            <div className="blog-page-top">
                <h2>¿Por que tomar mis cursos?</h2>
                <p>Porque aprenderás habilidades prácticas y relevantes que te prepararán para triunfar en el mundo laboral actual, mientras recibes el apoyo y la orientación necesarios para alcanzar tus metas. Únete a mis cursos y desbloquea tu potencial para el éxito profesional y personal.</p>
                <div className="blog-page-top-group">
                    <div className="blog-page-top-group-learn">
                        <FaBookBookmark />
                        <h2>01. Aprender</h2>
                        <p>Con instructores expertos y contenido actualizado, aprenderás no solo a resolver problemas, sino también a innovar y crear soluciones impactantes.</p>
                    </div>
                    <div className="blog-page-top-group-learn">
                        <FaUserGraduate />
                        <h2>02. Graduarse</h2>
                        <p>Graduarse en programación en LearnProg te abre las puertas a un mundo de oportunidades. Con un plan de estudios robusto y actualizado, impartido por profesionales de la industria, te prepararás para enfrentar desafíos del mundo real.</p>
                    </div>
                    <div className="blog-page-top-group-learn">
                        <FaUserTie />
                        <h2>03. Trabajar</h2>
                        <p>Nuestro enfoque práctico y orientado a proyectos te brinda las habilidades y la experiencia necesarias para enfrentar desafíos del mundo real desde el primer día.</p>
                    </div>
                </div>
            </div>
            <div className="circle"></div>
            <div className="circle2"></div>
        </div>
    )
  }
  
  export default Blog