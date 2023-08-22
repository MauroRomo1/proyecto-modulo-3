import React from "react";

const LoaderCard = () => {
  return (
    <section className="container my-5">
      <div className="row">
        <div className="col">
          <div className="card mb-3 shadow" aria-hidden="true">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                  className="img-fluid rounded-start"
                  alt="imagen rota"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-7"></span>
                  </h5>
                  <p className="card-text placeholder-glow">
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-8"></span>
                    <span className="placeholder col-5"></span>
                  </p>
                </div>
                <div className="card-footer bg-white border-0">
                  <div className="d-grid gap-2 col-6 mx-auto placeholder-glow">
                    <button
                      className="btn btn-primary disabled placeholder"
                      aria-disabled="true"
                    ></button>
                    <button
                      className="btn btn-primary disabled placeholder"
                      aria-disabled="true"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <h4 className="m-2">Cargando datos..</h4>
        <div className="spinner-grow spinner-grow-md" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-md" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow spinner-grow-md" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </section>
  );
};

export default LoaderCard;
