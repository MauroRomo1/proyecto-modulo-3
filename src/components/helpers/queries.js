const dbJuegos =
    import.meta.env.VITE_API_JUEGOS;

const dbUsuarios =
    import.meta.env.VITE_API_USUARIOS;


export const listarJuegos = async() => {
    try {
        const respuesta = await fetch(dbJuegos)
        const listaJuegos = await respuesta.json();
        return listaJuegos;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const agregarJuegos = async(juego) => {
    try {
        const respuesta = await fetch(dbJuegos, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(juego)
        })
        return respuesta;
    } catch (error) {
        console.log(error);
        return null;
    }
}



export const obtenerJuego = async(id) => {
    try {
        const respuesta = await fetch(`${dbJuegos}/${id}`);
        const data = await respuesta.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const editarJuego = async(id, juegoEditado) => {
    try {
        const respuesta = await fetch(`${dbJuegos}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(juegoEditado)
        })
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}

export const borrarJuego = async(id) => {
    try {
        const respuesta = await fetch(`${dbJuegos}/${id}`, { method: 'DELETE' })
        return respuesta
    } catch (error) {
        console.log(error);
    }
}

export const agregarJuegoFav = async(idUser, juegoFav) => {
    try {
        const respuesta = await fetch(`${dbUsuarios}/${idUser}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(juegoFav)
        })
    } catch (error) {
        console.log(error);
    }
}