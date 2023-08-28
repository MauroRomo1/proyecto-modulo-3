import React, { useEffect, useState } from "react";
import { listarJuegos } from "../../helpers/queries";
import Swal from "sweetalert2";
import CardJuego from "./CardJuego";
import Carousel from "react-multi-carousel";

const ListaJuegosFiltrados = ({ catSeleccionada, busqueda }) => {
  const [listaJuego, setListaJuego] = useState([]);
  const [listarXCategoria, setListarXCategoria] = useState([]);
  const [listarXBusqueda, setListarXBusqueda] = useState([]);

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
    filtrarBusquedas(listaJuego, busqueda);
  }, [listaJuego, busqueda]);

  useEffect(() => {
    filtrarCateforias(listaJuego, catSeleccionada);
  }, [listaJuego, catSeleccionada]);

  const filtrarCateforias = (listaJuego, catSeleccionada) => {
    const juegos = listaJuego.filter(
      (juego) => juego.categoria === catSeleccionada
    );

    if (juegos.length > 0) {
      setListarXCategoria(juegos);
    } else {
      setListarXCategoria([]);
    }
  };

  const filtrarBusquedas = (listaJuego, busqueda) => {
    const lista = listaJuego.filter((juego) =>
      juego.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setListarXBusqueda(lista);
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
              {listarXCategoria.map((juego) => (
                <CardJuego key={juego.id} {...juego}></CardJuego>
              ))}
            </Carousel>
          </div>
        </section>
        <section className="mx-5 my-3 shadow rounded bg-sectionInicio">
          <div className="mt-3 mb-5">
            <p className="display-3 fw-light ps-md-5 ps-1 text-dark">
              {busqueda}
            </p>
          </div>
          <div>
            <Carousel responsive={responsiveCarruselCards}>
              {listarXBusqueda.map((juego) => (
                <CardJuego key={juego.id} {...juego}></CardJuego>
              ))}
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
            {listarXCategoria.length === 0
              ? `No hay juego en ${catSeleccionada}`
              : catSeleccionada}
          </p>
        </div>
        <div>
          <Carousel responsive={responsiveCarruselCards}>
            {listarXCategoria.map((juego) => (
              <CardJuego key={juego.id} {...juego}></CardJuego>
            ))}
          </Carousel>
        </div>
      </section>
    );
  } else if (busqueda !== "") {
    return (
      <section className="mx-5 my-3 shadow rounded bg-sectionInicio">
        <div className="mt-3 mb-5">
          <p className="display-3 fw-light ps-md-5 ps-1 text-dark">
            {busqueda}
          </p>
        </div>
        <div>
          <Carousel responsive={responsiveCarruselCards}>
            {listarXBusqueda.map((juego) => (
              <CardJuego key={juego.id} {...juego}></CardJuego>
            ))}
          </Carousel>
        </div>
      </section>
    );
  }
};

export default ListaJuegosFiltrados;
