import React from "react";
import { useState } from "react";
import logo from "./assets/logo.png";

function Menu() {
  const [busqueda, setBusqueda] = useState("");

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
          <div className="boton-elegir">
            <h1>🤗</h1>
            <p>Saludos</p>
          </div>
          <div className="boton-elegir">
            <h1>🤔</h1>
            <p>Preguntas</p>
          </div>
          <div className="boton-elegir">
            <h1>😃</h1>
            <p>Expresiones</p>
          </div>
        </div>
        <img src={logo} alt="" className="logo-menu" />
      </div>
    </>
  );
}

export default Menu;
