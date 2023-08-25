import "../../css/detalleJuego.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { agregarJuegoFav, obtenerJuego } from "../helpers/queries";
import LoaderCard from "./detalle-juego/LoaderCard";
import CarouselCapturas from "./detalle-juego/carouselCapturas";
import RequisitosSistema from "./detalle-juego/RequisitosSistema";
import Swal from "sweetalert2";
import { Button, Form, FormGroup, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const DetalleJuego = () => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { error },
    reset,
  } = useForm();

  const listaFavoritos =
    JSON.parse(localStorage.getItem("listaFavoritos")) || [];

  const [listaJuegosFavoritos, setListaJuegosFavoritos] =
    useState(listaFavoritos);

  const [mostrarModal, setMostrarModal] = useState(false);
  const handleClose = () => setMostrarModal(false);
  const handleMostrar = () => setMostrarModal(true);

  const user = {
    nombreUsuario: "admin",
    email: "admin@gamestore.com",
    password: "Admin123",
    id: 1,
    juegosFavoritos: [],
  };

  const [juego, setJuego] = useState(null);

  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    obtenerJuego(id)
      .then((resp) => {
        if (resp) {
          setJuego(resp);
          setMostrarSpinner(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "listaFavoritos",
      JSON.stringify(listaJuegosFavoritos)
    );
  }, [listaJuegosFavoritos]);

  const calificarJuego = () => {
    setMostrarModal(false);
  };

  const agregarJuegoFavorito = () => {
    user.juegosFavoritos.push(...listaJuegosFavoritos, juego.id);
    setListaJuegosFavoritos([...listaJuegosFavoritos, juego.id]);
    agregarJuegoFav(user.id, user);
  };
  return (
    <>
      {mostrarSpinner ? (
        <LoaderCard></LoaderCard>
      ) : (
        <>
          <section className="container my-4">
            <div className="row">
              <div className="col">
                <div className="card shadow">
                  <div className="row g-0">
                    <div className="col-lg-4">
                      <img
                        src={juego?.urlPortada}
                        className="img-fluid h-100 rounded-start portadaJuego"
                        alt={juego?.nombre}
                      />
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          {juego?.nombre}
                        </h5>
                        <p className="card-text">{juego?.descripcion}</p>
                        <div className="row my-4">
                          <div className="col border">
                            <h6>Categoria: </h6>
                            <span>{juego?.categoria}</span>
                          </div>
                          <div className="col border">
                            <h6>Clasificación:</h6>
                            <img
                              src={juego?.clasificacionImg}
                              alt="Clasificacion ESRB"
                              className="img-fluid"
                              width="45"
                            />
                          </div>
                        </div>
                        <div className="row mb-4">
                          <div className="col border">
                            <h6>Desarrolladora: </h6>
                            <span>{juego?.desarrolladora}</span>
                          </div>
                          <div className="col border">
                            <h6>Editora: </h6>
                            <span>{juego?.editora}</span>
                          </div>
                        </div>
                        <h4 className="text-center">${juego?.precio} USD</h4>
                      </div>
                      <div className="card-footer bg-white border-0">
                        <div className="d-grid gap-2 col col-md-6 mx-auto">
                          <button
                            className="btn btn-primary"
                            type="button"
                            onClick={() => {
                              listaJuegosFavoritos.find(
                                (juegos) => juegos === juego.id
                              )
                                ? Swal.fire(
                                    `ya tienes el juego en Favoritos`,
                                    `si quieres eliminar el juego buscalo en tus favoritos`,
                                    `info`
                                  )
                                : agregarJuegoFavorito();
                            }}
                          >
                            {listaJuegosFavoritos.find(
                              (juegos) => juegos === juego.id
                            )
                              ? "Añadido a Favoritos"
                              : "Añadir a Favoritos"}
                          </button>
                          <a
                            className="btn btn-danger"
                            href={juego?.urlTrailer}
                            target="_black"
                          >
                            Ver el trailer
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container mb-4 bg-white shadow">
            <CarouselCapturas capturas={juego?.capturas} />
            <RequisitosSistema requisitos={juego?.requisitos} />
          </section>
          <section className="container mb-4 bg-white shadow">
            <CarouselCapturas capturas={juego?.capturas} />
            <RequisitosSistema requisitos={juego?.requisitos} />
          </section>

          <Modal show={mostrarModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Califica El Juego!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <div className="d-flex flex-row justify-content-center">
                  <FormGroup className="mx-2 border border-primary rounded p-2 shadow">
                    <Form.Check
                      inline
                      name="grupo1"
                      type="radio"
                      aria-label="like"
                      value={1}
                    ></Form.Check>
                    <Form.Label>
                      <i className="fa-solid fa-thumbs-up fs-2 text-primary"></i>
                    </Form.Label>
                  </FormGroup>
                  <Form.Group className="mx-2 border border-danger rounded p-2 shadow">
                    <Form.Check
                      inline
                      name="grupo1"
                      type="radio"
                      aria-label="notLike"
                      value={0}
                    ></Form.Check>
                    <Form.Label>
                      <i className="fa-solid fa-thumbs-down fs-2 text-danger"></i>
                    </Form.Label>
                  </Form.Group>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  calificarJuego(juego);
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default DetalleJuego;
