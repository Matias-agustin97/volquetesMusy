import { AppBar, Box, Container, Link, Switch, Toolbar, useTheme } from '@mui/material';
import React from 'react'


import { FaFacebookSquare} from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { flipTheLights } from '../modeSlice';
const Header = ({scrolltoHome,scrolltoNosotros,scrolltoServicios,scrolltoContacto}) => {



  const theme = useTheme()

  const dispatch=useDispatch()
  const browserTheme= useSelector((state)=>state.mode.value)

  const navMenuLiStyle={
    color:"white",
    padding:"0.5rem 1rem"
  }







  return (
 <header className='header-container'>
  <AppBar>
    <Toolbar>
      <Switch onClick={()=>{
        dispatch(flipTheLights())
        
      }
        }></Switch>
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