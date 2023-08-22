import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Error404 from "./components/views/Error404";
import PaginaPrincipal from "./components/views/PaginaPrincipal";
import Login from "./components/views/Login";
import Administracion from "./components/views/Administracion";
import DetalleJuego from "./components/views/DetalleJuego";
import AcercaDeNosotros from "./components/views/AcercaDeNosotros";
import { useState } from "react";
import AltaUsuario from "./components/views/AltaUsuario";

function App() {
  //Intento obtener el usuario logueado y almacenado en session storage, sino se provee un objeto vacio:
  const usuarioEnlinea = JSON.parse(sessionStorage.getItem('usuarioLogueado')) || {};

  const [usuarioActivo, setUsuarioActivo] = useState(usuarioEnlinea)

  return (
    <>
      <BrowserRouter>
        <Header usuarioActivo={usuarioActivo} setUsuarioActivo={setUsuarioActivo}></Header>
        <Routes>
          <Route
            exact path="/"
            element={<PaginaPrincipal></PaginaPrincipal>} />
          <Route
            exact path="/administracion"
            element={<Administracion></Administracion>}
          />
          <Route
            exact path="/detalle-juego"
            element={<DetalleJuego></DetalleJuego>}
          />
          <Route
            exact path="/acerca-de-nosotros"
            element={<AcercaDeNosotros></AcercaDeNosotros>}
          />
          <Route
            exact path="/login"
            element={<Login setUsuarioActivo={setUsuarioActivo}></Login>} />
          <Route
            exact path="/altausuario"
            element={<AltaUsuario></AltaUsuario>} />
          <Route
            exact path="*"
            element={<Error404></Error404>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
