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


import Righteous from "./styles/fonts/Righteous/Righteous-Regular.ttf";

import Archivo from "./styles/fonts/Archivo/Archivo-VariableFont.ttf";
                  
                   

import Inter from "./styles/fonts/Inter/Inter-VariableFont.ttf";
                       


import { Provider, useSelector } from "react-redux";
import store from "./store";









function App() {


  const browserTheme=useSelector((state)=>state.mode.value)


  




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
    typography:{
      fontFamily:["Archivo,Inter,Righteous"]
    }
    ,
    palette:{
      mode:browserTheme,
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
        @font-face{
          font-family:"Righteous";
          font-style:normal;
          font-weight:400;
          src:url(${Righteous}) format("ttf");
        }
        @font-face{
          font-family:"Archivo";
          font-style:normal;
          font-weight:400;
          src:url(${Archivo}) format("ttf");
        }
        @font-face{
          font-family:"Inter";
          font-style:normal;
          font-weight:400;
          src:url(${Inter}) format("ttf");
        }
        
        
        
        `
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
