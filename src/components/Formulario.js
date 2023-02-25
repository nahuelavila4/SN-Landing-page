import React from "react";
import "../stylesheet/Formulario.css";
const Formulario = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h3>
            Registrate para unirte a nuestra Newsletter y obtener ofertas
            increibles
          </h3>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="form">
                <div className="nombre mb-3">
                  <label htmlFor="nombre" className="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Lucas"
                  />
                </div>
                <div className="correo mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="lucas@gmail.com"
                  />
                  <div id="emailHelp" className="form-text">
                    Nunca compartiremos tu email con nadie.
                  </div>
                </div>
                <button className="singup btn btn-success btn-lg d-grid gap-2">Registrarse</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
