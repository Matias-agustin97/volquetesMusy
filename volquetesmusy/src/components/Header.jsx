import { AppBar, Box, Container, Link, Menu, Switch, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaFacebookSquare} from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { flipTheLights } from '../modeSlice';
import { FacebookOutlined, Instagram } from '@mui/icons-material';
const Header = ({scrolltoHome,scrolltoNosotros,scrolltoServicios,scrolltoContacto}) => {



  const theme = useTheme()

  const dispatch=useDispatch()
  const browserTheme= useSelector((state)=>state.mode.value)


  const media=useMediaQuery('(max-width:600px)')



  const navMenuLiStyle={
    color:"white",
    padding:"0.5rem 1rem"
  }







  return (
 <header className='header-container'>
  <AppBar>
    <Toolbar>
      <Switch color="secondary" onClick={()=>{
        dispatch(flipTheLights())
        
      }
        }></Switch>
      <Container>
        {media? (
          <>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
              <div>
                <Typography align='center'>
                  <Typography variant='span' component="span">VOLQUETES</Typography>
                  <Typography component="span" fontFamily={theme.typography.fontFamily[1]}> MUSY</Typography>
                </Typography>
              </div>
              <MenuIcon/>
            </Box>

          </>
        ):(          
          <Box sx={{display:"flex",justifyContent:"space-between"}}>
          <nav>
            <ul style={{listStyle:"none",display:"flex"}}>
              <li><Link style={navMenuLiStyle}>Home</Link></li>
              <li><Link style={navMenuLiStyle}>Quienes somos</Link></li>
              <li><Link style={navMenuLiStyle}>Galeria</Link></li>
              <li><Link style={navMenuLiStyle}>Contacto</Link></li>
            </ul>
          </nav>
          <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <FacebookIcon fontSize='large'/>
            <Instagram fontSize='large' />
          </div>
        </Box>
        )}
      </Container>
    </Toolbar>
  </AppBar>
 </header>
  )
}



export default Header