import { AddLocationAltSharp, BadgeSharp, LocalPostOfficeSharp, SmartphoneSharp } from '@mui/icons-material'
import { Box, Button, Container, FormControl, Input, InputAdornment, InputLabel, Typography, useTheme } from '@mui/material'
import React from 'react'

const Contacto = React.forwardRef((props,ref) => {


  const theme = useTheme()


 


  return (
    <section ref={ref}> 
      <Container sx={{pt:"3rem"}}>
      <Typography color="primary" align='center' fontSize="1.5rem" fontFamily="Righteous" pb="1rem">¿ Donde Estamos ?</Typography>
      <iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1641.4774100772852!2d-58.409703!3d-34.630582!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb04765013f3%3A0xf7ccd25c4dfb55b8!2s24%20de%20Noviembre%201656%2C%20Buenos%20Aires%2C%20Argentina!5e0!3m2!1ses!2sus!4v1663547634656!5m2!1ses!2sus"
       width="100%" height="450"  allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{maxWidth:"100%",margin:"0 auto"}}></iframe>
        <Typography color="primary" align='center' fontSize="1.5rem" fontFamily="Righteous">Contactenos</Typography>
        <form action='./form.php' method='POST'>
          <Box sx={{height:"50vh",display:"flex",flexDirection:"column",justifyItems:"stretch",alignItems:"stretch"}}>
          <FormControl  sx={{pb:"1rem"}}>
          <InputLabel>
            Nombre
          </InputLabel>
          <Input
          
          id='form_nombre'
          startAdornment={
            
            <InputAdornment position='start'>
              <BadgeSharp color='primary'/>
            </InputAdornment>
          }
          
          />
          </FormControl>
          <FormControl  sx={{pb:"1rem"}}>
          <InputLabel>
            Telefono
          </InputLabel>
          <Input id='form_nombre'
          startAdornment={
            <InputAdornment position='start'>
              <SmartphoneSharp color='primary'/>
            </InputAdornment>
          }
          
          />
          </FormControl>
          <FormControl  sx={{pb:"2rem"}}>
          <InputLabel>
            Localidad
          </InputLabel>
          <Input id='form_nombre'
          startAdornment={
            <InputAdornment position='start'>
              <AddLocationAltSharp color='primary'/>
            </InputAdornment>
          }
          
          />
          </FormControl>
          <FormControl  sx={{pb:"2rem"}}>
          <InputLabel>
            Mensaje
          </InputLabel>
          <Input id='form_nombre'
          startAdornment={
            <InputAdornment position='start'>
              <LocalPostOfficeSharp color='primary'/>
            </InputAdornment>
          }
          
          />
          </FormControl>
          <Button type='submit' variant='contained'>Enviar</Button>
          </Box>
        </form>
      </Container>
    </section>
  )

})

export default Contacto