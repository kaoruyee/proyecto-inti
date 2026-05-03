import FichaForm from "../components/FichaForm";

function Registro() {
  return (
    <div className="container">
      <h2>Registro</h2>
      <FichaForm onNuevaFicha={() => alert("Registrado")} />
    </div>
  );
}

export default Registro;