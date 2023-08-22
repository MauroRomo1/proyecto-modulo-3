import "../../css/detalleJuego.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerJuego } from "../helpers/queries";
import LoaderCard from "./detalle-juego/LoaderCard";
import CarouselCapturas from "./detalle-juego/carouselCapturas";
import RequisitosSistema from "./detalle-juego/RequisitosSistema";

const DetalleJuego = () => {
  const { id } = useParams();

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
                        className="img-fluid rounded-start portadaJuego"
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
                          <button className="btn btn-primary" type="button">
                            Añadir a mi lista
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
        </>
      )}
    </>
  );
};

export default DetalleJuego;
