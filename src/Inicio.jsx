import React from "react";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";

function Inicio() {
  const navigate = useNavigate();
  return (
    <div className="inicio">
      <img src={logo} alt="Logo" className="logo" />
      <p className="saludo">¡Bienvenido a SeñaFacil!</p>
      <p className="mensajeInicio">
        Donde aprendes lengua de señas chilena de forma rapida y facil.
      </p>
      <button className="entrar" onClick={() => navigate("/menu")}>
        ¡Comunicate!
      </button>
      <p className="subtexto">Tu App de lengua de señas.</p>
    </div>
  );
}

export default Inicio;
