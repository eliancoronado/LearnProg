import CHeader from '../Header/CHeader'
import './Tema1.css'
import { Link } from 'react-router-dom';
import js from './js.png'

function Tema1() {

    return (
        <>
            <CHeader />
            <div className="C1-wr">
                <div className="Tema1-page">
                    <div className="Tema1-page-left">
                        <ul>
                            <li><Link to='/'>Cursos</Link></li>
                            <li>{'>'}</li>
                            <li><Link to='/curso1'>Lógica de programación</Link></li>
                            <li>{'>'}</li>
                            <li>1. Introducción a la programación</li>
                            <li>{'>'}</li>
                        </ul>
                        <h2>Tema: Introducción a la programación y conceptos básicos</h2>
                        <div className="descr">
                            <h5>Profesor: Elián Coronado</h5>
                        </div>

                        <div className="clase-tema1">
                            <h5>¿Qué es un programa?</h5>
                            <h3>Un programa es como una receta para una computadora. Le dices qué hacer, paso a paso, para que realice ciertas tareas. Imagina que estás dando instrucciones a alguien que no sabe nada y tienes que ser muy claro en lo que dices.</h3>
                            <h5>Algoritmos</h5>
                            <h3>¿Has escuchado sobre recetas de cocina? Bueno, un algoritmo es un poco como eso. Es una lista ordenada de pasos que le dices a la computadora para hacer una tarea. Por ejemplo, si quieres hacer un sandwich, necesitas seguir ciertos pasos, como tomar el pan, poner jamón, queso, etc. Esos son pasos de un algoritmo.</h3>
                            <h5>Lógica de programación</h5>
                            <h3>Ahora, la lógica de programación es como usar tu ingenio para resolver problemas. Es como pensar en cómo resolver un rompecabezas. Tienes que entender el problema, descomponerlo en partes más pequeñas y luego encontrar una forma de juntar esas partes para obtener la solución.</h3>
                            <h4>Por lo tanto, cuando hablamos de programación, estamos hablando de darle instrucciones a una computadora utilizando algoritmos y aplicando la lógica para resolver problemas.</h4>
                            <h6>Introducción a un lenguaje de programación</h6>
                            <img src={js} width='150px' height='150px' />
                            <h5>¿Qué es JavaScript?</h5>
                            <h3>JavaScript es un lenguaje de programación que se utiliza principalmente para hacer que las páginas web sean interactivas. Piensa en las páginas web que visitas a diario: cuando haces clic en un botón y algo sucede en la página sin necesidad de recargarla, es probable que JavaScript esté detrás de esa interactividad.</h3>
                            <h6>Características de JavaScript:</h6>
                            <h3>1. Lenguaje interpretado: JavaScript es un lenguaje de programación interpretado, lo que significa que el navegador web puede entender y ejecutar el código JavaScript directamente, sin necesidad de compilarlo en un programa separado.</h3>
                            <h3>2. Lenguaje de alto nivel: JavaScript es un lenguaje de alto nivel, lo que significa que está diseñado para ser fácil de entender y escribir para los humanos. Esto hace que sea más accesible para los principiantes y menos propenso a errores.</h3>
                            <h3>3. Multiplataforma: JavaScript se puede ejecutar en cualquier dispositivo que tenga un navegador web, como computadoras de escritorio, tabletas y teléfonos móviles. Esto lo convierte en una herramienta poderosa para el desarrollo web y la creación de aplicaciones multiplataforma.</h3>
                            <h6>¿Qué se puede hacer con JavaScript?</h6>
                            <h3>1. Interactividad en la web: Con JavaScript, puedes hacer que tus páginas web sean más dinámicas y atractivas para los usuarios. Puedes agregar efectos visuales, animaciones, formularios interactivos y mucho más.</h3>
                            <h3>2. Manipulación del DOM: JavaScript te permite acceder y manipular el DOM (Modelo de Objetos del Documento) de una página web, lo que significa que puedes cambiar el contenido, el estilo y la estructura de una página en respuesta a acciones del usuario o eventos del navegador.</h3>
                            <h3>3. Desarrollo de aplicaciones web: Además de mejorar la experiencia del usuario en las páginas web, JavaScript también se utiliza para crear aplicaciones web complejas, como redes sociales, plataformas de comercio electrónico, aplicaciones de productividad y juegos en línea.</h3>
                        </div>
                    </div>
                    <div className="Tema1-page-right">
                        <div className="temario-right">
                            <div className="temario-right-header">
                                Temario
                            </div>
                            <div className="temario-right-body">
                                <div className="trblist">
                                    <div className="trbitem">
                                        1. Introducción a la programación
                                    </div>
                                    <div className="trbitem">
                                        2. Estructuras de control de flujo
                                    </div>
                                    <div className="trbitem">
                                        3. Estructuras de datos básicas
                                    </div>
                                    <div className="trbitem">
                                        4. Funciones y procedimientos
                                    </div>
                                    <div className="trbitem">
                                        5. Recursividad
                                    </div>
                                    <div className="trbitem">
                                        6. Estructuras de datos avanzadas
                                    </div>
                                    <div className="trbitem">
                                        7. Algoritmos de búsqueda y ordenamiento
                                    </div>
                                    <div className="trbitem">
                                        8. Complejidad computacional y análisis de algoritmos
                                    </div>
                                    <div className="trbitem">
                                        9. Manejo de excepciones y errores
                                    </div>
                                    <div className="trbitem">
                                        10. Prácticas y proyectos
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tema1