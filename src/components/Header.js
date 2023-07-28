import React from "react";
// import NavigationBar from "./NavigationBar";
import backgroundFlowers from "../assets/background_flowers.jpg";
import "../styles/index.css";

function Header() {
  return (
    <header>
      <img
        src={backgroundFlowers}
        className="background"
        alt="flower background"
      />
    </header>
  );
}
export default Header;
