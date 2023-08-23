const RequisitosSistema = ({ requisitos }) => {
  return (
    <div className="row my-5">
      <h5>Requisitos del sistema</h5>
      <div className="col-12 col-md-6 border">
        <h6 className="text-center my-3">Minimos:</h6>
        <h6>Sistema operativo:</h6>
        <span>{requisitos?.minimos?.sistemaOperativo}</span>
        <h6>Procesador:</h6>
        <span>{requisitos?.minimos?.procesador}</span>
        <h6>Memoria:</h6> <span>{requisitos?.minimos?.memoria}</span>
        <h6>Tarjeta grafica:</h6>
        <span>{requisitos?.minimos?.tarjetaGrafica}</span>
        <h6>Almacenamiento:</h6>
        <span>{requisitos?.minimos?.almacenamiento}</span>
      </div>
      <div className="col-12 col-md-6 border">
        <h6 className="text-center my-3">Recomendados:</h6>
        <h6>Sistema operativo:</h6>
        <span>{requisitos?.recomendado?.sistemaOperativo}</span>
        <h6>Procesador:</h6>
        <span>{requisitos?.recomendado?.procesador}</span>
        <h6>Memoria:</h6>
        <span>{requisitos?.recomendado?.memoria}</span>
        <h6>Tarjeta grafica:</h6>
        <span>{requisitos?.recomendado?.tarjetaGrafica}</span>
        <h6>Almacenamiento:</h6>
        <span>{requisitos?.recomendado?.almacenamiento}</span>
      </div>
    </div>
  );
};

export default RequisitosSistema;
