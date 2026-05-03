import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import Inicio from "./pages/Inicio";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import PanelUsuario from "./pages/PanelUsuario";
import Admin from "./pages/Admin";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // cargar preferencia guardada
useEffect(() => {
  const saved = localStorage.getItem("darkMode");

  if (saved !== null) {
    setDarkMode(saved === "true");
  } else {
    // 👇 Detecta modo del sistema
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }
}, []);

useEffect(() => {
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  const handleChange = (e) => {
    const saved = localStorage.getItem("darkMode");

    // Solo cambia si el usuario NO eligió manualmente
    if (saved === null) {
      setDarkMode(e.matches);
    }
  };

  media.addEventListener("change", handleChange);

  return () => media.removeEventListener("change", handleChange);
}, []);

  // aplicar clase al body
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<PanelUsuario />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default App;