import React from "react";
import { useState } from "react";

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
      </div>
    </>
  );
}

export default Menu;
