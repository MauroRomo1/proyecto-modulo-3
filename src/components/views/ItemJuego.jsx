import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemJuego = () => {
  return (
    <tr>
      <td>
        <Image
          src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg"
          alt="imagen-del-juego"
          rounded
          style={{ width: "80px", height: "80px", cursor: "pointer" }}
        ></Image>
      </td>
      <td className="text-start flex-wrap">
        <p className="text-break fw-medium">Nombre del juego</p>
      </td>
      <td>$12.345,67</td>
      <td>
        <p className="text-break">Aventura</p>
      </td>
      <td>⭐4.3</td>
      <td>
        <div className="d-flex flex-column">
          <Link className="btn btn-warning btn-sm">🖊</Link>
          <Button variant="danger" size="sm" className="mt-2">
            ✖
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ItemJuego;
