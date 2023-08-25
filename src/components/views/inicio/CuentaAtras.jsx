import React, { useRef, useState } from "react";

const CuentaAtras = () => {
  const seconds = 432000;
  const [cuenta, setCuenta] = useState(seconds);
  const timerId = useRef();

  return <div></div>;
};

export default CuentaAtras;
