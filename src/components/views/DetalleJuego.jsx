import "../../css/detalleJuego.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { agregarJuegoFav, obtenerJuego } from "../helpers/queries";
import LoaderCard from "./detalle-juego/LoaderCard";
import CarouselCapturas from "./detalle-juego/carouselCapturas";
import RequisitosSistema from "./detalle-juego/RequisitosSistema";
import Swal from "sweetalert2";
import Reseñas from "./detalle-juego/Reseñas";

const DetalleJuego = () => {
  const { id } = useParams();

  const listaFavoritos =
    JSON.parse(localStorage.getItem("listaFavoritos")) || [];

  const [listaJuegosFavoritos, setListaJuegosFavoritos] =
    useState(listaFavoritos);
  const usuarioLog =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || null;
  const [user, setUser] = useState(usuarioLog);

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
            <h4 className="my-3">Reseñas</h4>
            <div>
              <Reseñas juego={juego}></Reseñas>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default DetalleJuego;
