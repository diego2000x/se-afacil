import React from "react";
import { useState } from "react";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <div className="menu">
        <h2 className="titulo-menu">¿Que necesitas expresar hoy?</h2>
        <input
          className="buscar"
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar..."
        />
        <div className="seleccion">
          <button className="boton-elegir" onClick={() => navigate("/categoria/saludos")}>
            <span>🤗</span>
            <p>Saludos</p>
          </button>
          <button className="boton-elegir" onClick={() => navigate("/categoria/preguntas")}>
            <span>🤔</span>
            <p>Preguntas</p>
          </button>
          <button className="boton-elegir" onClick={() => navigate("/categoria/expresiones")}>
            <span>😃</span>
            <p>Expresiones</p>
          </button>
        </div>
        <img src={logo} alt="" className="logo-menu" />
      </div>
    </>
  );
}

export default Menu;
