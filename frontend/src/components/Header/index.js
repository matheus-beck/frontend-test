import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <Container>
      <Link to="/">
        <img width="40%" src={logo} alt="EventsApp" />
      </Link>
    </Container>
  );
}

export default Header;
