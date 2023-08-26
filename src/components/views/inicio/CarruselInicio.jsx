import React, { useEffect, useState } from "react";
import { Badge, Card } from "react-bootstrap";
import { calificarJuego, obtenerJuego } from "../../helpers/queries";

const CarruselInicio = ({ id }) => {
  const [juego, setJuego] = useState({});
  const [calificacion, setCalificacion] = useState("");

  useEffect(() => {
    obtenerJuego(id)
      .then((resp) => {
        if (resp) {
          setJuego(resp);
          setMostrarSpinner(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
    <div className="pb-4 p-0">
      <Card className="text-white mt-3 shadow">
        <Card.Img
          src={juego.urlPortada}
          alt={juego.nombre}
          className="imgCardCarrusel"
        />
        <Card.ImgOverlay className="d-flex justify-content-start align-items-end">
          <div className="d-flex flex-column bg-card-carrusel p-2">
            <Card.Title>
              <div className="d-flex justify-content-between align-items-center">
                <p className="pt-3">{juego.nombre}</p>
                <span className="text-warning ms-3 fs-3">${juego.precio}!</span>
              </div>
            </Card.Title>
            <p>
              <Badge bg="success">{calificacion}</Badge>
              <Badge bg="warning" className="ms-2">
                {juego.categoria}
              </Badge>
            </p>
            <Card.Text className="d-none d-md-flex">
              {juego.descripcion}
            </Card.Text>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default CarruselInicio;
