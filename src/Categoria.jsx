import { useParams } from "react-router-dom";
import contenido from "./contenido.json";
import { useNavigate } from "react-router-dom";

export default function Categoria() {
  const { tipo } = useParams();
  const nombre = tipo ? tipo.charAt(0).toUpperCase() + tipo.slice(1) : "";
  const elementos = contenido[tipo] || [];
  const navigate = useNavigate();
  return (
    <div className="Categoria">
      <h1 className="CatNombre">{nombre}</h1>
      <div className="Elementos">
        {elementos.length === 0 ? (
          <p>Categoría no encontrada</p>
        ) : (
          elementos.map((item) => (
            <div key={item.id}>
              <button
                className="boton-video"
                onClick={() => navigate(`/video/${item.id}`)}
              >
                <h3>{item.texto}</h3>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
