import { Container, Nav, Navbar } from "react-bootstrap";

function Navegacion() {
  return (
    <Navbar expand="md" bg="light" data-bs-theme="light" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#inicio">Conecta Cultura</Navbar.Brand>
        <Navbar.Toggle aria-controls="menu-principal" aria-label="Abrir navegación" />
        <Navbar.Collapse id="menu-principal">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#actividades">Actividades</Nav.Link>
            <Nav.Link href="#inscripciones">Mis inscripciones</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;
