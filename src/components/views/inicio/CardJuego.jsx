import React, { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { agregarJuegoFav } from "../../helpers/queries";

const CardJuego = ({ urlPortada, categoria, nombre, precio, id }) => {
  const detalleJuego = useNavigate();
  const user = {
    nombreUsuario: "admin",
    email: "admin@gamestore.com",
    password: "Admin123",
    id: 1,
    juegosFavoritos: [],
  };

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
                className="fs-2 border border-white decoration-none bg-white"
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
                <i className={iconAction()}></i>
              </button>
            </div>
          </Card.Title>
          <Card.Text className="d-none d-md-flex">
            <Badge bg="success" className="fs-6">
              Muy Recomendable
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
