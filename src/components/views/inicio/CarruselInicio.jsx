import React from "react";
import { Badge, Card } from "react-bootstrap";

const CarruselInicio = () => {
  return (
    <div className="pb-4 p-0">
      <Card className="text-white mt-3 shadow">
        <Card.Img
          src="https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png"
          alt="Card image"
          className="imgCardCarrusel"
        />
        <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
          <div className="d-flex flex-column bg-card-carrusel p-2">
            <Card.Title>
              <div className="d-flex justify-content-between align-items-center">
                <p className="pt-3">Red Dead Redemption 2</p>
                <span className="text-warning ms-3 fs-3">$49.99!</span>
              </div>
            </Card.Title>
            <p>
              <Badge bg="success">Muy Recomendable</Badge>
              <Badge bg="warning" className="ms-2">
                Categoria
              </Badge>
            </p>
            <Card.Text className="d-none d-md-flex">
              América, 1899. Arthur Morgan y la banda de Van der Linde se ven
              obligados a huir. Con agentes federales y los mejores
              cazarrecompensas de la nación pisándoles los talones, la banda
              deberá atracar, robar y luchar, para sobrevivir en su camino por
              el escabroso territorio del corazón de América. Mientras las
              divisiones internas aumentan y amenazan con separarlos a todos,
              Arthur deberá elegir entre sus propios ideales y la lealtad a la
              banda que lo vio crecer.
            </Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default CarruselInicio;
