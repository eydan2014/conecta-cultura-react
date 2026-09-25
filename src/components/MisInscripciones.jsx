function MisInscripciones({ inscripciones, onEliminar }) {
  return (
    <section id="inscripciones" className="mt-5" aria-labelledby="titulo-inscripciones">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 id="titulo-inscripciones" className="h3 mb-0">
          Mis inscripciones
        </h2>
        <span className="badge text-bg-primary">{inscripciones.length}</span>
      </div>

      {inscripciones.length === 0 ? (
        <div className="alert alert-light border" role="status">
          Todavía no tienes actividades inscritas.
        </div>
      ) : (
        <div className="list-group">
          {inscripciones.map((actividad) => (
            <div
              className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3"
              key={actividad.id}
            >
              <div>
                <h3 className="h6 mb-1">{actividad.nombre}</h3>
                <p className="mb-0 text-secondary">{actividad.categoria}</p>
              </div>
              <button
                className="btn btn-outline-danger btn-sm"
                type="button"
                onClick={() => onEliminar(actividad.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MisInscripciones;
