import "../../css/PaginaPrincipal.css";
import "react-multi-carousel/lib/styles.css";
import { Form } from "react-bootstrap";
import { useState } from "react";
import ListaJuegos from "./inicio/ListaJuegos";
import { useForm } from "react-hook-form";
import CarruselYOferta from "./inicio/CarruselYOferta";
import ListaJuegosFiltrados from "./inicio/ListaJuegosFiltrados";

const PaginaPrincipal = () => {
  const [filtro, setFiltro] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (filtros) => {
    setFiltro(filtros);
  };

  return (
    <>
      <section className="bg-headerPP d-flex justify-content-between align-items-center pt-2 py-2">
        <div className="px-2">
          <Form onChange={handleSubmit(onSubmit)}>
            <Form.Group controlId="catSeleccionada">
              <Form.Select
                aria-label="Categorias"
                className="bg-warning fs-5 fw-light"
                {...register("catSeleccionada")}
              >
                <option value="">Elige una categoria</option>
                <option value="Aventura" className="fw-light fs-5 rounded ">
                  Aventura
                </option>
                <option
                  value="Accion/Shooter"
                  className="fw-light fs-5 rounded "
                >
                  Accion/Shooter
                </option>
                <option value="Sandbox" className="fw-light fs-5 rounded ">
                  SandBox
                </option>
                <option value="Construcción" className="fw-light fs-5 rounded ">
                  Construcción
                </option>
                <option value="Simulacion" className="fw-light fs-5 rounded ">
                  Simulacion
                </option>
                <option value="Deportes" className="fw-light fs-5 rounded ">
                  Deportes
                </option>
                <option value="Carreras" className="fw-light fs-5 rounded ">
                  Carreras
                </option>
                <option value="Estrategia" className="fw-light fs-5 rounded ">
                  Estrategia
                </option>
                <option value="Arcade" className="fw-light fs-5 rounded ">
                  Arcade
                </option>
                <option value="RPG" className="fw-light fs-5 rounded ">
                  RPG
                </option>
                <option value="Terror" className="fw-light fs-5 rounded ">
                  Terror
                </option>
                <option value="Lucha" className="fw-light fs-5 rounded ">
                  Lucha
                </option>
                <option value="Puzle" className="fw-light fs-5 rounded ">
                  Puzle
                </option>
                <option value="Casual" className="fw-light fs-5 rounded ">
                  Casual
                </option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
        <div className="w-50 px-2">
          <Form onChange={handleSubmit(onSubmit)}>
            <Form.Group controlId="busqueda">
              <Form.Control
                type="text"
                placeholder="🔍 Buscar por nombre"
                className="mr-sm-2"
                {...register("busqueda")}
              ></Form.Control>
            </Form.Group>
          </Form>
        </div>
      </section>
      {filtro.catSeleccionada || filtro.busqueda ? (
        <ListaJuegosFiltrados {...filtro}></ListaJuegosFiltrados>
      ) : (
        <CarruselYOferta></CarruselYOferta>
      )}
      <ListaJuegos></ListaJuegos>
    </>
  );
};

export default PaginaPrincipal;
