import React from 'react'
import { Button,useTheme,Box } from '@mui/material'


const SobreNosotros =React.forwardRef((props,ref) => {

  const theme = useTheme()

  
  
  return (
    <section ref={ref} className='sobre-nos-cont'>    
              <Box sx={{display:"flex",flexDirection:"column",justifyContent:"stretch",minHeight:"80vh"}}>
                <div className="hero-intro">
                  <h1 className='h1-title'>ALQUILER DE VOLQUETES MUSY</h1>
                  <a href='https://api.whatsapp.com/send?phone=541128712555'>
                    <Button variant='contained'>LLamenos 0112871-2555</Button>
                  </a>
                    </div> 
                <div className="hero-banner-text">
                  <p>
                  Somos Volquetes MUSY, una empresa con mas de 30 años de experiencia en el rubro dedicada al alquiler de volquetes 
                 (Habilitada por el Gobierno de la Ciudad de Buenos Aires). Atendida por sus dueños, nuestro principal objetivo es la atención personalizada
                  y satisfacción de nuestros clientes, por eso contamos con todo lo adecuado para brindar el mejor servicio en C.A.B.A (Capital Federal).
                  </p>
                </div>
              </Box>    
    </section>
  )
}
)

export default SobreNosotros