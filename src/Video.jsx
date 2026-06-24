import React from "react";
import { useParams } from "react-router-dom";
import contenido from "./contenido.json";

const Video = () => {
  const { video } = useParams();
  const datos = Object.values(contenido).flat();
  const item = datos.find((elemento) => elemento.id === video);
  return (
    <div className="visor-videos">
      <h1>Señas</h1>
      <video
        className="videoplayer"
        src={`/${video}.mp4`}
        autoPlay
        muted
        loop
        playsInline
      />
      <h2>{item.texto}</h2>
    </div>
  );
};

export default Video;
