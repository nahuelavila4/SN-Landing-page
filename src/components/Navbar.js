import React from "react";
import "../stylesheet/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top navbar-light">
        <div className="container-fluid asd">
          <a className="navbar-brand" href="#">
            <div className="color-opciones">SN ACCESORIOS</div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="compras d-flex">
            <a className="nav-link" aria-current="page" href="#presentacion-link">
              <div className="color-opciones">Home</div>
            </a>

            <a className="nav-link" aria-current="page" href="#productos-link">
              <div className="color-opciones">Productos</div>
            </a>

            <a className="nav-link" aria-current="page" href="#about-link">
              <div className="color-opciones">Nosotros</div>
            </a>

            <a className="nav-link" aria-current="page" href="#prod-link">
              <div className="color-opciones">Beneficios</div>
            </a>
            <a className="nav-link" aria-current="page" href="#form-link">
              <div className="color-opciones">Contacto</div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
