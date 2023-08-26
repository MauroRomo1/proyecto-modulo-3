const CarouselCapturas = ({ capturas }) => {
  return (
    <div className="row">
      <h5 className="my-3">Capturas de pantalla</h5>
      <div className="col">
        <div
          id="carouselExample"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={capturas?.url1}
                className="d-block w-100"
                alt="Capturas de pantalla"
              />
            </div>
            <div className="carousel-item">
              <img
                src={capturas?.url2}
                className="d-block w-100"
                alt="Capturas de pantalla"
              />
            </div>
            <div className="carousel-item">
              <img
                src={capturas?.url3}
                className="d-block w-100"
                alt="Capturas de pantalla"
              />
            </div>
            <div className="carousel-item">
              <img
                src={capturas?.url4}
                className="d-block w-100"
                alt="Capturas de pantalla"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselCapturas;
