const dbJuegos = import.meta.env.VITE_API_JUEGOS;
const uriUsuario = import.meta.env.VITE_API_USUARIOS;

export const listarJuegos = async () => {
  try {
    const respuesta = await fetch(dbJuegos);
    const listaJuegos = await respuesta.json();
    return listaJuegos;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(uriUsuario);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const altaUsuario = async (usuarioNuevo) => {
  usuarioNuevo.juegosFavoritos = [];
  try {
    const resp = await fetch(uriUsuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuarioNuevo),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const agregarJuegos = async (juego) => {
  try {
    const respuesta = await fetch(dbJuegos, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(juego),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const obtenerJuego = async (id) => {
  try {
    const respuesta = await fetch(`${dbJuegos}/${id}`);
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const editarJuego = async (id, juegoEditado) => {
  try {
    const respuesta = await fetch(`${dbJuegos}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(juegoEditado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarJuego = async (id) => {
  try {
    const respuesta = await fetch(`${dbJuegos}/${id}`, { method: "DELETE" });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const agregarJuegoFav = async (idUser, juegoFav) => {
  try {
    const respuesta = await fetch(`${uriUsuario}/${idUser}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(juegoFav),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const agregarCalificacion = async (id, calificacion) => {
  try {
    const respuesta = await fetch(`${dbJuegos}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(calificacion),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const calificarJuego = async (id) => {
  try {
    const respuesta = await fetch(`${dbJuegos}/${id}`);
    const data = await respuesta.json();
    let like = 0;
    let notLike = 0;
    let cantidad = 0;
    data.calificacion.forEach((cal) => {
      if (cal.calificacionJuego === "1") {
        like++;
        cantidad++;
      } else if (cal.calificacionJuego === "0") {
        notLike++;
        cantidad++;
      }
    });

    let promedio = Math.floor((like * 100) / cantidad);
    if (promedio) {
      return promedio;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
