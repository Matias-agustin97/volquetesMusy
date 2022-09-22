import React from 'react'
import logo from "../images/logo.jpeg"
import logoMobile from "../images/responsive/logo_162x119.png"


const SobreNosotros =React.forwardRef((props,ref) => {
  return (
    <div className='sobreNosotros-cont' ref={ref}>
        <div className="sobreNosotros">
        <picture>
    <source media="(max-width:465px)" srcset={logoMobile}/>
    <img src={logo} height="auto" alt='logo contenedores musy'/>
   </picture>
   <div className="sobreNosotros-info">
   <h1>Volquetes Musy </h1>
    
    <p className='quienesSomos'> Quienes Somos ?</p>
   <p className='info'>
   Somos Volquetes MUSY, una empresa con mas de 30 años de experiencia en el rubro dedicada al alquiler de volquetes (Habilitada por el Gobierno de la Ciudad de Buenos Aires).

Atendida por sus dueños, nuestro principal objetivo es la atención personalizada y satisfacción de nuestros clientes, por eso contamos con todo lo adecuado para brindar el mejor servicio en C.A.B.A (Capital Federal).
   </p>
   </div>
    
        </div>
    </div>
  )
}
)

export default SobreNosotros