import { useState } from "react";

import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-center py-2 border-bottom">
      <h4>navbar de la pagina</h4>
    </header>
  );
};

export default Header;
