import { AppBar, Box, Container, Link, Toolbar } from '@mui/material';
import React from 'react'


import { FaFacebookSquare} from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
const Header = ({scrolltoHome,scrolltoNosotros,scrolltoServicios,scrolltoContacto}) => {








  const navMenuLiStyle={
    color:"white",
    padding:"0.5rem 1rem"
  }







  return (
 <header className='header-container'>
  <AppBar>
    <Toolbar>
      <Container>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
          <nav>
            <ul style={{listStyle:"none",display:"flex"}}>
              <li><Link style={navMenuLiStyle}>Home</Link></li>
              <li><Link style={navMenuLiStyle}>Quienes somos</Link></li>
              <li><Link style={navMenuLiStyle}>Galeria</Link></li>
              <li><Link style={navMenuLiStyle}>Contacto</Link></li>
            </ul>
          </nav>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:"2rem"}}>
            <FaFacebookSquare ></FaFacebookSquare>
            <FaInstagram></FaInstagram>
          </div>
        </Box>
      </Container>
    </Toolbar>
  </AppBar>
 </header>
  )
}



export default Header