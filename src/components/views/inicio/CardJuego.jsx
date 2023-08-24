import React from "react";
import { Badge, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const CardJuego = ({ urlPortada, categoria, nombre, precio, id }) => {
  const detalleJuego = useNavigate();
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
              <Link className="text-decoration-none fs-2">
                <i className="fa-solid fa-heart favIcon"></i>
              </Link>
            </div>
          </Card.Title>
          <Card.Text>
            <Badge bg="success" className="fs-6">
              Muy Recomendable
            </Badge>
          </Card.Text>
          <div className="d-flex justify-content-between mt-auto  pt-3">
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
