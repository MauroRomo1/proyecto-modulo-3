import { Button } from "react-bootstrap";
import "../../css/error404.css";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="bg">
        <div className="containerError404">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXVpMWlybHNvc3ZvN2F2Z2g4NGRidWZnaDlndG9mb3NxYmxjNjEwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WQOIEQRgiK722l3PQT/giphy.gif"
            alt="Gif error404"
            className="imgEror404"
          ></img>

          <h3 className="text-white"> PAGE IS NOT FOUND! 😔</h3>
          <img
            src="https://assets.codepen.io/1538474/astronaut.svg"
            className="astronaut"
            alt="Astronauta"
          />
          <img
            src="https://assets.codepen.io/1538474/spaceship.svg"
            className="spaceship"
            alt="Nave del astronauta"
          />
          <Button variant="danger" className="mb-5" as={Link} to={"/"}>
            Volver al Inicio
          </Button>
        </div>
      </div>
    </>
  );
};

export default Error404;
