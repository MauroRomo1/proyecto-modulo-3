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