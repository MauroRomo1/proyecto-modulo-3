import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { obtenerJuego } from "../../helpers/queries";

const JuegoTiempoLimitado = () => {
  const [juego, setJuego] = useState({});

  useEffect(() => {
    obtenerJuego(1)
      .then((resp) => {
        if (resp) {
          setJuego(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const detalleJuego = useNavigate();
  return (
    <div>
      <Card
        className="cardJuegoTLimitado"
        onClick={() => detalleJuego(`/detalle-juego/${juego.id}`)}
      >
        <Card.Img variant="top" src={juego.urlPortada} />
        <Card.Body className="p-2 text-center">
          <p className="fs-4 m-0 ">Precio</p>
          <div className="text-center">
            <p className="fs-5 fw-ligth">${juego.precio}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default JuegoTiempoLimitado;
