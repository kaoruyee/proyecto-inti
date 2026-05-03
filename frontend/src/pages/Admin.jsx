import { useEffect, useState } from "react";

function Admin() {
  const [fichas, setFichas] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/fichas/")
      .then(res => res.json())
      .then(data => setFichas(data));
  }, []);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Admin</h2>
        <button>Fichas</button>
        <button>Noticias</button>
      </div>

      <div className="dashboard-content">
        <h2>Fichas</h2>

        <div className="grid">
          {fichas.map(f => (
            <div key={f.id} className="card">
              <h3>{f.nombre}</h3>
              <p>{f.rut}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;