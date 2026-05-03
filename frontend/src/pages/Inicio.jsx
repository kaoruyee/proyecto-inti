import { useEffect, useState } from "react";
import { publicFetch } from "../api";
import Header from "../components/Header";

function Inicio() {
  // 👇 ESTO VA DENTRO DEL COMPONENTE
  const [noticias, setNoticias] = useState([]);

  // 👇 ESTE ES EL FETCH
  useEffect(() => {
    publicFetch("/noticias/")
      .then(res => res.json())
      .then(data => setNoticias(data));
  }, []);

  return (
    <>
      <Header />

      <div className="container">

        {/* 📰 NOTICIAS */}
        <div className="section">
          <h2>Noticias</h2>

          {/* 👇 ESTO REEMPLAZA LAS NOTICIAS ANTIGUAS */}
          <div className="grid">
            {noticias.map(n => (
              <div className="card news-card" key={n.id}>
                
                {/* 👇 IMAGEN DESDE DJANGO */}
                <img 
                  src={n.imagen} 
                  className="news-img"
                  alt="noticia"
                />

                <div>
                  <h3>{n.titulo}</h3>
                  <p>{n.contenido}</p>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* 🧑 SOBRE NOSOTROS */}
        <div className="section">
          <h2>Sobre Nosotros</h2>

          <div className="card">
            <p>
              Inti Pacsi es un conjunto folclórico dedicado a preservar 
              las tradiciones culturales mediante la danza.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Inicio;