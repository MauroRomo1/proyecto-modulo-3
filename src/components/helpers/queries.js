const dbJuegos =
    import.meta.env.VITE_API_JUEGOS;


export const listarJuegos = async() => {
    try {
        const respuesta = await fetch(dbJuegos)
        console.log(respuesta);
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