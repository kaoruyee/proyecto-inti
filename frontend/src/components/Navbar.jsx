import { useNavigate } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      
      <div className="nav-left" onClick={() => navigate("/")}>
        <img src="/imagenes/logo.png" className="logo" />

        <div>
          <h1>Inti Pacsi</h1>
          <p className="subtitulo">Cultura de Pueblos Originarios</p>
        </div>
      </div>

      <div className="nav-right">
        <button onClick={() => navigate("/")}>Inicio</button>
        <button onClick={() => navigate("/registro")}>Registro</button>
        <button onClick={() => navigate("/login")}>Login</button>
        <button onClick={() => navigate("/admin")}>Admin</button>

        {/* 🌙 BOTÓN MODO */}
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

    </div>
  );
}

export default Navbar;