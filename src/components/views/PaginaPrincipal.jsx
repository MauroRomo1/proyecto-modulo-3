import "../../css/PaginaPrincipal.css";
import { useState } from "react";
import { Container, DropdownButton, Form, Image } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarruselInicio from "./inicio/CarruselInicio";
import CardJuego from "./inicio/CardJuego";

const PaginaPrincipal = () => {
  const responsiveCarruselInicio = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const responsiveCarruselCards = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
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
            <DropdownItem disabled>Elige una categoria</DropdownItem>
            <DropdownItem value="Aventura">Aventura</DropdownItem>
            <DropdownItem value="Accion/Shooter">Accion/Shooter</DropdownItem>
            <DropdownItem value="Sandbox">SandBox</DropdownItem>
            <DropdownItem value="Construcción">Construcción</DropdownItem>
            <DropdownItem value="Simulacion">Simulacion</DropdownItem>
            <DropdownItem value="Deportes">Deportes</DropdownItem>
            <DropdownItem value="Carreras">Carreras</DropdownItem>
            <DropdownItem value="Estrategia">Estrategia</DropdownItem>
            <DropdownItem value="Arcade">Arcade</DropdownItem>
            <DropdownItem value="RPG">RPG</DropdownItem>
            <DropdownItem value="Terror">Terror</DropdownItem>
            <DropdownItem value="Lucha">Lucha</DropdownItem>
            <DropdownItem value="Puzle">Puzle</DropdownItem>
            <DropdownItem value="Casual">Casual</DropdownItem>
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
      <section className="mt-3">
        <Carousel responsive={responsiveCarruselInicio}>
          <CarruselInicio></CarruselInicio>
          <CarruselInicio></CarruselInicio>
          <CarruselInicio></CarruselInicio>
          <CarruselInicio></CarruselInicio>
        </Carousel>
      </section>

      <section className="mx-5 mb-3 shadow rounded">
        <h4 className="display-3 fw-light ps-5 py-3">Todos Los juegos</h4>
        <Carousel responsive={responsiveCarruselCards}>
          <CardJuego></CardJuego>
          <CardJuego></CardJuego>
          <CardJuego></CardJuego>
          <CardJuego></CardJuego>
          <CardJuego></CardJuego>
          <CardJuego></CardJuego>
          <CardJuego></CardJuego>
        </Carousel>
      </section>
    </>
  );
};

export default PaginaPrincipal;
