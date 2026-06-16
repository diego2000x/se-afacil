import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Inicio from "./Inicio";
import Menu from "./Menu";
import Categoria from "./Categoria";
import Video from "./Video";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/categoria/:tipo" element={<Categoria />} />
      <Route path="/video/:video" element={<Video />} />
    </Routes>
  );
}

export default App;
