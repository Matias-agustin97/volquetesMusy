import React from 'react'


import { FaFacebookSquare} from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
const Header = ({scrolltoHome,scrolltoNosotros,scrolltoServicios,scrolltoContacto}) => {
  return (
 <header className='header-container'>
   <div className="navBar">
    <ul>
        <li onClick={scrolltoHome}>Home</li>
        <li onClick={scrolltoNosotros}>Sobre Nosotros</li>
        <li onClick={scrolltoServicios}>Servicios</li>
        <li onClick={scrolltoContacto}>Contacto</li>
    </ul>
   </div>
   <div className="social-container">
   <a href='https://www.facebook.com/Volquetes-Musy-100826842800986' target="_blank" rel="noopener noreferrer">
   <FaFacebookSquare className='socialIcon'/>
   </a>
    <a href="https://www.instagram.com/volquetesmusy/" target="_blank" rel="noopener noreferrer">
    <FaInstagram className='socialIcon'/>
    </a>
   </div>
 </header>
  )
}



export default Header