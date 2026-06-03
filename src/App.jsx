import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Inicio from "./Inicio";
import Menu from "./Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
