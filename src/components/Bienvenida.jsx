function Bienvenida() {
  const nombreProyecto = "Conecta Cultura";

  return (
    <section id="inicio" className="hero rounded-4 p-4 p-md-5 mb-4">
      <p className="text-uppercase fw-semibold mb-2">Cultura cerca de ti</p>
      <h1 className="display-5 fw-bold">{nombreProyecto}</h1>
      <p className="lead mb-0">
        Encuentra actividades culturales en tu comunidad y descubre nuevas experiencias.
      </p>
    </section>
  );
}

export default Bienvenida;
