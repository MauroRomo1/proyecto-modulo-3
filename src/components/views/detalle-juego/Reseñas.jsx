import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { agregarCalificacion, editarJuego } from "../../helpers/queries";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import ItemReseña from "./ItemReseña";

const Reseñas = ({ juego }) => {
  const [opiniones, setOpiniones] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const usuarioLog =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || [];
  const [user, setUser] = useState(usuarioLog);

  const calificacionJuegos = {
    userId: user.id,
    userName: user.nombreUsuario,
    calificacionJuego: "",
    comentario: "",
  };
  const onSubmit = ({ calificacion }) => {
    const { calificacionJuego, comentario } = calificacion;
    calificacionJuegos.calificacionJuego = calificacionJuego;
    calificacionJuegos.comentario = comentario;
    juego.calificacion = [...juego.calificacion, calificacionJuegos];
    agregarCalificacion(juego.id, juego)
      .then((respuesta) => {
        if (respuesta) {
          Swal.fire(
            "Se reseña se guardo con exito",
            "su opinion ahora podra ser vista por otras personas",
            "success"
          );
        }
      })
      .catch((err) => {
        Swal.fire("Hubo un error", "Codigo de error: " + err.message, "error");
      });
    reset();
  };

  useEffect(() => {
    const reseñas = juego.calificacion.map((res) => res);
    setOpiniones(reseñas);
  }, []);

  return (
    <>
      <article className="m-2 border rounded p-2 shadow">
        <h5 className="fw-light">Déjanos Tu opinion!</h5>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div className="d-flex flex-row justify-content-start">
            <Form.Group
              className="mx-2 border border-primary rounded p-2 shadow"
              controlId="calificacion.calificacionJuego"
            >
              <Form.Check
                inline
                name="grupo1"
                type="radio"
                aria-label="like"
                value={1}
                {...register("calificacion.calificacionJuego", {
                  required: "la calificacion es obligatoria",
                })}
              ></Form.Check>
              <Form.Label className="fs-2 text-primary">
                <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
              </Form.Label>
            </Form.Group>
            <Form.Group className="mx-2 border border-danger rounded p-2 shadow">
              <Form.Check
                inline
                name="grupo1"
                type="radio"
                aria-label="notLike"
                value={0}
                {...register("calificacion.calificacionJuego", {
                  required: "la calificacion es obligatoria",
                })}
              ></Form.Check>
              <Form.Label className="fs-2 text-danger">
                <FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon>
              </Form.Label>
            </Form.Group>
          </div>
          <Form.Text className="text-danger ">
            {errors.calificacionJuego?.message}
          </Form.Text>
          <Form.Group controlId="calificacion.comentario">
            <Form.Label>Reseña:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register("calificacion.comentario", {
                required: "el comentario es obligatorio",
              })}
            ></Form.Control>
            <Form.Text className="text-danger">
              {errors.comentario?.message}
            </Form.Text>
          </Form.Group>
          <Button variant="success" type="submit" className="m-2">
            Enviar Reseña
          </Button>
        </Form>
      </article>
      <article className="p-2">
        {opiniones
          ? opiniones.map((res, i) => (
              <ItemReseña key={i} {...res}></ItemReseña>
            ))
          : ""}
      </article>
    </>
  );
};

export default Reseñas;
