import "../../css/PaginaPrincipal.css";
import {
  Card,
  CardGroup,
  Col,
  Container,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarruselInicio from "./inicio/CarruselInicio";
import CardJuego from "./inicio/CardJuego";
import { Link } from "react-router-dom";
import JuegoTiempoLimitado from "./inicio/JuegoTiempoLimitado";

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
  return (
    <>
      <section className="bg-dark d-flex justify-content-between align-items-center pt-2 py-2">
        <div className="px-2">
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
        <div className="w-50 px-2">
          <Form>
            <Form.Control
              type="text"
              placeholder="🔍 Buscar por nombre"
              className="mr-sm-2"
            ></Form.Control>
          </Form>
        </div>
      </section>
      <section className="carrusel">
        <Row className="d-flex align-items-center">
          <Col lg={4}>
            <div className="d-none d-lg-flex rounded shadow-lg flex-column justify-content-evenly align-items-center p-3 bg-TLimitado-Carrusel">
              <div className="d-flex align-items-center justify-content-between">
                <div className="pe-3 text-center">
                  <p className="fs-4 text-white">Oferta de Tiempo Limitado!</p>
                </div>
                <div>
                  <CardGroup className="border border-secondary rounded card-Contador">
                    <Card className="border border-white">
                      <Card.Body className="p-0 d-flex justify-content-center align-items-center">
                        <Card.Text className="fs-4 text-center">00 :</Card.Text>
                      </Card.Body>
                      <Card.Footer className="boder border-white p-1">
                        <Card.Text className="text-center">Dias</Card.Text>
                      </Card.Footer>
                    </Card>
                    <Card className="border border-white">
                      <Card.Body className="p-0 d-flex justify-content-center align-items-center">
                        <Card.Text className="fs-4 text-center">00 :</Card.Text>
                      </Card.Body>
                      <Card.Footer className="boder border-white p-1">
                        <Card.Text className="text-center">Hs</Card.Text>
                      </Card.Footer>
                    </Card>
                    <Card className="border border-white">
                      <Card.Body className="p-0 d-flex justify-content-center align-items-center">
                        <Card.Text className="fs-4 text-center">00 :</Card.Text>
                      </Card.Body>
                      <Card.Footer className="boder border-white p-1">
                        <Card.Text className="text-center fs-6">Min</Card.Text>
                      </Card.Footer>
                    </Card>
                    <Card className="border border-white">
                      <Card.Body className="p-0 d-flex justify-content-center align-items-center">
                        <Card.Text className="fs-4 text-center">00</Card.Text>
                      </Card.Body>
                      <Card.Footer className="boder border-white p-1">
                        <Card.Text className="text-center fs-6">Seg</Card.Text>
                      </Card.Footer>
                    </Card>
                  </CardGroup>
                </div>
              </div>
              <div className="my-2">
                <JuegoTiempoLimitado></JuegoTiempoLimitado>
              </div>
            </div>
          </Col>
          <Col md={12} lg={8} className="p-0">
            <Carousel responsive={responsiveCarruselInicio}>
              <CarruselInicio></CarruselInicio>
              <CarruselInicio></CarruselInicio>
              <CarruselInicio></CarruselInicio>
              <CarruselInicio></CarruselInicio>
            </Carousel>
          </Col>
        </Row>
      </section>
      <section className="p-3">
        <div className="d-none d-md-flex d-lg-none shadow-lg rounded d-flex justify-content-evenly p-3 bg-TLimitado">
          <div className="d-flex align-items-center">
            <div className="pe-3">
              <p className="fs-5 text-white">Oferta de Tiempo Limitado!</p>
              <p className="fw-light text-center text-white">
                especial dia del niño
              </p>
            </div>
            <CardGroup className="border border-secondary rounded ">
              <Card className="border border-white">
                <Card.Body>
                  <Card.Text className="fs-4 text-center">00</Card.Text>
                </Card.Body>
                <Card.Footer className="boder border-white p-1">
                  <Card.Text className="text-center fs-6">Dias</Card.Text>
                </Card.Footer>
              </Card>
              <Card className="border border-white">
                <Card.Body>
                  <Card.Text className="fs-4 text-center">00</Card.Text>
                </Card.Body>
                <Card.Footer className="boder border-white p-1">
                  <Card.Text className="text-center">Horas</Card.Text>
                </Card.Footer>
              </Card>
              <Card className="border border-white">
                <Card.Body>
                  <Card.Text className="fs-4 text-center">00</Card.Text>
                </Card.Body>
                <Card.Footer className="boder border-white p-1">
                  <Card.Text className="text-center fs-6">Min</Card.Text>
                </Card.Footer>
              </Card>
              <Card className="border border-white">
                <Card.Body>
                  <Card.Text className="fs-4 text-center">00</Card.Text>
                </Card.Body>
                <Card.Footer className="boder border-white p-1">
                  <Card.Text className="text-center fs-6">Seg</Card.Text>
                </Card.Footer>
              </Card>
            </CardGroup>
          </div>
          <div>
            <JuegoTiempoLimitado></JuegoTiempoLimitado>
          </div>
        </div>
      </section>
      <section className="mx-5 my-3 shadow rounded bg-sectionInicio">
        <div className="mt-3 mb-5">
          <Link
            to={`/lista-juegos`}
            className="text-decoration-none display-3 fw-light ps-md-5 ps-1 text-dark"
          >
            Todos Los juegos
          </Link>
        </div>
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
      <section className="mx-5 my-3 shadow rounded bg-sectionInicio">
        <div className="mt-3 mb-5">
          <Link
            to={`/lista-juegos`}
            className="text-decoration-none display-3 fw-light ps-5 text-dark"
          >
            Aventuras
          </Link>
        </div>
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
