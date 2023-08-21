import "../../css/PaginaPrincipal.css";
import { useState } from "react";
import {
  Carousel,
  Container,
  DropdownButton,
  Form,
  Image,
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

const PaginaPrincipal = () => {
  const [filtrarJuegos, setFiltrarJuegos] = useState(false);
  return (
    <>
      <section className="bg-dark d-flex justify-content-between align-items-center px-2 py-2">
        <div>
          <DropdownButton
            id="categoriaInicio"
            title="Categorias"
            variant="warning"
          >
            <DropdownItem>Accion</DropdownItem>
            <DropdownItem>Aventuras</DropdownItem>
            <DropdownItem>shooter</DropdownItem>
          </DropdownButton>
        </div>
        <div className="w-50">
          <Form>
            <Form.Control
              type="text"
              placeholder="🔍 Buscar por nombre"
              className="mr-sm-2"
            ></Form.Control>
          </Form>
        </div>
      </section>
      <section className="">
        <Carousel>
          <Carousel.Item>
            <Image
              src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
              alt="imgen no encontrada"
              className="imgCarrusel"
            ></Image>
            <Carousel.Caption className="text-start">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <Container>
        <section>
          <h4 className="fs-4 fw-light my-5">Todos Los juegos</h4>
        </section>
      </Container>
    </>
  );
};

export default PaginaPrincipal;
