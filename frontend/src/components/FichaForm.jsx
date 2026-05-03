import { useState } from "react";

function FichaForm({ onNuevaFicha }) {
  const [form, setForm] = useState({
    nombre: "",
    rut: "",
    fecha_nacimiento: "",
    direccion: "",
    telefono: "",
    apoderado: "",
    telefono_apoderado: "",
    talla_polera: "",
    talla_pantalon: "",
    talla_zapato: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:8000/api/fichas/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(() => {
      onNuevaFicha();
      setForm({
        nombre: "",
        rut: "",
        fecha_nacimiento: "",
        direccion: "",
        telefono: "",
        apoderado: "",
        telefono_apoderado: "",
        talla_polera: "",
        talla_pantalon: "",
        talla_zapato: "",
      });
    });
  };

  return (
    <form onSubmit={handleSubmit}  className="card" style={{ marginBottom: "20px" }}>
      <h2>Inscripción</h2>

      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
      <input name="rut" placeholder="RUT" value={form.rut} onChange={handleChange} />
      <input type="date" name="fecha_nacimiento" value={form.fecha_nacimiento} onChange={handleChange} />
      <input name="direccion" placeholder="Dirección" value={form.direccion} onChange={handleChange} />
      <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} />
      <input name="apoderado" placeholder="Apoderado" value={form.apoderado} onChange={handleChange} />
      <input name="telefono_apoderado" placeholder="Teléfono Apoderado" value={form.telefono_apoderado} onChange={handleChange} />

      <input name="talla_polera" placeholder="Talla Polera" value={form.talla_polera} onChange={handleChange} />
      <input name="talla_pantalon" placeholder="Talla Pantalón" value={form.talla_pantalon} onChange={handleChange} />
      <input name="talla_zapato" placeholder="Talla Zapato" value={form.talla_zapato} onChange={handleChange} />

      <button type="submit">Guardar</button>
    </form>
  );
}

export default FichaForm;