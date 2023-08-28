import React from "react";
import { Route, Routes } from "react-router-dom";
import Administracion from "../views/Administracion";
import AgregarJuego from "../views/juego/AgregarJuego";
import EditarJuego from "../views/juego/EditarJuego";

const RutasProtegidas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Administracion></Administracion>} />
      <Route
        exact
        path="/agregar-juego"
        element={<AgregarJuego></AgregarJuego>}
      />
      <Route
        exact
        path="/editar-juego/:id"
        element={<EditarJuego></EditarJuego>}
      />
    </Routes>
  );
};

export default RutasProtegidas;
