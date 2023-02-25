import React from "react";
import "../stylesheet/Envios.css";

const Envios = () => {
  return (
    <div>
      <div className="container-fluid benef">
        <div className="row">
          <div className="col-4 d-flex align-items-center">
            <i className="fa-regular fa-credit-card"></i>
            <h4>Hasta 6 cuotas sin interes</h4>
          </div>
          <div className="col-4 d-flex align-items-center">
            <i className="fa-solid fa-truck"></i>
            <h4>Envios a todo el pais</h4>
          </div>
          <div className="col-4 d-flex align-items-start">
              <i className="fa-regular fa-money-bill-1"></i>
              <h4>Descuentos</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Envios;
