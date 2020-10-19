import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

function Footer() {
  return (
    <Container>
      <Link to="/event">
        <button>
          <span>CREATE NEW EVENT</span>
        </button>
      </Link>
    </Container>
  );
}

// export default connect((state) => ({
//   totalEvents: state.events.length,
// }))(Header);
export default Footer;
