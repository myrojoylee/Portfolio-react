import React from "react";
import NavigationBar from "./NavigationBar";
import "../styles/Header.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <NavigationBar
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
}

export default Header;
