import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/myro-joy-lee/">
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
      </a>
      <a href="https://github.com/myrojoylee">
        <FontAwesomeIcon icon="fa-brands fa-square-github" />
      </a>
      <a href="https://codepen.io/your-work">
        <FontAwesomeIcon icon="fa-brands fa-codepen" />
      </a>
    </footer>
  );
}
export default Footer;
