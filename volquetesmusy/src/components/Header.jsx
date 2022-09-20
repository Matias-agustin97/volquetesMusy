import React from 'react'


import { FaFacebookSquare} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa"
const Header = () => {
  return (
 <header className='header-container'>
   <div className="navBar">
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Sobre Nosotros</a></li>
        <li><a href="">Servicios</a></li>
        <li><a href="">Contacto</a></li>
    </ul>
   </div>
   <div className="social-container">
   <FaFacebookSquare className='socialIcon'/>
    <FaTwitter className='socialIcon'/>
   </div>
 </header>
  )
}



export default Header