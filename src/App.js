import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* Barra de navegación */}
      <Navbar />
      {/* Sección Hero */}
      <Hero />
      <Ticker />
      {/* Sección de habilidades */}
      <Skills />
      {/* Sección de proyectos */}
      <Projects />
      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;

