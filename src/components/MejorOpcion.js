import React from "react";
import "../stylesheet/MejorOpcion.css";

const Productos2 = ({ titulo, texto, icono }) => {
  return (
    <div className="beneficio">
      <div className="beneficio-header d-flex align-items-center">
        <i className={icono}></i>
        <h4>{titulo}</h4>
      </div>
      <p>{texto}</p>
    </div>
  );
};

export default Productos2;
