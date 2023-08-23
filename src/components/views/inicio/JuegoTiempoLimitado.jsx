import React from "react";
import { Card } from "react-bootstrap";

const JuegoTiempoLimitado = () => {
  return (
    <div>
      <Card className="cardJuegoTLimitado">
        <Card.Img
          variant="top"
          src="https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png"
        />
        <Card.Body className="p-2">
          <p className="fs-4 m-0 ">Precio</p>
          <div className="d-flex">
            <p className="fs-5 text-danger text-decoration-line-through">
              $59.99
            </p>
            <p className="fs-5 fw-ligth ps-2">$49.99</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JuegoTiempoLimitado;
