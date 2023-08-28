import "../../css/Administracion.css";
import { Table } from "react-bootstrap";
import ItemJuego from "./Juego/ItemJuego";
import { Link } from "react-router-dom";
import { listarJuegos } from "../helpers/queries";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Administracion = () => {
  const [listaJuegos, setListaJuegos] = useState([]);

  useEffect(() => {
    document.title = "Administracion";
    listarJuegos().then((respuestaJuegos) => {
      if (respuestaJuegos) {
        setListaJuegos(respuestaJuegos);
      } else {
        Swal.fire(
          "ocurrio un error!",
          "No pudimos encontrar los datos",
          "error"
        );
      }
    });
  }, []);

  return (
    <section className="mx-5">
      <article className="display-2 pt-4 ps-3">
        <p>Administrar Juegos</p>
      </article>
      <article className="d-flex justify-content-between">
        <Link
          to={"/administracion/agregar-juego"}
          className="btn btn-agregarJuego text-white btn-lg ps-2"
        >
          ➕ Agregar Juegos
        </Link>
      </article>
      <Table
        striped
        hover
        variant="secondary"
        className="my-4 shadow"
        responsive="sm"
      >
        <thead>
          <tr className="text-center">
            <th className="fs-4 fw-light">img</th>
            <th className="fs-4 fw-light">Nombre</th>
            <th className="fs-4 fw-light">Precio</th>
            <th className="fs-4 fw-light">Categoria</th>
            <th className="fs-4 fw-light">Valoracion</th>
            <th className="fs-4 fw-light">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {listaJuegos.map((juego) => (
            <ItemJuego key={juego.id} juego={juego}></ItemJuego>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administracion;
