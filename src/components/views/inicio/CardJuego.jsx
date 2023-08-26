import React, { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { agregarJuegoFav, calificarJuego } from "../../helpers/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";

const CardJuego = ({ urlPortada, categoria, nombre, precio, id }) => {
  const [calificacion, setCalificacion] = useState("");
  const detalleJuego = useNavigate();

  const usuarioLog =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || [];
  const [user, setUser] = useState(usuarioLog);

  const listaFavoritos =
    JSON.parse(localStorage.getItem("listaFavoritos")) || [];

  const [listaJuegosFavoritos, setListaJuegosFavoritos] =
    useState(listaFavoritos);

  useEffect(() => {
    localStorage.setItem(
      "listaFavoritos",
      JSON.stringify(listaJuegosFavoritos)
    );
  }, [listaJuegosFavoritos]);

  const agregarJuegoFavorito = () => {
    user.juegosFavoritos.push(...listaJuegosFavoritos, id);
    setListaJuegosFavoritos([...listaJuegosFavoritos, id]);
    agregarJuegoFav(user.id, user);
  };

  const iconAction = () => {
    if (listaJuegosFavoritos.find((juego) => juego === id)) {
      return "fa-solid fa-heart favIconActive";
    } else {
      return "fa-solid fa-heart favIcon";
    }
  };

  useEffect(() => {
    let prom = 0;
    calificarJuego(id)
      .then((resp) => {
        if (resp) {
          prom = resp;
          if (prom > 0 && prom <= 20) {
            setCalificacion("Malo");
          } else if (prom > 20 && prom <= 40) {
            setCalificacion("Regular");
          } else if (prom > 40 && prom <= 60) {
            setCalificacion("Bueno");
          } else if (prom > 60 && prom <= 80) {
            setCalificacion("Muy Bueno");
          } else if (prom > 80 && prom <= 100) {
            setCalificacion("Exelente");
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="cardCarouselJuegos shadow">
      <Card
        className="hoverCardJuego"
        onClick={() => detalleJuego(`/detalle-juego/${id}`)}
      >
        <Card.Img
          variant="top"
          src={urlPortada}
          alt="imagen-receta"
          className="imgCardJuego"
        />
        <Card.ImgOverlay className="pb-0 d-flex justify-content-between">
          <p>
            <Badge bg="warning">{categoria}</Badge>
          </p>
        </Card.ImgOverlay>
      </Card>
      <Card className="rounded-top-0 cardJuego">
        <Card.Body className="d-flex flex-column pb-0 ">
          <Card.Title className="fs-2 fw-light">
            <div className="d-flex justify-content-between">
              <p className="text-break">{nombre}</p>
              <button
                className="fs-2 border border-white decoration-none bg-white text-center"
                onClick={() => {
                  listaJuegosFavoritos.find((juegos) => juegos === id)
                    ? Swal.fire(
                        `ya tienes el juego en Favoritos`,
                        `si quieres eliminar el juego buscalo en tus favoritos`,
                        `info`
                      )
                    : agregarJuegoFavorito();
                }}
              >
                <FontAwesomeIcon
                  icon={
                    listaJuegosFavoritos.find((juego) => juego !== id)
                      ? faHeartCirclePlus
                      : null
                  }
                  className={iconAction()}
                ></FontAwesomeIcon>
              </button>
            </div>
          </Card.Title>
          <Card.Text className="d-none d-md-flex">
            <Badge bg="success" className="fs-6">
              {calificacion}
            </Badge>
          </Card.Text>
          <div className="d-flex flex-column flex-md-row justify-content-between mt-auto pt-3">
            <p className="display-5 fw-light">${precio}</p>
            <Link
              to={"/detalle-juego/" + id}
              className="btn btn-primary btn-sm rounded-pill fs-5 px-0 p-md-3 my-2"
            >
              Ver Juego!
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardJuego;
