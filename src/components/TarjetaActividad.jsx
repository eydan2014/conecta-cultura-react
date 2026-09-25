function TarjetaActividad({ actividad, onInscribir }) {
  const precio =
    actividad.precio === 0
      ? "Gratis"
      : `$${actividad.precio.toLocaleString("es-CL")}`;

  return (
    <article className="card h-100 shadow-sm border-0">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-2">
          <h2 className="h5 mb-0">{actividad.nombre}</h2>
          <span className="badge text-bg-light">{actividad.categoria}</span>
        </div>

        <p className="card-text flex-grow-1">{actividad.descripcion}</p>
        <p className="mb-1">
          <strong>Precio:</strong> {precio}
        </p>
        <p className="mb-3">
          <strong>Cupos:</strong> {actividad.cupos}
        </p>

        {actividad.cupos > 0 && actividad.cupos <= 5 && (
          <p className="text-danger fw-bold">¡Últimos cupos!</p>
        )}

        {actividad.cupos === 0 && (
          <p className="text-secondary fw-semibold">Sin cupos disponibles</p>
        )}

        <button
          className="btn btn-primary mt-auto"
          type="button"
          onClick={() => onInscribir(actividad)}
          disabled={actividad.cupos === 0}
        >
          Inscribirme
        </button>
      </div>
    </article>
  );
}

export default TarjetaActividad;
