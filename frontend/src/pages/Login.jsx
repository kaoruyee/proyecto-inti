import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    const data = await res.json();

    if (data.access) {
      localStorage.setItem("token", data.access);
      navigate("/panel");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="center-box">
      <form>
        <h2>Login</h2>

        <input
          placeholder="Usuario"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={login}>
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;