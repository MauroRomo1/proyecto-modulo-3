import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import JuegoTiempoLimitado from "./JuegoTiempoLimitado";
import CarruselInicio from "./CarruselInicio";

const CarruselYOferta = () => {
  const fechaObjetivo = new Date();
  fechaObjetivo.setDate(fechaObjetivo.getDate() + 4);
  fechaObjetivo.setHours(0, 0, 0, 0);

  const calcularTiempoRestante = () => {
    const ahora = new Date();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
      return {
        dias: 0,
        hs: 0,
        min: 0,
        seg: 0,
      };
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const hs = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const min = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const seg = Math.floor((diferencia % (1000 * 60)) / 1000);

    return {
      dias,
      hs,
      min,
      seg,
    };
  };

  const [tiempoRestante, setTiempoRestante] = useState(
    calcularTiempoRestante()
  );

  useEffect(() => {
    const temporizador = setInterval(() => {
      setTiempoRestante(calcularTiempoRestante());
    }, 1000);
  }, []);

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
  return (
    <>
      <section className="carrusel">
        <Row className="d-flex align-items-center">
          <Col lg={4}>
            <div className="d-none d-lg-flex rounded shadow-lg flex-column justify-content-evenly align-items-center pt-1 px-2 bg-TLimitado-Carrusel">
              <div className="d-flex align-items-center justify-content-between  flex-column">
                <div className="pe-3 text-center">
                  <p className="fs-4 text-white">Oferta de Tiempo Limitado!</p>
                </div>
                <div>
                  <CardGroup className="border border-secondary rounded card-Contador d-flex">
                    <Card className="border border-white">
                      <Card.Body className="p-0 d-flex justify-content-center align-items-center">
                        <Card.Text className="fs-4 text-center">
                          {tiempoRestante.dias < 10
                            ? "0" + tiempoRestante.dias
                            : tiempoRestante.dias}
                          :
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="boder border-white p-1">
                        <Card.Text className="text-center">Dias</Card.Text>
                      </Card.Footer>
                    </Card>
                    <Card className="border border-white">
                      <Card.Body className="p-0 d-flex justify-content-center align-items-center">
                        <Card.Text className="fs-4 text-center">
                          {tiempoRestante.hs < 10
                            ? "0" + tiempoRestante.hs
                            : tiempoRestante.hs}
                          :
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="boder border-white p-1">
                        <Card.Text className="text-center">Hs</Card.Text>
                      </Card.Footer>
                    </Card>
                    <Card className="border border-white">
                      <Card.Body className="p-0 d-flex justify-content-center align-items-center">
                        <Card.Text className="fs-4 text-center">
                          {tiempoRestante.min < 10
                            ? "0" + tiempoRestante.min
                            : tiempoRestante.min}
                          :
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="boder border-white p-1">
                        <Card.Text className="text-center fs-6">Min</Card.Text>
                      </Card.Footer>
                    </Card>
                    <Card className="border border-white">
                      <Card.Body className="p-0 d-flex justify-content-center align-items-center">
                        <Card.Text className="fs-4 text-center">
                          {tiempoRestante.seg < 10
                            ? "0" + tiempoRestante.seg
                            : tiempoRestante.seg}
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="boder border-white p-1">
                        <Card.Text className="text-center fs-6">Seg</Card.Text>
                      </Card.Footer>
                    </Card>
                  </CardGroup>
                </div>
              </div>
              <div className="my-3">
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
                  <Card.Text className="fs-4 text-center">
                    {tiempoRestante.dias < 10
                      ? "0" + tiempoRestante.dias
                      : tiempoRestante.dias}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="boder border-white p-1">
                  <Card.Text className="text-center fs-6">Dias</Card.Text>
                </Card.Footer>
              </Card>
              <Card className="border border-white">
                <Card.Body>
                  <Card.Text className="fs-4 text-center">
                    {tiempoRestante.hs < 10
                      ? "0" + tiempoRestante.hs
                      : tiempoRestante.hs}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="boder border-white p-1">
                  <Card.Text className="text-center">Horas</Card.Text>
                </Card.Footer>
              </Card>
              <Card className="border border-white">
                <Card.Body>
                  <Card.Text className="fs-4 text-center">
                    {tiempoRestante.min < 10
                      ? "0" + tiempoRestante.min
                      : tiempoRestante.min}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="boder border-white p-1">
                  <Card.Text className="text-center fs-6">Min</Card.Text>
                </Card.Footer>
              </Card>
              <Card className="border border-white">
                <Card.Body>
                  <Card.Text className="fs-4 text-center">
                    {tiempoRestante.seg < 10
                      ? "0" + tiempoRestante.seg
                      : tiempoRestante.seg}
                  </Card.Text>
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
        <div className="d-flex d-md-none d-lg-none shadow-lg rounded justify-content-center align-items-center flex-column  bg-TLimitado-sm">
          <div className="d-flex flex-column align-items-center">
            <div className="pe-3">
              <p className="fs-5 text-white">Oferta de Tiempo Limitado!</p>
              <p className="fw-light text-center text-white">
                especial dia del niño
              </p>
            </div>
            <CardGroup className="rounded d-flex">
              <Card className="border border-white">
                <Card.Body>
                  <Card.Text className="fs-4 text-center">
                    {tiempoRestante.dias < 10
                      ? "0" + tiempoRestante.dias
                      : tiempoRestante.dias}
                    :
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="boder border-white p-1">
                  <Card.Text className="text-center fs-6">Dias</Card.Text>
                </Card.Footer>
              </Card>
              <Card className="border border-white">
                <Card.Body>
                  <Card.Text className="fs-4 text-center">
                    {tiempoRestante.hs < 10
                      ? "0" + tiempoRestante.hs
                      : tiempoRestante.hs}
                    :
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="boder border-white p-1">
                  <Card.Text className="text-center">Horas</Card.Text>
                </Card.Footer>
              </Card>
              <Card className="border border-white">
                <Card.Body>
                  <Card.Text className="fs-4 text-center">
                    {tiempoRestante.min < 10
                      ? "0" + tiempoRestante.min
                      : tiempoRestante.min}
                    :
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="boder border-white p-1">
                  <Card.Text className="text-center fs-6">Min</Card.Text>
                </Card.Footer>
              </Card>
              <Card className="border border-white">
                <Card.Body>
                  <Card.Text className="fs-4 text-center">
                    {tiempoRestante.seg < 10
                      ? "0" + tiempoRestante.seg
                      : tiempoRestante.seg}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="boder border-white p-1">
                  <Card.Text className="text-center fs-6">Seg</Card.Text>
                </Card.Footer>
              </Card>
            </CardGroup>
          </div>
          <div className="mt-2">
            <JuegoTiempoLimitado></JuegoTiempoLimitado>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarruselYOferta;
