import React from 'react'
import logo from "../images/logo.jpeg"
import logoMobile from "../images/responsive/logo_162x119.png"
import { Button, Container, Link, Typography, useMediaQuery, useTheme } from '@mui/material'


const SobreNosotros =React.forwardRef((props,ref) => {

  const theme = useTheme()

  const media = useMediaQuery("(max-width:600px)")


  console.log("dudeeee"+media);
  return (
    <section ref={ref}>
      <div className="hero-bg">
        <div className="hero-content">
          <div className="hero-intro">
          <Typography variant='h3' component="h1" fontFamily="Righteous" color="white">ALQUILER DE VOLQUETES MUSY</Typography>
          <Container sx={{pt:"1rem"}}>
          <a href='https://api.whatsapp.com/send?phone=541128712555'>
          <Button variant='contained'>LLamenos 0112871-2555</Button>
          </a>
          </Container>
          </div>
          <div className="hero-banner">
            <Container>
            <Typography color={theme.palette.terciary.main} pt="2rem" fontFamily="Inter" fontSize={!media?"1.7rem":"0.80rem"} align='center'>
            Somos Volquetes MUSY, una empresa con mas de 30 años de experiencia en el rubro dedicada al alquiler de volquetes 
            (Habilitada por el Gobierno de la Ciudad de Buenos Aires). Atendida por sus dueños, nuestro principal objetivo es la atención personalizada
             y satisfacción de nuestros clientes, por eso contamos con todo lo adecuado para brindar el mejor servicio en C.A.B.A (Capital Federal).
            </Typography>
            </Container>
          </div>
        </div>
      </div>
    </section>
  )
}
)

export default SobreNosotros