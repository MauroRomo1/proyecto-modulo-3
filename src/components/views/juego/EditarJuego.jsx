import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { editarJuego, obtenerJuego } from "../../helpers/queries";

const EditarJuego = () => {
  const { id } = useParams();
  const detalleJuego = useNavigate();
  const [urlPortada, setUrlPortada] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const [url4, setUrl4] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    document.title = "Administracion | Editar juego";
    obtenerJuego(id)
      .then((resp) => {
        if (resp) {
          setValue("nombre", resp.nombre);
          setValue("precio", resp.precio);
          setValue("categoria", resp.categoria);
          setValue("moneda", resp.moneda);
          setValue("desarrolladora", resp.desarrolladora);
          setValue("clasificacionImg", resp.clasificacionImg);
          setValue("editora", resp.editora);
          setValue("descripcion", resp.descripcion);
          setValue("urlPortada", resp.urlPortada);
          setValue(
            "requisitos.minimos.sistemaOperativo",
            resp.requisitos.minimos.sistemaOperativo
          );
          setValue(
            "requisitos.minimos.procesador",
            resp.requisitos.minimos.procesador
          );
          setValue(
            "requisitos.minimos.memoria",
            resp.requisitos.minimos.memoria
          );
          setValue(
            "requisitos.minimos.tarjetaGrafica",
            resp.requisitos.minimos.tarjetaGrafica
          );
          setValue(
            "requisitos.minimos.almacenamiento",
            resp.requisitos.minimos.almacenamiento
          );
          setValue(
            "requisitos.recomendado.sistemaOperativo",
            resp.requisitos.recomendado.sistemaOperativo
          );
          setValue(
            "requisitos.recomendado.procesador",
            resp.requisitos.recomendado.procesador
          );
          setValue(
            "requisitos.recomendado.memoria",
            resp.requisitos.recomendado.memoria
          );
          setValue(
            "requisitos.recomendado.tarjetaGrafica",
            resp.requisitos.recomendado.tarjetaGrafica
          );
          setValue(
            "requisitos.recomendado.almacenamiento",
            resp.requisitos.recomendado.almacenamiento
          );
          setValue("capturas.url1", resp.capturas.url1);
          setValue("capturas.url2", resp.capturas.url2);
          setValue("capturas.url3", resp.capturas.url3);
          setValue("capturas.url4", resp.capturas.url4);
          setValue("urlTrailer", resp.urlTrailer);
          setUrlPortada(resp.urlPortada);
          setUrl1(resp.capturas.url1);
          setUrl2(resp.capturas.url2);
          setUrl3(resp.capturas.url3);
          setUrl4(resp.capturas.url4);
        }
      })
      .catch((error) => console.log(error));
  }, [urlPortada]);

  const onSubmit = (juego) => {
    juego.calificacion = [];
    editarJuego(id, juego)
      .then((respuesta) => {
        if (respuesta.status === 200) {
          Swal.fire(
            "El juego " + juego.nombre,
            "fue editado con exito!",
            "success"
          );
          detalleJuego(`/detalle-juego/${id}`);
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "Se produjo un error!",
          "no se pudo editar el juego",
          "error"
        );
      });
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
                autoComplete="off"
                autoFocus
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
                type="text"
                autoComplete="off"
                placeholder="Precio*"
                minLength={2}
                maxLength={8}
                {...register("precio", {
                  required: "El precio es obligatorio",
                  minLength: {
                    value: 2,
                    message: "El precio minimo es de $10",
                  },
                  maxLength: {
                    value: 7,
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
                <option disabled>Elige una categoria</option>
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
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
                className="h-100"
                {...register("descripcion", {
                  required: "la descripcion es obligatoria",
                  maxLength: {
                    value: 600,
                    message: "limite de 600 caracteres",
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
                autoComplete="off"
                aria-describedby="inputGroup-sizing-sm"
                {...register("requisitos.minimos.sistemaOperativo")}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="procesador">Procesador</InputGroup.Text>
              <Form.Control
                aria-label="Procesador"
                autoComplete="off"
                aria-describedby="inputGroup-sizing-sm"
                {...register("requisitos.minimos.procesador")}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="memoria">Memoria</InputGroup.Text>
              <Form.Control
                aria-label="Memoria"
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
                aria-describedby="inputGroup-sizing-sm"
                {...register("requisitos.recomendado.sistemaOperativo")}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="procesador">Procesador</InputGroup.Text>
              <Form.Control
                aria-label="Procesador"
                autoComplete="off"
                aria-describedby="inputGroup-sizing-sm"
                {...register("requisitos.recomendado.procesador")}
              />
            </InputGroup>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="memoria">Memoria</InputGroup.Text>
              <Form.Control
                aria-label="Memoria"
                autoComplete="off"
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
                autoComplete="off"
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
                autoComplete="off"
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
              src={
                urlPortada === ""
                  ? "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                  : urlPortada
              }
              alt="imagen-del-juego"
              rounded
              className="imgFormAdministracion"
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
                autoComplete="off"
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
          <h4 className="fs-4 fw-light text-center pb-3">
            Capturas del juego 🎯
          </h4>
          <Col md={2} className=" my-2">
            <Image
              src={
                url1 === ""
                  ? "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                  : url1
              }
              alt="imagen-del-juego"
              rounded
              className="imgFormAdministracion"
            ></Image>
          </Col>
          <Col md={10} className="pt-2 my-2">
            <FloatingLabel
              controlId="url1"
              label="URL captura 1"
              className="mb-3"
            >
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="URL captura 1"
                {...register("capturas.url1", {
                  pattern: {
                    value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: "La Url debe ser valida",
                  },
                })}
              ></Form.Control>
            </FloatingLabel>
          </Col>
          <Col md={2} className="my-2">
            <Image
              src={
                url2 === ""
                  ? "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                  : url2
              }
              alt="imagen-del-juego"
              rounded
              className="imgFormAdministracion"
            ></Image>
          </Col>
          <Col md={10} className="pt-2 my-2">
            <FloatingLabel
              controlId="url2"
              label="URL captura 2"
              className="mb-3"
            >
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="URL captura 2"
                {...register("capturas.url2", {
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
              src={
                url3 === ""
                  ? "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                  : url3
              }
              alt="imagen-del-juego"
              rounded
              className="imgFormAdministracion"
            ></Image>
          </Col>
          <Col md={10} className="pt-2 my-2">
            <FloatingLabel
              controlId="url3"
              label="URL captura 3"
              className="mb-3"
            >
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="URL captura 3"
                {...register("capturas.url3", {
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
              src={
                url4 === ""
                  ? "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
                  : url4
              }
              alt="imagen-del-juego"
              rounded
              className="imgFormAdministracion"
            ></Image>
          </Col>
          <Col md={10} className="pt-2 my-2">
            <FloatingLabel
              controlId="url4"
              label="URL captura 4"
              className="mb-3"
            >
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="URL captura 4"
                {...register("capturas.url4", {
                  pattern: {
                    value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                    message: "La Url debe ser valida",
                  },
                })}
              ></Form.Control>
            </FloatingLabel>
          </Col>
          <h4 className="fs-4 fw-light text-center pb-3">
            Trailer del juego 🎥
          </h4>
          <Col md={12} className="pt-2 my-2">
            <FloatingLabel
              controlId="urlTrailer"
              label="URL Trailer del juego"
              className="mb-3"
            >
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="URL Trailer del juego"
                {...register("urlTrailer", {
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
          <Link
            to={"/Administracion"}
            className="btn btn-lg btn-secondary me-4"
          >
            Volver
          </Link>
          <Button size="lg" type="submit" className="btn-update">
            Guardar Cambios
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EditarJuego;
