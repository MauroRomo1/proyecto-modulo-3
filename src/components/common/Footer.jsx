import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/footer.css";
import { NavLink } from "react-router-dom";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../../public/logo-pagina.svg";

const Footer = () => {
  return (
    <footer className=" bg-dark text-light py-3 text-center">
      <div className="row py-5 m-0">
        <div className="col-12 col-md-4">
          <img src={logo} alt="logo de la pagina" className="logoPagina" />
        </div>
        <div className="col-12 col-md-4">
          <h4>Para compradores</h4>
          <div className="my-4">
            <NavLink className="nav-link" end to="/acerca-de-nosotros">
              Acerca de nosotros
            </NavLink>
          </div>
          <div className="my-4">
            <NavLink className="nav-link " end to="/error">
              Atencion al cliente
            </NavLink>
          </div>
          <div className="my-4">
            <NavLink className="nav-link" end to="/error">
              Terminos y condiciones
            </NavLink>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <h4>Redes sociales</h4>
          <div className="d-flex justify-content-center py-3">
            <div className="logo text-primary">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="logo text-info">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="logo text-danger">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-secondary">
        <h6>&copy;Todos los derechos reservados 2023.</h6>
      </div>
    </footer>
  );
};

export default Footer;
