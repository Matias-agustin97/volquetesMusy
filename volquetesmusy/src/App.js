import Header from "./components/Header";
import Servicios from "./components/Servicios";
import SobreNosotros from "./components/SobreNosotros";
import Galeria from "./components/Galeria";
import "./styles/styles.css"
import Contacto from "./components/Contacto";
import React, { useRef } from "react";
import FloatingButons from "./components/FloatingButons";
import Footer from "./components/Footer";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";


import Righteous from "./styles/fonts/Righteous-Regular.ttf"










function App() {

  const homeRef= useRef(null)
  const nosotrosRef= useRef(null)
  const serviciosRef=useRef(null)  
  const galeriaRef=useRef(null)
  const contactoRef=React.createRef()


  const scrolltoHome=()=>homeRef.current.scrollIntoView()
  const scrolltoNosotros=()=>nosotrosRef.current.scrollIntoView()
  const scrolltoServicios=()=>serviciosRef.current.scrollIntoView()
  const scrolltoGaleria=()=>galeriaRef.current.scrollIntoView()
  const scrolltoContacto=()=> contactoRef.current.scrollIntoView()



  const theme=createTheme({
    palette:{
      primary:{
        main:"#b62e35"
      },
      secondary:{
        main:"#323433"
      }
      ,
      terciary:{
        main:"#fcfbfc"
      }
    },
    components:{
      MuiCssBaseline:{
        styleOverrides:`
        @fontface{
          font-family:"Righteous";
          font-style:normal;
          font-weight:400;
          src:url(${Righteous}) format("ttf");
        }`
      }
    }
  })










console.log(theme);


  return (
   <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Header/>
   </ThemeProvider>
  );
}

export default App;
