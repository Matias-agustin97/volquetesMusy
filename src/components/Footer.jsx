import { Container, useTheme } from '@mui/material'
import React from 'react'

const Footer = () => {




  const theme = useTheme();





  return (
    <footer className='footer' style={{backgroundColor:theme.palette.primary.main}}>
      <Container sx={{py:"0.75rem",color:"#fff",fontFamily:"Righteous",fontWeight:"200",textAlign:"center"}} >
      Raven Design 2024 ©
      </Container>
    </footer>
  )
}

export default Footer