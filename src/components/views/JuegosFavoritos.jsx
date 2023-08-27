import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { listarJuegos } from "../helpers/queries";
import ItemJuegoUsuario from "./favoritos/ItemJuegoUsuario";

const JuegosFavoritos = () => {
  const listaFavoritos =
    JSON.parse(localStorage.getItem("listaFavoritos")) || [];

  const [listaJuegosFavoritos, setListaJuegosFavoritos] =
    useState(listaFavoritos);

  const [listaJuegos, setListaJuegos] = useState([]);

  const [juegosFav, setJuegosFav] = useState([]);

  useEffect(() => {
    listarJuegos().then((respuestaJuegos) => {
      if (respuestaJuegos) {
        setListaJuegos(respuestaJuegos);
      } else {
        Swal.fire(
          "ocurrio un error!",
          "No pudimos encontrar los datos",
          "error"
        );
      }
    });
  }, []);

  useEffect(() => {
    const juegosFiltrados = listaJuegos.filter((juego) =>
      listaJuegosFavoritos.some((juegoFav) => juegoFav === juego.id)
    );
    setJuegosFav(juegosFiltrados);
  }, [listaJuegos, listaJuegosFavoritos]);

  useEffect(() => {
    localStorage.setItem(
      "listaFavoritos",
      JSON.stringify(listaJuegosFavoritos)
    );
  }, []);

  const borrarJuegoFavorito = (juego) => {
    let listaJuegosFiltrada = listaJuegosFavoritos.filter(
      (ItemJuego) => ItemJuego !== juego.id
    );
    setListaJuegosFavoritos(listaJuegosFiltrada);
  };

  return (
    <Container>
      <section>
        <h3 className=" display-4 py-4">Juegos Favoritos</h3>
        <Table
          striped
          hover
          variant="secondary"
          className="my-4 shadow"
          responsive="sm"
        >
          <thead>
            <tr className="text-center">
              <th className="fs-4 fw-light">img</th>
              <th className="fs-4 fw-light">Nombre</th>
              <th className="fs-4 fw-light">Precio</th>
              <th className="fs-4 fw-light">Categoria</th>
              <th className="fs-4 fw-light">Valoracion</th>
              <th className="fs-4 fw-light">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {juegosFav.map((juego) => (
              <ItemJuegoUsuario
                key={juego.id}
                juego={juego}
                borrarJuegoFavorito={borrarJuegoFavorito}
              ></ItemJuegoUsuario>
            ))}
          </tbody>
        </Table>
      </section>
    </Container>
  );
};

export default JuegosFavoritos;
