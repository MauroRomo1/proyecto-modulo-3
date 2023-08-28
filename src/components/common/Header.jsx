import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../../public/assets/logo-pagina.svg";

const Header = ({ usuarioActivo, setUsuarioActivo }) => {
  const navegacion = useNavigate();

  const logout = () => {
    setUsuarioActivo(null);
    sessionStorage.removeItem("usuarioLogueado");
    localStorage.removeItem("listaFavoritos");
    navegacion("/");
  };

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink end to={"/"} className="navbar-brand">
          <img
            src={logo}
            alt="logo de la pagina"
            width="70"
            height="70"
            className="d-inline-block"
          />
        </NavLink>
        <span
          onClick={() => navegacion("/")}
          className="text-white titulo d-none d-md-flex me-auto"
        >
          Joystick Jungle
        </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
          <Nav className="ms-auto">
            <NavLink end to={"/"} className="nav-link">
              Inicio
            </NavLink>
            {usuarioActivo ? (
              <>
                <NavDropdown
                  title={`bienvenido ${usuarioActivo.nombreUsuario}`}
                  id="basic-nav-dropdown"
                >
                  <NavLink
                    end
                    to={"/juegos-favoritos"}
                    className="dropdown-item text-center"
                  >
                    Mi lista de juegos
                  </NavLink>
                  {usuarioActivo.email === "admin@gamestore.com" ? (
                    <NavLink
                      end
                      to={"/administracion"}
                      className="dropdown-item text-center"
                    >
                      Administracion
                    </NavLink>
                  ) : (
                    <NavDropdown.Item href="/error404" className="text-center">
                      Configuracion
                    </NavDropdown.Item>
                  )}
                  <NavDropdown.Item className="text-center">
                    <Button variant="dark" onClick={logout}>
                      Cerrar Sesion
                    </Button>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <NavLink end to={"/login"} className="nav-link">
                  Iniciar Sesion
                </NavLink>
                <NavLink end to={"/altausuario"} className="nav-link">
                  Regitrarse
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
