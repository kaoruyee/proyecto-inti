import { useEffect, useState } from "react";
import { authFetch } from "../api";

function PanelUsuario() {
  const [ficha, setFicha] = useState([]);

  useEffect(() => {
    authFetch("/fichas/")
      .then(res => res.json())
      .then(data => setFicha(data));
  }, []);

  return (
    <div className="container">
      <h2>Mis datos</h2>

      {ficha.length > 0 ? (
        ficha.map(f => (
          <div key={f.id} className="card">
            <p><b>Nombre:</b> {f.nombre}</p>
            <p><b>RUT:</b> {f.rut}</p>
            <p><b>Teléfono:</b> {f.telefono}</p>
          </div>
        ))
      ) : (
        <p>No hay datos</p>
      )}
    </div>
  );
}

export default PanelUsuario;