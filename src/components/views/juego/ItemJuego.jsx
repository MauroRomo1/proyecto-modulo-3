import { useState, useEffect } from "react";
import { Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { borrarJuego, calificarJuego } from "../../helpers/queries";
import Swal from "sweetalert2";

const ItemJuego = ({ juego }) => {
  const detalleJuego = useNavigate();

  const [calificacion, setCalificacion] = useState("");

  useEffect(() => {
    let prom = 0;
    calificarJuego(juego.id)
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
        <p>$ {juego.precio}</p>
      </td>
      <td>
        <p className="text-break">{juego.categoria}</p>
      </td>
      <td>
        <p className="fw-light text-success">
          {calificacion ? calificacion : "Sin calificacion"}
        </p>
      </td>
      <td>
        <div className="d-flex flex-column">
          <Link
            to={`/administracion/editar-juego/${juego.id}`}
            className="btn btn-editar btn-sm"
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
