
// css original
// import './App.css'
// import '../public/assets/css/style.css'

import Acerca from "./components/Acerca"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import Habilidades from "./components/Habilidades"
import HerramientasPlataformas from "./components/HerramientasPlataformas"
import LibreriasFrameworks from "./components/LibreriasFrameworks"
import PerfilCorto from "./components/PerfilCorto"
import Portfolio from "./components/Portfolio"
import Resumen from "./components/Resumen"



function App() {
  

  return (
    <>
    {/* <Navbar /> */}
      <PerfilCorto />

      <main id="main">
        <Acerca />
        <Habilidades />
        <LibreriasFrameworks />
        <HerramientasPlataformas />
        <Resumen />
        <Portfolio />
        <Contacto />
      </main>

      <Footer />

    </>
  )
}

export default App
