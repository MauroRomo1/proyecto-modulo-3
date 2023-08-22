import "../../css/footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 text-center">
      <div className="row py-5">
        <div className="col-12 col-md-4">logo</div>
        <div className="col-12 col-md-4">
          <h4>Para compradores</h4>
          <div className="my-4">
            <NavLink className="nav-link" end to="/acerca-de-nosotros">
              Acerca de nosotros
            </NavLink>
          </div>
          <div className="my-4">
            <NavLink className="nav-link" end to="/error">
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
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                className="me-3 text-decoration-none"
                href="https://www.facebook.com/"
              >
                <img
                  className="logo "
                  src="https://w7.pngwing.com/pngs/282/704/png-transparent-facebook-messenger-logo-icon-facebook-facebook-logo-blue-text-trademark-thumbnail.png"
                  alt="facebook"
                />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                className="me-3 text-decoration-none"
                href="https://twitter.com/home?lang=es"
              >
                <img
                  className="logo"
                  src="https://w7.pngwing.com/pngs/133/360/png-transparent-social-media-computer-icons-tulane-university-facebook-drawing-twitter-twitter-logo-blue-logo-computer-wallpaper-thumbnail.png"
                  alt="twitter"
                />
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                className="me-3 text-decoration-none"
                href="https://www.instagram.com/"
              >
                <img
                  className="logo"
                  src="https://w7.pngwing.com/pngs/722/1011/png-transparent-logo-icon-instagram-logo-instagram-logo-purple-violet-text-thumbnail.png"
                  alt="instagram"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h6>&copy;Todos los derechos reservados 2023.</h6>
      </div>
    </footer>
  );
};

export default Footer;
