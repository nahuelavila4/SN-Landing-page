import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Envios from "./components/Envios";
import About from "./components/About";
import MejorOpcion from "./components/MejorOpcion";
import Formulario from "./components/Formulario";
import Productos from "./components/Productos";
import Prod1 from "./img/prod1.jpg";
import Prod2 from "./img/prod2.jpg";
import Prod3 from "./img/prod3.jpg";
import Prod4 from "./img/prod4.jpg";
import Prod5 from "./img/prod5.jpg";
import Prod6 from "./img/prod6.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="presentacion" id="presentacion-link">
        <div className="prod-texto">
          <div className="info">
            <h1>SN Accesorios</h1>
            <p className="mb-5">Todo lo que quieras crear</p>
          </div>
          <div className="cta">
            <a
              href="https://www.instagram.com/sn.accesorios/"
              rel="noreferrer"
              target={"_blank"}
            >
              <button>Empecemos a crear</button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="container productos text-center" id="productos-link">
        <h3 className="mb-5 text-center">Tipos de productos</h3>
        <div className="row mb-3">
          <Productos nombreimg={Prod1} descrip="Consultar por producto" />
          <Productos nombreimg={Prod2} descrip="Consultar por producto" />
          <Productos nombreimg={Prod3} descrip="Consultar por producto" />
          <Productos nombreimg={Prod4} descrip="Consultar por producto" />
          <Productos nombreimg={Prod5} descrip="Consultar por producto" />
          <Productos nombreimg={Prod6} descrip="Consultar por producto" />
        </div>
      </div>

      <div className="about" id="about-link">
        <About />
      </div>

      <Envios />

      <div className="prod" id="prod-link">
        <div className="container">
          <h3 className="mb-5 text-center">Razones para elegirnos</h3>
          <div className="row d-flex justify-content-center">
            <MejorOpcion
              titulo={"Infinita personalizacion para tu producto"}
              texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam viverra volutpat semper. Fusce tempor, lectus eget
              pulvinar tristique, velit mi volutpat est, eget ultricies
              justo orci quis ipsum"
              icono={"fa-solid fa-pen-ruler"}
            />
          </div>
          <div className="row">
            <MejorOpcion
              titulo={"Entendemos el negocio digital"}
              texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam viverra volutpat semper. Fusce tempor, lectus eget
                  pulvinar tristique, velit mi volutpat est, eget ultricies
                  justo orci quis ipsum"
              icono={"fa-solid fa-diagram-project"}
            />
          </div>

          <div className="row">
            <MejorOpcion
              titulo={"Mejor material"}
              texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam viverra volutpat semper. Fusce tempor, lectus eget
                  pulvinar tristique, velit mi volutpat est, eget ultricies
                  justo orci quis ipsum"
              icono={"fa-solid fa-shirt"}
            />
          </div>

          <div className="row">
            <MejorOpcion
              titulo={"Mejor material"}
              texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam viverra volutpat semper. Fusce tempor, lectus eget
              pulvinar tristique, velit mi volutpat est, eget ultricies
              justo orci quis ipsum"
            />
          </div>
        </div>
      </div>

      <div className="formulario" id="form-link">
        <Formulario />
      </div>
      <div className="cont footer text-center">
        <p>sn accesorios</p>
      </div>
    </div>
  );
}

export default App;
