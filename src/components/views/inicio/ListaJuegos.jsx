import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { listarJuegos } from "../../helpers/queries";
import CardJuego from "./CardJuego";

const ListaJuegos = () => {
  const [listaJuego, setListaJuego] = useState([]);

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
  return (
    <section className="mx-5 my-3 shadow rounded bg-sectionInicio">
      <div className="mt-3 mb-5">
        <p className="display-3 fw-light ps-md-5 ps-1 text-dark">
          Todos Los juegos
        </p>
      </div>
      <Carousel responsive={responsiveCarruselCards}>
        {listaJuego.map((juego) => (
          <CardJuego key={juego.id} {...juego}></CardJuego>
        ))}
      </Carousel>
    </section>
  );
};

export default ListaJuegos;
