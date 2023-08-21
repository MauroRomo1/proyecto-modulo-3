import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { borrarJuego } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemJuego = ({ juego }) => {
  const detalleJuego = useNavigate();

  const borrar = (juego) => {
    Swal.fire({
      title: "Quiere eliminar " + juego.nombre + "?",
      text: "esta accion es permanente y no se podra revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "error",
      cancelButtonColor: "success",
      confirmButtonText: "Si, quiero eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado!", "El juego fue eliminado con exito", "success");
        borrarJuego(juego.id);
      }
    });
  };
  return (
    <tr>
      <td>
        <Image
          src={juego.urlPortada}
          alt={juego.nombre}
          rounded
          className="imgItem"
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
      <td>
        <p className="fw-light text-success">Muy recomendable</p>
      </td>
      <td>
        <div className="d-flex flex-column">
          <Link
            to={`/editar-juego/${juego.id}`}
            className="btn btn-warning btn-sm"
          >
            Editar 🖊
          </Link>
          <Button
            variant="danger"
            size="sm"
            className="mt-2"
            onClick={() => borrar(juego)}
          >
            Borrar ✖
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemJuego;
