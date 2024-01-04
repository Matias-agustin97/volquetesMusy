import { AppBar, Box, Container, Divider, Drawer, Link, List, ListItem, ListItemButton, ListItemText, Menu, Switch, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';

import { useDispatch, useSelector } from 'react-redux';
import { flipTheLights } from '../modeSlice';
import {Instagram } from '@mui/icons-material';
const Header = ({scrolltoHome,scrolltoNosotros,scrolltoServicios,scrolltoContacto}) => {

  const [drawerToggle, setdrawerToggle] = useState(false)

  const theme = useTheme()

  const dispatch=useDispatch()
  const browserTheme= useSelector((state)=>state.mode.value)


  const media=useMediaQuery('(max-width:600px)')



  const navMenuLiStyle={
    color:"white",
    padding:"0.5rem 1rem",
    fontFamily:"Inter",
    textDecoration:"none",
    cursor:"pointer"
  }



  const drawerMenu=(
    <Box sx={{width:"50vw",backgroundColor:browserTheme==="light"? theme.palette.primary.main:theme.palette.primary.dark.main,height:"100vh"}}>
      <Container sx={{pt:"2rem",color:theme.palette.terciary.main}}>
        <Typography align='center'>VOLQUETES</Typography>
        <Typography fontFamily="Righteous" align='center'>MUSY</Typography>
        <Divider sx={{borderColor:theme.palette.terciary.main}}/>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Home" align="center"/>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Sobre nosotros" align="center"/>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Galeria"align="center" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="Contacto" align="center" />
            </ListItemButton>
          </ListItem>        
        </List>
        <Divider sx={{borderColor:theme.palette.terciary.main}}/>
        <Typography align='center' fontSize="medium" sx={{pt:"2rem",fontFamily:"Inter"}}>Nuestras Redes</Typography>
        <List align="center">
          <ListItem >
            <ListItemButton>
              <FacebookIcon fontSize='large'  sx={{m:"0 auto"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton>
              <Instagram fontSize='large' sx={{m:"0 auto"}}/>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>

            </ListItemButton>
          </ListItem>
        </List>
      </Container>
    </Box>
  )



  return (
 <>
  <AppBar>
    <Toolbar disableGutters={media? true: false}>
      <Switch color={"terciary"} onClick={()=>{
        dispatch(flipTheLights())
        
      }
        }></Switch>
      <Container>
        {media? (
          <>
            <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
             
               <Box sx={{flex:"1",textAlign:"center",fontSize:"1.4rem"}}>
                <span>VOLQUETES </span>
                <span className='musy'>MUSY</span>
               </Box>
             
              <MenuIcon fontSize='large' onClick={()=>setdrawerToggle(!drawerToggle)}/>
              {drawerToggle? (
                <Drawer
                variant='temporary'
                open={drawerToggle}
                ModalProps={{
                  keepMounted:true
                }}
               
                onClose={()=>setdrawerToggle((state)=>!state)}
              
                >
                  {drawerMenu}
                </Drawer>
              ):(
                null
              )}
            </Box>

          </>
        ):(          
          <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <nav style={{flex:"1"}}>
            <ul style={{listStyle:"none",display:"flex",fontFamily:"Inter",justifyContent:"space-around"}}>
              <li><Link style={navMenuLiStyle}><Typography>Home</Typography></Link></li>
              <li><Link style={navMenuLiStyle}><Typography> Sobre nosotros</Typography></Link></li>
              <li><Link style={navMenuLiStyle}><Typography> Nuestros Volquetes</Typography></Link></li>
              <li><Link style={navMenuLiStyle}><Typography> Contacto</Typography></Link></li>
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
 </>
  )
}



export default Header