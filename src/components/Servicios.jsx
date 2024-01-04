import { Box, Container, IconButton, List, ListItem, ListItemIcon, ListSubheader, Typography } from '@mui/material'
import React from 'react'
import Logo from "../images/logo.jpeg"
import { DangerousSharp, DeleteSweep, DirectionsWalkSharp, EngineeringSharp } from '@mui/icons-material'



const Servicios = React.forwardRef((props,ref) => {
  return (
    <section ref={ref} >
      <Container sx={{pt:"2rem"}}>
        <Box sx={{display:"flex",alignItems:"stretch"}}>
          <img src={Logo} alt="logo volquetes musy" />
          <List sx={{listStyleType:"circle"}} >
            <ListSubheader color='primary'><Typography align='center' fontWeight="bold" fontSize="large">Nuestros Servicios</Typography></ListSubheader>
            <ListItem>
              <ListItemIcon>
                <DeleteSweep color='primary' fontSize='large'/>
              </ListItemIcon>
              <Box>
              <Typography variant='h6' component="h3" align='left' color="primary" fontWeight="bold">Residuos de obra</Typography>
              <Typography fontWeight="bold">
              Realizamos retiro de escombros de acuerdo a tus necesidades las 24 hs
              </Typography>
              </Box>
            </ListItem>
            <ListItem>
              <ListItemIcon >
                <EngineeringSharp color='primary' fontSize='large'/>
              </ListItemIcon>
              <Box>
              <Typography variant='h6' component="h3" align='left' color="primary" fontWeight="bold">Obras Hidraulicas</Typography>
              <Typography fontWeight="bold">Siempre contamos con disponibilidad de volquetes para entrega inmediata</Typography>
              </Box> 
            </ListItem>
            <ListItem>
            <ListItemIcon>
                  <DirectionsWalkSharp color='primary' fontSize='large'/>
                </ListItemIcon>
              <Box>
              <Typography variant='h6' component="h3" align="left" color="primary" fontWeight="bold">Obras Civiles</Typography>
              <Typography fontWeight="bold">Disponibilidad inmediata, contamos con una amplia flota en óptimo estado para brindar el mejor servicio que nuestros clientes merecen.</Typography>
              </Box>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DangerousSharp color='primary' fontSize='large'/>
              </ListItemIcon>
              <Box>
              <Typography variant='h6' component="h3" align="left" color="primary" fontWeight="bold">Escombros</Typography>
              <Typography fontWeight="bold">Contamos con personal capacitado con todo su instrumento de trabajo y seguro correspondiente.</Typography>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Container>
    </section>
  )
})

export default Servicios