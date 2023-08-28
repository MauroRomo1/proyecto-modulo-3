import { faThumbsDown, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ItemReseña = ({ userName, comentario, calificacionJuego }) => {
  return (
    <div className="border rounded my-3 mx-2 p-2 itemReseña shadow">
      <p className="fw-bold">
        Al usuario {userName}{" "}
        {calificacionJuego === "1"
          ? "le gusto el juego"
          : "no le gusto el juego"}
        <FontAwesomeIcon
          icon={calificacionJuego === "1" ? faThumbsUp : faThumbsDown}
          className="px-2 fs-4"
        ></FontAwesomeIcon>
      </p>
      <p className="fw-ligh ps-4">{comentario}</p>
    </div>
  );
};

export default ItemReseña;
