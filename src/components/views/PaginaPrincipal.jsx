import "../../css/PaginaPrincipal.css";
import { useState } from "react";
import { Container, DropdownButton, Form, Image } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarruselInicio from "./inicio/CarruselInicio";

const PaginaPrincipal = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
      <section>
        <Carousel responsive={responsive}>
          <CarruselInicio></CarruselInicio>
          <CarruselInicio></CarruselInicio>
          <CarruselInicio></CarruselInicio>
          <CarruselInicio></CarruselInicio>
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
