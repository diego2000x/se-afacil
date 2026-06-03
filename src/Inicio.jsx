import React from "react";
import logo from "./assets/logo.png";

const Inicio = () => {
  return (
    <div className="inicio">
      <img src={logo} alt="Logo" className="logo" />
      <p className="saludo">¡Bienvenido a SeñaFacil!</p>
      <button className="entrar">¡Comunicate!</button>
      <p className="subtexto">Tu App de lengua de señas.</p>
    </div>
  );
};

export default Inicio;
