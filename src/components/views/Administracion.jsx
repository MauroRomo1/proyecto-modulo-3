import { Table } from "react-bootstrap";

import { Link } from "react-router-dom";
import ItemJuego from "./Juego/ItemJuego";

const Administracion = () => {
  return (
    <section className="mx-5">
      <article className="display-2 pt-4 ps-3">
        <p>Administrar Juegos</p>
      </article>
      <article className="d-flex justify-content-between">
        <Link to={"/agregar-juego"} className="btn btn-primary btn-lg ps-2">
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
          <tr>
            <th className="fs-4 fw-light">img</th>
            <th className="fs-4 fw-light">Nombre</th>
            <th className="fs-4 fw-light">Precio</th>
            <th className="fs-4 fw-light">Categoria</th>
            <th className="fs-4 fw-light">Valoracion</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <ItemJuego></ItemJuego>
          <ItemJuego></ItemJuego>
        </tbody>
      </Table>
    </section>
  );
};

export default Administracion;
