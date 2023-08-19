import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Error404 = () => {
  return (
    <>
      <div className="container">
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODV4dHoxM2ZzdGxwM2I2cXA4bTU1d2kwaG05NmsyemRkdzhsNzNtNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/H54feNXf6i4eAQubud/giphy.gif"
          alt=""
        ></img>
        <h1>La Pagina que ha solicitado no se encuentra disponible</h1>
        <Button>Volver al Inicio</Button>
      </div>
    </>
  );
};

export default Error404;
