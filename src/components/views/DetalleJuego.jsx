import "../../css/detalleJuego.css";

const DetalleJuego = () => {
  const juego = {
    nombre: "Red Dead Redemption 2",
    precio: 59.99,
    categoria: ["Acción", "Mundo abierto"],
    urlPortada:
      "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
    capturas: {
      1: "https://media.rockstargames.com/rockstargames-newsite/uploads/c0cc88f41d10ff2bfafcc43d4356303c1fcaba43.jpg",
      2: "https://media.rockstargames.com/rockstargames-newsite/uploads/10402b7c7c4a3faea439166ea0df0520d8ab1865.jpg",
      3: "https://media.rockstargames.com/rockstargames-newsite/uploads/3bd96e9640bf85015ea24970957ff8deab3e211d.jpg",
      4: "https://media.rockstargames.com/rockstargames-newsite/uploads/f924a7858cf5bbf0cb990f252a2fa8efb7919bec.jpg",
    },
    descripcion:
      "América, 1899. Arthur Morgan y la banda de Van der Linde se ven obligados a huir. Con agentes federales y los mejores cazarrecompensas de la nación pisándoles los talones, la banda deberá atracar, robar y luchar, para sobrevivir en su camino por el escabroso territorio del corazón de América. Mientras las divisiones internas aumentan y amenazan con separarlos a todos, Arthur deberá elegir entre sus propios ideales y la lealtad a la banda que lo vio crecer.",
    requisitos: {
      minimos: {
        sistemaOperativo: "Windows 10 - April 2018 Update (v1803)",
        procesador: "Intel(R) Core(TM) i5-2500K / AMD FX-6300",
        memoria: "8 GB de RAM",
        tarjetaGrafica: "Nvidia GeForce GTX 770 2 GB / AMD Radeon R9 280 3 GB",
        almacenamiento: "150 GB",
      },
      recomendado: {
        sistemaOperativo: "Windows 10 - April 2018 Update (v1803)",
        procesador: "Intel(R) Core(TM) i7-4770K / AMD Ryzen 5 1500x",
        memoria: "12 GB de RAM",
        tarjetaGrafica: "Nvidia GeForce GTX 1060 6 GB / AMD Radeon RX 480 4 GB",
        almacenamiento: "150 GB",
      },
    },
    desarrolladora: "Rockstar Games",
    editora: "Rockstar Games",
    clasificacionImg:
      "https://www.esrb.org/wp-content/uploads/2019/05/Mature_SP.svg",
    urlTrailer:
      "https://www.youtube.com/watch?v=SXvQ1nK4oxk&ab_channel=RockstarGames",
    id: 1,
  };

  return (
    <section className="container my-4">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <div className="row g-0">
              <div className="col-lg-4">
                <img
                  src={juego.urlPortada}
                  className="img-fluid rounded-start portadaJuego"
                  alt={juego.nombre}
                />
              </div>
              <div className="col-lg-8">
                <div className="card-body">
                  <h5 className="card-title text-center">{juego.nombre}</h5>
                  <p className="card-text">{juego.descripcion}</p>
                  <div className="row my-4">
                    <div className="col border">
                      <h6>Categoria: </h6>
                      <span>{juego.categoria.join(", ")}</span>
                    </div>
                    <div className="col border">
                      <h6>Clasificación:</h6>
                      <img
                        src={juego.clasificacionImg}
                        alt="Clasificacion ESRB"
                        className="img-fluid"
                        width="45"
                      />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col border">
                      <h6>Desarrolladora: </h6>
                      <span>{juego.desarrolladora}</span>
                    </div>
                    <div className="col border">
                      <h6>Editora: </h6>
                      <span>{juego.editora}</span>
                    </div>
                  </div>
                  <h4 className="text-center">${juego.precio} USD</h4>
                </div>
                <div className="card-footer bg-white border-0">
                  <div className="d-grid gap-2 col col-md-6 mx-auto">
                    <button className="btn btn-primary" type="button">
                      Añadir a mi lista
                    </button>
                    <a
                      className="btn btn-danger"
                      href={juego.urlTrailer}
                      target="_black"
                    >
                      Ver el trailer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetalleJuego;
