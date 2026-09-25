import { useEffect, useState } from "react";
import Bienvenida from "./components/Bienvenida";
import Cabecera from "./components/Cabecera";
import Navegacion from "./components/Navegacion";
import MisInscripciones from "./components/MisInscripciones";
import PiePagina from "./components/PiePagina";
import Cartelera from "./pages/Cartelera";
import { actividades } from "./data/actividades";

function App() {
  const [categoria, setCategoria] = useState("Todas");
  const [inscripciones, setInscripciones] = useState(() => {
    const guardadas = localStorage.getItem("inscripciones");
    return guardadas ? JSON.parse(guardadas) : [];
  });

  const visibles =
    categoria === "Todas"
      ? actividades
      : actividades.filter((actividad) => actividad.categoria === categoria);

  function inscribir(actividad) {
    const yaExiste = inscripciones.some((item) => item.id === actividad.id);
    if (yaExiste) return;

    setInscripciones([...inscripciones, actividad]);
  }



  function eliminarInscripcion(id) {
    setInscripciones(inscripciones.filter((item) => item.id !== id));
  }


  
  useEffect(() => {
    localStorage.setItem("inscripciones", JSON.stringify(inscripciones));
  }, [inscripciones]);

  return (
    <>
      <Cabecera />
      <Navegacion />

      <main className="container py-4">
        <Bienvenida />

        <section id="actividades" aria-labelledby="titulo-actividades">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
            <div>
              <h2 id="titulo-actividades" className="h3 mb-1">
                Cartelera de actividades
              </h2>
              <p className="text-secondary mb-0">
                Filtra por categoría e inscríbete en las actividades disponibles.
              </p>
            </div>

            <div className="filtro-categoria">
              <label className="form-label fw-semibold" htmlFor="categoria">
                Categoría
              </label>
              <select
                id="categoria"
                className="form-select"
                value={categoria}
                onChange={(evento) => setCategoria(evento.target.value)}
              >
                <option>Todas</option>
                <option>Música</option>
                <option>Artes visuales</option>
                <option>Teatro</option>
                <option>Danza</option>
              </select>
            </div>
          </div>

          <Cartelera actividades={visibles} onInscribir={inscribir} />
        </section>

        <MisInscripciones
          inscripciones={inscripciones}
          onEliminar={eliminarInscripcion}
        />
      </main>

      <PiePagina />
    </>
  );
}

export default App;
