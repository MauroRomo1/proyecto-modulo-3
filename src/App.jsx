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
import AgregarJuego from "./components/views/juego/AgregarJuego";
import EditarJuego from "./components/views/juego/EditarJuego";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<PaginaPrincipal></PaginaPrincipal>} />
          <Route
            exact
            path="/administracion"
            element={<Administracion></Administracion>}
          />
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
          <Route
            exact
            path="/detalle-juego/:id"
            element={<DetalleJuego></DetalleJuego>}
          />
          <Route
            exact
            path="/acerca-de-nosotros"
            element={<AcercaDeNosotros></AcercaDeNosotros>}
          />
          <Route exact path="/login" element={<Login></Login>} />
          <Route exact path="*" element={<Error404></Error404>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
