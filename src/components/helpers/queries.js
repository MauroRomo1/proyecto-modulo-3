//protegiendo rutas:
const uriUsuario = import.meta.env.VITE_API_USUARIO;
//el parametro de la funcion es el usuario de onSubmit en Login.
export const login = async (usuario) =>{
    try{
        //pedir la lista de usuarios a json-server:
        //chequear por qué no funciona al reemplazar por uriUsuario
        //Temporalmente sigo usando 'http://localhost:3004/usuarios'
        const respuesta = await fetch(uriUsuario);
        const listaUsuarios = await respuesta.json();
        console.log(listaUsuarios);
        
        //verificar si el usuario registrado en db.json traido mediante la respuesta de la Api, coincide con el ingresado por formulario
        const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado) {
            //Si la coincidencia es correcta (usuario y password):
            if(usuarioBuscado.password === usuario.password){
                console.log('usuario verificado');
                return usuarioBuscado;
            }else{
                console.log('password incorrecto');
                return null;
            }
        }else{
            //si la coincidencia no es correcta.
            console.log('Usuario no registrado');
            return null;
        }
    }catch (error) {
        console.log(error);
    }
};

export const altaUsuario = async (usuarioNuevo) => {

    try {
        //Ahora utilizo la segunda propiedad del fetch
        const resp = await fetch(uriUsuario, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioNuevo)
        }) ;
        return resp;

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
