import React from "react";
import "../stylesheet/About.css";
import AboutImg from "../img/natykeko.jpg";

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <h3 className="mb-3">Nuestra historia</h3>
        <div className="col-sm-12 col-md-12 col-lg-6 texto-historia">
          <p>
            SN Accesorios (Sergio y Natalia, o Deborah, como la llaman algunos)
            Nace en el 2018, luego de un hermoso viaje a Egipto (por eso nuestro
            logo es con pirámides) con una delegación de Danzas Árabes, ambiente
            que nos movemos hace mas de 20 años. Notamos que en todos los
            eventos había una gran variedad de stands de artículos para
            bailarinas, tales como trajes, caderines, bijouterie y ropa de
            ensayo, la mayoría destinado a mujeres y casi nulo para hombres, por
            lo que decidimos iniciar este proyecto con artículos para la vida
            diaria tanto para bailarinas, bailarines, músicos y para el público
            en general, pero siempre destinado al público que más consumíamos,
            La Danza Árabe.
          </p>
          <p>
            Nuestro primer producto fue hacer porta subes con diseños de
            odaliscas y simbología árabe y turca (ya que la mayoría de las
            personas viajan en transporte público), siguiendo por anotadores,
            cuadernos y lapiceras (ya que en toda clase de danza se toman
            apuntes) y de esa manera fuimos ampliando nuestros productos, que
            podrán ver en nuestra galería de fotos. Nos es muy grato que
            bailarines alrededor del mundo tengan nuestros productos, como así
            también ser elegidos por escuelas para hacer presentes a sus alumnos
            y maestros, lo mismo para las familias y empresas en general al
            elegir regalos personalizados para fiestas, cumpleaños y ocasiones
            especiales.
          </p>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
          <img src={AboutImg} alt="Foto_prod"></img>
        </div>
      </div>
      <div className="row mt-4 text-center info-adicional">
        <p>
          Si llegaste hasta acá, no podés perderte todo lo que tenemos para
          mostrarte. Recordá, nuestros productos son personalizados, vos elegís
          la imagen y nosotros la convertimos en el artículo soñado. Muchas
          gracias. SN Accesorios.
        </p>
      </div>
    </div>
  );
};

export default About;
