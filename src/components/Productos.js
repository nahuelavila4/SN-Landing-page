import React from "react";
import "../stylesheet/Productos.css";

const Productos = ({ nombreimg, descrip }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-3">
        <img src={nombreimg} alt="src"></img>
      <div className="prodindividual">
        <h6>{descrip}</h6>
      </div>
    </div>
  );
};

export default Productos;
