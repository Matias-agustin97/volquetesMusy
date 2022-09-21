import Header from "./components/Header";
import Servicios from "./components/Servicios";
import SobreNosotros from "./components/SobreNosotros";
import Galeria from "./components/Galeria";
import "./styles/styles.css"
import Contacto from "./components/Contacto";
import React, { useRef } from "react";
import {ImWhatsapp} from "react-icons/im"
import WhatsappIcon from "./components/WhatsappIcon";
import UpArrowIcon from "./components/UpArrowIcon";
import FloatingButons from "./components/FloatingButons";
function App() {

  const homeRef= useRef(null)
  const nosotrosRef= useRef(null)
  const serviciosRef=useRef(null) 
  const galeriaRef=useRef(null)
  const contactoRef=useRef(null)


  const scrolltoHome=()=>homeRef.current.scrollIntoView()
  const scrolltoNosotros=()=>nosotrosRef.current.scrollIntoView()
  const scrolltoServicios=()=>serviciosRef.current.scrollIntoView()
  const scrolltoGaleria=()=>galeriaRef.current.scrollIntoView()
  const scrolltoContacto=()=> contactoRef.current.scrollIntoView()

  return (
    <div className="App">
     <Header scrolltoHome={scrolltoHome} scrolltoNosotros={scrolltoNosotros} scrolltoServicios={scrolltoServicios}/>
    <SobreNosotros ref={nosotrosRef}/>
    <Servicios/>
    <Galeria/>
    <Contacto/>
    <FloatingButons/>
    </div>
  );
}

export default App;
