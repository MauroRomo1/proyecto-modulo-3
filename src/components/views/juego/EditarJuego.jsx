import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  FormGroup,
  Image,
  Row,
} from "react-bootstrap";

const EditarJuego = () => {
  return (
    <Container>
      <article className="my-3">
        <h3 className="display-3">Edita el Juego! 🖊</h3>
      </article>
      <Form>
        <Row className="g-2 rounded p-3 mt-4 shadow">
          <Col md={6}>
            <FloatingLabel
              controlId="nombreJuego"
              label="Nombre del juego*"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Nombre del juego*"
              ></Form.Control>
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="precio" label="Precio*" className="mb-3">
              <Form.Control type="number" placeholder="Precio*"></Form.Control>
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="categoria" label="Categoria del Juego*">
              <Form.Select aria-label="Categoria del Juego*">
                <option>Elige una categoria</option>
                <option value="Aventura">Aventura</option>
                <option value="Accion/Shooter">Accion/Shooter</option>
                <option value="Sandbox">SandBox</option>
                <option value="Construcción">Construcción</option>
                <option value="Simulacion">Simulacion</option>
                <option value="Deportes">Deportes</option>
                <option value="Carreras">Carreras</option>
                <option value="Estrategia">Estrategia</option>
                <option value="Arcade">Arcade</option>
                <option value="RPG">RPG</option>
                <option value="Terror">Terror</option>
                <option value="Lucha">Lucha</option>
                <option value="Puzle">Puzle</option>
                <option value="Casual">Casual</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel
              controlId="desarrolladora"
              label="Desarrolladora"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Desarrolladora"
              ></Form.Control>
            </FloatingLabel>
          </Col>
          <Col md={12}>
            <FloatingLabel
              controlId="descripcion"
              label="Descripcion*"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Descripcion"
              ></Form.Control>
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mt-5 mb-5 shadow rounded g-4">
          <h4 className="display-6 ">🛠 Requisitos de Sistema</h4>
          <Col md={6}>
            <FloatingLabel
              controlId="requisitosMinimos"
              label="Requisitos Minimos"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Requisitos Minimos"
                style={{ height: "150px" }}
              ></Form.Control>
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel
              controlId="requisitosRecomendados"
              label="Requisitos Recomendados"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Requisitos Recomendados"
                style={{ height: "150px" }}
              ></Form.Control>
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mt-5 mb-5 shadow rounded g-4 text-center">
          <h4 className="display-6 mt-3 mb-3 text-start">
            📷 Imagenes del Juego
          </h4>
          <Col md={2} className=" my-2">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
              alt="imagen-del-juego"
              rounded
              style={{ width: "80px", height: "80px" }}
            ></Image>
          </Col>
          <Col md={10} className="pt-2 my-2">
            <FloatingLabel
              controlId="imgPortada"
              label="URL imagen de portada*"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="URL imagen de portada*"
              ></Form.Control>
            </FloatingLabel>
          </Col>
          <Col md={2} className=" my-2">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
              alt="imagen-del-juego"
              rounded
              style={{ width: "80px", height: "80px" }}
            ></Image>
          </Col>
          <Col md={10} className="pt-2 my-2">
            <FloatingLabel
              controlId="imgJuego2"
              label="URL imagen 2*"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="URL imagen 2"
              ></Form.Control>
            </FloatingLabel>
          </Col>
          <Col md={2} className=" my-2">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
              alt="imagen-del-juego"
              rounded
              style={{ width: "80px", height: "80px" }}
            ></Image>
          </Col>
          <Col md={10} className="pt-2 my-2">
            <FloatingLabel
              controlId="imgJuego3"
              label="URL imagen 3"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="URL imagen 3"
              ></Form.Control>
            </FloatingLabel>
          </Col>
          <Col md={2} className=" my-2">
            <Image
              src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
              alt="imagen-del-juego"
              rounded
              style={{ width: "80px", height: "80px" }}
            ></Image>
          </Col>
          <Col md={10} className="pt-2 my-2">
            <FloatingLabel
              controlId="imgJuego4"
              label="URL imagen 4"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="URL imagen 4"
              ></Form.Control>
            </FloatingLabel>
          </Col>
        </Row>
        <div className="text-end mb-5">
          <Button variant="success" size="lg" type="submit">
            Guardar cambios
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditarJuego;
