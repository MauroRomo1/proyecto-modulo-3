import React from "react";

import { Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ItemJuego = ({ juego }) => {
  const detalleJuego = useNavigate();
  return (
    <tr>
      <td>
        <Image
          src={juego.urlPortada}
          alt={juego.nombre}
          rounded
          style={{ width: "80px", height: "80px", cursor: "pointer" }}
          onClick={() => detalleJuego(`/detalle-juego/${juego.id}`)}
        ></Image>
      </td>
      <td className="text-start flex-wrap">
        <p className="text-break fw-medium">{juego.nombre}</p>
      </td>
      <td className="text-">
        <p>
          {juego.moneda === "USD" ? "Usd" : "Ars"}$ {juego.precio}
        </p>
      </td>
      <td>
        <p className="text-break">{juego.categoria}</p>
      </td>
      <td>⭐4.3</td>
      <td>
        <div className="d-flex flex-column">
          <Link
            to={`/editar-juego/${juego.id}`}
            className="btn btn-warning btn-sm"
          >
            🖊
          </Link>
          <Button variant="danger" size="sm" className="mt-2">
            ✖
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemJuego;
