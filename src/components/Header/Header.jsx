import React from "react";
import './Header.css';
import { FaAngleDown, FaBars } from "react-icons/fa6";

const Header = () => {
    
    return (
      <>
        <div className="header">
            <div className="logo">
                LearnProg
            </div>
            <nav>
                <ul>
                    <li><a href="#home">Home<FaAngleDown /></a></li>
                    <li><a href="#features">Cursos<FaAngleDown /></a></li>
                    <li><a href="#blog">Acerca<FaAngleDown /></a></li>
                    <li><a href="#footer">Contacto<FaAngleDown /></a></li>
                </ul>
            </nav>

            <div className="btns-header">
                <button type="button">Login</button>
                <button type="button">Signup</button>
            </div>

            <div className="header-hide">
                <FaBars />
            </div>
        </div>
      </>
    )
}
  
export default Header