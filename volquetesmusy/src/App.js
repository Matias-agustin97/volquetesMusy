import Header from "./components/Header";
import Servicios from "./components/Servicios";
import SobreNosotros from "./components/SobreNosotros";
import Galeria from "./components/Galeria";
import "./styles/styles.css"
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="App">
     <Header/>
    <SobreNosotros/>
    <Servicios/>
    <Galeria/>
    <Contacto/>
    </div>
  );
}

export default App;
