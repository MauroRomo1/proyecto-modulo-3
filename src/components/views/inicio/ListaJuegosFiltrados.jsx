import React, { useEffect, useState } from "react";
import { listarJuegos } from "../../helpers/queries";
import Swal from "sweetalert2";
import CardJuego from "./CardJuego";
import Carousel from "react-multi-carousel";

const ListaJuegosFiltrados = ({ catSeleccionada, busqueda }) => {
  const [listaJuego, setListaJuego] = useState([]);
  const [filtrarBusqueda, setFiltrarBusqueda] = useState("");

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

  useEffect(() => {
    listarJuegos()
      .then((respJuego) => {
        if (respJuego) {
          setListaJuego(respJuego);
        }
      })
      .catch((error) => {
        Swal.fire(
          "Ocurrio un error inesperado!",
          `Cod Error: ${error.message}`
        );
      });
  }, []);

  useEffect(() => {
    setFiltrarBusqueda(busqueda);
  }, [busqueda]);

  const filtrarJuegoXCategoria = (listaJuegos, catSeleccionada) => {
    const juegos = listaJuegos.filter(
      (juego) => juego.categoria === catSeleccionada
    );
    console.log(juegos);
    if (juegos === []) {
      console.log(juegos);
      Swal.fire(
        "Lo lamentamos...",
        "No pudimos encontrar juegos en la categoria " + catSeleccionada,
        "error"
      );
    } else {
      return juegos;
    }
  };

  const filtrarJuegoXbusqueda = (listaJuego, busqueda) => {
    return listaJuego.filter((juego) =>
      juego.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
  };

  if (catSeleccionada !== "" && busqueda !== "") {
    return (
      <section>
        <section className="mx-5 my-3 shadow rounded bg-sectionInicio">
          <div className="mt-3 mb-5">
            <p className="display-3 fw-light ps-md-5 ps-1 text-dark">
              {catSeleccionada}
            </p>
          </div>
          <div>
            <Carousel responsive={responsiveCarruselCards}>
              {filtrarJuegoXCategoria(listaJuego, catSeleccionada) !== []
                ? filtrarJuegoXCategoria(listaJuego, catSeleccionada).map(
                    (juego) => <CardJuego key={juego.id} {...juego}></CardJuego>
                  )
                : null}
            </Carousel>
          </div>
        </section>
        <section className="mx-5 my-3 shadow rounded bg-sectionInicio">
          <div className="mt-3 mb-5">
            <p className="display-3 fw-light ps-md-5 ps-1 text-dark">
              {filtrarBusqueda}
            </p>
          </div>
          <div>
            <Carousel responsive={responsiveCarruselCards}>
              {filtrarJuegoXbusqueda(listaJuego, busqueda) !== []
                ? filtrarJuegoXbusqueda(listaJuego, busqueda).map((juego) => (
                    <CardJuego key={juego.id} {...juego}></CardJuego>
                  ))
                : null}
            </Carousel>
          </div>
        </section>
      </section>
    );
  } else if (catSeleccionada !== "") {
    return (
      <section className="mx-5 my-3 shadow rounded bg-sectionInicio">
        <div className="mt-3 mb-5">
          <p className="display-3 fw-light ps-md-5 ps-1 text-dark">
            {catSeleccionada}
          </p>
        </div>
        <div>
          <Carousel responsive={responsiveCarruselCards}>
            {filtrarJuegoXCategoria(listaJuego, catSeleccionada) !== []
              ? filtrarJuegoXCategoria(listaJuego, catSeleccionada).map(
                  (juego) => <CardJuego key={juego.id} {...juego}></CardJuego>
                )
              : null}
          </Carousel>
        </div>
      </section>
    );
  } else if (busqueda !== "") {
    return (
      <section className="mx-5 my-3 shadow rounded bg-sectionInicio">
        <div className="mt-3 mb-5">
          <p className="display-3 fw-light ps-md-5 ps-1 text-dark">
            {filtrarBusqueda}
          </p>
        </div>
        <div>
          <Carousel responsive={responsiveCarruselCards}>
            {filtrarJuegoXbusqueda(listaJuego, busqueda) !== []
              ? filtrarJuegoXbusqueda(listaJuego, busqueda).map((juego) => (
                  <CardJuego key={juego.id} {...juego}></CardJuego>
                ))
              : null}
          </Carousel>
        </div>
      </section>
    );
  }
};

export default ListaJuegosFiltrados;
