import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Error404 = () => {
  return (
    <>
      <div className="container">
        <img src="https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif"></img>
        <h3>La Pagina que ha solicitado no se encuentra disponible</h3>
        <Button variant="danger">Volver al Inicio</Button>
      </div>
    </>
  );
};

export default Error404;
