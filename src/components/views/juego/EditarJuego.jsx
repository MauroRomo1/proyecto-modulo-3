import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  FormGroup,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

const EditarJuego = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (juego) => {
    console.log(juego);
  };

  return (
    <Container>
      <article className="my-3">
        <h3 className="display-3">Edita El Juego! 🖊</h3>
      </article>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-2 rounded p-3 mt-4 shadow">
          <Col md={6}>
            <FloatingLabel
              controlId="nombre"
              label="Nombre del juego*"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Nombre del juego*"
                minLength={2}
                maxLength={50}
                {...register("nombre", {
                  required: "El nombre es obligatorio",
                  minLength: {
                    value: 2,
                    message:
                      "El nombre debe contener por lo menos 2 caracteres",
                  },
                  maxLength: {
                    value: 49,
                    message: "Maximo 50 caracteres",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger ps-2">
                {errors.nombre?.message}
              </Form.Text>
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="precio" label="Precio*" className="mb-3">
              <Form.Control
                type="number"
                placeholder="Precio*"
                minLength={2}
                maxLength={7}
                {...register("precio", {
                  required: "El precio es obligatorio",
                  minLength: {
                    value: 2,
                    message: "El precio minimo es de $10",
                  },
                  maxLength: {
                    value: 6,
                    message: "Exediste el precio maximo permitido ($999.999)",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger ps-2">
                {errors.precio?.message}
              </Form.Text>
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="categoria" label="Categoria del Juego*">
              <Form.Select
                aria-label="Categoria del Juego*"
                {...register("categoria", {
                  required: "La categoria es obligatoria",
                })}
              >
                <option value="">Elige una categoria</option>
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
              <Form.Text className="text-danger ps-2">
                {errors.categoria?.message}
              </Form.Text>
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
                {...register("desarrolladora", {
                  maxLength: {
                    value: 30,
                    message: "Maximo 30 caracteres",
                  },
                })}
              ></Form.Control>
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel
              controlId="clasificacionImg"
              label="Clasificación del Juego*"
            >
              <Form.Select
                aria-label="Clasificación del Juego*"
                {...register("clasificacionImg", {
                  required: "La clasificación es obligatoria",
                })}
              >
                <option value="">Elige una clasificación</option>
                <option value="https://www.esrb.org/wp-content/uploads/2019/05/Everyone_SP.svg">
                  E (Todas las edades)
                </option>
                <option value="https://www.esrb.org/wp-content/uploads/2019/05/Everyone10_SP.svg">
                  E10 (Mayores a 10 años)
                </option>
                <option value="https://www.esrb.org/wp-content/uploads/2019/05/Teen_SP.svg">
                  T (Mayores a 13 años)
                </option>
                <option value="https://www.esrb.org/wp-content/uploads/2019/05/Mature_SP.svg">
                  M (Mayores a 17 años)
                </option>
                <option value="https://www.esrb.org/wp-content/uploads/2019/05/Adult_SP.svg">
                  A (+18)
                </option>
                <option value="https://www.esrb.org/wp-content/uploads/2021/11/RatingPending_Spanish-1.svg">
                  RP (clasificacion pendiente)
                </option>
              </Form.Select>
              <Form.Text className="text-danger ps-2">
                {errors.categoria?.message}
              </Form.Text>
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="editora" label="Editora" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Editora"
                {...register("editora", {
                  maxLength: {
                    value: 30,
                    message: "Maximo 30 caracteres",
                  },
                })}
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
                {...register("descripcion", {
                  required: "la descripcion es obligatoria",
                  maxLength: {
                    value: 450,
                    message: "limite de 450 caracteres",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger ps-2">
                {errors.descripcion?.message}
              </Form.Text>
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="mt-5 mb-5 shadow rounded g-4">
          <h4 className="display-6">🛠 Requisitos de Sistema</h4>
          <Col md={6}>
            <h6 className="text-center fs-5 fw-light mb-3">
              Requisitos Minimos
            </h6>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="sistemaOperativo">
                Sistema Operativo
              </InputGroup.Text>
              <Form.Control
                aria-label="Sistema Operativo"
                aria-describedby="inputGroup-sizing-sm"
                {...register("requisitos.minimos.sistemaOperativo")}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="procesador">Procesador</InputGroup.Text>
              <Form.Control
                aria-label="Procesador"
                aria-describedby="inputGroup-sizing-sm"
                {...register("requisitos.minimos.procesador")}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="memoria">Memoria</InputGroup.Text>
              <Form.Control
                aria-label="Memoria"
                aria-describedby="inputGroup-sizing-sm"
                {...register("requisitos.minimos.memoria")}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="tarjetaGrafica">
                Tarjeta Grafica
              </InputGroup.Text>
              <Form.Control
                aria-label="Tarjeta Grafica"
                aria-describedby="inputGroup-sizing-sm"
                {...register("requisitos.minimos.tarjetaGrafica")}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="almacenamiento">
                Almacenamiento
              </InputGroup.Text>
              <Form.Control
                aria-label="Almacenamiento"
                aria-describedby="inputGroup-sizing-sm"
                {...register("requisitos.minimos.almacenamiento")}
              />
            </InputGroup>
          </Col>
          <Col md={6}>
            <h6 className="text-center fs-5 fw-light mb-3">
              Requisitos Recomendados
            </h6>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="sistemaOperativo">
                Sistema Operativo
              </InputGroup.Text>
              <Form.Control
                aria-label="Sistema Operativo"
                aria-describedby="inputGroup-sizing-sm"
                {...register("requisitos.recomendado.sistemaOperativo")}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="procesador">Procesador</InputGroup.Text>
              <Form.Control
                aria-label="Procesador"
                aria-describedby="inputGroup-sizing-sm"
                {...register("requisitos.recomendado.procesador")}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="memoria">Memoria</InputGroup.Text>
              <Form.Control
                aria-label="Memoria"
                aria-describedby="inputGroup-sizing-sm"
                {...register("requisitos.recomendado.memoria")}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="tarjetaGrafica">
                Tarjeta Grafica
              </InputGroup.Text>
              <Form.Control
                aria-label="Tarjeta Grafica"
                aria-describedby="inputGroup-sizing-sm"
                {...register("requisitos.recomendado.tarjetaGrafica")}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="almacenamiento">
                Almacenamiento
              </InputGroup.Text>
              <Form.Control
                aria-label="Almacenamiento"
                aria-describedby="inputGroup-sizing-sm"
                {...register("requisitos.recomendado.almacenamiento")}
              />
            </InputGroup>
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
                {...register("urlPortada", {
                  required: "La Url de la portada es obligatoria",
                  pattern: {
                    value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: "La Url debe ser valida",
                  },
                })}
              ></Form.Control>
              <Form.Text className="text-danger ps-2">
                {errors.urlPortada?.message}
              </Form.Text>
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
              controlId="urlImg2"
              label="URL imagen 2"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="URL imagen 2"
                {...register("imgExtras.urlImg2", {
                  pattern: {
                    value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: "La Url debe ser valida",
                  },
                })}
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
              controlId="urlImg3"
              label="URL imagen 3"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="URL imagen 3"
                {...register("imgExtras.urlImg3", {
                  pattern: {
                    value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: "La Url debe ser valida",
                  },
                })}
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
              controlId="urlImg4"
              label="URL imagen 4"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="URL imagen 4"
                {...register("imgExtras.urlImg", {
                  pattern: {
                    value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: "La Url debe ser valida",
                  },
                })}
              ></Form.Control>
            </FloatingLabel>
          </Col>
        </Row>
        <div className="text-end mb-5">
          <Button variant="success" size="lg" type="submit">
            Guardar Cambios
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditarJuego;
