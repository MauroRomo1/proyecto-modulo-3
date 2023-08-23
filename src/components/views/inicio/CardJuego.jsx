import React from "react";
import { Badge, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardJuego = () => {
  return (
    <div className="cardCarouselJuegos shadow">
      <Card className="hoverCardJuego">
        <Card.Img
          variant="top"
          src="https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png"
          alt="imagen-receta"
        />
        <Card.ImgOverlay className="pb-0 d-flex justify-content-between">
          <p>
            <Badge bg="warning">Categoria</Badge>
          </p>
        </Card.ImgOverlay>
      </Card>
      <Card className="rounded-top-0">
        <Card.Body>
          <Card.Title className="fs-2 fw-light">
            <div className="d-flex justify-content-between">
              <p> Red Dead Redemption 2 </p>
              <Link className="text-decoration-none fs-2">
                <i className="fa-solid fa-heart favIcon"></i>
              </Link>
            </div>

            <Badge bg="success" className="fs-6">
              Muy Recomendable
            </Badge>
          </Card.Title>
          <Card.Text></Card.Text>
          <div className="d-flex justify-content-between align-items-center pt-3">
            <p className="display-5 fw-light">$49.99</p>

            <Link
              to={"/detalle-juego"}
              className="btn btn-primary btn-sm rounded-pill fs-5 px-3"
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
