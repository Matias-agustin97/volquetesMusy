import { Box, Container, List, ListItem } from '@mui/material'
import React from 'react'
import Logo from "../images/logo.jpeg"



const Servicios = React.forwardRef((props,ref) => {
  return (
    <section ref={ref} >
      <Container>
        <Box>
          <img src={Logo} alt="logo volquetes musy" />
          <List>
            <ListItem>Residuos de obra</ListItem>
            <ListItem>Obras Hidraulicas</ListItem>
            <ListItem>Obras Civiles</ListItem>
            <ListItem>Escombros</ListItem>
          </List>
        </Box>
      </Container>
    </section>
  )
})

export default Servicios