import './Footer.css'
import { FaEnvelope, FaGaugeHigh, FaPhoneVolume, FaLocationDot } from "react-icons/fa6"
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xkndpdla");
    if (state.succeeded) {
        return <p className='h4'>Thanks for send!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="email" className='h4'>
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className='inp'
          placeholder='Correo Electronico'
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <textarea
          id="message"
          name="message"
          className='txtarea'
          placeholder='Escribe tu mensaje'
          
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button type="submit" className='btn' disabled={state.submitting}>
          Submit
        </button>
      </form>
    );
  }

function Footer() {
    return (
        <>
            <div className="paget" id='footer' >
                <div className="col1">
                    <h2>LearnProg</h2>
                    <h3><FaLocationDot /> Dirección:</h3>
                    <h4>Del molino San Jose 3c al Norte</h4>
                    <h3><FaPhoneVolume /> Teléfono:</h3>
                    <h4>+505 85836587</h4>
                    <h3><FaGaugeHigh /> Trabajo:</h3>
                    <h4>Las 24/7</h4>
                    <h3><FaEnvelope /> E-mail:</h3>
                    <h4>cuentaparaelian12@gmail.com</h4>
                </div>
                <div className="col1">
                    <h3>Categoríias</h3>
                    <h4>UI/UX</h4>
                    <h4>Diseño de programas</h4>
                    <h4>Página web</h4>
                    <h4>Aplicación</h4>
                </div>
                <div className="col1">
                    <h3>Links</h3>
                    <h4>Home</h4>
                    <h4>Cursos</h4>
                    <h4>Acerca de </h4>
                    <h4>Iniciar Sesión</h4>
                    <h4>Registrarse</h4>
                </div>
                <div className="col2">
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default Footer