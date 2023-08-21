import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
const Header = () => {
  // const usuario = { nombre: "jose", email: "jose@32", rol: "administrador" };
  const usuario = null;
  return (
    <Navbar expand="lg" className=" bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="#home">logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="ms-auto ">
            <NavLink end to={"/"} className="nav-link">
              inicio
            </NavLink>
            {usuario ? (
              <>
                <NavDropdown title="usuario" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Mi lista de juegos
                  </NavDropdown.Item>
                  {usuario.rol === "administrador" ? (
                    <NavLink
                      end
                      to={"/administracion"}
                      className="dropdown-item"
                    >
                      administracion
                    </NavLink>
                  ) : (
                    <NavDropdown.Item href="#action/3.2">
                      configuracion
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Item>
                    <NavLink end to={"/hsdhs"} className="nav-link">
                      cerrar sesion
                    </NavLink>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <NavLink end to={"/login"} className="nav-link">
                  iniciar sesion
                </NavLink>
                <NavLink end to={"/ahah"} className="nav-link">
                  regitrarse
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
