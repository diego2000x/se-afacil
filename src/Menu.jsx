import React from "react";
import { useState, useMemo, useRef, useEffect } from "react";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";
import contenido from "./contenido.json";

// Quita tildes y pasa a minúsculas para que la búsqueda sea más flexible
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function Menu() {
  const [busqueda, setBusqueda] = useState("");
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const navigate = useNavigate();
  const contenedorRef = useRef(null);

  // Une todas las categorías del JSON en una sola lista, recordando de qué categoría viene cada item
  const todosLosItems = useMemo(() => {
    return Object.entries(contenido).flatMap(([categoria, items]) =>
      items.map((item) => ({ ...item, categoria }))
    );
  }, []);

  // Filtra por coincidencia de texto, ignorando mayúsculas/tildes
  const resultados = useMemo(() => {
    if (!busqueda.trim()) return [];
    const q = normalizar(busqueda);
    return todosLosItems.filter((item) => normalizar(item.texto).includes(q));
  }, [busqueda, todosLosItems]);

  // Cierra la lista desplegable si se hace clic fuera del buscador
  useEffect(() => {
    function manejarClickFuera(e) {
      if (contenedorRef.current && !contenedorRef.current.contains(e.target)) {
        setMostrarResultados(false);
      }
    }
    document.addEventListener("mousedown", manejarClickFuera);
    return () => document.removeEventListener("mousedown", manejarClickFuera);
  }, []);

  const irAVideo = (id) => {
    setBusqueda("");
    setMostrarResultados(false);
    navigate(`/video/${id}`);
  };

  return (
    <>
      <div className="menu">
        <h2 className="titulo-menu">¿Que necesitas expresar hoy?</h2>
        <div className="buscador-contenedor" ref={contenedorRef}>
          <input
            className="buscar"
            type="text"
            value={busqueda}
            onChange={(e) => {
              setBusqueda(e.target.value);
              setMostrarResultados(true);
            }}
            onFocus={() => setMostrarResultados(true)}
            placeholder="Buscar..."
            autoComplete="off"
          />
          {mostrarResultados && busqueda.trim() !== "" && (
            <ul className="resultados-busqueda">
              {resultados.length > 0 ? (
                resultados.map((item) => (
                  <li key={item.id}>
                    <button
                      className="resultado-item"
                      onClick={() => irAVideo(item.id)}
                    >
                      <span className="resultado-texto">{item.texto}</span>
                      <span className="resultado-categoria">{item.categoria}</span>
                    </button>
                  </li>
                ))
              ) : (
                <li className="sin-resultados">Sin resultados</li>
              )}
            </ul>
          )}
        </div>
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
