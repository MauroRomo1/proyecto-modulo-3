import "../../css/detalleJuego.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerJuego } from "../helpers/queries";

const DetalleJuego = () => {
  const { id } = useParams();

  const [juego, setJuego] = useState({});

  useEffect(() => {
    obtenerJuego(id)
      .then((resp) => {
        if (resp) {
          setJuego(resp);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
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
                    <h5 className="card-title text-center">{juego?.nombre}</h5>
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
        <div className="row">
          <h5 className="my-3">Capturas de pantalla</h5>
          <div className="col">
            <div
              id="carouselExample"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={juego?.capturas?.url1}
                    className="d-block w-100"
                    alt="Capturas de pantalla"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={juego?.capturas?.url2}
                    className="d-block w-100"
                    alt="Capturas de pantalla"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={juego?.capturas?.url3}
                    className="d-block w-100"
                    alt="Capturas de pantalla"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={juego?.capturas?.url4}
                    className="d-block w-100"
                    alt="Capturas de pantalla"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <h5>Requisitos del sistema</h5>
          <div className="col-12 col-md-6 border">
            <h6 className="text-center my-3">Minimos:</h6>
            <h6>Sistema operativo:</h6>
            <span>{juego?.requisitos?.minimos?.sistemaOperativo}</span>
            <h6>Procesador:</h6>
            <span>{juego?.requisitos?.minimos?.procesador}</span>
            <h6>Memoria:</h6> <span>{juego?.requisitos?.minimos?.memoria}</span>
            <h6>Tarjeta grafica:</h6>
            <span>{juego?.requisitos?.minimos?.tarjetaGrafica}</span>
            <h6>Almacenamiento:</h6>
            <span>{juego?.requisitos?.minimos?.almacenamiento}</span>
          </div>
          <div className="col-12 col-md-6 border">
            <h6 className="text-center my-3">Recomendados:</h6>
            <h6>Sistema operativo:</h6>
            <span>{juego?.requisitos?.recomendado?.sistemaOperativo}</span>
            <h6>Procesador:</h6>
            <span>{juego?.requisitos?.recomendado?.procesador}</span>
            <h6>Memoria:</h6>
            <span>{juego?.requisitos?.recomendado?.memoria}</span>
            <h6>Tarjeta grafica:</h6>
            <span>{juego?.requisitos?.recomendado?.tarjetaGrafica}</span>
            <h6>Almacenamiento:</h6>
            <span>{juego?.requisitos?.recomendado?.almacenamiento}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetalleJuego;
