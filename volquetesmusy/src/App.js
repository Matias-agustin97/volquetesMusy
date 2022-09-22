import Header from "./components/Header";
import Servicios from "./components/Servicios";
import SobreNosotros from "./components/SobreNosotros";
import Galeria from "./components/Galeria";
import "./styles/styles.css"
import Contacto from "./components/Contacto";
import React, { useRef } from "react";
import FloatingButons from "./components/FloatingButons";
import Footer from "./components/Footer";
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

  return (
    <div className="App" ref={homeRef}>
     <Header scrolltoHome={scrolltoHome} scrolltoNosotros={scrolltoNosotros} scrolltoServicios={scrolltoServicios} scrolltoGaleria={scrolltoGaleria} scrolltoContacto={scrolltoContacto}/>
     <SobreNosotros ref={nosotrosRef}/>
   
    <Servicios ref ={serviciosRef}/>
    <Galeria ref={galeriaRef}/>
    
    <Contacto ref={contactoRef}/>
    <FloatingButons scrolltoHome={scrolltoHome}/>
    <Footer/>
    </div>
  );
}

export default App;
