import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ItemJuegoUsuario = ({ juego, borrarJuegoFavorito }) => {
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
        borrarJuegoFavorito(juego);
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
        <p>$ {juego.precio}</p>
      </td>
      <td>
        <p className="text-break">{juego.categoria}</p>
      </td>
      <td>
        <p className="fw-light text-success">Muy recomendable</p>
      </td>
      <td>
        <div className="text-center">
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

export default ItemJuegoUsuario;
