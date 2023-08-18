import { Button, Container, Table } from "react-bootstrap";
import ItemJuego from "./ItemJuego";

const Administracion = () => {
  return (
    <section className="mx-5">
      <article className="display-2 pt-4 ps-3">
        <p>Administrar Juegos</p>
      </article>
      <article>
        <Button variant="primary">➕ Agregar Juegos</Button>
      </article>
      <Table striped hover variant="secondary" className="my-4" responsive="sm">
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
          <ItemJuego></ItemJuego>
          <ItemJuego></ItemJuego>
        </tbody>
      </Table>
    </section>
  );
};

export default Administracion;
